import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SectionDivider, CrosshairOverlay } from "@/components/ui/SectionElements";
import { 
  CrosshairIcon, 
  ShieldNodeIcon, 
  NeuralDiagramIcon, 
  HexagonIcon, 
  ConcentricArcsIcon,
  OrbitalRingIcon,
  GridMatrixIcon
} from "@/components/icons";

export default function Solutions() {
  const solutions = [
    { 
      id: "deepfake-detection",
      title: "Deepfake Detection", 
      icon: ConcentricArcsIcon, 
      desc: "Identify synthetic media with 99.9% accuracy across all digital formats in real-time.",
      features: ["Pixel anomaly detection", "Audio frequency analysis", "Metadata tracing", "Sub-50ms latency"]
    },
    { 
      id: "enterprise-ai",
      title: "Enterprise AI Systems", 
      icon: GridMatrixIcon, 
      desc: "Deploy secure, air-gapped AI infrastructure designed for classified and corporate environments.",
      features: ["Air-gapped deployment", "On-premise execution", "Data sovereignty guarantees", "Custom model fine-tuning"]
    },
    { 
      id: "ai-agents",
      title: "AI Agents", 
      icon: OrbitalRingIcon, 
      desc: "Autonomous intelligence units that continuously monitor, analyze, and neutralize synthetic threats.",
      features: ["24/7 background monitoring", "Desktop and mobile clients", "Automated quarantine", "Behavioral analytics"]
    },
    { 
      id: "trust-infra",
      title: "Trust Infrastructure", 
      icon: ShieldNodeIcon, 
      desc: "The foundational layer for verifying digital authenticity at global enterprise scale.",
      features: ["Cryptographic watermarking", "Provenance tracking", "Blockchain verification", "API-first integration"]
    },
    { 
      id: "synthetic-intel",
      title: "Synthetic Media Intelligence", 
      icon: NeuralDiagramIcon, 
      desc: "Advanced forensic analysis of manipulated content to trace origin and generation methods.",
      features: ["Generator model identification", "Prompt reconstruction", "Threat actor profiling", "Forensic reporting"]
    },
    { 
      id: "security-auto",
      title: "Security Automation", 
      icon: HexagonIcon, 
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
      <section className="pt-40 pb-32 border-b border-border bg-card relative overflow-hidden">
        <CrosshairOverlay />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(208,24,227,0.1)_0%,transparent_50%)] pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-8 h-[1px] bg-primary" />
              <span className="text-primary uppercase tracking-[0.2em] font-mono text-[10px] font-medium">
                CAPABILITIES
              </span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-[6rem] font-serif font-bold text-foreground mb-8 leading-[1.05]"
            >
              Enterprise <br/>
              Intelligence Systems.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-2xl font-sans"
            >
              A comprehensive suite of synthetic media intelligence tools designed for the world's most demanding threat environments.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Solutions Detailed Grid */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="space-y-40">
            {solutions.map((sol, index) => (
              <motion.div 
                key={sol.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 lg:gap-24 items-center`}
              >
                <div className="w-full lg:w-5/12">
                  <div className="aspect-[4/5] bg-card border border-border flex flex-col items-center justify-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent,rgba(208,24,227,0.05),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                    
                    <div className="font-mono text-[10px] tracking-widest text-primary/50 absolute top-8 left-8 uppercase">
                      SYSTEM.0{index + 1}
                    </div>
                    
                    <sol.icon className="w-32 h-32 text-muted-foreground/30 group-hover:text-primary transition-colors duration-700" />
                    
                    <div className="absolute bottom-8 right-8 font-mono text-[10px] text-muted-foreground uppercase tracking-widest flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary/50 rounded-full group-hover:animate-pulse" />
                      SYS.{sol.id.replace('-', '_').toUpperCase()}
                    </div>
                  </div>
                </div>

                <div className="w-full lg:w-7/12 space-y-8">
                  <div className="font-mono text-xs text-primary mb-4 flex items-center gap-4">
                    <span>/ 0{index + 1}</span>
                    <div className="h-[1px] w-12 bg-primary/30" />
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">{sol.title}</h2>
                  
                  <p className="text-xl text-muted-foreground font-sans leading-relaxed py-4 border-b border-border/50">
                    {sol.desc}
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4 pt-4">
                    {sol.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-4 group cursor-default">
                        <CrosshairIcon className="w-4 h-4 text-primary/30 group-hover:text-primary transition-colors shrink-0" />
                        <span className="text-foreground font-sans text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="pt-10">
                    <Link href="/contact">
                      <Button data-testid={`btn-request-${sol.id}`} variant="outline" className="rounded-none border-border hover:bg-primary hover:text-primary-foreground hover:border-primary font-mono text-xs tracking-widest uppercase h-12 px-8 transition-all duration-300">
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

      {/* Capability Matrix Table */}
      <section className="py-32 bg-card relative border-t border-border">
        <SectionDivider id="02" label="INTEGRATION ECOSYSTEM" />
        <div className="container mx-auto px-6 mt-20">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-12 text-center">System Compatibilities</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-primary/30">
                    <th className="text-left font-mono text-[10px] text-muted-foreground uppercase tracking-widest p-4">Environment</th>
                    <th className="text-center font-mono text-[10px] text-primary uppercase tracking-widest p-4">API Ready</th>
                    <th className="text-center font-mono text-[10px] text-primary uppercase tracking-widest p-4">Air-Gapped</th>
                    <th className="text-center font-mono text-[10px] text-primary uppercase tracking-widest p-4">Real-Time</th>
                  </tr>
                </thead>
                <tbody className="font-sans text-sm">
                  <tr className="border-b border-border/50 hover:bg-muted/10 transition-colors group cursor-none">
                    <td className="p-4 text-foreground font-medium flex items-center gap-3">
                      <GridMatrixIcon className="w-4 h-4 text-muted-foreground group-hover:text-primary" /> SIEM / SOAR Platforms
                    </td>
                    <td className="p-4 text-center text-muted-foreground group-hover:text-primary">Yes</td>
                    <td className="p-4 text-center text-muted-foreground group-hover:text-primary">Yes</td>
                    <td className="p-4 text-center text-muted-foreground group-hover:text-primary">Yes</td>
                  </tr>
                  <tr className="border-b border-border/50 hover:bg-muted/10 transition-colors group cursor-none">
                    <td className="p-4 text-foreground font-medium flex items-center gap-3">
                      <OrbitalRingIcon className="w-4 h-4 text-muted-foreground group-hover:text-primary" /> Browser Extensions
                    </td>
                    <td className="p-4 text-center text-muted-foreground group-hover:text-primary">Yes</td>
                    <td className="p-4 text-center text-muted-foreground group-hover:text-primary">No</td>
                    <td className="p-4 text-center text-muted-foreground group-hover:text-primary">Yes</td>
                  </tr>
                  <tr className="border-b border-border/50 hover:bg-muted/10 transition-colors group cursor-none">
                    <td className="p-4 text-foreground font-medium flex items-center gap-3">
                      <ShieldNodeIcon className="w-4 h-4 text-muted-foreground group-hover:text-primary" /> Core Infrastructure (On-Prem)
                    </td>
                    <td className="p-4 text-center text-muted-foreground group-hover:text-primary">Yes</td>
                    <td className="p-4 text-center text-muted-foreground group-hover:text-primary">Yes</td>
                    <td className="p-4 text-center text-muted-foreground group-hover:text-primary">Batch</td>
                  </tr>
                  <tr className="border-b border-border/50 hover:bg-muted/10 transition-colors group cursor-none">
                    <td className="p-4 text-foreground font-medium flex items-center gap-3">
                      <ConcentricArcsIcon className="w-4 h-4 text-muted-foreground group-hover:text-primary" /> Mobile MDM Agents
                    </td>
                    <td className="p-4 text-center text-muted-foreground group-hover:text-primary">API Only</td>
                    <td className="p-4 text-center text-muted-foreground group-hover:text-primary">No</td>
                    <td className="p-4 text-center text-muted-foreground group-hover:text-primary">Yes</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-40 bg-background border-t border-border text-center relative overflow-hidden">
        <CrosshairOverlay />
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-5xl lg:text-6xl font-serif font-bold text-foreground mb-12">Architect Your Defense.</h2>
          <Link href="/contact">
            <Button data-testid="btn-strategy-call" size="lg" className="rounded-none bg-primary text-primary-foreground hover:bg-primary/90 px-12 h-16 text-sm font-mono uppercase tracking-widest border border-primary hover:shadow-[0_0_30px_rgba(208,24,227,0.4)] transition-all cursor-none">
              Book Strategy Call
            </Button>
          </Link>
        </div>
      </section>
    </motion.main>
  );
}