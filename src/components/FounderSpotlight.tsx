import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true } as const,
};

export default function FounderSpotlight() {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-bf-charcoal overflow-hidden">
      <div className="absolute inset-0 hex-grid opacity-40" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-bf-purple/10 rounded-full blur-[140px]" />

      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="grid gap-14 md:grid-cols-5 items-center">
          <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="md:col-span-2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 gradient-brand-bg rounded-full blur-[60px] opacity-60 animate-pulse-glow" />
              <div className="relative w-full h-full rounded-full p-[3px] gradient-brand-bg shadow-glow">
                <div className="w-full h-full rounded-full bg-bf-black flex items-center justify-center overflow-hidden">
                  <span className="font-display text-7xl md:text-8xl gradient-text">KJ</span>
                </div>
              </div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-bf-black border border-bf-blue/40 text-xs font-semibold text-bf-blue tracking-wider">
                FOUNDER & CEO
              </div>
            </div>
          </motion.div>

          <motion.div {...fadeUp} transition={{ delay: 0.15, duration: 0.6 }} className="md:col-span-3">
            <p className="font-display text-xs tracking-[0.4em] text-bf-blue uppercase mb-4">Founder Spotlight</p>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-3">
              KISHA <span className="gradient-text">JEFFERSON</span>
            </h2>
            <p className="text-silver text-sm uppercase tracking-[0.3em] mb-6">Founder & CEO</p>
            <p className="text-lg text-silver leading-relaxed mb-8">
              BridgeForward advances cybersecurity by helping organizations understand risk, strengthen
              defenses, and build resilient security programs — while creating pathways for the next
              generation of cyber professionals through CyberPlug.
            </p>
            <Link
              to="/about"
              className="btn-outline-silver inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold"
            >
              Read the Full Story <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
