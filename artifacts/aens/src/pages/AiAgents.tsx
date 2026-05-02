import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CrosshairOverlay, SectionDivider } from "@/components/ui/SectionElements";
import {
  CrosshairIcon,
  GridMatrixIcon,
  HexagonIcon,
  NeuralDiagramIcon,
  OrbitalRingIcon,
  ShieldNodeIcon,
} from "@/components/icons";
import { useSeo } from "@/hooks/use-seo";
import { ROUTE_SEO } from "@/lib/seo";

const capabilities = [
  {
    icon: OrbitalRingIcon,
    title: "Plan",
    description:
      "Agents decompose business goals into ordered actions, required tools, approvals, and fallback paths.",
  },
  {
    icon: GridMatrixIcon,
    title: "Use Tools",
    description:
      "Native API execution across CRMs, data warehouses, ticketing, finance systems, Slack, and custom internal software.",
  },
  {
    icon: ShieldNodeIcon,
    title: "Stay Governed",
    description:
      "Human-in-the-loop approvals, role permissions, policy checks, and replayable audit trails on every critical action.",
  },
  {
    icon: NeuralDiagramIcon,
    title: "Report",
    description:
      "Executives and operators get live status, exception paths, outcome summaries, and continuous improvement signals.",
  },
];

const workflows = [
  "Sales operations and CRM enrichment",
  "Support triage, routing, and resolution drafting",
  "Finance reconciliation and exception review",
  "Knowledge retrieval over private enterprise data",
  "Security review, media verification, and deepfake triage",
  "Executive reporting from live operational systems",
];

export default function AiAgents() {
  useSeo(ROUTE_SEO["/ai-agents"]);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full flex flex-col bg-background"
    >
      <section className="relative overflow-hidden border-b border-border bg-background pt-40 pb-28">
        <CrosshairOverlay />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_35%,rgba(225,230,240,0.1)_0%,transparent_58%)] pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl">
            <motion.div
              initial={{ opacity: 0, x: -18 }}
              animate={{ opacity: 1, x: 0 }}
              className="mb-8 flex items-center gap-4"
            >
              <div className="h-px w-10 bg-primary" />
              <span className="font-mono text-[10px] font-medium uppercase tracking-[0.26em] text-primary">
                // AENS AI AGENTS
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-8 max-w-5xl font-serif text-5xl font-bold leading-[0.98] text-foreground md:text-7xl lg:text-[6.8rem]"
            >
              Autonomous AI Agents <br />
              <span className="italic font-normal text-muted-foreground">
                for enterprise operations.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="max-w-3xl border-l border-primary/50 pl-6 font-sans text-lg leading-relaxed text-muted-foreground md:text-xl"
            >
              AENS builds AI agents that plan, decide, execute, and report
              across your business systems. Every agent is engineered for
              production B2B work: governed, auditable, approval-aware, and
              connected to the tools your teams already use.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.32 }}
              className="mt-10 flex flex-col gap-3 sm:flex-row"
            >
              <Link href="/contact">
                <Button className="h-12 rounded-none bg-primary px-8 font-mono text-[11px] uppercase tracking-[0.24em] text-primary-foreground hover:bg-primary/90">
                  Build AI Agents
                </Button>
              </Link>
              <Link href="/solutions">
                <Button
                  variant="outline"
                  className="h-12 rounded-none border-border px-8 font-mono text-[11px] uppercase tracking-[0.24em] text-foreground hover:border-primary/60 hover:bg-primary/5"
                >
                  View All Solutions
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative border-b border-border bg-card py-20 md:py-28">
        <SectionDivider id="01" label="AGENT OPERATING MODEL" />
        <div className="container mx-auto px-6">
          <div className="grid gap-px border border-border/60 bg-border/60 p-px md:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((capability, index) => (
              <motion.article
                key={capability.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="group bg-background p-8 transition-colors hover:bg-muted/10"
              >
                <capability.icon className="mb-8 h-8 w-8 text-muted-foreground transition-colors group-hover:text-primary" />
                <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.24em] text-primary">
                  0{index + 1}
                </div>
                <h2 className="mb-4 font-serif text-3xl font-bold text-foreground">
                  {capability.title}
                </h2>
                <p className="font-sans text-sm leading-relaxed text-muted-foreground">
                  {capability.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative border-b border-border bg-background py-20 md:py-28">
        <SectionDivider id="02" label="ENTERPRISE WORKFLOWS" />
        <div className="container mx-auto px-6">
          <div className="grid gap-14 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <div className="sticky top-28 space-y-6">
                <HexagonIcon className="h-12 w-12 text-primary" />
                <h2 className="font-serif text-4xl font-bold leading-tight text-foreground md:text-5xl">
                  Agentic automation that can survive enterprise reality.
                </h2>
                <p className="border-l border-primary/40 pl-5 font-sans text-base leading-relaxed text-muted-foreground md:text-lg">
                  AENS does not ship generic chatbots. We architect agents
                  around your data, permissions, systems, escalation paths, and
                  operational risk.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid gap-4 sm:grid-cols-2">
                {workflows.map((workflow, index) => (
                  <motion.div
                    key={workflow}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="border border-border/70 bg-card/70 p-6"
                  >
                    <div className="mb-5 flex items-center justify-between">
                      <CrosshairIcon className="h-4 w-4 text-primary/70" />
                      <span className="font-mono text-[10px] tracking-[0.22em] text-muted-foreground">
                        AGENT.0{index + 1}
                      </span>
                    </div>
                    <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-foreground">
                      {workflow}
                    </h3>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-card py-24 md:py-32">
        <CrosshairOverlay />
        <div className="container mx-auto px-6 text-center">
          <ShieldNodeIcon className="mx-auto mb-8 h-14 w-14 text-primary" />
          <h2 className="mx-auto mb-6 max-w-4xl font-serif text-4xl font-bold leading-tight text-foreground md:text-6xl">
            Build AENS AI agents for your operation.
          </h2>
          <p className="mx-auto mb-10 max-w-2xl font-sans text-lg leading-relaxed text-muted-foreground">
            Tell us what the agent must own, which systems it can touch, and
            where humans must approve. AENS turns that into a governed
            production workflow.
          </p>
          <Link href="/contact">
            <Button className="h-14 rounded-none bg-primary px-10 font-mono text-xs uppercase tracking-[0.24em] text-primary-foreground hover:bg-primary/90">
              Talk to AENS
            </Button>
          </Link>
        </div>
      </section>
    </motion.main>
  );
}
