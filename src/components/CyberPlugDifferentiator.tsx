import { motion } from "framer-motion";
import { Plug, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true } as const,
};

export default function CyberPlugDifferentiator() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 gradient-cta-bg" />
      <div className="absolute inset-0 circuit-bg opacity-40" />
      <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-bf-magenta/15 rounded-full blur-[140px]" />
      <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-bf-blue/15 rounded-full blur-[140px]" />

      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="grid gap-14 md:grid-cols-2 md:items-center">
          <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
            <p className="font-display text-xs tracking-[0.4em] text-bf-magenta uppercase mb-4">
              CyberPlug Initiative
            </p>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              Opportunity meets <span className="gradient-text">talent</span>.
            </h2>
            <p className="text-lg text-silver leading-relaxed mb-6">
              BridgeForward's workforce development initiative dedicated to building the next
              generation of cybersecurity professionals through training, mentorship, and access.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-silver mb-8">
              {[
                "Breaking into cybersecurity",
                "Certifications",
                "Career guidance",
                "Training resources",
                "Community programs",
                "AI and cybersecurity education",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full gradient-brand-bg" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              to="/workforce-development"
              className="btn-outline-silver inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold"
            >
              Learn More <ArrowRight size={16} />
            </Link>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex items-center justify-center"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 gradient-brand-bg rounded-full blur-[80px] opacity-50 animate-pulse-glow" />
              <div className="relative w-full h-full rounded-3xl glass-card flex items-center justify-center">
                <div className="absolute inset-4 rounded-2xl border border-bf-blue/30" />
                <div className="absolute inset-8 rounded-xl border border-bf-purple/20" />
                <Plug className="w-32 h-32 text-white relative z-10" strokeWidth={1.2} />
                <p className="absolute bottom-8 font-display text-sm tracking-[0.3em] text-bf-blue">
                  CYBERPLUG
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
