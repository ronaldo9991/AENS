import { Link } from "wouter";
import { NeuralDiagramIcon, HexagonIcon } from "@/components/icons";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border overflow-hidden">
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="flex items-center gap-3 cursor-none">
              <div className="text-3xl font-serif font-bold tracking-tight text-foreground">
                AENS
              </div>
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            </Link>
            <p className="text-muted-foreground font-sans text-sm max-w-sm">
              The Artificial Intelligence Enterprise Nervous System. Definitive synthetic media intelligence and threat detection for global enterprise.
            </p>
            <div className="flex gap-4 pt-4">
              <a href="#" className="w-10 h-10 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors cursor-none">
                <NeuralDiagramIcon className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors cursor-none">
                <HexagonIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-2 lg:col-start-7">
            <h4 className="font-mono text-[10px] tracking-widest uppercase text-primary mb-6">Capabilities</h4>
            <ul className="space-y-4 text-sm font-sans text-muted-foreground">
              <li><Link href="/solutions" className="hover:text-foreground transition-colors cursor-none">Deepfake Detection</Link></li>
              <li><Link href="/solutions" className="hover:text-foreground transition-colors cursor-none">Enterprise AI</Link></li>
              <li><Link href="/solutions" className="hover:text-foreground transition-colors cursor-none">Autonomous Agents</Link></li>
              <li><Link href="/solutions" className="hover:text-foreground transition-colors cursor-none">Trust Infrastructure</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-mono text-[10px] tracking-widest uppercase text-primary mb-6">Organization</h4>
            <ul className="space-y-4 text-sm font-sans text-muted-foreground">
              <li><Link href="/about" className="hover:text-foreground transition-colors cursor-none">About AENS</Link></li>
              <li><Link href="/about" className="hover:text-foreground transition-colors cursor-none">Principles</Link></li>
              <li><a href="#" className="hover:text-foreground transition-colors cursor-none">Careers</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors cursor-none">Press</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-mono text-[10px] tracking-widest uppercase text-primary mb-6">Legal</h4>
            <ul className="space-y-4 text-sm font-sans text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors cursor-none">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors cursor-none">Terms of Service</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors cursor-none">Data Sovereignty</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors cursor-none">Security Brief</a></li>
            </ul>
          </div>

        </div>
      </div>

      <div className="w-full border-t border-border/50 bg-card py-4 overflow-hidden relative">
        <div className="flex w-max animate-[scroll_40s_linear_infinite] opacity-50 text-[10px] font-mono tracking-widest uppercase text-muted-foreground">
          <span className="mx-8">AENS // ARTIFICIAL INTELLIGENCE ENTERPRISE NERVOUS SYSTEM // EST. 2024 // ALL RIGHTS RESERVED</span>
          <span className="mx-8">AENS // ARTIFICIAL INTELLIGENCE ENTERPRISE NERVOUS SYSTEM // EST. 2024 // ALL RIGHTS RESERVED</span>
          <span className="mx-8">AENS // ARTIFICIAL INTELLIGENCE ENTERPRISE NERVOUS SYSTEM // EST. 2024 // ALL RIGHTS RESERVED</span>
        </div>
      </div>
    </footer>
  );
}