import { useMemo } from "react";
import { Check, ChevronDown, ChevronRight, X } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import heroImg from "@/assets/images/hero-confident-smile.png";
import beforeImg from "@/assets/images/before-worried.png";
import afterImg from "@/assets/images/after-confident-chat.png";
import izadoraImg from "@/assets/images/izadora.jpeg";
import capaLivroImg from "@/assets/images/capa_livro.png";

function ProgressRow(props: {
  label: string;
  value: number;
  variant: "positive" | "negative";
  testIdPrefix: string;
}) {
  const { label, value, variant, testIdPrefix } = props;

  const fillClass =
    variant === "positive"
      ? "bg-gradient-to-r from-[hsl(var(--hf-olive))] to-[hsl(var(--hf-olive-light))]"
      : "bg-gradient-to-r from-[#E53935] to-[#FF5252]";

  return (
    <div className="space-y-2" data-testid={`row-progress-${testIdPrefix}`}>
      <div className="flex items-center justify-between gap-3">
        <div className="text-sm font-medium text-white/90" data-testid={`text-progress-label-${testIdPrefix}`}>
          {label}
        </div>
        <div className="text-sm font-semibold text-white" data-testid={`text-progress-value-${testIdPrefix}`}>
          {value}%
        </div>
      </div>
      <div
        className="h-6 w-full overflow-hidden rounded-full bg-white/15"
        data-testid={`progress-${testIdPrefix}`}
      >
        <div
          className={`h-full ${fillClass} rounded-full transition-[width] duration-700 ease-out`}
          style={{ width: `${value}%` }}
          data-testid={`progress-fill-${testIdPrefix}`}
        />
      </div>
    </div>
  );
}

function Pill({ children, testId }: { children: React.ReactNode; testId: string }) {
  return (
    <div
      className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/65 px-4 py-2 text-xs font-semibold tracking-wide text-black/80 shadow-[0_10px_30px_rgba(0,0,0,0.07)] backdrop-blur"
      data-testid={testId}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-[hsl(var(--hf-lime))]" aria-hidden="true" />
      {children}
    </div>
  );
}

export default function Landing() {
  const painPoints = useMemo(
    () => [
      { emoji: "😰", text: "O dia passa e você evita falar de perto com as pessoas. Sobra insegurança, constrangimento e isolamento." },
      { emoji: "🔄", text: "Você promete que amanhã vai resolver... Mas o ciclo se repete." },
      {
        emoji: "😩",
        text: "Não é falta de higiene. Não é falta de vontade. É o seu corpo pedindo atenção de um jeito que ninguém te explicou.",
      },
      { emoji: "😔", text: "Resultado: Você se sente travado e distante das pessoas que ama." },
      { emoji: "💡", text: "A boa notícia: Esse problema tem solução, e pode ser mais simples do que você imagina." },
      { emoji: "✨", text: "Com o método certo, você recupera a confiança e a liberdade de se aproximar sem medo." },
    ],
    [],
  );

  const myths = useMemo(
    () => [
      "Você precisa escovar mais vezes.",
      "Basta usar enxaguante bucal.",
      "Mau hálito é falta de higiene.",
      "O problema é que você come errado.",
      "Isso é genético, não tem o que fazer.",
    ],
    [],
  );

  const truths = useMemo(
    () => [
      "Escovar sem técnica não resolve a causa raiz.",
      "Enxaguante bucal pode piorar se usado errado.",
      "Mau hálito de verdade vem de dentro, não da boca.",
      "O foco está em entender seu corpo, não em seguir receitas genéricas.",
      "Um hálito fresco não te prende — ele te liberta.",
    ],
    [],
  );

  const learnItems = useMemo(
    () => [
      { icon: "📋", text: "Identificar a verdadeira causa do seu mau hálito" },
      { icon: "🔄", text: "Criar hábitos simples que funcionam no dia a dia" },
      { icon: "🧘", text: "Eliminar a insegurança e agir com confiança" },
      { icon: "🎯", text: "Resgatar a liberdade de se aproximar das pessoas sem medo" },
    ],
    [],
  );

  const howItWorks = useMemo(
    () => [
      { icon: "📅", text: "Leitura de 30 minutos" },
      { icon: "⏱️", text: "1 ação prática por dia que leva menos de 5 minutos" },
      { icon: "✨", text: "A cada etapa, você aplica o conteúdo na sua rotina e sente o resultado imediato" },
    ],
    [],
  );

  const included = useMemo(
    () => [
      "E-book completo com método passo a passo",
      "Checklist diário de cuidados",
      "Guia de alimentos que ajudam (e os que pioram)",
      "Garantia incondicional de 7 dias",
      "Resultados perceptíveis em poucos dias",
    ],
    [],
  );

  const faq = useMemo(
    () => [
      {
        q: "Para quem é esse guia?",
        a: "Para quem quer eliminar o mau hálito com um plano simples, prático e realista — especialmente se você já tentou de tudo e ainda se sente travado.",
      },
      { q: "Qual o investimento?", a: "Você encontra todos os detalhes de valor na seção de preço desta página." },
      {
        q: "Preciso de experiência prévia?",
        a: "Não. O guia foi feito para qualquer pessoa, com linguagem direta e passos objetivos.",
      },
      { q: "Quanto tempo por dia preciso dedicar?", a: "Menos de 5 minutos por dia (além da leitura inicial)." },
      {
        q: "Em quanto tempo vou ver resultados?",
        a: "Muitas pessoas percebem melhora nos primeiros dias. O mais importante é consistência: cada etapa foi pensada para encaixar na vida real.",
      },
      {
        q: "E se o guia não funcionar pra mim?",
        a: "Você tem 7 dias de garantia incondicional. Se não fizer sentido pra você, é só solicitar o reembolso.",
      },
    ],
    [],
  );

  const onPrimaryCta = () => {
    const el = document.getElementById("preco");
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const onWhatsapp = () => {
    window.open("https://wa.me/5500000000000", "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-[hsl(var(--hf-cream))] text-[hsl(var(--foreground))]">
      <header className="sticky top-0 z-50 border-b border-black/5 bg-[hsl(var(--hf-cream-light))]/70 backdrop-blur">
        <div className="hf-container flex h-16 items-center justify-between">
          <a
            href="#topo"
            className="hf-heading text-sm font-semibold tracking-tight text-black"
            data-testid="link-home"
          >
            Hálito Fresco <span className="text-black/40">Sem Segredo</span>
          </a>
          <button className="hf-cta px-5 py-3 text-sm" onClick={onPrimaryCta} data-testid="button-cta-header">
            Quero começar
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </header>

      <main id="topo">
        {/* Section 1: Hero */}
        <section
          className="relative hf-section overflow-hidden bg-gradient-to-b from-[hsl(var(--hf-cream))] to-white"
          aria-label="Hero"
        >
          <div className="absolute inset-0">
            <div className="absolute -top-24 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(127,255,0,0.18),rgba(127,255,0,0)_55%)]" />
            <div className="absolute -bottom-28 right-[-120px] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(107,123,94,0.22),rgba(107,123,94,0)_55%)]" />
          </div>

          <div className="hf-container relative">
            <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
              <Pill testId="badge-guia">GUIA COMPLETO</Pill>

              <h1 className="hf-hero-title mt-6" data-testid="text-hero-title">
                Você sabe o que precisa fazer para ter um hálito fresco. Mas quando chega a hora... simplesmente não sabe por onde
                começar.
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-relaxed text-black/65" data-testid="text-hero-subtitle">
                Um método direto, realista e humano — para você recuperar a confiança e se aproveitar sem medo.
              </p>

              <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
                <button className="hf-cta w-full sm:w-auto" onClick={onPrimaryCta} data-testid="button-cta-hero">
                  QUERO ELIMINAR O MAU HÁLITO ↑
                </button>
                <a
                  href="#faq"
                  className="rounded-full border border-black/10 bg-white/70 px-6 py-4 text-sm font-semibold text-black/70 shadow-[0_10px_30px_rgba(0,0,0,0.06)] backdrop-blur transition hover:-translate-y-0.5 hover:bg-white"
                  data-testid="link-hero-faq"
                >
                  Ver perguntas frequentes
                </a>
              </div>

              <div className="mt-10 w-full">
                <div className="hf-card hf-noise overflow-hidden rounded-[24px] bg-white" data-testid="card-hero-image">
                  <img
                    src={heroImg}
                    alt="Pessoa sorrindo confiante em um ambiente clean"
                    className="h-[320px] w-full object-cover sm:h-[380px]"
                    data-testid="img-hero"
                  />
                </div>
              </div>

              <a
                href="#dor"
                className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-black/55 transition hover:text-black/75"
                data-testid="link-scroll"
              >
                <span>Role para continuar</span>
                <ChevronDown className="hf-scroll-indicator h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        {/* Section 2: A Dor */}
        <section id="dor" className="hf-section bg-[hsl(var(--hf-cream))]" aria-label="A dor">
          <div className="hf-container">
            <div className="mx-auto max-w-3xl">
              <h2 className="hf-heading text-2xl font-bold tracking-tight" data-testid="text-pain-title">
                Se isso já passou pela sua cabeça, você não está sozinho.
              </h2>
              <div className="mt-8 space-y-4" data-testid="list-pain">
                {painPoints.map((item, idx) => (
                  <div
                    key={idx}
                    className="hf-card flex gap-4 rounded-[20px] bg-white/70 p-5 backdrop-blur"
                    data-testid={`card-pain-${idx}`}
                  >
                    <div className="text-2xl" aria-hidden="true">
                      {item.emoji}
                    </div>
                    <p className="text-sm leading-relaxed text-black/70" data-testid={`text-pain-${idx}`}>
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: O que te ensinaram vs a verdade */}
        <section className="hf-section bg-white" aria-label="O que te ensinaram">
          <div className="hf-container">
            <div className="mx-auto max-w-4xl">
              <h2 className="hf-heading text-2xl font-bold tracking-tight" data-testid="text-myths-title">
                O que te ensinaram vs. a verdade
              </h2>

              <div className="mt-8 hf-card rounded-[24px] bg-[#F5F5F5] p-6" data-testid="card-myths">
                <h3 className="hf-heading text-lg font-semibold" data-testid="text-myths-subtitle">
                  O que te ensinaram:
                </h3>
                <ul className="mt-4 space-y-3" data-testid="list-myths">
                  {myths.map((t, i) => (
                    <li key={i} className="flex gap-3" data-testid={`row-myth-${i}`}>
                      <span
                        className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#E53935]/10"
                        aria-hidden="true"
                      >
                        <X className="h-4 w-4 text-[#E53935]" strokeWidth={2.6} />
                      </span>
                      <span className="text-sm text-black/70" data-testid={`text-myth-${i}`}>
                        {t}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-6 text-sm leading-relaxed text-black/70" data-testid="text-transition">
                Você não está com mau hálito por falta de esforço. Só nunca te ensinaram a verdadeira causa.
              </p>

              <div
                className="mt-6 hf-card rounded-[24px] bg-[hsl(var(--hf-olive))] p-6 text-white"
                data-testid="card-truths"
              >
                <h3 className="hf-heading text-lg font-semibold" data-testid="text-truths-subtitle">
                  Mas a verdade é:
                </h3>
                <ul className="mt-4 space-y-3" data-testid="list-truths">
                  {truths.map((t, i) => (
                    <li key={i} className="flex gap-3" data-testid={`row-truth-${i}`}>
                      <span
                        className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/15"
                        aria-hidden="true"
                      >
                        <Check className="h-4 w-4 text-[hsl(var(--hf-lime))]" strokeWidth={3} />
                      </span>
                      <span className="text-sm text-white/90" data-testid={`text-truth-${i}`}>
                        {t}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Produto */}
        <section className="hf-section bg-[hsl(var(--hf-olive))] text-white" aria-label="Produto">
          <div className="hf-container">
            <div className="mx-auto max-w-3xl text-center">
              <Pill testId="badge-produto">HÁLITO FRESCO SEM SEGREDO</Pill>
              <h2 className="hf-heading mt-6 text-2xl font-bold tracking-tight" data-testid="text-product-title">
                O Hálito Fresco Sem Segredo é um guia prático e direto
              </h2>
              <p className="mt-3 text-base text-white/85" data-testid="text-product-subtitle">
                Feito para quem quer parar de se esconder, ganhar confiança e eliminar o mau hálito de vez, na vida real.
              </p>
              <p className="mt-6 text-sm leading-relaxed text-white/80" data-testid="text-product-body">
                Nada de soluções mirabolantes ou promessas impossíveis. Você vai aplicar, sentir a diferença e construir uma rotina
                de cuidado de verdade, mesmo nos dias em que não estiver motivado.
              </p>

              <div className="mt-8">
                <button className="hf-cta" onClick={onPrimaryCta} data-testid="button-cta-product">
                  QUERO ELIMINAR O MAU HÁLITO ↑
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Como funciona */}
        <section className="hf-section bg-[hsl(var(--hf-cream))]" aria-label="Como funciona">
          <div className="hf-container">
            <div className="mx-auto max-w-3xl">
              <h2 className="hf-heading text-2xl font-bold tracking-tight" data-testid="text-how-title">
                Como funciona:
              </h2>
              <div className="mt-6 space-y-4" data-testid="list-how">
                {howItWorks.map((it, idx) => (
                  <div
                    key={idx}
                    className="hf-card flex items-center gap-4 rounded-[20px] bg-[hsl(var(--hf-olive))] p-5 text-white"
                    data-testid={`card-how-${idx}`}
                  >
                    <div className="text-2xl" aria-hidden="true">
                      {it.icon}
                    </div>
                    <p className="text-sm leading-relaxed text-white/90" data-testid={`text-how-${idx}`}>
                      {it.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: O que você vai aprender */}
        <section className="hf-section bg-[hsl(var(--hf-cream))]" aria-label="O que você vai aprender">
          <div className="hf-container">
            <div className="mx-auto max-w-3xl">
              <h2 className="hf-heading text-2xl font-bold tracking-tight" data-testid="text-learn-title">
                Você vai aprender a:
              </h2>
              <div className="mt-6 space-y-4" data-testid="list-learn">
                {learnItems.map((it, idx) => (
                  <div
                    key={idx}
                    className="hf-card flex items-center gap-4 rounded-[20px] bg-[hsl(var(--hf-olive))] p-5 text-white"
                    data-testid={`card-learn-${idx}`}
                  >
                    <div className="text-2xl" aria-hidden="true">
                      {it.icon}
                    </div>
                    <p className="text-sm leading-relaxed text-white/90" data-testid={`text-learn-${idx}`}
                    >
                      {it.text}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <button className="hf-cta" onClick={onPrimaryCta} data-testid="button-cta-learn">
                  QUERO ESSE GUIA ↑
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Resultados */}
        <section className="hf-section bg-[hsl(var(--hf-olive))] text-white" aria-label="Resultados">
          <div className="hf-container">
            <div className="mx-auto max-w-5xl">
              <h2 className="hf-heading text-center text-2xl font-bold tracking-tight" data-testid="text-results-title">
                Resultados na vida real (antes e depois)
              </h2>

              <div className="mt-8 grid gap-6 md:grid-cols-2" data-testid="grid-results">
                <div className="hf-card overflow-hidden rounded-[24px] bg-white/10" data-testid="card-before">
                  <div className="hf-noise">
                    <img
                      src={beforeImg}
                      alt="Pessoa preocupada cobrindo a boca"
                      className="h-[220px] w-full object-cover"
                      data-testid="img-before"
                    />
                  </div>
                  <div className="space-y-5 p-6">
                    <h3 className="hf-heading text-lg font-semibold" data-testid="text-before-title">
                      Antes do Guia Hálito Fresco:
                    </h3>
                    <ProgressRow label="Confiança ao conversar" value={15} variant="negative" testIdPrefix="before-confidence" />
                    <ProgressRow label="Consistência nos cuidados" value={22} variant="negative" testIdPrefix="before-consistency" />
                    <ProgressRow label="Proximidade sem medo" value={12} variant="negative" testIdPrefix="before-closeness" />
                    <ProgressRow label="Autoestima" value={18} variant="negative" testIdPrefix="before-selfesteem" />
                    <ProgressRow label="Constrangimento diário" value={87} variant="negative" testIdPrefix="before-embarrassment" />
                  </div>
                </div>

                <div className="hf-card overflow-hidden rounded-[24px] bg-white/10" data-testid="card-after">
                  <div className="hf-noise">
                    <img
                      src={afterImg}
                      alt="Pessoa sorrindo conversando de perto"
                      className="h-[220px] w-full object-cover"
                      data-testid="img-after"
                    />
                  </div>
                  <div className="space-y-5 p-6">
                    <h3 className="hf-heading text-lg font-semibold" data-testid="text-after-title">
                      Depois do Guia Hálito Fresco:
                    </h3>
                    <ProgressRow label="Confiança ao conversar" value={89} variant="positive" testIdPrefix="after-confidence" />
                    <ProgressRow label="Consistência nos cuidados" value={84} variant="positive" testIdPrefix="after-consistency" />
                    <ProgressRow label="Proximidade sem medo" value={91} variant="positive" testIdPrefix="after-closeness" />
                    <ProgressRow label="Autoestima" value={86} variant="positive" testIdPrefix="after-selfesteem" />
                    <ProgressRow label="Constrangimento diário" value={5} variant="positive" testIdPrefix="after-embarrassment" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 8: Sobre o autor */}
        <section className="hf-section bg-white" aria-label="Sobre o autor">
          <div className="hf-container">
            <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-2">
              <div className="hf-card hf-noise overflow-hidden rounded-[24px] bg-[hsl(var(--hf-cream-light))]" data-testid="card-author">
                <img
                  src={izadoraImg}
                  alt="Izadora Barros - Cirurgiã-dentista"
                  className="h-full w-full object-cover aspect-[4/3]"
                  data-testid="img-author"
                />
              </div>
              <div>
                <h2 className="hf-heading text-2xl font-bold tracking-tight" data-testid="text-author-title">
                  Oi, eu sou a Izadora Barros!
                </h2>
                <div className="mt-4 space-y-3 text-sm leading-relaxed text-black/70" data-testid="text-author-body">
                  <p>
                    Sou Izadora Barros, cirurgiã-dentista com atuação voltada para a promoção da saúde bucal, autoestima e bem-estar através de orientações práticas e acessíveis.
                  </p>
                  <p>
                    Ao longo da minha trajetória na Odontologia, desenvolvi experiência clínica e hospitalar, sempre com foco em um atendimento humanizado, disciplinado e baseado em protocolos seguros e eficazes. Atualmente, sou pós-graduanda em Cirurgia e Traumatologia Bucomaxilofacial e Harmonização Orofacial, aprofundando ainda mais meus conhecimentos para transformar vidas através do cuidado odontológico.
                  </p>
                  <p>
                    Eu sei o quanto o mau hálito pode afetar a confiança, os relacionamentos e até mesmo a vida social de uma pessoa. Muitas vezes, ele não é apenas um detalhe, mas um problema silencioso que gera insegurança e desconforto.
                  </p>
                  <p>
                    Por isso, criei este ebook com um objetivo muito claro: te mostrar, de forma simples e direta, os passos necessários para conquistar um hálito fresco, uma boca saudável e mais tranquilidade no dia a dia.
                  </p>
                  <p>
                    Você merece se sentir segura ao falar, sorrir e estar perto das pessoas — e eu estou aqui para te guiar nesse processo com conhecimento, clareza e um método que realmente funciona.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 9: O que está incluso */}
        <section className="hf-section bg-gradient-to-b from-[hsl(var(--hf-cream))] to-white" aria-label="Incluso">
          <div className="hf-container">
            <div className="mx-auto max-w-5xl">
              <div className="grid gap-10 md:grid-cols-2 md:items-center">
                <div className="hf-card hf-noise rounded-[24px] bg-white p-7" data-testid="card-mockup">
                  <div className="space-y-4">
                    <div className="hf-heading text-sm font-semibold text-black/60" data-testid="text-mockup-kicker">
                      Seu novo guia:
                    </div>
                    <div className="relative aspect-[3/4] overflow-hidden rounded-[18px] bg-[hsl(var(--hf-cream))] shadow-lg">
                      <img
                        src={capaLivroImg}
                        alt="Capa do Livro Hálito Fresco Sem Segredo"
                        className="h-full w-full object-contain"
                        data-testid="img-book-cover"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="hf-heading text-2xl font-bold tracking-tight" data-testid="text-included-title">
                    Tudo o que você recebe ao adquirir HOJE o Hálito Fresco Sem Segredo:
                  </h2>
                  <ul className="mt-6 space-y-3" data-testid="list-included">
                    {included.map((t, i) => (
                      <li key={i} className="flex gap-3" data-testid={`row-included-${i}`}>
                        <span
                          className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-[hsl(var(--hf-olive))]/10"
                          aria-hidden="true"
                        >
                          <Check className="h-4 w-4 text-[hsl(var(--hf-olive))]" strokeWidth={3} />
                        </span>
                        <span className="text-sm text-black/75" data-testid={`text-included-${i}`}>
                          {t}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 10: Preço */}
        <section id="preco" className="hf-section bg-[hsl(var(--hf-cream))]" aria-label="Preço">
          <div className="hf-container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="hf-heading text-2xl font-bold tracking-tight" data-testid="text-price-title">
                Comece hoje, sem complicar.
              </h2>

              <div className="mt-8 hf-card rounded-[24px] bg-white p-8" data-testid="card-price">
                <div className="text-sm font-semibold text-black/50" data-testid="text-price-was">
                  De <span className="line-through">R$ 97,00</span> por apenas:
                </div>

                <div className="mt-3 hf-heading text-5xl font-bold tracking-tight" data-testid="text-price-now">
                  R$ 27,00
                </div>

                <div className="mt-2 text-sm font-semibold text-black/60" data-testid="text-price-installments">
                  (ou 3x de R$ 9,33)
                </div>

                <div className="mt-5 text-sm text-black/60" data-testid="text-price-cash">
                  ou R$ 27,00 à vista com desconto
                </div>

                <div className="mt-7">
                  <button className="hf-cta w-full" onClick={onPrimaryCta} data-testid="button-cta-price">
                    QUERO COMEÇAR MINHA TRANSFORMAÇÃO ↑
                  </button>
                </div>

                <p className="mt-6 text-xs leading-relaxed text-black/55" data-testid="text-price-footnote">
                  Sem mensalidades. Sem pegadinhas. Um investimento único para eliminar o mau hálito e recuperar sua confiança.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 11: Garantia */}
        <section className="hf-section bg-[hsl(var(--hf-olive))] text-white" aria-label="Garantia">
          <div className="hf-container">
            <div className="mx-auto max-w-4xl">
              <div className="grid gap-8 md:grid-cols-[160px_1fr] md:items-start">
                <div
                  className="mx-auto flex h-36 w-36 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur"
                  data-testid="badge-guarantee"
                >
                  <div className="text-center">
                    <div className="hf-heading text-sm font-semibold" data-testid="text-guarantee-badge-top">
                      Selo
                    </div>
                    <div className="hf-heading text-lg font-bold" data-testid="text-guarantee-badge-main">
                      7 Dias
                    </div>
                    <div className="text-xs text-white/80" data-testid="text-guarantee-badge-bottom">
                      Garantia
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="hf-heading text-2xl font-bold tracking-tight" data-testid="text-guarantee-title">
                    Garantia Incondicional de 7 Dias
                  </h2>
                  <div className="mt-4 space-y-3 text-sm leading-relaxed text-white/85" data-testid="text-guarantee-body">
                    <p>Eu quero que você entre no Hálito Fresco Sem Segredo com total segurança e tranquilidade.</p>
                    <p>Por isso, você tem 7 dias de garantia incondicional.</p>
                    <p>
                      Isso significa que você pode acessar todo o conteúdo, aplicar as técnicas, e se por qualquer motivo sentir que
                      não faz sentido pra você, é só enviar um e-mail para nosso suporte e todo o valor será devolvido, sem burocracia,
                      sem perguntas.
                    </p>
                    <p>Simples assim. O risco é todo meu. A transformação é toda sua.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 12: FAQ */}
        <section id="faq" className="hf-section bg-white" aria-label="FAQ">
          <div className="hf-container">
            <div className="mx-auto max-w-3xl">
              <h2 className="hf-heading text-2xl font-bold tracking-tight" data-testid="text-faq-title">
                Perguntas Frequentes
              </h2>

              <div className="mt-6" data-testid="accordion-faq">
                <Accordion type="single" collapsible>
                  {faq.map((it, idx) => (
                    <AccordionItem
                      key={idx}
                      value={`item-${idx}`}
                      className="hf-card mb-3 overflow-hidden rounded-[20px] border border-black/5 bg-[hsl(var(--hf-olive))]"
                      data-testid={`faq-item-${idx}`}
                    >
                      <AccordionTrigger
                        className="px-5 py-4 text-left text-sm font-semibold text-white hover:no-underline"
                        data-testid={`button-faq-${idx}`}
                      >
                        {it.q}
                      </AccordionTrigger>
                      <AccordionContent className="px-5 pb-5 text-sm leading-relaxed text-white/85" data-testid={`text-faq-${idx}`}>
                        {it.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </section>

        {/* Section 13: CTA Final */}
        <section className="hf-section bg-[hsl(var(--hf-olive))] text-white" aria-label="CTA final">
          <div className="hf-container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="hf-heading text-2xl font-bold tracking-tight" data-testid="text-final-title">
                Você não tem nada a perder, e um hálito fresco, leve e cheio de confiança pra ganhar.
              </h2>

              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <button
                  className="hf-cta hf-pulse w-full sm:w-auto"
                  onClick={onPrimaryCta}
                  data-testid="button-cta-final"
                >
                  QUERO MEU HÁLITO FRESCO AGORA ↑
                </button>

                <button className="hf-cta-outline w-full sm:w-auto" onClick={onWhatsapp} data-testid="button-whatsapp">
                  Fale com meu time no WhatsApp
                  <span aria-hidden="true">💬</span>
                </button>
              </div>

              <p className="mt-6 text-sm text-white/80" data-testid="text-final-note">
                Tem alguma dúvida que não encontrou aqui?
              </p>
            </div>
          </div>
        </section>

        {/* Section 14: Footer */}
        <footer className="border-t border-white/10 bg-[#1A1A1A] text-white" aria-label="Footer">
          <div className="hf-container py-10 text-center">
            <div className="hf-heading text-sm font-semibold" data-testid="text-footer-brand">
              Hálito Fresco Sem Segredo
            </div>
            <div className="mt-2 text-xs text-white/70" data-testid="text-footer-rights">
              Todos os direitos reservados
            </div>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-white/70">
              <a href="#" className="hover:text-white" data-testid="link-privacy">
                Política de Privacidade
              </a>
              <span className="text-white/30" aria-hidden="true">
                |
              </span>
              <a href="#" className="hover:text-white" data-testid="link-terms">
                Termos de Uso
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
