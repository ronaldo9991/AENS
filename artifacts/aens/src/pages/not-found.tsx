import { useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ShieldNodeIcon } from "@/components/icons";
import { NOT_FOUND_SEO, SITE_URL } from "@/lib/seo";

export default function NotFound() {
  useEffect(() => {
    document.title = NOT_FOUND_SEO.title;
    const setMeta = (name: string, content: string) => {
      let el = document.head.querySelector<HTMLMetaElement>(
        `meta[name="${name}"]`,
      );
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };
    setMeta("description", NOT_FOUND_SEO.description);
    setMeta("robots", "noindex,follow");
    let canonical = document.head.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]',
    );
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", `${SITE_URL}/`);
  }, []);

  return (
    <main className="min-h-[80vh] w-full flex items-center justify-center bg-background px-6 py-32">
      <div className="max-w-2xl text-center space-y-8">
        <ShieldNodeIcon className="w-16 h-16 text-primary mx-auto" />
        <div className="font-mono text-[10px] tracking-[0.24em] text-primary uppercase">
          ERROR · 404
        </div>
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground leading-[1.05]">
          Signal Lost.
        </h1>
        <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
          The page you requested is not part of the AENS perimeter. Return to the
          command surface or proceed to solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Link href="/">
            <Button
              size="lg"
              className="h-12 px-10 text-[11px] font-mono uppercase tracking-[0.24em] rounded-none bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Return Home
            </Button>
          </Link>
          <Link href="/solutions">
            <Button
              size="lg"
              variant="outline"
              className="h-12 px-10 text-[11px] font-mono uppercase tracking-[0.24em] rounded-none"
            >
              View Solutions
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
