import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ShieldCheck, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [isFocused, setIsFocused] = useState<string | null>(null);

  const contactMethods = [
    { icon: Mail, label: "Encrypted Comms", value: "secure@aens.com" },
    { icon: MapPin, label: "Headquarters", value: "San Francisco, CA" },
    { icon: Phone, label: "Direct Line", value: "+1 (800) 555-0199" }
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
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-accent uppercase tracking-widest font-mono text-sm font-medium"
            >
              Initiate Contact
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-serif font-bold text-foreground leading-[1.1]"
            >
              Let's Build <br/> Something Serious.
            </motion.h1>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background relative z-10 flex-1">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 max-w-6xl mx-auto">
            
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-12"
            >
              <div>
                <h2 className="text-3xl font-serif font-bold text-foreground mb-6">Enterprise Integration</h2>
                <p className="text-lg text-muted-foreground font-sans leading-relaxed">
                  AENS infrastructure is not self-serve. We work directly with enterprise security teams, intelligence agencies, and executive boards to architect bespoke synthetic threat defenses.
                </p>
                <p className="text-lg text-muted-foreground font-sans leading-relaxed mt-4">
                  Submit an inquiry to schedule a confidential briefing and technical demonstration of our capabilities.
                </p>
              </div>

              <div className="space-y-6">
                {contactMethods.map((method, i) => (
                  <div key={i} className="flex items-center gap-6 p-6 bg-card border border-border">
                    <div className="w-12 h-12 bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                      <method.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <div className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-1">{method.label}</div>
                      <div className="text-foreground font-medium text-lg">{method.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Form */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="bg-card border border-border p-8 md:p-10 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-50" />
                
                <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
                  
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Full Name</label>
                      <Input 
                        className={`rounded-none border-border bg-background focus-visible:ring-0 focus-visible:border-accent transition-colors h-12 ${isFocused === 'name' ? 'border-accent' : ''}`}
                        onFocus={() => setIsFocused('name')}
                        onBlur={() => setIsFocused(null)}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Company</label>
                      <Input 
                        className={`rounded-none border-border bg-background focus-visible:ring-0 focus-visible:border-accent transition-colors h-12 ${isFocused === 'company' ? 'border-accent' : ''}`}
                        onFocus={() => setIsFocused('company')}
                        onBlur={() => setIsFocused(null)}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Official Email</label>
                    <Input 
                      type="email"
                      className={`rounded-none border-border bg-background focus-visible:ring-0 focus-visible:border-accent transition-colors h-12 ${isFocused === 'email' ? 'border-accent' : ''}`}
                      onFocus={() => setIsFocused('email')}
                      onBlur={() => setIsFocused(null)}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Inquiry Type</label>
                    <select 
                      className={`w-full rounded-none border border-border bg-background text-foreground focus-visible:outline-none focus-visible:border-accent transition-colors h-12 px-3 text-sm ${isFocused === 'type' ? 'border-accent' : ''}`}
                      onFocus={() => setIsFocused('type')}
                      onBlur={() => setIsFocused(null)}
                    >
                      <option value="deepfake">Deepfake Detection</option>
                      <option value="enterprise">Enterprise AI</option>
                      <option value="consulting">Consulting</option>
                      <option value="partnerships">Partnerships</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Message</label>
                    <Textarea 
                      className={`rounded-none border-border bg-background focus-visible:ring-0 focus-visible:border-accent transition-colors min-h-[150px] resize-none ${isFocused === 'message' ? 'border-accent' : ''}`}
                      onFocus={() => setIsFocused('message')}
                      onBlur={() => setIsFocused(null)}
                    />
                  </div>

                  <Button type="submit" className="w-full rounded-none bg-accent text-accent-foreground hover:bg-accent/90 h-14 text-lg font-medium group">
                    <ShieldCheck className="w-5 h-5 mr-2 opacity-50 group-hover:opacity-100 transition-opacity" />
                    Transmit Request
                  </Button>
                  
                  <div className="text-center pt-4">
                    <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
                      Transmission is encrypted end-to-end (AES-256)
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
