import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "../server/routes";

const app = express();

declare module "http" {
  interface IncomingMessage {
    rawBody: unknown;
  }
}

app.use(
  express.json({
    verify: (req, _res, buf) => {
      req.rawBody = buf;
    },
  }),
);

app.use(express.urlencoded({ extended: false }));

export function log(message: string, source = "express") {
  const formattedTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  console.log(`${formattedTime} [${source}] ${message}`);
}

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      log(logLine);
    }
  });

  next();
});

// Initialize routes
let routesInitialized = false;

async function initializeRoutes() {
  if (!routesInitialized) {
    // Create a dummy httpServer for registerRoutes
    const { createServer } = await import("http");
    const httpServer = createServer(app);
    await registerRoutes(httpServer, app);
    routesInitialized = true;
  }
}

app.use((err: any, _req: Request, res: Response, next: NextFunction) => {
  const status = err.status || err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  console.error("Internal Server Error:", err);

  if (res.headersSent) {
    return next(err);
  }

  return res.status(status).json({ message });
});

// Export the handler for Vercel serverless functions
// This handler is ONLY called for routes matching /api/*
export default async function handler(req: any, res: any) {
  await initializeRoutes();
  
  // Adjust the path - Vercel includes /api in the path, but Express routes expect it without
  const originalUrl = req.url || req.path || '';
  const originalPath = req.path || '';
  
  // Remove /api prefix for Express routing
  if (originalUrl.startsWith('/api')) {
    req.url = originalUrl.replace(/^\/api/, '') || '/';
  }
  if (originalPath && originalPath.startsWith('/api')) {
    req.path = originalPath.replace(/^\/api/, '') || '/';
  }
  
  // Ensure proper request/response objects
  if (!req.path && req.url) {
    req.path = req.url.split('?')[0];
  }
  
  // Convert Vercel request/response to Express-compatible format
  return new Promise<void>((resolve) => {
    const originalEnd = res.end.bind(res);
    res.end = function(chunk?: any, encoding?: any, cb?: any) {
      originalEnd(chunk, encoding, cb);
      resolve();
    };
    
    app(req, res, () => {
      if (!res.headersSent) {
        res.status(404).json({ message: "Not Found" });
        resolve();
      }
    });
  });
}
