import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ShieldNodeIcon, HexagonIcon, GridMatrixIcon, OrbitalRingIcon } from "@/components/icons";
import { useState } from "react";

export default function Contact() {
  const [isFocused, setIsFocused] = useState<string | null>(null);

  const contactMethods = [
    { icon: HexagonIcon, label: "Encrypted Comms", value: "secure@aens.com" },
    { icon: GridMatrixIcon, label: "Headquarters", value: "San Francisco, CA" },
    { icon: OrbitalRingIcon, label: "Strategic Line", value: "+1 (800) 555-0199" }
  ];

  return (
    <motion.main 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="w-full flex flex-col bg-background min-h-screen"
    >
      {/* Hero */}
      <section className="pt-40 pb-20 border-b border-border bg-card relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(208,24,227,0.05)_0%,transparent_50%)] pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4"
            >
              <div className="w-8 h-[1px] bg-primary" />
              <span className="text-primary uppercase tracking-[0.2em] font-mono text-[10px] font-medium">
                INITIATE CONTACT
              </span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-8xl font-serif font-bold text-foreground leading-[1.05]"
            >
              Let's Build <br/>
              <span className="italic font-normal text-muted-foreground">Serious Systems.</span>
            </motion.h1>
          </div>
        </div>
      </section>

      <section className="py-32 bg-background relative z-10 flex-1">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-20 items-start">
            
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-5 space-y-16 sticky top-32"
            >
              <div>
                <h2 className="text-3xl font-serif font-bold text-foreground mb-6">Enterprise Integration</h2>
                <p className="text-lg text-muted-foreground font-sans leading-relaxed">
                  AENS infrastructure is not self-serve. We work directly with enterprise security teams, intelligence agencies, and executive boards to architect bespoke synthetic threat defenses.
                </p>
                <div className="w-12 h-[1px] bg-border my-8" />
                <p className="text-lg text-muted-foreground font-sans leading-relaxed">
                  Submit an inquiry to schedule a confidential briefing and technical demonstration of our capabilities.
                </p>
              </div>

              <div className="space-y-4">
                {contactMethods.map((method, i) => (
                  <div key={i} className="flex items-center gap-6 p-6 bg-card border border-border group hover:border-primary/50 transition-colors">
                    <div className="w-12 h-12 flex items-center justify-center shrink-0">
                      <method.icon className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono uppercase tracking-widest text-primary mb-1">{method.label}</div>
                      <div className="text-foreground font-serif text-xl">{method.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-6 bg-muted/10 border border-border/50 font-mono text-xs text-muted-foreground space-y-2">
                <div className="text-primary uppercase tracking-widest mb-4">SECURE_COMMS_KEY</div>
                <div>-----BEGIN PGP PUBLIC KEY BLOCK-----</div>
                <div className="opacity-50 truncate">mQINBGBf...[AENS_SECURE_KEY]...xyz</div>
                <div>-----END PGP PUBLIC KEY BLOCK-----</div>
              </div>
            </motion.div>

            {/* Right Form */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-7"
            >
              <div className="bg-card border border-border p-10 md:p-16 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
                <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-primary/20" />
                
                <form className="space-y-10 relative z-10" onSubmit={(e) => e.preventDefault()}>
                  
                  <div className="grid md:grid-cols-2 gap-10">
                    <div className="space-y-3 relative group">
                      <label className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground transition-colors group-focus-within:text-primary">Full Name</label>
                      <Input 
                        className={`rounded-none border-0 border-b border-border bg-transparent px-0 focus-visible:ring-0 focus-visible:border-primary transition-colors h-10 text-lg ${isFocused === 'name' ? 'border-primary' : ''}`}
                        onFocus={() => setIsFocused('name')}
                        onBlur={() => setIsFocused(null)}
                      />
                    </div>
                    <div className="space-y-3 relative group">
                      <label className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground transition-colors group-focus-within:text-primary">Company</label>
                      <Input 
                        className={`rounded-none border-0 border-b border-border bg-transparent px-0 focus-visible:ring-0 focus-visible:border-primary transition-colors h-10 text-lg ${isFocused === 'company' ? 'border-primary' : ''}`}
                        onFocus={() => setIsFocused('company')}
                        onBlur={() => setIsFocused(null)}
                      />
                    </div>
                  </div>

                  <div className="space-y-3 relative group">
                    <label className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground transition-colors group-focus-within:text-primary">Official Email</label>
                    <Input 
                      type="email"
                      className={`rounded-none border-0 border-b border-border bg-transparent px-0 focus-visible:ring-0 focus-visible:border-primary transition-colors h-10 text-lg ${isFocused === 'email' ? 'border-primary' : ''}`}
                      onFocus={() => setIsFocused('email')}
                      onBlur={() => setIsFocused(null)}
                    />
                  </div>

                  <div className="space-y-3 relative group">
                    <label className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground transition-colors group-focus-within:text-primary">Inquiry Type</label>
                    <select 
                      className={`w-full rounded-none border-0 border-b border-border bg-transparent text-foreground focus-visible:outline-none focus-visible:border-primary transition-colors h-10 px-0 text-lg appearance-none ${isFocused === 'type' ? 'border-primary' : ''}`}
                      onFocus={() => setIsFocused('type')}
                      onBlur={() => setIsFocused(null)}
                    >
                      <option value="deepfake" className="bg-card">Deepfake Detection</option>
                      <option value="enterprise" className="bg-card">Enterprise AI</option>
                      <option value="consulting" className="bg-card">Consulting</option>
                      <option value="partnerships" className="bg-card">Partnerships</option>
                      <option value="general" className="bg-card">General Inquiry</option>
                    </select>
                  </div>

                  <div className="space-y-3 relative group">
                    <label className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground transition-colors group-focus-within:text-primary">Message</label>
                    <Textarea 
                      className={`rounded-none border border-border bg-transparent p-4 focus-visible:ring-0 focus-visible:border-primary transition-colors min-h-[150px] resize-none text-lg mt-2 ${isFocused === 'message' ? 'border-primary' : ''}`}
                      onFocus={() => setIsFocused('message')}
                      onBlur={() => setIsFocused(null)}
                    />
                  </div>

                  <div className="pt-4">
                    <Button type="submit" className="w-full rounded-none bg-primary text-primary-foreground hover:bg-primary/90 h-16 text-sm font-mono uppercase tracking-widest border border-primary hover:shadow-[0_0_30px_rgba(208,24,227,0.4)] transition-all group overflow-hidden relative">
                      <span className="relative z-10 flex items-center justify-center">
                        Transmit Request
                      </span>
                      <div className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out z-0" />
                    </Button>
                  </div>
                  
                  <div className="text-center pt-2">
                    <span className="text-[9px] font-mono text-muted-foreground uppercase tracking-widest flex items-center justify-center gap-2">
                      <ShieldNodeIcon className="w-3 h-3" />
                      Transmission encrypted via AES-256
                    </span>
                  </div>
                </form>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </motion.main>
  );
}