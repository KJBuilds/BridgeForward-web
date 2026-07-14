import { motion } from "framer-motion";
import { GraduationCap, Home, HeartHandshake, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const initiatives = [
  {
    title: "Legacy of Encouragement Scholarship",
    icon: GraduationCap,
    description: "A scholarship honoring encouragement, belief in others, and community-mindedness — funded by consulting revenue.",
  },
  {
    title: "BridgeForward Legacy House",
    icon: Home,
    description: "A family-rooted legacy project preserving story, tradition, and generational continuity through tangible stewardship.",
  },
  {
    title: "Community Support",
    icon: HeartHandshake,
    description: "Resources, mentorship, and encouragement for individuals and families navigating opportunity gaps.",
  },
];

export default function LegacySection() {
  return (
    <section className="py-20 md:py-28 gradient-subtle-bg">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-accent mb-3">Community Impact</p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            Legacy initiatives funded by the work we do
          </h2>
          <p className="text-muted-foreground">
            Consulting revenue directly supports scholarship, legacy preservation, and community advancement
            — ensuring every engagement creates ripple effects beyond the business.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {initiatives.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border border-accent/15 text-center"
            >
              <div className="w-14 h-14 rounded-xl bg-orange-soft flex items-center justify-center mx-auto mb-6">
                <item.icon size={26} className="text-accent" />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/legacy-initiatives" className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:gap-3 transition-all">
            Learn about our legacy initiatives <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
