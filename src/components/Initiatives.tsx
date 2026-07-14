import { motion } from "framer-motion";
import { Laptop, House, GraduationCap, ArrowRight } from "lucide-react";

const initiatives = [
  {
    title: "BridgeForward Tech Center",
    icon: Laptop,
    color: "primary" as const,
    description:
      "Cybersecurity, AI, governance, compliance, and tech pathway development for individuals and small businesses.",
  },
  {
    title: "BridgeForward Legacy House",
    icon: House,
    color: "accent" as const,
    description:
      "A legacy-centered home project rooted in belonging, family tradition, stewardship, and generational continuity.",
  },
  {
    title: "BridgeForward Legacy of Encouragement Scholarship",
    icon: GraduationCap,
    color: "secondary" as const,
    description:
      "A scholarship honoring a legacy of encouragement, belief in others, and love for family and community.",
  },
];

const colorMap = {
  primary: { bg: "bg-purple-soft", text: "text-primary", border: "border-primary/20" },
  secondary: { bg: "bg-fuchsia-soft", text: "text-secondary", border: "border-secondary/20" },
  accent: { bg: "bg-orange-soft", text: "text-accent", border: "border-accent/20" },
};

export default function Initiatives() {
  return (
    <section id="initiatives" className="py-20 md:py-28 gradient-subtle-bg">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-secondary mb-3">The Portfolio</p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            Three initiatives. One unified purpose.
          </h2>
          <p className="text-muted-foreground">
            BridgeForward Collective brings together technology empowerment, legacy preservation,
            and educational encouragement into a single ecosystem for generational advancement.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {initiatives.map((item, i) => {
            const c = colorMap[item.color];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className={`bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border ${c.border} group cursor-pointer`}
              >
                <div className={`w-14 h-14 rounded-xl ${c.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <item.icon size={26} className={c.text} />
                </div>
                <h3 className="font-serif text-xl text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">{item.description}</p>
                <span className={`inline-flex items-center gap-1 text-sm font-medium ${c.text} group-hover:gap-2 transition-all`}>
                  Learn more <ArrowRight size={16} />
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
