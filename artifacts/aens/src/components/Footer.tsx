import React from 'react';
import { Link } from 'wouter';
import { Shield, Mail, MapPin, Phone, Github, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border pt-16 pb-8 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-2">
            <Link href="/">
              <span className="font-serif text-2xl font-bold tracking-wider cursor-pointer flex items-center gap-2 mb-4">
                AENS<span className="text-primary text-3xl leading-none">.</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-md mb-6">
              The Artificial Intelligence Enterprise Nervous System. Elite synthetic media intelligence and deepfake detection for organizations that demand absolute trust.
            </p>
            <div className="flex gap-4 text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-primary transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-primary transition-colors"><Github size={20} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Solutions</h4>
            <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
              <li><Link href="/solutions"><span className="hover:text-primary cursor-pointer transition-colors">Deepfake Detection</span></Link></li>
              <li><Link href="/solutions"><span className="hover:text-primary cursor-pointer transition-colors">Audio Analysis</span></Link></li>
              <li><Link href="/solutions"><span className="hover:text-primary cursor-pointer transition-colors">Video Intelligence</span></Link></li>
              <li><Link href="/solutions"><span className="hover:text-primary cursor-pointer transition-colors">Enterprise Trust</span></Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Company</h4>
            <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
              <li><Link href="/about"><span className="hover:text-primary cursor-pointer transition-colors">About Us</span></Link></li>
              <li><Link href="/contact"><span className="hover:text-primary cursor-pointer transition-colors">Contact</span></Link></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} AENS. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Shield size={14} className="text-primary" />
            <span>Enterprise Grade Security</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
