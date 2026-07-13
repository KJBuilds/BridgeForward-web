import { motion } from "framer-motion";
import { ShieldCheck, GraduationCap, Users, HeartHandshake, Eye, Heart } from "lucide-react";
import CTABanner from "@/components/CTABanner";
import { useEffect } from "react";

const pillars = [
  {
    icon: ShieldCheck,
    title: "Cybersecurity-led",
    body: "Cyber consulting is the revenue engine that supports the broader Bridge Forward ecosystem.",
  },
  {
    icon: GraduationCap,
    title: "Workforce-focused",
    body: "Career pathways, mentorship, and community connection help talent move into technology opportunities.",
  },
  {
    icon: Users,
    title: "Community-rooted",
    body: "Bridge Forward is grounded in encouragement, belief in others, and commitment to community impact.",
  },
  {
    icon: HeartHandshake,
    title: "Legacy-driven",
    body: "Scholarship, legacy home, and family-centered initiatives preserve story while building forward.",
  },
];

const values = [
  { title: "Integrity", body: "We do the right thing for clients, students, and community — always." },
  { title: "Excellence", body: "Executive-grade work informed by 20+ years of cybersecurity practice." },
  { title: "Opportunity", body: "We open doors that should not require knowing the right person to walk through." },
  { title: "Legacy", body: "Decisions made today are measured by impact a generation from now." },
];

const focus = [
  "Leadership",
  "Cybersecurity",
  "Governance",
  "Risk",
  "Operational Excellence",
  "Community Impact",
];

export default function About() {
  useEffect(() => {
    document.title = "About | Bridge Forward";
  }, []);

  return (
    <>
      <section className="relative overflow-hidden bg-background py-24 md:py-32">
        <div className="absolute inset-0 hex-grid opacity-50" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] glow-bg" />
        <div className="container mx-auto px-4 md:px-6 relative max-w-5xl">
          <p className="font-display text-xs tracking-[0.35em] text-bf-blue uppercase mb-5">About Bridge Forward</p>
          <h1 className="font-heading text-4xl md:text-6xl font-extrabold text-white leading-tight">
            A cybersecurity-led ecosystem built to <span className="gradient-text">secure businesses</span> and empower futures.
          </h1>
          <p className="mt-6 text-lg text-silver max-w-3xl leading-relaxed">
            Bridge Forward combines cybersecurity consulting, workforce development, and legacy-driven community initiatives into one model designed for resilience, opportunity, and generational impact.
          </p>
        </div>
      </section>

      {/* 4 Core Focus Areas Section */}
      <section className="bg-background py-16 md:py-24 border-t border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="glass-card rounded-2xl p-7 flex flex-col"
              >
                <div className="w-12 h-12 rounded-xl gradient-brand-bg flex items-center justify-center mb-6 shadow-glow">
                  <p.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-heading text-lg font-bold text-white mb-2">{p.title}</h3>
                <p className="text-sm text-silver leading-relaxed flex-1">{p.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Spotlight */}
      <section className="bg-bf-charcoal py-16 md:py-24 border-t border-white/5">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-2xl p-8 md:p-12"
          >
            <p className="font-display text-[11px] tracking-[0.3em] uppercase text-bf-blue mb-3">
              Founder
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-white mb-4">
              Kisha Jefferson
            </h2>
            <p className="text-silver text-base md:text-lg leading-relaxed mb-6">
              A cybersecurity executive with 20+ years of experience across enterprise security, governance,
              risk, and operational leadership. Kisha founded Bridge Forward to channel her practice into a
              sustainable model that strengthens organizations while opening cybersecurity careers to the next
              generation.
            </p>
            <div className="flex flex-wrap gap-2">
              {focus.map((f) => (
                <span
                  key={f}
                  className="text-xs tracking-wide uppercase text-silver border border-white/10 rounded-full px-3 py-1"
                >
                  {f}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision, and Values */}
      <section className="bg-background py-16 md:py-24 border-t border-white/5">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="glass-card rounded-2xl p-8">
              <Eye className="w-6 h-6 text-bf-blue mb-4" />
              <h3 className="font-heading text-xl font-bold text-white mb-2">Mission</h3>
              <p className="text-silver leading-relaxed">
                To strengthen organizations through trusted cybersecurity advisory while reinvesting revenue into
                workforce development and community legacy.
              </p>
            </div>
            <div className="glass-card rounded-2xl p-8">
              <ShieldCheck className="w-6 h-6 text-bf-blue mb-4" />
              <h3 className="font-heading text-xl font-bold text-white mb-2">Vision</h3>
              <p className="text-silver leading-relaxed">
                A cybersecurity ecosystem where commercial success directly funds the people, programs, and places
                that build the next generation of practitioners.
              </p>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-8">
            <Heart className="w-6 h-6 text-bf-blue mb-6" />
            <h3 className="font-heading text-xl font-bold text-white mb-6">Core Values</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {values.map((v) => (
                <div key={v.title}>
                  <h4 className="font-heading text-base font-bold text-white mb-1">{v.title}</h4>
                  <p className="text-sm text-silver leading-relaxed">{v.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        eyebrow="Connect"
        title="Connect with Bridge Forward"
        body="Whether you're exploring cybersecurity services, workforce programs, or legacy partnerships — we'd love to hear from you."
        primaryLabel="Get in Touch"
      />
    </>
  );
}
