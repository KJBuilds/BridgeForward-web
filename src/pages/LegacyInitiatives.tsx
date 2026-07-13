import { motion } from "framer-motion";
import { GraduationCap, Home, Users, Building2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import CTABanner from "@/components/CTABanner";
import { useEffect } from "react";

const sections = [
  {
    icon: GraduationCap,
    title: "Scholarship Program",
    body: "A scholarship initiative rooted in encouragement, opportunity, and belief in others — especially students pursuing future-focused pathways.",
  },
  {
    icon: Home,
    title: "Legacy Home",
    body: "A family-rooted project designed to preserve belonging, continue traditions, and create generational continuity through stewardship.",
  },
  {
    icon: Users,
    title: "Community Support",
    body: "Programs and efforts designed to give back, encourage others, and create visible impact across schools, families, and the community.",
  },
  {
    icon: Building2,
    title: "Future Community Cybersecurity Institute",
    body: "A long-term vision for a physical institute combining cybersecurity education, business resilience, and innovation.",
    href: "/institute",
  },
];

export default function LegacyInitiatives() {
  useEffect(() => {
    document.title = "Legacy Initiatives | Bridge Forward";
  }, []);

  return (
    <>
      <section className="relative overflow-hidden bg-background py-24 md:py-32">
        <div className="absolute inset-0 hex-grid opacity-50" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] glow-bg" />
        <div className="container mx-auto px-4 md:px-6 relative max-w-5xl">
          <p className="font-display text-xs tracking-[0.35em] text-bf-blue uppercase mb-5">
            Bridge Forward Legacy Initiatives
          </p>
          <h1 className="font-heading text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Legacy-centered initiatives that <span className="gradient-text">preserve story</span>, expand opportunity, and strengthen community.
          </h1>
          <p className="mt-6 text-lg text-silver max-w-3xl leading-relaxed">
            Bridge Forward Legacy Initiatives convert encouragement, memory, and stewardship into visible pathways for generational impact.
          </p>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 space-y-20">
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {sections.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass-card rounded-2xl p-8 flex flex-col"
              >
                <div className="w-12 h-12 rounded-xl gradient-brand-bg flex items-center justify-center mb-5 shadow-glow">
                  <s.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-heading text-xl font-bold text-white mb-3">{s.title}</h3>
                <p className="text-sm text-silver leading-relaxed flex-1">{s.body}</p>
                {s.href && (
                  <Link
                    to={s.href}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-bf-blue transition-colors"
                  >
                    Learn more <ArrowRight size={14} />
                  </Link>
                )}
              </motion.div>
            ))}
          </div>

          {/* Funded Through Purpose-Driven Growth */}
          <div className="rounded-2xl border border-bf-blue/30 bg-bf-blue/5 p-8 md:p-10 text-center max-w-4xl mx-auto">
            <p className="font-display text-[11px] tracking-[0.35em] text-bf-blue uppercase mb-3">
              Funding Source
            </p>
            <h3 className="font-heading text-2xl font-bold text-white mb-4">
              Funded through purpose-driven growth
            </h3>
            <p className="text-silver text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
              These initiatives are part of the broader Bridge Forward ecosystem and are strengthened by the revenue generated through cybersecurity consulting services.
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        eyebrow="Legacy"
        title="Interested in our legacy initiatives?"
        body="Whether you want to support the scholarship, learn about the Legacy Home, or explore partnership — we'd love to hear from you."
        primaryLabel="Get in Touch"
        primaryHref="/contact"
      />
    </>
  );
}
