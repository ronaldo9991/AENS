import { motion, useInView } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { EntropyDemo } from "@/components/ui/demo";
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
import PrecisionRobot from "@/components/PrecisionRobot";
import { useSeo } from "@/hooks/use-seo";
import { ROUTE_SEO } from "@/lib/seo";

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
    return undefined;
  }, [isInView, end]);

  const displayCount = end % 1 !== 0 && count === Math.floor(end) 
    ? end.toFixed(1) 
    : count;

  return (
    <div ref={ref} className="text-left py-8 border-t border-border relative group">
      <div className="absolute top-0 left-0 w-0 h-[1px] bg-primary group-hover:w-full transition-all duration-700" />
      <div className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground mb-4 flex items-baseline">
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
  useSeo(ROUTE_SEO["/"]);
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
    { num: "01", title: "Enterprise AI Systems", desc: "Secure, air-gapped AI infrastructure tailored to your stack.", icon: GridMatrixIcon, href: "/solutions" },
    { num: "02", title: "Autonomous AI Agents", desc: "24/7 agents that plan, execute and report across your business.", icon: OrbitalRingIcon, href: "/ai-agents" },
    { num: "03", title: "Workflow Automation", desc: "Replace repetitive ops with multi-step agentic pipelines.", icon: HexagonIcon, href: "/solutions" },
    { num: "04", title: "Knowledge & RAG", desc: "Private LLM gateways grounded in your enterprise data.", icon: NeuralDiagramIcon, href: "/solutions" },
    { num: "05", title: "Trust & Governance", desc: "Audit trails, policy guardrails and zero-trust integration.", icon: ShieldNodeIcon, href: "/solutions" },
    { num: "06", title: "Deepfake Detection", desc: "One of our specialised modules — synthetic media analysis at 99.9% accuracy.", icon: ConcentricArcsIcon, href: "/solutions" },
  ];

  const sectors = ["Defense", "Finance", "Global Media", "Government", "Critical Infrastructure"];

  return (
    <motion.main 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="w-full flex flex-col bg-background"
    >
      {/* 1. HERO SECTION — "The mind above the machines" */}
      <section className="relative min-h-[90dvh] flex items-center overflow-x-hidden overflow-y-visible border-b border-border/50 pt-24 pb-12 lg:min-h-[92dvh] lg:pt-28 lg:pb-14">
        <CrosshairOverlay />

        {/* cool platinum ambient (subtle) */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_72%_48%,rgba(225,230,240,0.07)_0%,transparent_60%)] pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background to-transparent pointer-events-none z-[2]" />

        <div className="container mx-auto px-6 lg:px-12 xl:px-16 z-10 w-full">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-20 items-center">

            {/* LEFT COLUMN — narrative */}
            <div className="lg:col-span-6 xl:col-span-7 relative z-20 space-y-9 lg:space-y-10">

              {/* eyebrow */}
              <motion.div
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="flex items-center gap-4"
              >
                <div className="w-8 h-[1px] bg-primary" />
                <span className="text-primary uppercase tracking-[0.26em] font-mono text-[10px] font-medium">
                  CLASSIFIED · TIER-01 OVERSIGHT
                </span>
                <span className="hidden md:inline text-muted-foreground/50 font-mono text-[10px] tracking-[0.22em]">
                  AENS—00.247
                </span>
              </motion.div>

              {/* HEADLINE — balanced scale */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, delay: 0.3 }}
                className="leading-[0.9] tracking-tight text-foreground"
              >
                <span className="block font-sans text-[2.2rem] font-black uppercase sm:text-[3rem] lg:text-[4rem] xl:text-[5.2rem]">
                  AI AGENTS
                </span>
                <span className="mt-2 block font-serif text-[2.1rem] italic font-medium lowercase text-foreground/60 sm:text-[2.8rem] lg:text-[3.7rem] xl:text-[4.7rem]">
                  that run your
                </span>
                <span className="mt-3 block bg-gradient-to-r from-[#d9dde4] via-[#aeb5c0] to-[#7f8794] bg-clip-text font-sans text-[2.4rem] font-black uppercase leading-[0.92] text-transparent sm:text-[3.25rem] lg:text-[4.4rem] xl:text-[5.8rem]">
                  Enterprise.
                </span>
              </motion.h1>

              {/* subhead */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="text-base md:text-[17px] text-muted-foreground max-w-[540px] font-sans leading-[1.7] border-l border-primary/40 pl-5"
              >
                AENS designs and deploys <span className="text-foreground font-medium">autonomous AI agents and intelligent systems</span> for B2B operations — from workflow automation to decision intelligence, all governed by enterprise-grade trust infrastructure.
              </motion.p>

              {/* stats row */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.85 }}
                className="flex flex-wrap items-center gap-x-10 gap-y-3 font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground"
              >
                <div className="flex items-center gap-2.5">
                  <span className="relative flex w-2 h-2">
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-70" />
                    <span className="relative rounded-full w-2 h-2 bg-primary" />
                  </span>
                  Agent Orchestration
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  Continuous Autonomy
                </div>
                <div className="hidden md:flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-foreground/50" />
                  Verifiable Governance
                </div>
              </motion.div>

              {/* CTA row */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2"
              >
                <Link href="/ai-agents">
                  <Button data-testid="btn-deploy-hero" size="lg" className="w-full sm:w-auto h-12 px-10 text-[11px] font-mono uppercase tracking-[0.24em] rounded-none bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 relative group overflow-hidden">
                    <span className="relative z-10">Deploy Intelligence</span>
                    <div className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out z-0" />
                  </Button>
                </Link>
                <Link href="/about">
                  <Button data-testid="btn-demo-hero" size="lg" variant="outline" className="w-full sm:w-auto h-12 px-10 text-[11px] font-mono uppercase tracking-[0.24em] rounded-none border-border hover:border-primary/60 hover:bg-primary/5 text-foreground transition-all duration-300 group">
                    Meet the Overseer <ChevronRight className="ml-2 w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </motion.div>
            </div>

            {/* RIGHT COLUMN — overseer */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="lg:col-span-6 xl:col-span-5 relative min-h-[500px] h-[min(74dvh,700px)] sm:min-h-[560px] sm:h-[min(78dvh,780px)] lg:min-h-[640px] lg:h-[min(82dvh,860px)] overflow-visible"
            >
              <PrecisionRobot />
            </motion.div>

          </div>
        </div>

      </section>

      {/* 2. CAPABILITY MATRIX */}
      <section className="py-20 md:py-28 bg-card relative">
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
      <section className="py-20 md:py-28 relative bg-background border-t border-border">
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
                Autonomous Agents for <br/>
                Modern Enterprises
              </h2>
              
              <p className="text-xl text-muted-foreground font-sans leading-relaxed border-l-2 border-primary pl-6">
                AENS agents plan, decide and execute across your tools — CRMs, data warehouses, ticketing, finance and beyond. They orchestrate end-to-end workflows that previously required entire teams.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-8 pt-8">
                {[
                  { title: "Multi-step Reasoning", desc: "Agents break goals into actions and adapt mid-flight.", num: "01" },
                  { title: "Tool Use & APIs", desc: "Native connectors to your stack — Slack, Salesforce, SAP, custom.", num: "02" },
                  { title: "Human-in-the-loop", desc: "Approval gates and escalation paths built into every workflow.", num: "03" },
                  { title: "Audit & Governance", desc: "Every decision logged, replayable and policy-bound.", num: "04" }
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
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(225,230,240,0.05)_0%,transparent_100%)] pointer-events-none" />
              
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
                  <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(225,230,240,0.1),transparent)] h-[200%] var(--animate-scan)" />
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

      {/* 4. SOLUTION ARCHITECTURE */}
      <section className="py-20 md:py-28 bg-card relative border-t border-border">
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

                <Link href={sol.href}>
                  <div className="flex items-center text-primary text-xs font-mono uppercase tracking-widest group-hover:tracking-[0.2em] transition-all duration-500 cursor-none">
                    Learn more <div className="w-0 h-[1px] bg-primary group-hover:w-4 transition-all duration-500 ml-2" /><ChevronRight className="w-4 h-4 ml-1" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. ORDER & CHAOS */}
      <section className="py-20 md:py-28 bg-card relative border-t border-border">
        <SectionDivider id="04" label="ORDER & CHAOS" />
        <div className="container mx-auto px-6">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="border border-border bg-background p-4 md:p-6"
            >
              <EntropyDemo />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary">
                  Intelligence Dynamics
                </div>
                <h3 className="font-serif text-4xl leading-tight text-foreground md:text-5xl">
                  From structured logic to adaptive agent behavior.
                </h3>
                <p className="max-w-xl border-l border-primary/40 pl-5 font-sans text-base leading-relaxed text-muted-foreground md:text-[17px]">
                  The left lattice represents deterministic control, while the right mesh
                  reflects adaptive decision-making. AENS agents operate between both:
                  policy-bound where needed, autonomous where it drives outcomes.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { num: "01", title: "Policy Core", desc: "Every action is constrained by verifiable governance." },
                  { num: "02", title: "Adaptive Flow", desc: "Agents learn from context shifts across live operations." },
                  { num: "03", title: "Human Override", desc: "Critical paths include explicit approval checkpoints." },
                  { num: "04", title: "Continuous Audit", desc: "Decisions are logged, scored, and continuously refined." },
                ].map((item, i) => (
                  <motion.div
                    key={item.num}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: 0.12 + i * 0.06 }}
                    className="border border-border/70 bg-background/55 p-5"
                  >
                    <div className="mb-2 font-mono text-[10px] tracking-[0.2em] text-primary/70">
                      {item.num}
                    </div>
                    <h4 className="mb-1.5 font-mono text-xs uppercase tracking-[0.16em] text-foreground">
                      {item.title}
                    </h4>
                    <p className="font-sans text-sm leading-relaxed text-muted-foreground">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. DEVICE EXPERIENCE */}
      <section className="py-20 md:py-28 bg-card relative border-y border-border overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent,rgba(225,230,240,0.03),transparent)]" />
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
                  <circle cx="140" cy="200" r="40" stroke="rgba(225,230,240,0.5)" strokeWidth="2" fill="none" />
                  <circle cx="140" cy="200" r="30" stroke="rgba(225,230,240,0.8)" strokeWidth="1" fill="none" />
                  <circle cx="140" cy="200" r="5" fill="rgba(225,230,240,1)" />
                </g>
                <rect x="40" y="300" width="200" height="40" rx="4" fill="hsl(var(--muted))" opacity="0.5" />
                <rect x="40" y="360" width="160" height="15" rx="2" fill="hsl(var(--muted))" opacity="0.3" />
                <rect x="40" y="390" width="120" height="15" rx="2" fill="hsl(var(--muted))" opacity="0.3" />
                {/* CSS Scanline */}
                <rect x="20" y="50" width="240" height="500" rx="24" fill="url(#scanGradient)" className="var(--animate-scan)" />
                <defs>
                  <linearGradient id="scanGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="transparent" />
                    <stop offset="50%" stopColor="rgba(225,230,240,0.2)" />
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
                <circle cx="150" cy="200" r="40" stroke="rgba(225,230,240,0.5)" strokeWidth="1" strokeDasharray="4 4" fill="none" />
                <rect x="145" y="195" width="10" height="10" fill="rgba(225,230,240,1)" />

                <rect x="280" y="100" width="370" height="40" rx="4" fill="hsl(var(--muted))" opacity="0.2" />
                <rect x="280" y="160" width="370" height="40" rx="4" fill="hsl(var(--muted))" opacity="0.1" />
                <rect x="280" y="220" width="200" height="20" rx="2" fill="hsl(var(--muted))" opacity="0.1" />
                <rect x="280" y="260" width="150" height="20" rx="2" fill="hsl(var(--muted))" opacity="0.1" />
                
                <rect x="20" y="60" width="660" height="320" fill="url(#scanGradientHoriz)" className="var(--animate-scan)" style={{ animationDuration: '4s' }} />
                <defs>
                  <linearGradient id="scanGradientHoriz" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="transparent" />
                    <stop offset="50%" stopColor="rgba(225,230,240,0.1)" />
                    <stop offset="100%" stopColor="transparent" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7. STATS SECTION */}
      <section className="py-20 md:py-24 bg-background border-b border-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <Counter end={4} label="Media Types" />
            <Counter end={24} label="Hour Detection" suffix="/7" />
            <Counter end={50} label="Ms Latency" suffix="<" />
            <Counter end={99.9} label="Accuracy" suffix="%" />
          </div>
        </div>
      </section>

      {/* 8. CASE STUDIES / SECTORS */}
      <section className="py-16 md:py-20 bg-card border-b border-border overflow-hidden relative">
        <div className="container mx-auto px-6 mb-12">
          <div className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase text-center">
            DEPLOYED ACROSS SECURE ENVIRONMENTS
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
      <section className="py-24 md:py-32 relative bg-background overflow-hidden border-t border-border">
        <CrosshairOverlay />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(225,230,240,0.1)_0%,transparent_50%)]" />
        
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
                <Button data-testid="btn-initiate-setup" size="lg" className="w-full sm:w-auto h-16 px-12 text-sm font-mono uppercase tracking-widest rounded-none bg-primary text-primary-foreground hover:bg-primary/90 border border-primary hover:shadow-[0_0_40px_rgba(225,230,240,0.5)] transition-all duration-300">
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
