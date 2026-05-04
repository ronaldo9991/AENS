import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CrosshairOverlay } from "@/components/ui/SectionElements";
import {
  CrosshairIcon,
  ShieldNodeIcon,
  NeuralDiagramIcon,
  HexagonIcon,
  ConcentricArcsIcon,
  OrbitalRingIcon,
  GridMatrixIcon,
} from "@/components/icons";
import { useSeo } from "@/hooks/use-seo";
import { ROUTE_SEO } from "@/lib/seo";

export default function Solutions() {
  useSeo(ROUTE_SEO["/solutions"]);
  const solutions = [
    {
      id: "custom-ai",
      title: "Custom AI Solutions",
      tag: "FLAGSHIP",
      icon: HexagonIcon,
      desc: "Bespoke AI built around your business — from problem framing to model architecture, deployment and continuous tuning. We do not sell shelf products; we engineer the AI capability that wins for your enterprise.",
      features: [
        "Strategic AI consulting & roadmap",
        "Custom model architecture & training",
        "Private deployment in your cloud or on-prem",
        "End-to-end ownership: discovery → live ops",
      ],
    },
    {
      id: "enterprise-ai",
      title: "Enterprise AI Systems",
      tag: "CORE",
      icon: GridMatrixIcon,
      desc: "Production-grade AI infrastructure for regulated B2B environments — secure gateways, private LLMs, RAG pipelines and governance baked into every layer.",
      features: ["Air-gapped & on-prem deployment", "Private LLM gateway", "RAG over enterprise data", "Policy & audit guardrails"],
    },
    {
      id: "ai-agents",
      title: "Autonomous AI Agents",
      tag: "CORE",
      icon: OrbitalRingIcon,
      desc: "Agents that plan, decide and execute across your tools 24/7. Multi-step reasoning, native tool use and human-in-the-loop approvals built in.",
      features: ["Multi-step reasoning", "Tool use across your stack", "Human-in-the-loop gates", "Replayable audit trails"],
    },
    {
      id: "deepfake-detection",
      title: "Deepfake Detection",
      tag: "MODULE",
      icon: ConcentricArcsIcon,
      desc: "Identify synthetic media with 99.9% accuracy. Pixel anomaly detection, audio frequency analysis and metadata tracing under sub-50ms latency.",
      features: ["Pixel anomaly detection", "Audio frequency analysis", "Metadata & provenance tracing", "Real-time stream support"],
    },
    {
      id: "av-intel",
      title: "Audio & Video Intelligence",
      tag: "MODULE",
      icon: NeuralDiagramIcon,
      desc: "Forensic-grade understanding of video and audio — speakers, scenes, sentiment, manipulation traces and content lineage.",
      features: ["Speaker & scene analysis", "Sentiment & intent extraction", "Generator model fingerprinting", "Content lineage reporting"],
    },
    {
      id: "trust-infra",
      title: "Trust & Governance",
      tag: "PLATFORM",
      icon: ShieldNodeIcon,
      desc: "The foundational layer for verifying digital authenticity at enterprise scale — cryptographic watermarking, provenance and zero-trust integration.",
      features: ["Cryptographic watermarking", "Provenance tracking", "Zero-trust integration", "API-first compliance"],
    },
  ];

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full flex flex-col bg-background"
    >
      {/* Hero */}
      <section className="pt-40 pb-28 border-b border-border bg-card relative overflow-hidden">
        <CrosshairOverlay />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(225,230,240,0.12)_0%,transparent_55%)] pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-10 h-[1px] bg-primary" />
              <span className="text-primary uppercase tracking-[0.25em] font-mono text-[10px] font-medium">
                // SOLUTIONS / CUSTOM AI / ENTERPRISE
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-[6.5rem] font-serif font-bold text-foreground mb-8 leading-[1.02]"
            >
              Custom AI <br />
              <span className="italic font-normal text-muted-foreground">for serious enterprises.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-2xl font-sans leading-relaxed"
            >
              We don't sell off-the-shelf AI. AENS engineers tailored AI systems and autonomous agents for your operations — with deepfake, audio and video intelligence available as ready modules inside the same trust fabric.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Operational Doctrine — alternating timeline */}
      <section className="py-32 bg-background relative overflow-hidden">
        <div className="container mx-auto px-6 mb-20 flex justify-center">
          <div className="border border-primary/40 px-6 py-2 font-mono text-[10px] tracking-[0.25em] uppercase text-primary">
            // SECTION 01 · CAPABILITY MATRIX
          </div>
        </div>

        <div className="container mx-auto px-6">
          <div className="relative max-w-5xl mx-auto">
            {/* central spine */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden md:block" />

            <div className="space-y-12 md:space-y-24">
              {solutions.map((sol, index) => {
                const isLeft = index % 2 === 0;
                return (
                  <motion.div
                    key={sol.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6 }}
                    className="relative md:grid md:grid-cols-2 md:gap-16 items-center"
                  >
                    {/* central node */}
                    <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center justify-center top-12 z-10">
                      <div className="w-4 h-4 rounded-full border-2 border-primary bg-background flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                      </div>
                    </div>

                    {/* card placement */}
                    <div className={`${isLeft ? "md:col-start-1" : "md:col-start-2"} relative`}>
                      <div className="relative group">
                        {/* Big background number */}
                        <div
                          className={`absolute -top-8 ${isLeft ? "-left-2" : "-right-2"} font-serif font-bold text-[10rem] leading-none text-muted/10 select-none pointer-events-none z-0`}
                          aria-hidden
                        >
                          0{index + 1}
                        </div>

                        <div className="relative z-10 border border-border/70 bg-card/70 backdrop-blur-sm p-10 hover:border-primary/50 transition-colors duration-500">
                          <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-3">
                              <sol.icon className="w-6 h-6 text-primary" />
                              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-primary">
                                {sol.tag}
                              </span>
                            </div>
                            <span className="font-mono text-[10px] text-muted-foreground tracking-widest">
                              SYS.0{index + 1}
                            </span>
                          </div>

                          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4 leading-tight">
                            {sol.title}
                          </h2>

                          <p className="text-base text-muted-foreground font-sans leading-relaxed mb-6 border-l-2 border-primary/30 pl-4">
                            {sol.desc}
                          </p>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mb-6">
                            {sol.features.map((feature, i) => (
                              <div key={i} className="flex items-start gap-2.5 text-sm">
                                <CrosshairIcon className="w-3 h-3 text-primary/60 shrink-0 mt-1" />
                                <span className="text-foreground/90 font-sans">{feature}</span>
                              </div>
                            ))}
                          </div>

                          <Link href="/contact">
                            <Button
                              data-testid={`btn-request-${sol.id}`}
                              variant="outline"
                              className="rounded-none border-border hover:bg-primary hover:text-primary-foreground hover:border-primary font-mono text-[10px] tracking-[0.2em] uppercase h-10 px-6 transition-all duration-300"
                            >
                              Request Brief →
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Process */}
      <section className="py-32 bg-card relative border-t border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block border border-primary/40 px-6 py-2 font-mono text-[10px] tracking-[0.25em] uppercase text-primary mb-8">
                // SECTION 02 · ENGAGEMENT PROCESS
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
                How we build with you.
              </h2>
            </div>

            <div className="grid md:grid-cols-4 gap-px bg-border/40 border border-border/40">
              {[
                { num: "01", title: "Discovery", desc: "We map your operations, data and constraints. No assumptions." },
                { num: "02", title: "Architecture", desc: "We propose the model, agent and infra architecture for your case." },
                { num: "03", title: "Build & Train", desc: "We build, fine-tune and validate against your real workloads." },
                { num: "04", title: "Deploy & Operate", desc: "We ship, integrate and run with SLAs and governance in place." },
              ].map((step) => (
                <div key={step.num} className="bg-background p-8 hover:bg-muted/10 transition-colors group">
                  <div className="font-mono text-xs text-primary mb-6 tracking-[0.2em]">{step.num}</div>
                  <h3 className="text-lg font-serif font-bold text-foreground mb-3">{step.title}</h3>
                  <p className="text-sm text-muted-foreground font-sans leading-relaxed">{step.desc}</p>
                  <div className="w-0 h-[1px] bg-primary mt-6 group-hover:w-full transition-all duration-700" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-background border-t border-border text-center relative overflow-hidden">
        <CrosshairOverlay />
        <div className="container mx-auto px-6 relative z-10 max-w-3xl">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
            Tell us the problem. <br />
            <span className="italic text-muted-foreground">We'll build the AI.</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Every engagement starts with a confidential briefing. No templates, no demos — just your problem and our architecture.
          </p>
          <Link href="/contact">
            <Button
              data-testid="btn-strategy-call"
              size="lg"
              className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-10 h-14 text-xs font-mono uppercase tracking-[0.25em] border border-primary hover:shadow-[0_0_30px_rgba(225,230,240,0.5)] transition-all"
            >
              Book Strategy Call
            </Button>
          </Link>
        </div>
      </section>
    </motion.main>
  );
}
