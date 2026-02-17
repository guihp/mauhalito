import { build as viteBuild } from "vite";
import { rm } from "fs/promises";

// Build script specifically for Vercel
// Only builds the client, as the API will be handled by Vercel's serverless functions
async function buildVercel() {
  await rm("dist", { recursive: true, force: true });

  console.log("building client for Vercel...");
  await viteBuild();

  console.log("✓ Build complete! Client ready for Vercel deployment.");
}

buildVercel().catch((err) => {
  console.error(err);
  process.exit(1);
});
