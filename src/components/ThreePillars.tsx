import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ShieldCheck, GraduationCap, Heart, ArrowRight } from "lucide-react";

const pillars = [
  {
    icon: ShieldCheck,
    eyebrow: "Our Business",
    title: "Cyber Consulting",
    body: "Protect organizations through practical cybersecurity advisory, testing, and executive guidance.",
    href: "/cyber-consulting",
  },
  {
    icon: GraduationCap,
    eyebrow: "Our Mission",
    title: "Workforce Development",
    body: "Expand access to technology careers through mentorship, internships, and professional development.",
    href: "/workforce-development",
  },
  {
    icon: Heart,
    eyebrow: "Our Legacy",
    title: "Legacy Initiatives",
    body: "Create generational opportunity through scholarships and community investment.",
    href: "/legacy-initiatives",
  },
];

export default function ThreePillars() {
  return (
    <section className="relative bg-background py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mb-16">
          <p className="font-display text-xs tracking-[0.35em] text-bf-blue uppercase mb-4">
            Three Pillars · One Ecosystem
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-white leading-tight">
            Strengthening organizations.<br />
            <span className="gradient-text">Creating the next generation of talent.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass-card rounded-2xl p-8 flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl gradient-brand-bg flex items-center justify-center mb-6 shadow-glow">
                <p.icon className="w-6 h-6 text-white" strokeWidth={2} />
              </div>
              <p className="text-[11px] tracking-[0.3em] uppercase text-bf-blue mb-2">{p.eyebrow}</p>
              <h3 className="font-heading text-2xl font-bold text-white mb-3">{p.title}</h3>
              <p className="text-silver text-sm leading-relaxed mb-6 flex-1">{p.body}</p>
              <Link
                to={p.href}
                className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-bf-blue transition-colors"
              >
                Learn more <ArrowRight size={14} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
