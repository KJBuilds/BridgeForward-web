import { GraduationCap, ShieldCheck, FlaskConical, Rocket, Calendar, Users } from "lucide-react";
import CTABanner from "@/components/CTABanner";
import { usePageMeta } from "@/hooks/use-page-meta";

const pillars = [
  { icon: GraduationCap, title: "Cybersecurity Education", body: "Hands-on training programs from foundational to advanced practitioner levels." },
  { icon: ShieldCheck, title: "Business Resilience Services", body: "Accessible cybersecurity advisory for local small and midsize businesses." },
  { icon: FlaskConical, title: "Innovation Lab", body: "Applied research, tool development, and emerging-technology evaluation." },
  { icon: Rocket, title: "Workforce Accelerator", body: "Cohort-based pipelines from learner to employed practitioner." },
  { icon: Calendar, title: "Professional Events", body: "Conferences, summits, and community gatherings hosted on-site." },
  { icon: Users, title: "Community Collaboration", body: "A shared space for partners, educators, and civic leaders." },
];

const phases = [
  { phase: "Phase 1", title: "Foundation", body: "Establish consulting revenue base and scholarship pilot." },
  { phase: "Phase 2", title: "Expansion", body: "Grow workforce programs, internships, and CyberPlug community." },
  { phase: "Phase 3", title: "Institute", body: "Stand up physical campus combining education, advisory, and innovation." },
];

export default function Institute() {
  usePageMeta(
    "Community Cybersecurity Institute | BridgeForward",
    "BridgeForward's long-term vision for a physical Community Cybersecurity Institute combining education, business resilience advisory, and workforce acceleration."
  );

  return (
    <>
      <section className="relative overflow-hidden bg-background py-24 md:py-32">
        <div className="absolute inset-0 hex-grid opacity-50" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] glow-bg" />
        <div className="container mx-auto px-4 md:px-6 relative max-w-5xl">
          <p className="font-display text-xs tracking-[0.35em] text-bf-blue uppercase mb-5">
            Long-Term Vision
          </p>
          <h1 className="font-heading text-4xl md:text-6xl font-extrabold text-white leading-tight">
            The Future <span className="gradient-text">Community Cybersecurity Institute</span>.
          </h1>
          <p className="mt-6 text-lg text-silver max-w-3xl leading-relaxed">
            BridgeForward is building toward a physical institute anchored in Tulsa's innovation ecosystem —
            combining cybersecurity education, business resilience services, and an innovation lab under one roof.
          </p>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-heading text-2xl md:text-4xl font-extrabold text-white mb-10">
            What the Institute will offer
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((p) => (
              <div key={p.title} className="glass-card rounded-2xl p-7">
                <div className="w-11 h-11 rounded-xl gradient-brand-bg flex items-center justify-center mb-5 shadow-glow">
                  <p.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-heading text-lg font-bold text-white mb-2">{p.title}</h3>
                <p className="text-sm text-silver leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bf-charcoal py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-heading text-2xl md:text-4xl font-extrabold text-white mb-10">
            A phased path forward
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {phases.map((p, i) => (
              <div key={p.phase} className="glass-card rounded-2xl p-7">
                <p className="font-display text-[11px] tracking-[0.3em] uppercase text-bf-blue mb-3">{p.phase}</p>
                <h3 className="font-heading text-xl font-bold text-white mb-2">{p.title}</h3>
                <p className="text-sm text-silver leading-relaxed">{p.body}</p>
                <div className="mt-5 text-3xl font-display gradient-text">{i + 1}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        eyebrow="Partners Welcome"
        title="Help us build Tulsa's cybersecurity future."
        body="We're seeking corporate, government, grant, and community partners aligned with the Institute vision."
        primaryLabel="Become a Partner"
        secondaryLabel="See the Ecosystem"
      />
    </>
  );
}
