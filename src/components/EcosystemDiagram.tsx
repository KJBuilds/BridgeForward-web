import { motion } from "framer-motion";
import { ShieldCheck, GraduationCap, Users, Heart, ArrowDown } from "lucide-react";

const nodes = [
  {
    icon: ShieldCheck,
    label: "Cyber Consulting",
    tag: "Revenue Engine",
    body: "Commercial cybersecurity advisory, testing, and executive services for organizations.",
  },
  {
    icon: GraduationCap,
    label: "Workforce Development",
    tag: "Mission",
    body: "Mentorship, internships, certifications, and career pathways into cybersecurity.",
  },
  {
    icon: Users,
    label: "CyberPlug Community",
    tag: "Ecosystem",
    body: "Professional networking, events, and ongoing visibility for emerging talent.",
  },
  {
    icon: Heart,
    label: "Legacy Initiatives",
    tag: "Impact",
    body: "Scholarships, the Legacy Home, and a future Community Cybersecurity Institute.",
  },
];

export default function EcosystemDiagram() {
  return (
    <section id="ecosystem" className="relative bg-bf-charcoal py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 hex-grid opacity-30" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[400px] glow-bg opacity-60" />

      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="font-display text-xs tracking-[0.35em] text-bf-blue uppercase mb-4">
            The BridgeForward Ecosystem
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-white leading-tight">
            Revenue drives <span className="gradient-text">opportunity</span>.<br />
            Opportunity creates <span className="gradient-text">impact</span>.
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {nodes.map((n, i) => (
            <div key={n.label}>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass-card rounded-2xl p-6 md:p-7 flex items-start gap-5"
              >
                <div className="shrink-0 w-12 h-12 rounded-xl gradient-brand-bg flex items-center justify-center shadow-glow">
                  <n.icon className="w-6 h-6 text-white" strokeWidth={2} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1.5 flex-wrap">
                    <h3 className="font-heading text-xl font-bold text-white">{n.label}</h3>
                    <span className="text-[10px] tracking-[0.25em] uppercase text-bf-blue border border-bf-blue/30 rounded-full px-2.5 py-0.5">
                      {n.tag}
                    </span>
                  </div>
                  <p className="text-silver text-sm leading-relaxed">{n.body}</p>
                </div>
              </motion.div>
              {i < nodes.length - 1 && (
                <div className="flex justify-center py-2">
                  <ArrowDown className="w-5 h-5 text-bf-purple/70" />
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="mt-14 text-center text-sm md:text-base text-silver max-w-2xl mx-auto">
          Every consulting engagement directly funds workforce development and community initiatives — a sustainable
          revenue-to-impact loop.
        </p>
      </div>
    </section>
  );
}
