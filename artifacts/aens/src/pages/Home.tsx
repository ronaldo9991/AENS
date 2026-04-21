import { motion, useInView } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { NeuralNetwork } from "@/components/ui/NeuralNetwork";
import { CrosshairOverlay, SectionDivider } from "@/components/ui/SectionElements";
import { 
  HexagonIcon, 
  ConcentricArcsIcon, 
  CrosshairIcon, 
  OrbitalRingIcon, 
  NeuralDiagramIcon, 
  ShieldNodeIcon, 
  GridMatrixIcon 
} from "@/components/icons";
import { useRef, useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";
import robotHero from "@/assets/robot-hero.png";

const RobotHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / rect.width;
      const dy = (e.clientY - cy) / rect.height;
      setTilt({ x: dx * 8, y: -dy * 8 });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full max-w-[640px] aspect-square relative mx-auto mt-12 md:mt-0"
      data-testid="hero-robot"
    >
      {/* radial coral glow behind robot */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,91,110,0.35)_0%,rgba(232,52,74,0.12)_35%,transparent_70%)] blur-2xl" />

      {/* concentric pulsing rings */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute inset-0 rounded-full border border-primary/20"
          initial={{ scale: 0.6, opacity: 0.6 }}
          animate={{ scale: 1.15, opacity: 0 }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeOut",
            delay: i * 1.3,
          }}
        />
      ))}

      {/* outer rotating ring */}
      <motion.div
        className="absolute inset-[-4%] rounded-full border border-dashed border-primary/25"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary shadow-[0_0_12px_rgba(255,91,110,1)]" />
        <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 rounded-full bg-primary shadow-[0_0_12px_rgba(255,91,110,1)]" />
        <div className="absolute -bottom-1 left-1/3 w-1.5 h-1.5 rounded-full bg-primary/70" />
      </motion.div>

      {/* inner counter-rotating ring */}
      <motion.div
        className="absolute inset-[8%] rounded-full border border-primary/15"
        animate={{ rotate: -360 }}
        transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
      />

      {/* robot image with mouse parallax tilt + breathing */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          transform: `perspective(1200px) rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
          transition: "transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        <motion.img
          src={robotHero}
          alt="AENS Sentinel — autonomous trust intelligence agent"
          className="relative z-10 w-[88%] h-[88%] object-contain drop-shadow-[0_30px_60px_rgba(255,91,110,0.35)]"
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          data-testid="img-robot-hero"
        />
      </motion.div>

      {/* scan line sweep */}
      <div className="absolute inset-0 overflow-hidden rounded-full pointer-events-none">
        <motion.div
          className="absolute left-0 right-0 h-24 bg-gradient-to-b from-transparent via-primary/30 to-transparent mix-blend-screen"
          initial={{ y: "-20%" }}
          animate={{ y: "120%" }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "linear", repeatDelay: 1.2 }}
        />
      </div>

      {/* corner crosshair markers */}
      {[
        { top: "0", left: "0", rot: 0 },
        { top: "0", right: "0", rot: 90 },
        { bottom: "0", right: "0", rot: 180 },
        { bottom: "0", left: "0", rot: 270 },
      ].map((p, i) => (
        <div
          key={i}
          className="absolute w-6 h-6 pointer-events-none"
          style={{ ...p, transform: `rotate(${p.rot}deg)` }}
        >
          <div className="absolute top-0 left-0 w-full h-px bg-primary/60" />
          <div className="absolute top-0 left-0 h-full w-px bg-primary/60" />
        </div>
      ))}

      {/* floating HUD card — TRUST SCORE */}
      <motion.div
        className="absolute top-[8%] -left-4 md:-left-12 backdrop-blur-md bg-card/70 border border-primary/30 rounded-lg px-4 py-3 shadow-[0_0_20px_rgba(255,91,110,0.15)]"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0, y: [0, -6, 0] }}
        transition={{ opacity: { delay: 1, duration: 0.8 }, x: { delay: 1, duration: 0.8 }, y: { duration: 4, repeat: Infinity, ease: "easeInOut" } }}
        data-testid="hud-trust-score"
      >
        <div className="text-[10px] font-mono text-muted-foreground tracking-widest uppercase mb-1">Trust Score</div>
        <div className="text-2xl font-mono font-semibold text-foreground tabular-nums">
          98<span className="text-primary">.7</span>%
        </div>
        <div className="text-[10px] font-mono text-primary/80 mt-1 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" /> NOMINAL
        </div>
      </motion.div>

      {/* floating HUD card — DEEPFAKE PROBABILITY */}
      <motion.div
        className="absolute top-[42%] -right-4 md:-right-16 backdrop-blur-md bg-card/70 border border-primary/30 rounded-lg px-4 py-3 shadow-[0_0_20px_rgba(255,91,110,0.15)]"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1.4, duration: 0.8 }, x: { delay: 1.4, duration: 0.8 }, y: { duration: 5, repeat: Infinity, ease: "easeInOut" } }}
        data-testid="hud-deepfake"
      >
        <div className="text-[10px] font-mono text-muted-foreground tracking-widest uppercase mb-1">Deepfake P</div>
        <div className="text-2xl font-mono font-semibold text-foreground tabular-nums">
          0<span className="text-primary">.02</span>
        </div>
        <div className="text-[10px] font-mono text-muted-foreground mt-1">SCAN: ACTIVE</div>
      </motion.div>

      {/* floating HUD card — NEURAL NODES */}
      <motion.div
        className="absolute bottom-[10%] -left-2 md:-left-20 backdrop-blur-md bg-card/70 border border-primary/30 rounded-lg px-4 py-3 shadow-[0_0_20px_rgba(255,91,110,0.15)]"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: [0, -5, 0] }}
        transition={{ opacity: { delay: 1.8, duration: 0.8 }, y: { duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.8 } }}
        data-testid="hud-nodes"
      >
        <div className="text-[10px] font-mono text-muted-foreground tracking-widest uppercase mb-1">Neural Nodes</div>
        <div className="text-xl font-mono font-semibold text-foreground tabular-nums">
          4,892,<span className="text-primary">103</span>
        </div>
        <div className="flex gap-0.5 mt-1.5">
          {[...Array(12)].map((_, i) => (
            <motion.span
              key={i}
              className="w-1 h-3 bg-primary/40 rounded-sm"
              animate={{ opacity: [0.2, 1, 0.2], scaleY: [0.5, 1, 0.5] }}
              transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.08 }}
            />
          ))}
        </div>
      </motion.div>

      {/* small orbital data nodes */}
      {[0, 72, 144, 216, 288].map((deg, i) => (
        <motion.div
          key={i}
          className="absolute top-1/2 left-1/2 w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_10px_rgba(255,91,110,0.9)]"
          style={{ transformOrigin: "0 0" }}
          animate={{ rotate: [deg, deg + 360] }}
          transition={{ duration: 30 + i * 4, repeat: Infinity, ease: "linear" }}
        >
          <div style={{ transform: "translate(220px, -3px)" }} className="w-1.5 h-1.5 rounded-full bg-primary" />
        </motion.div>
      ))}
    </div>
  );
};

const Counter = ({ end, label, suffix = "", prefix = "" }: { end: number, label: string, suffix?: string, prefix?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
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

  const displayCount = end % 1 !== 0 && count === Math.floor(end) 
    ? end.toFixed(1) 
    : count;

  return (
    <div ref={ref} className="text-left py-8 border-t border-border relative group">
      <div className="absolute top-0 left-0 w-0 h-[1px] bg-primary group-hover:w-full transition-all duration-700" />
      <div className="text-6xl md:text-7xl font-serif font-bold text-foreground mb-4 flex items-baseline">
        <span className="text-3xl text-primary/70 font-mono mr-1">{prefix}</span>
        {displayCount}
        <span className="text-3xl text-primary/70 font-mono ml-1">{suffix}</span>
      </div>
      <div className="font-mono text-xs tracking-widest text-muted-foreground uppercase flex items-center gap-4">
        <div className="w-4 h-[1px] bg-primary/50" />
        {label}
      </div>
    </div>
  );
};

export default function Home() {
  const capabilities = [
    { title: "Image Analysis", desc: "Pixel matrix anomalies", icon: HexagonIcon },
    { title: "Audio Forensics", desc: "Frequency wave mapping", icon: ConcentricArcsIcon },
    { title: "Video Intelligence", desc: "Frame-by-frame tracing", icon: OrbitalRingIcon },
    { title: "File Metadata", desc: "Exif & provenance parsing", icon: GridMatrixIcon },
    { title: "Network Monitoring", desc: "Real-time stream analysis", icon: NeuralDiagramIcon },
    { title: "Agentic Quarantine", desc: "Autonomous threat isolation", icon: ShieldNodeIcon },
    { title: "Threat Profiling", desc: "Actor signature matching", icon: CrosshairIcon },
    { title: "Zero-Trust Integration", desc: "API & webhook triggers", icon: GridMatrixIcon },
  ];

  const solutions = [
    { num: "01", title: "Deepfake Detection", desc: "Identify synthetic media with 99.9% accuracy.", icon: ConcentricArcsIcon },
    { num: "02", title: "Enterprise AI Systems", desc: "Secure, air-gapped AI infrastructure.", icon: GridMatrixIcon },
    { num: "03", title: "AI Agents", desc: "Autonomous units monitoring 24/7.", icon: OrbitalRingIcon },
    { num: "04", title: "Trust Infrastructure", desc: "Foundational layer for digital authenticity.", icon: ShieldNodeIcon },
    { num: "05", title: "Synthetic Media Intel", desc: "Forensic analysis to trace generation methods.", icon: NeuralDiagramIcon },
    { num: "06", title: "Security Automation", desc: "Automated threat response protocols.", icon: HexagonIcon }
  ];

  const whyAens = [
    { num: "01", title: "Precision First", desc: "False positives are unacceptable. Sub-50ms latency." },
    { num: "02", title: "Air-Gapped Ready", desc: "Deployed directly into classified enterprise environments." },
    { num: "03", title: "Multi-Modal", desc: "Simultaneous analysis across video, audio, and metadata." },
  ];

  const sectors = ["Defense", "Finance", "Global Media", "Government", "Critical Infrastructure"];

  return (
    <motion.main 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="w-full flex flex-col bg-background"
    >
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden border-b border-border/50">
        <CrosshairOverlay />
        <NeuralNetwork />
        
        <div className="container mx-auto px-6 z-10 pt-32 lg:pt-20">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-8 relative z-20">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex items-center gap-4"
              >
                <div className="w-12 h-[1px] bg-primary" />
                <span className="text-primary uppercase tracking-[0.2em] font-mono text-[10px] font-medium">
                  ARTIFICIAL INTELLIGENCE / TRUST INFRASTRUCTURE / v.04
                </span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold text-foreground leading-[1.05] tracking-tight uppercase"
              >
                <span className="font-sans block mb-2">Intelligence</span>
                <span className="font-serif italic font-normal text-muted-foreground block mb-2 lowercase text-4xl md:text-6xl">built for</span>
                <span className="font-sans block text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-primary/80">Trust.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-xl md:text-2xl text-muted-foreground max-w-xl font-sans leading-relaxed border-l border-primary/30 pl-6 py-2"
              >
                We build elite intelligence systems that detect synthetic threats, analyze trust risks, and power enterprise infrastructure in real-time.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col sm:flex-row items-center gap-6 pt-8"
              >
                <Link href="/solutions">
                  <Button data-testid="btn-deploy-hero" size="lg" className="w-full sm:w-auto h-14 px-8 text-sm font-mono uppercase tracking-widest rounded-none bg-primary text-primary-foreground hover:bg-primary/90 border border-primary hover:shadow-[0_0_30px_rgba(255,91,110,0.5)] transition-all duration-300 relative group overflow-hidden">
                    <span className="relative z-10">Deploy AENS</span>
                    <div className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out z-0" />
                  </Button>
                </Link>
                <Link href="/about">
                  <Button data-testid="btn-demo-hero" size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-sm font-mono uppercase tracking-widest rounded-none border-border hover:border-primary hover:bg-primary/5 text-foreground transition-all duration-300 group">
                    Watch Demo <ChevronRight className="ml-2 w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </motion.div>
            </div>

            <div className="lg:col-span-5 relative lg:h-[800px] flex flex-col justify-center perspective-[1000px]">
              <motion.div
                className="relative w-full h-full var(--animate-float) transition-transform duration-500 hover:[transform:rotateY(-5deg)_rotateX(5deg)]"
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-primary/20 blur-[100px] rounded-full mix-blend-screen pointer-events-none" />
                
                <RobotHero />

                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="absolute top-1/4 -left-12 bg-card/80 backdrop-blur-md border border-primary/30 p-4 flex flex-col gap-1 shadow-2xl z-30 pointer-events-none"
                >
                  <span className="text-[9px] font-mono text-muted-foreground tracking-widest uppercase">Trust Score</span>
                  <span className="text-primary font-mono text-xl font-bold">98.7%</span>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                  className="absolute bottom-1/3 -right-8 bg-card/80 backdrop-blur-md border border-primary/30 p-4 flex flex-col gap-1 shadow-2xl z-30 pointer-events-none"
                >
                  <span className="text-[9px] font-mono text-muted-foreground tracking-widest uppercase">Deepfake Prob</span>
                  <span className="text-primary font-mono text-xl font-bold">0.02%</span>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.4, duration: 0.5 }}
                  className="absolute top-1/2 left-10 bg-primary text-primary-foreground px-3 py-2 flex items-center gap-3 z-30 pointer-events-none shadow-[0_0_20px_rgba(255,91,110,0.4)]"
                >
                  <div className="w-2 h-2 bg-background rounded-full animate-pulse" />
                  <span className="text-[10px] font-mono tracking-widest uppercase font-bold">Scan Active</span>
                </motion.div>
              </motion.div>
            </div>
            
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-10 border-t border-border bg-background/80 backdrop-blur-md flex items-center px-6 overflow-hidden">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse mr-4 shrink-0" />
          <div className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground flex w-max animate-[scroll_30s_linear_infinite]">
            <span className="mr-8">LIVE — 4 media types actively monitored</span>
            <span className="mr-8 text-primary">•</span>
            <span className="mr-8">24/7 global detection grid online</span>
            <span className="mr-8 text-primary">•</span>
            <span className="mr-8">4,892,103 neural nodes processed today</span>
            <span className="mr-8 text-primary">•</span>
            <span className="mr-8">LIVE — 4 media types actively monitored</span>
            <span className="mr-8 text-primary">•</span>
            <span className="mr-8">24/7 global detection grid online</span>
            <span className="mr-8 text-primary">•</span>
            <span className="mr-8">4,892,103 neural nodes processed today</span>
          </div>
        </div>
      </section>

      {/* 2. CAPABILITY MATRIX */}
      <section className="py-32 bg-card relative">
        <SectionDivider id="01" label="CAPABILITY MATRIX" />
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border/50 border border-border/50 p-px">
            {capabilities.map((cap, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-background p-8 group hover:bg-muted/10 transition-colors relative overflow-hidden cursor-none"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-primary/20 group-hover:bg-primary group-hover:animate-pulse transition-colors" />
                
                <cap.icon className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors duration-500 mb-8" />
                <h3 className="text-sm font-mono uppercase tracking-widest text-foreground mb-2">{cap.title}</h3>
                <p className="text-xs text-muted-foreground">{cap.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FLAGSHIP PRODUCT SECTION */}
      <section className="py-32 relative bg-background border-t border-border">
        <SectionDivider id="02" label="FLAGSHIP SYSTEMS" />
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-[1.1]">
                Deepfake Detection & <br/>
                Synthetic Intelligence
              </h2>
              
              <p className="text-xl text-muted-foreground font-sans leading-relaxed border-l-2 border-primary pl-6">
                Our proprietary neural architecture analyzes pixel matrices, audio frequencies, and file metadata simultaneously. In milliseconds, it determines whether media is organic or synthetic.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-8 pt-8">
                {[
                  { title: "Real-time Processing", desc: "Sub-50ms latency for live streaming video analysis.", num: "01" },
                  { title: "Multi-modal Nets", desc: "Simultaneous cross-referencing of image and audio vectors.", num: "02" },
                  { title: "Zero-day Threats", desc: "Identifies previously unseen generative models instantly.", num: "03" },
                  { title: "Forensic Tracing", desc: "Traces manipulated content back to generation methods.", num: "04" }
                ].map((feature, i) => (
                  <div key={i} className="relative pl-8 group">
                    <div className="absolute left-0 top-1 text-[10px] font-mono text-primary/50 group-hover:text-primary transition-colors">{feature.num}</div>
                    <h4 className="text-foreground font-mono uppercase tracking-widest text-xs mb-2">{feature.title}</h4>
                    <p className="text-muted-foreground text-sm">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative w-full aspect-square bg-card border border-border shadow-2xl p-1 flex flex-col"
            >
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,91,110,0.05)_0%,transparent_100%)] pointer-events-none" />
              
              <div className="h-10 flex items-center justify-between px-4 border-b border-border/50 bg-background/50">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 rounded-full bg-border" />
                  <div className="w-2 h-2 rounded-full bg-border" />
                  <div className="w-2 h-2 rounded-full bg-border" />
                </div>
                <div className="font-mono text-[9px] text-muted-foreground uppercase tracking-widest">
                  AENS_TERMINAL // SCAN_MODULE
                </div>
              </div>

              <div className="flex-1 flex flex-col p-6 gap-6 relative">
                <div className="flex gap-4 border-b border-border/50 pb-4">
                  {['IMAGE', 'AUDIO', 'VIDEO', 'FILE'].map((tab, i) => (
                    <div key={tab} className={`text-[10px] font-mono tracking-widest uppercase pb-4 -mb-4 ${i === 0 ? 'text-primary border-b border-primary' : 'text-muted-foreground'}`}>
                      {tab}
                    </div>
                  ))}
                </div>

                <div className="flex-1 border border-border/50 bg-background/50 relative overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(255,91,110,0.1),transparent)] h-[200%] var(--animate-scan)" />
                  <GridMatrixIcon className="w-32 h-32 text-border absolute opacity-50" />
                  
                  <div className="relative z-10 w-48 h-48 border border-primary/30 flex items-center justify-center bg-card/80 backdrop-blur-sm group">
                    <div className="absolute inset-0 border border-primary scale-110 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500" />
                    <CrosshairIcon className="text-primary w-12 h-12" />
                    <div className="absolute bottom-2 right-2 text-[8px] font-mono text-primary">TARGET_LOCKED</div>
                  </div>
                </div>

                <div className="h-24 grid grid-cols-3 gap-4">
                  <div className="border border-border/50 bg-background/30 p-3 flex flex-col justify-between">
                    <span className="text-[9px] font-mono text-muted-foreground tracking-widest">CONFIDENCE</span>
                    <span className="text-2xl font-serif text-primary">99.8%</span>
                  </div>
                  <div className="border border-border/50 bg-background/30 p-3 flex flex-col justify-between col-span-2">
                    <span className="text-[9px] font-mono text-muted-foreground tracking-widest">STATUS LOG</span>
                    <div className="font-mono text-xs text-foreground mt-1">
                      <span className="text-primary mr-2">&gt;</span> Artifacts detected in sector 4
                      <br/>
                      <span className="text-primary mr-2">&gt;</span> GAN signature matched
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. SOLUTIONS GRID */}
      <section className="py-32 bg-card relative border-t border-border">
        <SectionDivider id="03" label="SOLUTION ARCHITECTURE" />
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((sol, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group p-10 bg-background border border-border hover:border-primary/50 transition-all duration-500 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="font-mono text-xs text-primary/40 mb-6">{sol.num}</div>
                <sol.icon className="w-12 h-12 text-muted-foreground group-hover:text-primary transition-colors duration-500 mb-8" />
                <h3 className="text-2xl font-serif font-bold text-foreground mb-4">{sol.title}</h3>
                <p className="text-muted-foreground font-sans text-sm leading-relaxed relative z-10 mb-8">{sol.desc}</p>
                
                <Link href="/solutions">
                  <div className="flex items-center text-primary text-xs font-mono uppercase tracking-widest group-hover:tracking-[0.2em] transition-all duration-500 cursor-none">
                    Learn more <div className="w-0 h-[1px] bg-primary group-hover:w-4 transition-all duration-500 ml-2" /><ChevronRight className="w-4 h-4 ml-1" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHY AENS */}
      <section className="py-32 bg-background relative">
        <SectionDivider id="04" label="OPERATIONAL DOCTRINE" />
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-16">
            {whyAens.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: i * 0.2 }}
                className="flex flex-col md:flex-row gap-8 items-start md:items-center relative"
              >
                <div className="text-8xl md:text-[10rem] font-serif font-bold text-primary/10 leading-none">
                  {item.num}
                </div>
                <div className="flex-1 md:-ml-12 relative z-10 bg-card/80 backdrop-blur-md p-8 border border-border">
                  <h3 className="text-2xl font-serif font-bold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground font-sans text-lg">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. DEVICE EXPERIENCE */}
      <section className="py-32 bg-card relative border-y border-border overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent,rgba(255,91,110,0.03),transparent)]" />
        <SectionDivider id="05" label="OMNIPRESENT DEPLOYMENT" />
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20 relative z-10">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
              Intelligence Everywhere
            </h2>
            <p className="text-xl text-muted-foreground font-sans">
              Our intelligent agents run stealthily on PC and mobile devices to detect deepfake files and suspicious media in real time, before they penetrate the enterprise.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 mt-16 relative z-10">
            {/* Phone SVG Mockup */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative w-full max-w-[280px]"
            >
              <svg viewBox="0 0 280 580" fill="none" className="w-full h-auto drop-shadow-2xl">
                <rect x="10" y="10" width="260" height="560" rx="36" fill="hsl(var(--card))" stroke="hsl(var(--border))" strokeWidth="4" />
                <path d="M100 10h80v15a15 15 0 01-15 15h-50a15 15 0 01-15-15v-15z" fill="hsl(var(--border))" />
                {/* Screen Content */}
                <rect x="20" y="50" width="240" height="500" rx="24" fill="hsl(var(--background))" />
                <g className="animate-pulse">
                  <circle cx="140" cy="200" r="40" stroke="rgba(255,91,110,0.5)" strokeWidth="2" fill="none" />
                  <circle cx="140" cy="200" r="30" stroke="rgba(255,91,110,0.8)" strokeWidth="1" fill="none" />
                  <circle cx="140" cy="200" r="5" fill="rgba(255,91,110,1)" />
                </g>
                <rect x="40" y="300" width="200" height="40" rx="4" fill="hsl(var(--muted))" opacity="0.5" />
                <rect x="40" y="360" width="160" height="15" rx="2" fill="hsl(var(--muted))" opacity="0.3" />
                <rect x="40" y="390" width="120" height="15" rx="2" fill="hsl(var(--muted))" opacity="0.3" />
                {/* CSS Scanline */}
                <rect x="20" y="50" width="240" height="500" rx="24" fill="url(#scanGradient)" className="var(--animate-scan)" />
                <defs>
                  <linearGradient id="scanGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="transparent" />
                    <stop offset="50%" stopColor="rgba(255,91,110,0.2)" />
                    <stop offset="100%" stopColor="transparent" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>

            {/* Monitor SVG Mockup */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative w-full max-w-[700px] z-20 lg:-ml-12"
            >
              <svg viewBox="0 0 700 450" fill="none" className="w-full h-auto drop-shadow-2xl">
                <rect x="10" y="10" width="680" height="380" rx="12" fill="hsl(var(--card))" stroke="hsl(var(--border))" strokeWidth="4" />
                <rect x="20" y="20" width="660" height="360" rx="6" fill="hsl(var(--background))" />
                <path d="M300 390h100v40H300z" fill="hsl(var(--border))" />
                <path d="M250 430h200v10H250z" fill="hsl(var(--border))" />
                {/* Screen Content */}
                <rect x="20" y="20" width="660" height="40" fill="hsl(var(--muted))" opacity="0.1" />
                <circle cx="40" cy="40" r="5" fill="hsl(var(--border))" />
                <circle cx="60" cy="40" r="5" fill="hsl(var(--border))" />
                <circle cx="80" cy="40" r="5" fill="hsl(var(--border))" />
                
                <rect x="50" y="100" width="200" height="200" rx="4" fill="hsl(var(--muted))" opacity="0.1" stroke="hsl(var(--border))" strokeWidth="1" />
                <circle cx="150" cy="200" r="40" stroke="rgba(255,91,110,0.5)" strokeWidth="1" strokeDasharray="4 4" fill="none" />
                <rect x="145" y="195" width="10" height="10" fill="rgba(255,91,110,1)" />

                <rect x="280" y="100" width="370" height="40" rx="4" fill="hsl(var(--muted))" opacity="0.2" />
                <rect x="280" y="160" width="370" height="40" rx="4" fill="hsl(var(--muted))" opacity="0.1" />
                <rect x="280" y="220" width="200" height="20" rx="2" fill="hsl(var(--muted))" opacity="0.1" />
                <rect x="280" y="260" width="150" height="20" rx="2" fill="hsl(var(--muted))" opacity="0.1" />
                
                <rect x="20" y="60" width="660" height="320" fill="url(#scanGradientHoriz)" className="var(--animate-scan)" style={{ animationDuration: '4s' }} />
                <defs>
                  <linearGradient id="scanGradientHoriz" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="transparent" />
                    <stop offset="50%" stopColor="rgba(255,91,110,0.1)" />
                    <stop offset="100%" stopColor="transparent" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7. STATS SECTION */}
      <section className="py-24 bg-background border-b border-border">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 md:gap-16">
            <Counter end={4} label="Media Types" />
            <Counter end={24} label="Hour Detection" suffix="/7" />
            <Counter end={50} label="Ms Latency" suffix="<" />
            <Counter end={99.9} label="Accuracy" suffix="%" />
          </div>
        </div>
      </section>

      {/* 8. CASE STUDIES / SECTORS */}
      <section className="py-24 bg-card border-b border-border overflow-hidden relative">
        <div className="container mx-auto px-6 mb-12">
          <div className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase text-center">
            DEPOLYED ACROSS SECURE ENVIRONMENTS
          </div>
        </div>
        <div className="flex w-max animate-[scroll_40s_linear_infinite] opacity-60">
          {[...sectors, ...sectors, ...sectors].map((sector, i) => (
            <div key={i} className="flex items-center space-x-12 px-12">
              <span className="text-2xl md:text-4xl font-serif font-bold text-foreground/50 hover:text-primary transition-colors cursor-none">
                {sector}
              </span>
              <span className="w-2 h-2 rounded-full bg-primary/50" />
            </div>
          ))}
        </div>
      </section>

      {/* 9. CTA SECTION */}
      <section className="py-40 relative bg-background overflow-hidden border-t border-border">
        <CrosshairOverlay />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,91,110,0.1)_0%,transparent_50%)]" />
        
        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <ShieldNodeIcon className="w-16 h-16 text-primary mx-auto mb-8" />
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-foreground mb-8 leading-[1.05]">
              Architect Your <br/>
              <span className="italic font-normal text-muted-foreground">Defense.</span>
            </h2>
            <div className="w-24 h-[1px] bg-primary mx-auto mb-12" />
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/contact">
                <Button data-testid="btn-initiate-setup" size="lg" className="w-full sm:w-auto h-16 px-12 text-sm font-mono uppercase tracking-widest rounded-none bg-primary text-primary-foreground hover:bg-primary/90 border border-primary hover:shadow-[0_0_40px_rgba(255,91,110,0.5)] transition-all duration-300">
                  Initiate Setup
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </motion.main>
  );
}