import { Link } from 'wouter';
import { Shield, Mail, MapPin, Github, Twitter, Linkedin } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border pt-16 pb-8 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          <div className="col-span-1 md:col-span-2">
            <Logo size="md" />
            <p className="text-muted-foreground text-sm max-w-md mt-6 mb-6 leading-relaxed">
              Artificial Intelligence Enterprise Nervous System. Custom AI systems and autonomous agents built for B2B — including deepfake, audio and video intelligence, all wrapped in enterprise-grade trust infrastructure.
            </p>
            <div className="flex flex-col gap-2 text-xs font-mono text-muted-foreground mb-6">
              <span className="flex items-center gap-2">
                <MapPin size={12} className="text-primary" /> Dubai · Bangalore
              </span>
              <span className="flex items-center gap-2">
                <Mail size={12} className="text-primary" /> admin@aens.io
              </span>
            </div>
            <div className="flex gap-4 text-muted-foreground">
              <a href="#" aria-label="Twitter" className="hover:text-primary transition-colors"><Twitter size={18} /></a>
              <a href="#" aria-label="LinkedIn" className="hover:text-primary transition-colors"><Linkedin size={18} /></a>
              <a href="#" aria-label="GitHub" className="hover:text-primary transition-colors"><Github size={18} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] mb-5 text-primary">Solutions</h4>
            <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
              <li><Link href="/solutions"><span className="hover:text-primary cursor-pointer transition-colors">Custom AI Solutions</span></Link></li>
              <li><Link href="/solutions"><span className="hover:text-primary cursor-pointer transition-colors">Enterprise AI Systems</span></Link></li>
              <li><Link href="/ai-agents"><span className="hover:text-primary cursor-pointer transition-colors">Autonomous AI Agents</span></Link></li>
              <li><Link href="/solutions"><span className="hover:text-primary cursor-pointer transition-colors">Deepfake Detection</span></Link></li>
              <li><Link href="/solutions"><span className="hover:text-primary cursor-pointer transition-colors">Audio &amp; Video Intelligence</span></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] mb-5 text-primary">Company</h4>
            <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
              <li><Link href="/about"><span className="hover:text-primary cursor-pointer transition-colors">About</span></Link></li>
              <li><Link href="/contact"><span className="hover:text-primary cursor-pointer transition-colors">Contact</span></Link></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
            © {new Date().getFullYear()} AENS · Founded 2026
          </p>
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted-foreground">
            <Shield size={12} className="text-primary" />
            <span>Enterprise Grade Security</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
