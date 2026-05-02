import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { Button } from '@/components/ui/button';
import Logo from './Logo';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-3 border-b border-border/50' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="flex items-center justify-between gap-4">
          {/* Left: Logo */}
          <div className="flex shrink-0 justify-start">
            <Logo size="md" />
          </div>

          {/* Center: Nav (desktop) */}
          <nav
            className="hidden lg:flex shrink-0 items-center justify-center gap-1 rounded-full border border-border/60 bg-card/40 px-2 py-1.5 backdrop-blur-md"
            data-testid="nav-center"
          >
            {navLinks.map((link) => {
              const active = location === link.path;
              const testId = `nav-${link.name.toLowerCase().replace(/\s+/g, '-')}`;
              return (
                <Link key={link.path} href={link.path}>
                  <span
                    data-testid={testId}
                    className={`relative inline-flex h-8 min-w-[72px] shrink-0 items-center justify-center whitespace-nowrap rounded-full px-3 text-center font-mono text-[11px] uppercase leading-none tracking-[0.13em] transition-all xl:px-4 ${
                      active
                        ? 'text-primary-foreground bg-primary shadow-[0_0_20px_rgba(225,230,240,0.45)]'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {link.name}
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Right: Theme toggle + CTA */}
          <div className="hidden shrink-0 items-center justify-end gap-3 lg:flex">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="w-9 h-9 flex items-center justify-center rounded-full border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
              aria-label="Toggle theme"
              data-testid="btn-theme-toggle"
            >
              {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
            </button>
            <Link href="/contact">
              <Button
                data-testid="btn-book-consult"
                className="rounded-full h-9 px-5 text-[10px] font-mono tracking-[0.2em] uppercase bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_rgba(225,230,240,0.35)] hover:shadow-[0_0_28px_rgba(225,230,240,0.55)] transition-all"
              >
                Book Consult
              </Button>
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="text-foreground lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full glass border-b border-border shadow-lg py-4 px-6 flex flex-col gap-4 lg:hidden">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link key={link.path} href={link.path}>
                <span
                  className={`text-base font-mono uppercase tracking-widest block py-2 border-b border-border/40 ${
                    location === link.path ? 'text-primary' : 'text-foreground'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </span>
              </Link>
            ))}
          </nav>
          <div className="flex items-center justify-between mt-2">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="flex items-center gap-2 text-muted-foreground"
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
              <span className="text-xs font-mono uppercase tracking-widest">
                {theme === 'dark' ? 'Light' : 'Dark'}
              </span>
            </button>
            <Link href="/contact">
              <Button
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-full bg-primary text-primary-foreground text-[10px] font-mono tracking-widest uppercase"
              >
                Consult
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
