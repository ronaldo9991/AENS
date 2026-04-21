import { Link, useLocation } from "wouter";
import { useTheme } from "@/hooks/use-theme";
import { Button } from "@/components/ui/button";
import { SunIcon, MoonIcon } from "@/components/icons";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [location] = useLocation();
  const { theme, setTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/solutions", label: "Capabilities" },
    { href: "/about", label: "Organization" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${
          scrolled 
            ? "bg-background/80 backdrop-blur-xl border-border/50 py-4" 
            : "bg-transparent border-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group relative z-50 cursor-none">
              <div className="text-2xl font-serif font-bold tracking-tight text-foreground">
                AENS
              </div>
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_rgba(255,91,110,0.8)]" />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <nav className="flex items-center gap-8 mr-4">
                {navLinks.map((link) => (
                  <Link 
                    key={link.href} 
                    href={link.href}
                    className="relative group py-2 cursor-none"
                  >
                    <span className={`text-sm font-mono uppercase tracking-widest transition-colors ${
                      location === link.href ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"
                    }`}>
                      {link.label}
                    </span>
                    <span className={`absolute bottom-0 left-0 w-full h-[1px] bg-primary transform origin-left transition-transform duration-300 ${
                      location === link.href ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`} />
                  </Link>
                ))}
              </nav>

              <div className="flex items-center gap-4 border-l border-border/50 pl-8">
                <button 
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-muted transition-colors text-muted-foreground hover:text-foreground cursor-none"
                >
                  {theme === "dark" ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
                </button>
                
                <Link href="/contact" className="cursor-none">
                  <Button className="rounded-none bg-primary/10 text-primary border border-primary/30 hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_20px_rgba(255,91,110,0.4)] transition-all duration-300 relative overflow-hidden group cursor-none">
                    <span className="relative z-10 font-mono uppercase tracking-wider text-xs">Deploy System</span>
                    <div className="absolute inset-0 bg-primary transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 z-0" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Mobile Toggle */}
            <button 
              className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 z-50 relative cursor-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <div className={`w-6 h-[1px] bg-foreground transition-transform duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
              <div className={`w-6 h-[1px] bg-foreground transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
              <div className={`w-6 h-[1px] bg-foreground transition-transform duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-2xl flex flex-col pt-32 px-6 pb-12"
          >
            <nav className="flex flex-col gap-8 text-center flex-1 justify-center">
              {navLinks.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-4xl font-serif tracking-tight cursor-none ${
                    location === link.href ? "text-primary" : "text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            
            <div className="flex justify-center gap-6 mt-auto border-t border-border/50 pt-8">
              <button 
                onClick={() => {
                  setTheme(theme === "dark" ? "light" : "dark");
                  setMobileMenuOpen(false);
                }}
                className="flex items-center gap-2 text-sm font-mono uppercase tracking-widest text-muted-foreground cursor-none"
              >
                {theme === "dark" ? (
                  <><SunIcon className="w-4 h-4" /> Light Mode</>
                ) : (
                  <><MoonIcon className="w-4 h-4" /> Dark Mode</>
                )}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}