import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Crosshair, Cpu, CheckCircle2, Shield, Network } from "lucide-react";

export default function About() {
  const principles = [
    { title: "Precision", icon: Crosshair, desc: "We operate with surgical accuracy. False positives are unacceptable. False negatives are catastrophic." },
    { title: "Security", icon: Shield, desc: "Our infrastructure is designed for the world's most sensitive environments. Zero trust by default." },
    { title: "Intelligence", icon: Cpu, desc: "We build adaptive neural networks that evolve faster than the synthetic threats they hunt." },
    { title: "Execution", icon: CheckCircle2, desc: "Ideas don't secure enterprises. Flawless execution and sub-50ms latency do." },
    { title: "Trust", icon: ShieldCheck, desc: "We are the definitive layer of truth in an era of infinite synthetic generation." }
  ];

  return (
    <motion.main 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="w-full flex flex-col bg-background"
    >
      {/* Hero */}
      <section className="pt-40 pb-20 border-b border-border bg-card relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,168,76,0.1)_0%,transparent_50%)]" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-accent uppercase tracking-widest font-mono text-sm font-medium"
            >
              The Organization
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-8xl font-serif font-bold text-foreground leading-[1.1]"
            >
              About AENS
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-muted-foreground font-sans leading-relaxed max-w-3xl mx-auto"
            >
              We are the architects of trust in the generative AI era. Our mission is to protect enterprise integrity through uncompromised synthetic media intelligence.
            </motion.p>
          </div>
        </div>
      </section>

      {/* What AENS Means */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="font-serif text-3xl md:text-4xl font-bold leading-tight text-foreground border-l-4 border-accent pl-8 py-4"
            >
              Artificial <br/>
              Intelligence <br/>
              Enterprise <br/>
              Nervous <br/>
              System.
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6 text-lg text-muted-foreground font-sans"
            >
              <p>
                As generative AI commoditizes the creation of hyper-realistic video, audio, and documents, the foundational concept of digital truth is fracturing. Enterprises face a paradigm where any digital artifact can be seamlessly spoofed.
              </p>
              <p>
                AENS was forged to be the definitive countermeasure. We build intelligence systems that act as an enterprise's nervous system—feeling, analyzing, and verifying every piece of digital input before it reaches the brain.
              </p>
              <p className="text-foreground font-medium pt-4">
                We do not build generative models. We build the architecture that holds them accountable.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-32 bg-muted/10 border-y border-border">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-serif font-bold text-foreground">Core Principles</h2>
            <div className="w-16 h-1 bg-accent mx-auto mt-6" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {principles.map((principle, i) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border p-10 hover:border-accent/50 transition-colors"
              >
                <principle.icon className="w-10 h-10 text-accent mb-6" />
                <h3 className="text-xl font-serif font-bold text-foreground mb-4">{principle.title}</h3>
                <p className="text-muted-foreground font-sans">{principle.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-card text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-8">Deploy Elite Intelligence</h2>
          <Link href="/contact">
            <Button size="lg" className="rounded-none bg-accent text-accent-foreground hover:bg-accent/90 px-12 h-14 text-lg">
              Contact Our Team
            </Button>
          </Link>
        </div>
      </section>
    </motion.main>
  );
}
