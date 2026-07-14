import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24">
      <div className="absolute inset-0 hex-grid opacity-60" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[600px] glow-bg" />
      <div
        className="absolute -bottom-32 -right-32 w-[520px] h-[520px] rounded-full blur-[140px] opacity-30"
        style={{ background: "linear-gradient(135deg, #5B2D90, #EC4899)" }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center rounded-full border border-[#5B2D90]/20 bg-[#F5F0FF] px-4 py-1 text-sm font-medium mb-6 uppercase"
              style={{ color: "#5B2D90" }}
            >
              Cybersecurity • Workforce Development • Community Impact
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight"
              style={{ color: "#1E293B" }}
            >
              Securing businesses.<br />
              <span className="gradient-text">Empowering futures.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-6 text-lg leading-relaxed max-w-2xl"
              style={{ color: "#475569" }}
            >
              BridgeForward is a cybersecurity-led ecosystem that helps organizations strengthen digital resilience through consulting services while reinvesting revenue into workforce development, scholarships, and legacy-centered community initiatives.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Link
                to="/cyber-consulting"
                className="btn-brand inline-flex items-center justify-center gap-2 rounded-full px-8 h-12 text-base font-semibold"
              >
                Explore Cyber Consulting
              </Link>
              <Link
                to="/contact"
                className="btn-outline-silver inline-flex items-center justify-center gap-2 rounded-full px-8 h-12 text-base font-semibold"
              >
                Request a Consultation
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="rounded-2xl border border-[#E2E8F0] bg-white p-6 md:p-8 shadow-card"
          >
            <div className="rounded-xl gradient-hero-bg p-6 text-white">
              <p className="text-xs uppercase tracking-[0.2em] opacity-80 font-semibold mb-2">Revenue Engine</p>
              <h2 className="font-heading text-2xl font-bold mb-3">BridgeForward Cyber Consulting</h2>
              <p className="text-sm opacity-90 leading-relaxed">
                Practical cybersecurity and resilience services for organizations that need accessible, strategic, and trusted support.
              </p>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "Risk Assessments",
                "Penetration Testing",
                "vCISO Services",
                "Governance & Compliance Readiness",
                "Tabletop Exercises",
                "Cybersecurity Program Reviews",
              ].map((service) => (
                <div
                  key={service}
                  className="rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3 text-sm font-medium hover:border-[#5B2D90]/30 transition-all text-[#1E293B]"
                >
                  {service}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center text-xs tracking-[0.3em] uppercase hidden md:block"
          style={{ color: "#64748B" }}
        >
          Cybersecurity is our business · Workforce is our mission · Community is our legacy
        </motion.p>
      </div>
    </section>
  );
}
