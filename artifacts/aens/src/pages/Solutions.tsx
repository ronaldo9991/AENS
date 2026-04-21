import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Eye, Server, Cpu, ShieldCheck, Network, Lock, Check } from "lucide-react";

export default function Solutions() {
  const solutions = [
    { 
      id: "deepfake-detection",
      title: "Deepfake Detection", 
      icon: Eye, 
      desc: "Identify synthetic media with 99.9% accuracy across all digital formats in real-time.",
      features: ["Pixel anomaly detection", "Audio frequency analysis", "Metadata tracing", "Sub-50ms latency"]
    },
    { 
      id: "enterprise-ai",
      title: "Enterprise AI Systems", 
      icon: Server, 
      desc: "Deploy secure, air-gapped AI infrastructure designed for classified and corporate environments.",
      features: ["Air-gapped deployment", "On-premise execution", "Data sovereignty guarantees", "Custom model fine-tuning"]
    },
    { 
      id: "ai-agents",
      title: "AI Agents", 
      icon: Cpu, 
      desc: "Autonomous intelligence units that continuously monitor, analyze, and neutralize synthetic threats.",
      features: ["24/7 background monitoring", "Desktop and mobile clients", "Automated quarantine", "Behavioral analytics"]
    },
    { 
      id: "trust-infra",
      title: "Trust Infrastructure", 
      icon: ShieldCheck, 
      desc: "The foundational layer for verifying digital authenticity at global enterprise scale.",
      features: ["Cryptographic watermarking", "Provenance tracking", "Blockchain verification", "API-first integration"]
    },
    { 
      id: "synthetic-intel",
      title: "Synthetic Media Intelligence", 
      icon: Network, 
      desc: "Advanced forensic analysis of manipulated content to trace origin and generation methods.",
      features: ["Generator model identification", "Prompt reconstruction", "Threat actor profiling", "Forensic reporting"]
    },
    { 
      id: "security-auto",
      title: "Security Automation", 
      icon: Lock, 
      desc: "Automated threat response protocols integrated directly into your existing security stack.",
      features: ["SIEM/SOAR integration", "Automated incident response", "Zero-trust policy enforcement", "Custom alert thresholds"]
    }
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(201,168,76,0.1)_0%,transparent_50%)]" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-accent uppercase tracking-widest font-mono text-sm font-medium mb-6 block"
          >
            Capabilities
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-serif font-bold text-foreground mb-8"
          >
            Enterprise Intelligence Systems
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            A comprehensive suite of synthetic media intelligence tools designed for the world's most demanding threat environments.
          </motion.p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="space-y-32">
            {solutions.map((sol, index) => (
              <motion.div 
                key={sol.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 items-center`}
              >
                <div className="w-full lg:w-1/2">
                  <div className="aspect-[4/3] bg-card border border-border flex items-center justify-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent,rgba(201,168,76,0.05),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                    <sol.icon className="w-24 h-24 text-accent/50 group-hover:text-accent transition-colors duration-500" />
                    <div className="absolute bottom-4 left-4 font-mono text-xs text-muted-foreground uppercase tracking-widest">
                      SYS.{sol.id.replace('-', '_').toUpperCase()}
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-1/2 space-y-8">
                  <div className="inline-flex items-center space-x-3 px-4 py-2 border border-border bg-muted/10">
                    <sol.icon className="w-4 h-4 text-accent" />
                    <span className="text-xs font-mono uppercase tracking-widest text-foreground font-medium">Capability 0{index + 1}</span>
                  </div>
                  <h2 className="text-4xl font-serif font-bold text-foreground">{sol.title}</h2>
                  <p className="text-lg text-muted-foreground font-sans leading-relaxed">
                    {sol.desc}
                  </p>
                  <ul className="space-y-4 pt-4">
                    {sol.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-4">
                        <div className="w-6 h-6 rounded-full border border-accent/50 flex items-center justify-center bg-accent/5 shrink-0">
                          <Check className="w-3 h-3 text-accent" />
                        </div>
                        <span className="text-foreground font-sans">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-6">
                    <Link href="/contact">
                      <Button variant="outline" className="rounded-none border-border hover:bg-accent hover:text-accent-foreground hover:border-accent">
                        Request Deployment
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-muted/10 border-t border-border text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-8">Architect Your Defense</h2>
          <Link href="/contact">
            <Button size="lg" className="rounded-none bg-accent text-accent-foreground hover:bg-accent/90 px-12 h-14 text-lg">
              Book Strategy Call
            </Button>
          </Link>
        </div>
      </section>
    </motion.main>
  );
}
