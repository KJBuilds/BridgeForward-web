import { motion } from "framer-motion";
import { ShieldCheck, Search, FileCheck, Activity, AlertTriangle, UserCheck, Compass, ClipboardList } from "lucide-react";
import CTABanner from "@/components/CTABanner";
import { usePageMeta } from "@/hooks/use-page-meta";

const groups = [
  {
    title: "Security & Risk Advisory",
    icon: ShieldCheck,
    items: [
      { icon: Search, label: "Risk Assessments", body: "Identify exposure across people, process, and technology." },
      { icon: FileCheck, label: "Cybersecurity Program Reviews", body: "Evaluate maturity against recognized frameworks." },
      { icon: ClipboardList, label: "Governance Foundations", body: "Stand up the policies and structure your business needs." },
      { icon: Compass, label: "Strategic Security Advisory", body: "Ongoing guidance to align security with business goals." },
    ],
  },
  {
    title: "Testing & Readiness",
    icon: Activity,
    items: [
      { icon: AlertTriangle, label: "Penetration Testing", body: "Validate defenses with controlled, real-world attacks." },
      { icon: ClipboardList, label: "Tabletop Exercises", body: "Pressure-test incident response across leadership." },
      { icon: Activity, label: "Incident Readiness", body: "Prepare your team to respond decisively when it matters." },
    ],
  },
  {
    title: "Executive Advisory",
    icon: UserCheck,
    items: [
      { icon: UserCheck, label: "Virtual CISO (vCISO)", body: "Fractional security leadership without the full-time cost." },
      { icon: FileCheck, label: "Governance & Compliance Readiness", body: "Prepare for audits, certifications, and customer scrutiny." },
      { icon: Compass, label: "Security Strategy Roadmaps", body: "Multi-year plans tied to business outcomes." },
    ],
  },
];

export default function CyberConsulting() {
  usePageMeta(
    "Cyber Consulting Services | Bridge Forward",
    "Practical cybersecurity consulting — risk assessments, penetration testing, vCISO services, governance & compliance readiness, and tabletop exercises."
  );

  return (
    <>
      <section className="relative overflow-hidden bg-background py-24 md:py-32">
        <div className="absolute inset-0 hex-grid opacity-50" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] glow-bg" />
        <div className="container mx-auto px-4 md:px-6 relative max-w-5xl">
          <p className="font-display text-xs tracking-[0.35em] text-bf-blue uppercase mb-5">
            Bridge Forward Cyber Consulting
          </p>
          <h1 className="font-heading text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Cybersecurity services that <span className="gradient-text">strengthen resilience</span> and generate sustainable impact.
          </h1>
          <p className="mt-6 text-lg text-silver max-w-3xl leading-relaxed">
            Bridge Forward provides practical, strategic cybersecurity consulting services for organizations seeking accessible support in risk, governance, testing, and readiness.
          </p>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 space-y-20">
          {groups.map((g, gi) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl gradient-brand-bg flex items-center justify-center shadow-glow">
                  <g.icon className="w-6 h-6 text-white" />
                </div>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-white">{g.title}</h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {g.items.map((it) => (
                  <div key={it.label} className="glass-card rounded-2xl p-6">
                    <it.icon className="w-6 h-6 text-bf-blue mb-4" />
                    <h3 className="font-heading text-lg font-bold text-white mb-2">{it.label}</h3>
                    <p className="text-sm text-silver leading-relaxed">{it.body}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}

          {/* How We Help Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="pt-8 border-t border-white/5"
          >
            <h2 className="font-heading text-3xl font-bold text-white mb-10 text-center">How we help</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="glass-card rounded-2xl p-8">
                <h3 className="font-heading text-xl font-bold text-white mb-4">For small and growing businesses</h3>
                <p className="text-silver text-sm leading-relaxed">
                  We help businesses build stronger foundations in cybersecurity without requiring enterprise-sized budgets or internal teams.
                </p>
              </div>
              <div className="glass-card rounded-2xl p-8">
                <h3 className="font-heading text-xl font-bold text-white mb-4">For mission-driven organizations</h3>
                <p className="text-silver text-sm leading-relaxed">
                  We provide structured advisory and readiness support that helps organizations protect operations, improve confidence, and prepare for future growth.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Revenue to Impact Banner */}
          <div className="rounded-2xl border border-bf-purple/30 bg-bf-purple/5 p-8 md:p-10 text-center max-w-4xl mx-auto">
            <p className="font-display text-[11px] tracking-[0.35em] text-bf-blue uppercase mb-3">
              Revenue Engine
            </p>
            <h3 className="font-heading text-2xl font-bold text-white mb-4">
              Cyber consulting is the revenue engine behind the Bridge Forward ecosystem
            </h3>
            <p className="text-silver text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
              By partnering with Bridge Forward for cybersecurity services, organizations strengthen their own resilience while helping fund workforce development and legacy initiatives.
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        eyebrow="Resilience"
        title="Let's build your cybersecurity resilience"
        body="From risk assessments to compliance readiness — Bridge Forward provides the accessible, expert guidance your organization needs."
        primaryLabel="Request a Consultation"
      />
    </>
  );
}
