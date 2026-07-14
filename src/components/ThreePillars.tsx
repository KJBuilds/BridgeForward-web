import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ShieldCheck, GraduationCap, Heart, ArrowRight } from "lucide-react";

const pillars = [
  {
    icon: ShieldCheck,
    eyebrow: "REVENUE ENGINE",
    title: "Cyber Consulting",
    body: "Risk assessments, penetration testing, vCISO services, governance and compliance readiness, and tabletop exercises.",
    href: "/cyber-consulting",
  },
  {
    icon: GraduationCap,
    eyebrow: "CAREER PATHWAYS",
    title: "Workforce Development",
    body: "CyberPlug community, training, mentorship, internships, and exposure to technology careers and professional ecosystems.",
    href: "/workforce-development",
  },
  {
    icon: Heart,
    eyebrow: "SCHOLARSHIP & COMMUNITY",
    title: "Legacy Initiatives",
    body: "Scholarship program, legacy home, and community support efforts that preserve family story, expand opportunity, and remain generational continuity.",
    href: "/legacy-initiatives",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true } as const,
};

export default function ThreePillars() {
  return (
    <section className="relative bg-background py-24 md:py-32 border-t border-white/5">
      <div className="absolute inset-0 hex-grid opacity-30" />
      <div className="container mx-auto px-4 md:px-6 relative">
        <motion.div {...fadeUp} transition={{ duration: 0.5 }} className="max-w-3xl mb-16">
          <p className="font-display text-xs tracking-[0.35em] text-bf-blue uppercase mb-4">
            THE BRIDGE FORWARD ECOSYSTEM
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-white leading-tight">
            Revenue drives opportunity.<br />
            <span className="gradient-text">Opportunity creates impact.</span>
          </h2>
          <p className="mt-5 text-lg text-silver leading-relaxed max-w-2xl">
            BridgeForward is structured so that cybersecurity consulting funds workforce development and legacy-centered community initiatives.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              {...fadeUp}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass-card rounded-2xl p-8 flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl gradient-brand-bg flex items-center justify-center mb-6 shadow-glow">
                <p.icon className="w-6 h-6 text-white" strokeWidth={2} />
              </div>
              <p className="text-[11px] tracking-[0.3em] uppercase text-bf-blue mb-2 font-semibold">{p.eyebrow}</p>
              <h3 className="font-heading text-2xl font-bold text-white mb-3">{p.title}</h3>
              <p className="text-silver text-sm leading-relaxed mb-6 flex-1">{p.body}</p>
              <Link
                to={p.href}
                className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-bf-blue transition-colors mt-auto"
              >
                Learn more <ArrowRight size={14} />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Consulting Revenue Banner */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 rounded-2xl border border-white/5 gradient-brand-bg p-8 md:p-10 text-left max-w-5xl mx-auto shadow-glow"
        >
          <h3 className="font-heading text-xl md:text-2xl font-bold text-white mb-3">
            Consulting Revenue Funds Scholarships & Workforce Programs
          </h3>
          <p className="text-white/90 text-sm md:text-base leading-relaxed">
            BridgeForward uses consulting revenue to build a sustainable model where business value and community impact reinforce one another.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
