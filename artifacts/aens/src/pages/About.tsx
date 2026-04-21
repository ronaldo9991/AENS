import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SectionDivider, CrosshairOverlay } from "@/components/ui/SectionElements";
import { 
  CrosshairIcon, 
  ShieldNodeIcon, 
  NeuralDiagramIcon, 
  HexagonIcon, 
  ConcentricArcsIcon 
} from "@/components/icons";

export default function About() {
  const principles = [
    { title: "Precision", icon: CrosshairIcon, desc: "We operate with surgical accuracy. False positives are unacceptable. False negatives are catastrophic. Every calculation is absolute." },
    { title: "Security", icon: ShieldNodeIcon, desc: "Our infrastructure is designed for the world's most sensitive environments. Zero trust by default, verifiable by design." },
    { title: "Intelligence", icon: NeuralDiagramIcon, desc: "We build adaptive neural networks that evolve faster than the synthetic threats they hunt. Dynamic, autonomous, relentless." },
    { title: "Execution", icon: HexagonIcon, desc: "Ideas don't secure enterprises. Flawless execution and sub-50ms latency do. We ship systems that perform under extreme duress." },
    { title: "Trust", icon: ConcentricArcsIcon, desc: "We are the definitive layer of truth in an era of infinite synthetic generation. When AENS clears it, it is real." }
  ];

  const milestones = [
    { year: "2023", title: "Genesis", desc: "Core neural architecture developed to identify synthetic audio artifacts." },
    { year: "2024", title: "Multi-Modal Expansion", desc: "Simultaneous video, image, and metadata processing layer deployed." },
    { year: "2025", title: "Enterprise Scaling", desc: "Global trust infrastructure adopted by Fortune 100 organizations." }
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
                Defining <br/>
                <span className="italic font-normal text-muted-foreground">Truth.</span>
              </motion.h1>
            </div>
            <div className="lg:col-span-4 pb-4">
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-muted-foreground font-sans leading-relaxed border-l border-border pl-6"
              >
                We are the architects of trust in the generative AI era. Our mission is to protect enterprise integrity through uncompromised synthetic media intelligence.
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
              <div className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-none text-foreground space-y-4">
                <div className="flex items-center gap-6 group">
                  <span className="text-primary font-mono text-2xl w-8">A</span>
                  <span className="opacity-40 group-hover:opacity-100 transition-opacity">Artificial</span>
                </div>
                <div className="flex items-center gap-6 group">
                  <span className="text-primary font-mono text-2xl w-8">E</span>
                  <span className="opacity-40 group-hover:opacity-100 transition-opacity">Enterprise</span>
                </div>
                <div className="flex items-center gap-6 group">
                  <span className="text-primary font-mono text-2xl w-8">N</span>
                  <span className="opacity-40 group-hover:opacity-100 transition-opacity">Nervous</span>
                </div>
                <div className="flex items-center gap-6 group">
                  <span className="text-primary font-mono text-2xl w-8">S</span>
                  <span className="opacity-40 group-hover:opacity-100 transition-opacity">System</span>
                </div>
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

      {/* Core Principles */}
      <section className="py-40 bg-background border-t border-border relative">
        <SectionDivider id="03" label="OPERATING PRINCIPLES" />
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border/50 border border-border/50 p-px mt-20 max-w-7xl mx-auto">
            {principles.map((principle, i) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card p-12 hover:bg-muted/10 transition-colors group relative overflow-hidden cursor-none"
              >
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="font-mono text-xs text-primary/50 mb-8">0{i+1}</div>
                <principle.icon className="w-12 h-12 text-muted-foreground group-hover:text-primary transition-colors duration-500 mb-8" />
                <h3 className="text-2xl font-serif font-bold text-foreground mb-4">{principle.title}</h3>
                <p className="text-muted-foreground font-sans leading-relaxed">{principle.desc}</p>
              </motion.div>
            ))}
            
            {/* Empty grid cell filler for layout balance if needed */}
            {principles.length % 3 !== 0 && (
              <div className="bg-card/50 p-12 hidden lg:flex items-center justify-center">
                <div className="w-8 h-[1px] bg-border" />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Timeline & Leadership */}
      <section className="py-40 bg-card border-t border-border relative">
        <SectionDivider id="04" label="TRAJECTORY & LEADERSHIP" />
        <div className="container mx-auto px-6 mt-20">
          <div className="grid lg:grid-cols-2 gap-24">
            {/* Timeline */}
            <div>
              <h2 className="text-3xl font-serif font-bold text-foreground mb-12">Evolution</h2>
              <div className="space-y-12 relative border-l border-primary/30 pl-8 ml-4">
                {milestones.map((ms, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="relative"
                  >
                    <div className="absolute -left-10 top-1.5 w-4 h-4 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                      <div className="w-1 h-1 bg-primary rounded-full" />
                    </div>
                    <div className="font-mono text-primary text-sm tracking-widest mb-2">{ms.year}</div>
                    <h3 className="text-xl font-serif font-bold text-foreground mb-2">{ms.title}</h3>
                    <p className="text-muted-foreground font-sans">{ms.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Leadership Philosophy */}
            <div>
              <h2 className="text-3xl font-serif font-bold text-foreground mb-12">Leadership Doctrine</h2>
              <div className="bg-background border border-border p-10 relative group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[radial-gradient(ellipse_at_top_right,rgba(255,91,110,0.15)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <HexagonIcon className="w-10 h-10 text-primary/50 mb-8" />
                <p className="text-lg text-muted-foreground font-sans leading-relaxed mb-8 italic">
                  "In a world where seeing is no longer believing, verification becomes the highest form of security. We are building the engine that restores objective reality to digital environments."
                </p>
                <div className="border-t border-border/50 pt-6">
                  <div className="font-mono text-sm text-foreground uppercase tracking-widest">AENS Executive Board</div>
                  <div className="font-sans text-xs text-muted-foreground mt-1">San Francisco, California</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-40 bg-background text-center border-t border-border relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(255,91,110,0.1)_0%,transparent_60%)]" />
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-5xl lg:text-7xl font-serif font-bold text-foreground mb-12">Deploy Elite Intelligence.</h2>
          <Link href="/contact">
            <Button data-testid="btn-contact-team" size="lg" className="rounded-none bg-primary text-primary-foreground hover:bg-primary/90 px-12 h-16 text-sm font-mono uppercase tracking-widest border border-primary hover:shadow-[0_0_30px_rgba(255,91,110,0.4)] transition-all">
              Contact Our Team
            </Button>
          </Link>
        </div>
      </section>
    </motion.main>
  );
}