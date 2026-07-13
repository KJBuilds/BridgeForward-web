import { motion } from "framer-motion";
import { ShieldCheck, Briefcase, HeartHandshake, ArrowRight } from "lucide-react";

const pillars = [
  {
    icon: ShieldCheck,
    label: "Revenue Engine",
    title: "Cyber Consulting",
    description: "Risk assessments, penetration testing, vCISO services, GRC readiness, and program reviews.",
    glowColor: "bg-primary/10",
    iconClass: "text-primary",
    borderClass: "border-primary/20",
  },
  {
    icon: Briefcase,
    label: "Workforce Arm",
    title: "CyberPlug",
    description: "Training, mentorship, community, and career pathways into cybersecurity and AI.",
    glowColor: "bg-secondary/10",
    iconClass: "text-secondary",
    borderClass: "border-secondary/20",
  },
  {
    icon: HeartHandshake,
    label: "Community Impact",
    title: "Legacy Initiatives",
    description: "Scholarships, legacy projects, and community support powered by consulting revenue.",
    glowColor: "bg-accent/10",
    iconClass: "text-accent",
    borderClass: "border-accent/20",
  },
];

export default function RevenueEcosystem() {
  return (
    <section className="py-20 md:py-28 bg-card relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[100px]" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mb-12">
          <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-3">
            The Ecosystem
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Revenue drives opportunity. Opportunity creates impact.
          </h2>
          <p className="text-lg text-muted-foreground">
            Cybersecurity consulting fuels workforce development and legacy-centered community initiatives.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`relative rounded-xl border ${pillar.borderClass} bg-background p-8`}
            >
              <pillar.icon className={`h-8 w-8 ${pillar.iconClass}`} />
              <p className={`mt-4 text-xs font-semibold tracking-widest uppercase ${pillar.iconClass}`}>
                {pillar.label}
              </p>
              <h3 className="mt-2 font-bold text-xl text-foreground">{pillar.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{pillar.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-10 rounded-xl gradient-hero-bg p-8 text-primary-foreground"
        >
          <div className="flex items-start gap-4">
            <ArrowRight className="mt-1 h-6 w-6 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-xl">Consulting Revenue → Scholarships & Workforce Programs</h3>
              <p className="mt-2 text-primary-foreground/80 leading-relaxed">
                Every engagement strengthens organizations while building a sustainable model for community advancement.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
