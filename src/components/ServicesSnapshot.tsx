import { motion } from "framer-motion";
import { ShieldCheck, Target, HeartHandshake, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const pillars = [
  {
    title: "Security & Risk Advisory",
    icon: ShieldCheck,
    description: "Risk assessments, cyber program reviews, governance foundations, and strategic guidance tailored to organizational maturity.",
  },
  {
    title: "Testing & Readiness",
    icon: Target,
    description: "Penetration testing, tabletop exercises, and readiness engagements that help organizations identify vulnerabilities and strengthen response capability.",
  },
  {
    title: "Sustainable Impact Model",
    icon: HeartHandshake,
    description: "Consulting services are the revenue engine that supports BridgeForward's broader workforce and legacy initiatives.",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true } as const,
};

export default function ServicesSnapshot() {
  return (
    <section id="services" className="relative py-24 md:py-32 bg-white overflow-hidden border-t border-[#E2E8F0]">
      <div className="absolute inset-0 hex-grid opacity-60" />
      <div className="container mx-auto px-4 md:px-6 relative">
        <motion.div {...fadeUp} transition={{ duration: 0.5 }} className="max-w-3xl mb-16">
          <p className="font-display text-xs tracking-[0.4em] text-bf-blue uppercase mb-4">Cyber Consulting</p>
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-[#1E293B] mb-5 leading-tight">
            Cybersecurity services designed to <span className="gradient-text">generate revenue</span> and strengthen resilience
          </h2>
          <p className="text-lg text-[#475569] leading-relaxed">
            BridgeForward helps businesses improve cyber posture, clarify governance, prepare for risk, and build confidence in their digital operations through consulting and advisory services.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
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
              <p className="text-sm text-[#475569] leading-relaxed mb-6 flex-1">{p.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div {...fadeUp} transition={{ delay: 0.3, duration: 0.5 }} className="mt-14 text-left">
          <Link
            to="/cyber-consulting"
            className="btn-brand inline-flex items-center gap-2 rounded-full px-8 h-12 text-base font-semibold"
          >
            Explore Cyber Consulting <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
