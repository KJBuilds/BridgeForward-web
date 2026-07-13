import { motion } from "framer-motion";
import { Landmark, HeartPulse, Building2, Briefcase, HandHeart, GraduationCap } from "lucide-react";

const industries = [
  { icon: Landmark, label: "Financial Services" },
  { icon: HeartPulse, label: "Healthcare" },
  { icon: Building2, label: "Government" },
  { icon: Briefcase, label: "Small Business" },
  { icon: HandHeart, label: "Nonprofits" },
  { icon: GraduationCap, label: "Education" },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true } as const,
};

export default function Industries() {
  return (
    <section id="industries" className="relative py-24 md:py-32 bg-bf-charcoal overflow-hidden">
      <div className="absolute inset-0 hex-grid opacity-40" />
      <div className="container mx-auto px-4 md:px-6 relative">
        <motion.div {...fadeUp} transition={{ duration: 0.5 }} className="max-w-3xl mx-auto text-center mb-14">
          <p className="font-display text-xs tracking-[0.4em] text-bf-blue uppercase mb-4">Industries</p>
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-white mb-4">
            Trusted across <span className="gradient-text">regulated sectors</span>.
          </h2>
          <p className="text-lg text-silver leading-relaxed">
            Tailored cybersecurity strategy for the industries where stakes are highest.
          </p>
        </motion.div>

        <div className="grid gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {industries.map((it, i) => (
            <motion.div
              key={it.label}
              {...fadeUp}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="glass-card rounded-2xl p-6 text-center flex flex-col items-center gap-3"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-bf-purple/30 to-bf-blue/20 border border-white/10">
                <it.icon className="w-6 h-6 text-bf-blue" />
              </div>
              <p className="font-heading text-sm font-semibold text-white">{it.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
