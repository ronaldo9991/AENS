import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CrosshairOverlay } from "@/components/ui/SectionElements";
import { 
  CrosshairIcon, 
  ShieldNodeIcon, 
  NeuralDiagramIcon, 
  HexagonIcon, 
  ConcentricArcsIcon 
} from "@/components/icons";

export default function About() {
  const principles = [
    { title: "Precision", icon: CrosshairIcon, desc: "Our agents operate with surgical accuracy. Every action is auditable, every decision policy-bound." },
    { title: "Security", icon: ShieldNodeIcon, desc: "Built for the world's most sensitive environments. Zero trust by default, verifiable by design." },
    { title: "Intelligence", icon: NeuralDiagramIcon, desc: "Adaptive systems that learn from your enterprise data and evolve with your operations." },
    { title: "Execution", icon: HexagonIcon, desc: "Ideas don't run a business. Production-grade pipelines, 99.99% SLA and sub-50ms latency do." },
    { title: "Trust", icon: ConcentricArcsIcon, desc: "From governance to deepfake defence — AENS is the verifiable layer of truth in your stack." }
  ];

  // Operational doctrine — used in restyled section
  const doctrine = [
    { num: "01", title: "Precision First", desc: "False positives are unacceptable. Sub-50ms latency. Every decision auditable." },
    { num: "02", title: "Air-Gapped Ready", desc: "Deployed directly into classified and regulated enterprise environments." },
    { num: "03", title: "Multi-Modal", desc: "Simultaneous analysis across video, audio, text and metadata." },
    { num: "04", title: "Custom by Default", desc: "We engineer AI for your business — never generic, never one-size-fits-all." },
  ];

  return (
    <motion.main 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="w-full flex flex-col bg-background"
    >
      {/* Hero */}
      <section className="pt-40 pb-32 border-b border-border bg-background relative overflow-hidden">
        <CrosshairOverlay />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-4 mb-8"
              >
                <div className="w-8 h-[1px] bg-primary" />
                <span className="text-primary uppercase tracking-[0.2em] font-mono text-[10px] font-medium">
                  THE ORGANIZATION
                </span>
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-6xl md:text-8xl lg:text-[7rem] font-serif font-bold text-foreground leading-[0.9]"
              >
                Engineering <br/>
                <span className="italic font-normal text-muted-foreground">Autonomy.</span>
              </motion.h1>
            </div>
            <div className="lg:col-span-4 pb-4">
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-muted-foreground font-sans leading-relaxed border-l border-border pl-6"
              >
                AENS builds enterprise AI systems and autonomous agents that run real B2B operations. Deepfake defence is one capability — agentic intelligence is the foundation.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* What AENS Means */}
      <section className="py-40 bg-card relative">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-16 items-start">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:col-span-5 relative"
            >
              <div className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] text-foreground space-y-2">
                {[
                  { l: "A", w: "Artificial" },
                  { l: "E", w: "Enterprise" },
                  { l: "N", w: "Nervous" },
                  { l: "S", w: "System" },
                ].map((row) => (
                  <div key={row.l} className="flex items-center gap-6 group">
                    <span className="text-primary font-mono text-base w-6 tracking-widest">{row.l}</span>
                    <span className="text-foreground group-hover:text-primary transition-colors duration-500">
                      {row.w}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:col-span-7 space-y-8 text-xl text-muted-foreground font-sans pt-4"
            >
              <p>
                As generative AI commoditizes the creation of hyper-realistic video, audio, and documents, the foundational concept of digital truth is fracturing. Enterprises face a paradigm where any digital artifact can be seamlessly spoofed.
              </p>
              <p>
                AENS was forged to be the definitive countermeasure. We build intelligence systems that act as an enterprise's nervous system—feeling, analyzing, and verifying every piece of digital input before it reaches the brain.
              </p>
              <div className="p-8 border border-primary/30 bg-primary/5 mt-12 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
                <p className="text-foreground font-serif text-2xl leading-snug">
                  We do not build generative models. We build the architecture that holds them accountable.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Operational Doctrine — alternating timeline cards */}
      <section className="py-32 bg-background border-t border-border relative">
        <div className="container mx-auto px-6 mb-20 flex justify-center">
          <div className="inline-flex items-center gap-3 border border-primary/40 px-5 py-2 font-mono text-[10px] tracking-[0.25em] uppercase text-primary">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            // SECTION 04 · OPERATIONAL DOCTRINE
          </div>
        </div>

        <div className="container mx-auto px-6">
          <div className="relative max-w-3xl mx-auto">
            <div className="space-y-12">
              {doctrine.map((item, i) => (
                <div key={item.num} className="relative">
                  <motion.div
                    initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5 }}
                    className={`relative ${i % 2 === 0 ? "ml-0 mr-auto" : "ml-auto mr-0"} max-w-xl`}
                  >
                    {/* big background number */}
                    <div
                      className={`absolute font-serif font-bold text-[8rem] leading-none text-muted/15 select-none pointer-events-none ${
                        i % 2 === 0 ? "-left-12 -top-6" : "-right-12 -top-6"
                      }`}
                      aria-hidden
                    >
                      {item.num}
                    </div>
                    <div className="relative z-10 bg-card/70 backdrop-blur-sm border border-border/70 p-8 hover:border-primary/40 transition-colors">
                      <h3 className="text-2xl font-serif font-bold text-foreground mb-3">{item.title}</h3>
                      <p className="text-muted-foreground font-sans leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>

                  {i < doctrine.length - 1 && (
                    <div className="flex justify-center mt-12">
                      <div className="w-8 h-8 rounded-full border-2 border-primary bg-background flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles — keep but restyled */}
      <section className="py-32 bg-card border-t border-border relative">
        <div className="container mx-auto px-6 mb-16 flex justify-center">
          <div className="inline-block border border-primary/40 px-5 py-2 font-mono text-[10px] tracking-[0.25em] uppercase text-primary">
            // SECTION 03 · OPERATING PRINCIPLES
          </div>
        </div>
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border/50 border border-border/50 p-px max-w-7xl mx-auto">
            {principles.map((principle, i) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-background p-10 hover:bg-muted/10 transition-colors group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="font-mono text-xs text-primary/50 mb-6">0{i + 1}</div>
                <principle.icon className="w-10 h-10 text-muted-foreground group-hover:text-primary transition-colors duration-500 mb-6" />
                <h3 className="text-xl font-serif font-bold text-foreground mb-3">{principle.title}</h3>
                <p className="text-sm text-muted-foreground font-sans leading-relaxed">{principle.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder & Headquarters */}
      <section className="py-32 bg-background border-t border-border relative">
        <div className="container mx-auto px-6 mb-16 flex justify-center">
          <div className="inline-block border border-primary/40 px-5 py-2 font-mono text-[10px] tracking-[0.25em] uppercase text-primary">
            // SECTION 05 · LEADERSHIP
          </div>
        </div>
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Founder card */}
            <div className="relative bg-card border border-border p-10 group hover:border-primary/40 transition-colors overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(ellipse_at_top_right,rgba(208,24,227,0.15)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-primary mb-8">FOUNDER</div>
              <div className="flex items-center gap-6 mb-8">
                <div className="w-20 h-20 rounded-full border-2 border-primary/40 bg-primary/10 flex items-center justify-center font-serif text-3xl font-bold text-primary">
                  R
                </div>
                <div>
                  <div className="text-3xl font-serif font-bold text-foreground">Ronaldo R</div>
                  <div className="font-mono text-xs text-muted-foreground tracking-widest mt-1">FOUNDER · AENS</div>
                </div>
              </div>
              <p className="text-muted-foreground font-sans leading-relaxed italic">
                "We don't ship generic AI. AENS exists to engineer the AI capability that becomes an unfair advantage for every enterprise we serve."
              </p>
            </div>

            {/* HQ card */}
            <div className="relative bg-card border border-border p-10 group hover:border-primary/40 transition-colors overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(ellipse_at_top_right,rgba(208,24,227,0.15)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-primary mb-8">HEADQUARTERS</div>
              <div className="space-y-6">
                <div>
                  <div className="text-2xl font-serif font-bold text-foreground">Dubai</div>
                  <div className="font-mono text-[10px] text-muted-foreground tracking-widest mt-1">UAE · STRATEGIC HQ</div>
                </div>
                <div className="w-12 h-[1px] bg-border" />
                <div>
                  <div className="text-2xl font-serif font-bold text-foreground">Bangalore</div>
                  <div className="font-mono text-[10px] text-muted-foreground tracking-widest mt-1">INDIA · ENGINEERING HQ</div>
                </div>
                <div className="w-12 h-[1px] bg-border" />
                <div className="flex items-center justify-between pt-2">
                  <div>
                    <div className="font-mono text-[10px] text-muted-foreground tracking-widest mb-1">FOUNDED</div>
                    <div className="text-foreground font-serif text-xl">2026</div>
                  </div>
                  <div>
                    <div className="font-mono text-[10px] text-muted-foreground tracking-widest mb-1">CONTACT</div>
                    <a href="mailto:admin@aens.io" className="text-foreground font-serif text-xl hover:text-primary transition-colors">
                      admin@aens.io
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-40 bg-background text-center border-t border-border relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(208,24,227,0.1)_0%,transparent_60%)]" />
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-5xl lg:text-7xl font-serif font-bold text-foreground mb-12">Deploy Elite Intelligence.</h2>
          <Link href="/contact">
            <Button data-testid="btn-contact-team" size="lg" className="rounded-none bg-primary text-primary-foreground hover:bg-primary/90 px-12 h-16 text-sm font-mono uppercase tracking-widest border border-primary hover:shadow-[0_0_30px_rgba(208,24,227,0.4)] transition-all">
              Contact Our Team
            </Button>
          </Link>
        </div>
      </section>
    </motion.main>
  );
}