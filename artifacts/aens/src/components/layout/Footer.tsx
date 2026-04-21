import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-graphite dark:bg-[#050505] border-t border-border pt-20 pb-10 text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span className="font-serif text-3xl font-bold tracking-tight text-white">
                AENS<span className="text-accent">.</span>
              </span>
            </Link>
            <p className="text-gray-400 max-w-sm mb-8 font-sans">
              The elite Artificial Intelligence Enterprise Nervous System. 
              Precision-engineered trust infrastructure for the AI era.
            </p>
            <div className="flex space-x-4">
              {/* Social icons placeholders */}
              <a href="#" className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center text-gray-400 hover:text-accent hover:border-accent transition-colors">
                <span className="sr-only">Twitter</span>
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.004 3.974H5.078z"></path></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center text-gray-400 hover:text-accent hover:border-accent transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"></path></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-sans font-semibold text-white mb-6 tracking-wide uppercase text-sm">Capabilities</h4>
            <ul className="space-y-4">
              <li><Link href="/solutions" className="text-gray-400 hover:text-accent transition-colors">Deepfake Detection</Link></li>
              <li><Link href="/solutions" className="text-gray-400 hover:text-accent transition-colors">Synthetic Media Intelligence</Link></li>
              <li><Link href="/solutions" className="text-gray-400 hover:text-accent transition-colors">Enterprise AI Systems</Link></li>
              <li><Link href="/solutions" className="text-gray-400 hover:text-accent transition-colors">Trust Infrastructure</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-sans font-semibold text-white mb-6 tracking-wide uppercase text-sm">Company</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-gray-400 hover:text-accent transition-colors">About AENS</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-accent transition-colors">Contact</Link></li>
              <li><a href="#" className="text-gray-400 hover:text-accent transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-accent transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} AENS. All rights reserved.</p>
          <p className="text-gray-600 text-xs font-mono uppercase tracking-widest">Trust Infrastructure / Global</p>
        </div>
      </div>
    </footer>
  );
}
