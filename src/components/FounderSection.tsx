import { motion } from "framer-motion";
import { BriefcaseBusiness, BadgeCheck, Heart, Network } from "lucide-react";

const credentials = [
  {
    icon: BriefcaseBusiness,
    title: "Executive Leadership",
    description: "Experience spanning operations, risk, governance, and strategic transformation.",
    color: "text-primary",
    bg: "bg-purple-soft",
  },
  {
    icon: BadgeCheck,
    title: "Cyber & Compliance",
    description: "Focused on cybersecurity, digital resilience, governance, and readiness.",
    color: "text-secondary",
    bg: "bg-fuchsia-soft",
  },
  {
    icon: Heart,
    title: "Legacy & Family",
    description: "Rooted in honoring family legacy, preserving tradition, and creating generational opportunity.",
    color: "text-accent",
    bg: "bg-orange-soft",
  },
  {
    icon: Network,
    title: "Community Connection",
    description: "Committed to helping individuals and communities access networks, resources, and pathways forward.",
    color: "text-primary",
    bg: "bg-purple-soft",
  },
];

export default function FounderSection() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 md:grid-cols-2 md:items-center max-w-6xl mx-auto">
          {/* Image placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-border bg-gradient-to-br from-purple-soft via-background to-orange-soft p-6 shadow-card"
          >
            <div className="flex aspect-[4/5] items-center justify-center rounded-xl border-2 border-dashed border-border bg-card text-center text-muted-foreground text-sm">
              Founder image placeholder
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Founder</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              Building bridges between legacy, innovation, and opportunity.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4 text-lg">
              Bridge Forward Collective is founded on a clear belief: that encouragement, access,
              and intentional stewardship can change the trajectory of families and communities.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
              With a background in leadership, payment systems, cybersecurity, governance, and community impact,
              the founder created Bridge Forward as a legacy-driven platform to connect people to technology,
              resilience, belonging, and future possibility.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {credentials.map((c, i) => (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.08, duration: 0.4 }}
                  className="rounded-xl border border-border bg-card p-5 shadow-card hover:shadow-card-hover transition-all duration-300"
                >
                  <div className={`w-9 h-9 rounded-lg ${c.bg} flex items-center justify-center mb-3`}>
                    <c.icon className={`w-5 h-5 ${c.color}`} />
                  </div>
                  <p className="font-serif text-foreground text-base mb-1">{c.title}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{c.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
