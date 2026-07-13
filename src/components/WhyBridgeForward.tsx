import { motion } from "framer-motion";
import { ShieldCheck, Users, HeartHandshake } from "lucide-react";

const pillars = [
  {
    icon: ShieldCheck,
    title: "Professional credibility",
    description: "Services rooted in cybersecurity, governance, risk, compliance, and operational leadership.",
  },
  {
    icon: Users,
    title: "Community-rooted model",
    description: "A trust-based brand that makes cybersecurity and opportunity more accessible and relatable.",
  },
  {
    icon: HeartHandshake,
    title: "Sustainable impact",
    description: "Revenue-first strategy with a clear pathway to workforce development and scholarship support.",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true } as const,
};

export default function WhyBridgeForward() {
  return (
    <section className="relative py-24 md:py-32 bg-bf-charcoal overflow-hidden border-t border-[#E2E8F0]">
      <div className="absolute inset-0 hex-grid opacity-30" />
      <div className="container mx-auto px-4 md:px-6 relative">
        <motion.div {...fadeUp} transition={{ duration: 0.5 }} className="max-w-3xl mb-16">
          <p className="font-display text-xs tracking-[0.4em] text-bf-blue uppercase mb-4">Why Bridge Forward</p>
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-[#1E293B] leading-tight">
            Built to protect organizations<br />
            <span className="gradient-text">and expand futures</span>
          </h2>
        </motion.div>
        <div className="grid gap-7 md:grid-cols-3">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              {...fadeUp}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass-card rounded-2xl p-8 flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl gradient-brand-bg flex items-center justify-center mb-6 shadow-glow">
                <p.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-[#1E293B] mb-3">{p.title}</h3>
              <p className="text-silver leading-relaxed text-sm flex-1">{p.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
