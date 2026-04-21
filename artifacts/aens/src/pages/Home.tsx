import { motion, useInView } from "framer-motion";
import { ArrowRight, ShieldCheck, Cpu, Smartphone, Eye, Network, MonitorPlay, Zap, Lock, Globe, Server } from "lucide-react";
import { NeuralNetwork } from "@/components/ui/NeuralNetwork";
import { Button } from "@/components/ui/button";
import { useRef, useEffect, useState } from "react";
import { Link } from "wouter";

const Counter = ({ end, label, suffix = "" }: { end: number, label: string, suffix?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000; // 2s
      const increment = end / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, end]);

  return (
    <div ref={ref} className="text-center p-8 bg-card border border-border shadow-sm">
      <div className="text-5xl md:text-6xl font-serif font-bold text-accent mb-2">
        {count}{suffix}
      </div>
      <div className="font-mono text-sm tracking-widest text-muted-foreground uppercase">{label}</div>
    </div>
  );
};

export default function Home() {
  const capabilities = [
    "Image Analysis",
    "Audio Analysis",
    "Video Analysis",
    "File Intelligence",
    "Enterprise AI",
    "Deepfake Detection",
    "Synthetic Media",
    "Trust Infrastructure",
  ];

  const solutions = [
    { title: "Deepfake Detection", icon: Eye, desc: "Identify synthetic media with 99.9% accuracy across all digital formats in real-time." },
    { title: "Enterprise AI Systems", icon: Server, desc: "Deploy secure, air-gapped AI infrastructure designed for classified and corporate environments." },
    { title: "AI Agents", icon: Cpu, desc: "Autonomous intelligence units that continuously monitor, analyze, and neutralize synthetic threats." },
    { title: "Trust Infrastructure", icon: ShieldCheck, desc: "The foundational layer for verifying digital authenticity at global enterprise scale." },
    { title: "Synthetic Media Intelligence", icon: Network, desc: "Advanced forensic analysis of manipulated content to trace origin and generation methods." },
    { title: "Security Automation", icon: Lock, desc: "Automated threat response protocols integrated directly into your existing security stack." }
  ];

  const whyAens = [
    { title: "Precision Engineering", icon: Zap },
    { title: "Multi-modal Intelligence", icon: Network },
    { title: "Enterprise Grade Security", icon: ShieldCheck },
    { title: "Fast Deployment", icon: ArrowRight },
    { title: "Cross Device Agents", icon: Smartphone },
    { title: "Desktop + Mobile Monitoring", icon: MonitorPlay }
  ];

  return (
    <motion.main 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="w-full flex flex-col bg-background"
    >
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
        <NeuralNetwork />
        
        <div className="container mx-auto px-6 z-10 pt-32">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-accent uppercase tracking-[0.2em] font-mono text-sm font-medium mb-6 block">
                Artificial Intelligence Enterprise Nervous System
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-foreground leading-[1.1] tracking-tight">
                The Enterprise <br />
                <span className="text-muted-foreground/80 font-normal italic">Nervous System</span> <br />
                for the AI Era.
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto font-sans leading-relaxed"
            >
              We build elite intelligence systems that detect synthetic threats, 
              analyze trust risks, and power enterprise infrastructure in real-time.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8"
            >
              <Link href="/solutions">
                <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-base font-medium rounded-none bg-accent text-accent-foreground hover:bg-accent/90 border-transparent">
                  Explore AENS
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-base font-medium rounded-none border-border hover:bg-muted text-foreground">
                  Contact Us
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        >
          <span className="text-xs uppercase tracking-widest font-mono text-muted-foreground">Scroll</span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-accent to-transparent" />
        </motion.div>
      </section>

      {/* 2. TRUST CAPABILITY STRIP */}
      <div className="w-full overflow-hidden border-y border-border/50 py-6 bg-muted/20 relative z-20">
        <div className="flex w-max animate-[scroll_40s_linear_infinite] opacity-80">
          {[...capabilities, ...capabilities, ...capabilities].map((cap, i) => (
            <div key={i} className="flex items-center space-x-12 px-12">
              <span className="text-sm font-mono uppercase tracking-[0.15em] whitespace-nowrap text-foreground/70">
                {cap}
              </span>
              <span className="w-2 h-2 rounded-full bg-accent/50" />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-100% / 3)); }
        }
      `}</style>

      {/* 3. FLAGSHIP PRODUCT SECTION */}
      <section className="py-32 relative bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center space-x-3 px-4 py-2 border border-accent/30 bg-accent/5">
                <ShieldCheck className="w-5 h-5 text-accent" />
                <span className="text-sm font-mono uppercase tracking-widest text-accent font-medium">Flagship Intelligence</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground leading-[1.1]">
                Deepfake Detection & <br/>
                Synthetic Media Intelligence
              </h2>
              
              <p className="text-lg text-muted-foreground font-sans leading-relaxed">
                Our proprietary neural architecture analyzes pixel matrices, audio frequencies, and file metadata simultaneously. In milliseconds, it determines whether media is organic or synthetic.
              </p>
              
              <ul className="space-y-6 pt-4 font-sans">
                {[
                  { title: "Real-time Processing", desc: "Sub-50ms latency for streaming video analysis." },
                  { title: "Multi-modal Neural Nets", desc: "Simultaneous cross-referencing of image, audio, and metadata vectors." },
                  { title: "Zero-day Threat Detection", desc: "Identifies previously unseen generative models based on artifact signatures." }
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0" />
                    <div>
                      <h4 className="text-foreground font-medium mb-1">{feature.title}</h4>
                      <p className="text-muted-foreground text-sm">{feature.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            {/* Right UI Mockup */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square bg-card border border-border shadow-2xl overflow-hidden p-6 flex flex-col group"
            >
              {/* Glass Header */}
              <div className="flex justify-between items-center pb-6 border-b border-border/50 mb-6">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-muted-foreground/30" />
                  <div className="w-3 h-3 rounded-full bg-muted-foreground/30" />
                  <div className="w-3 h-3 rounded-full bg-muted-foreground/30" />
                </div>
                <div className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
                  Terminal.SYS // Scan.Active
                </div>
              </div>

              {/* Main Scanning Area */}
              <div className="flex-1 relative border border-border/50 bg-background/50 overflow-hidden mb-6 flex items-center justify-center">
                {/* CSS Animated Scanning Lines */}
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(201,168,76,0.1),transparent)] w-full h-full var(--animate-scan)" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,168,76,0.1)_0%,transparent_70%)]" />
                
                {/* Mock Image Content */}
                <div className="w-3/4 h-3/4 border border-accent/20 bg-muted/10 relative p-4 flex flex-col justify-between">
                  <div className="flex justify-between">
                    <div className="w-8 h-8 border-t border-l border-accent/50" />
                    <div className="w-8 h-8 border-t border-r border-accent/50" />
                  </div>
                  <div className="flex justify-center items-center">
                    <div className="w-16 h-16 rounded-full border border-accent/30 flex items-center justify-center var(--animate-pulse-slow)">
                      <Eye className="text-accent w-6 h-6 opacity-80" />
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div className="w-8 h-8 border-b border-l border-accent/50" />
                    <div className="w-8 h-8 border-b border-r border-accent/50" />
                  </div>
                </div>
              </div>

              {/* Data Readout */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-muted/10 border border-border/50 p-4">
                  <div className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-2">Confidence</div>
                  <div className="text-3xl font-serif text-accent flex items-baseline gap-1">
                    99.8<span className="text-base">%</span>
                  </div>
                </div>
                <div className="bg-muted/10 border border-border/50 p-4">
                  <div className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-2">Status</div>
                  <div className="text-destructive font-mono text-sm tracking-widest uppercase flex items-center gap-2 mt-3">
                    <div className="w-2 h-2 rounded-full bg-destructive animate-pulse" />
                    Synthetic Detected
                  </div>
                </div>
              </div>
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* 4. CORE SOLUTIONS */}
      <section className="py-32 bg-muted/5 relative">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-accent uppercase tracking-widest font-mono text-sm mb-4 block">Core Solutions</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
              Comprehensive Enterprise Defense
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((sol, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group p-8 bg-card border border-border hover:border-accent/50 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <sol.icon className="w-10 h-10 text-muted-foreground group-hover:text-accent transition-colors duration-500 mb-6" />
                <h3 className="text-xl font-serif font-bold text-foreground mb-4">{sol.title}</h3>
                <p className="text-muted-foreground font-sans text-sm leading-relaxed relative z-10">{sol.desc}</p>
                
                <div className="mt-8 flex items-center text-accent text-sm font-mono uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  Explore <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHY AENS SECTION */}
      <section className="py-32 bg-background border-y border-border">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square w-full bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.15)_0%,transparent_70%)] flex items-center justify-center"
            >
              <div className="absolute inset-0 flex flex-wrap gap-4 items-center justify-center p-8">
                {whyAens.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="flex flex-col items-center justify-center p-6 bg-card border border-border/50 shadow-lg w-1/3 min-w-[140px] aspect-square rounded-full backdrop-blur-sm"
                  >
                    <item.icon className="w-8 h-8 text-accent mb-3" />
                    <span className="text-xs font-mono uppercase tracking-wider text-center text-muted-foreground">{item.title}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
                The Anatomy of Trust
              </h2>
              <p className="text-lg text-muted-foreground font-sans leading-relaxed">
                AENS is not just software. It is an enterprise nervous system that continuously monitors, evaluates, and verifies every digital asset entering your ecosystem.
              </p>
              <p className="text-lg text-muted-foreground font-sans leading-relaxed">
                Built on proprietary zero-trust architectures, our systems ensure that when you see, hear, or read something — you know it's real.
              </p>
              <Link href="/about">
                <Button variant="outline" className="mt-4 rounded-none border-border hover:bg-accent hover:text-accent-foreground hover:border-accent transition-colors">
                  Our Story
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. DEVICE EXPERIENCE SECTION */}
      <section className="py-32 bg-card relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent,rgba(201,168,76,0.03),transparent)]" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              Omnipresent Intelligence
            </h2>
            <p className="text-xl text-muted-foreground font-sans">
              Our intelligent agents run stealthily on PC and mobile devices to detect deepfake files and suspicious media in real time, before they penetrate the enterprise.
            </p>
          </motion.div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-12 mt-16">
             <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="w-full md:w-1/3 aspect-[9/16] max-w-[300px] border-4 border-border rounded-[2rem] bg-background p-2 relative shadow-2xl overflow-hidden group"
             >
               <div className="absolute inset-x-0 top-0 h-6 bg-border rounded-t-xl" />
               <div className="w-full h-full border border-border/50 bg-card rounded-xl relative overflow-hidden flex flex-col pt-8">
                  <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(201,168,76,0.1),transparent)] var(--animate-scan)" />
                  <div className="flex-1 p-4 flex flex-col gap-4">
                    <div className="h-20 bg-muted/20 rounded border border-border/50 flex items-center justify-center"><Smartphone className="text-muted-foreground/50"/></div>
                    <div className="h-20 bg-muted/20 rounded border border-border/50 flex items-center justify-center"><Eye className="text-accent"/></div>
                  </div>
               </div>
             </motion.div>

             <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-full md:w-2/3 aspect-video max-w-[800px] border-4 border-border rounded-lg bg-background p-2 relative shadow-2xl overflow-hidden group z-10"
             >
               <div className="w-full h-full border border-border/50 bg-card relative overflow-hidden flex flex-col">
                  <div className="h-8 border-b border-border/50 bg-muted/10 flex items-center px-4 space-x-2">
                    <div className="w-2 h-2 rounded-full bg-border" />
                    <div className="w-2 h-2 rounded-full bg-border" />
                    <div className="w-2 h-2 rounded-full bg-border" />
                  </div>
                  <div className="flex-1 relative flex">
                    <div className="w-64 border-r border-border/50 bg-muted/5 p-4 space-y-4">
                      <div className="h-8 bg-muted/20 rounded" />
                      <div className="h-8 bg-muted/20 rounded" />
                      <div className="h-8 bg-accent/10 border border-accent/30 rounded" />
                    </div>
                    <div className="flex-1 relative bg-background/50 overflow-hidden">
                      <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent,rgba(201,168,76,0.1),transparent)] var(--animate-scan) rotate-90" />
                      <div className="p-8 h-full flex flex-col justify-center items-center">
                        <div className="w-48 h-48 rounded-full border border-accent/20 flex items-center justify-center var(--animate-pulse-slow)">
                          <Network className="text-accent w-12 h-12 opacity-80" />
                        </div>
                      </div>
                    </div>
                  </div>
               </div>
               <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-1 bg-accent/50 blur-sm" />
             </motion.div>
          </div>
        </div>
      </section>

      {/* 7. STATS SECTION */}
      <section className="py-24 bg-background border-y border-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <Counter end={4} label="Media Types Analyzed" />
            <Counter end={24} label="Hour Detection" suffix="/7" />
            <Counter end={50} label="Ms Processing Latency" suffix="<" />
            <Counter end={99.9} label="Detection Accuracy" suffix="%" />
          </div>
        </div>
      </section>

      {/* 8. CTA SECTION */}
      <section className="py-32 relative bg-card overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,168,76,0.15)_0%,transparent_70%)]" />
        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <ShieldCheck className="w-16 h-16 text-accent mx-auto mb-8" />
            <h2 className="text-5xl md:text-7xl font-serif font-bold text-foreground mb-8">
              Ready to Build Trust <br/> in the AI Era?
            </h2>
            <p className="text-xl text-muted-foreground font-sans mb-12 max-w-2xl mx-auto">
              Equip your enterprise with the world's most advanced synthetic media intelligence platform.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/contact">
                <Button size="lg" className="w-full sm:w-auto h-16 px-10 text-lg font-medium rounded-none bg-accent text-accent-foreground hover:bg-accent/90 border-transparent shadow-[0_0_30px_rgba(201,168,76,0.3)]">
                  Contact AENS
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="w-full sm:w-auto h-16 px-10 text-lg font-medium rounded-none border-border hover:bg-muted text-foreground">
                  Book Strategy Call
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </motion.main>
  );
}
