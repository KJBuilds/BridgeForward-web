import EcosystemDiagram from "@/components/EcosystemDiagram";
import CTABanner from "@/components/CTABanner";
import { TrendingUp, Building2, Users, Landmark, HandCoins, Briefcase } from "lucide-react";
import { usePageMeta } from "@/hooks/use-page-meta";

const metrics = [
  { value: "100%", label: "Revenue Reinvested into Workforce & Legacy Programs" },
  { value: "20+", label: "Years of Cybersecurity Leadership Backing the Model" },
  { value: "1", label: "Future Community Cybersecurity Institute in Development" },
];

const partners = [
  { icon: Briefcase, title: "Corporate Partnerships", body: "Sponsor scholarships, hire emerging talent, and co-deliver community programming." },
  { icon: Landmark, title: "Government Partnerships", body: "Workforce, economic development, and digital resilience collaborations." },
  { icon: HandCoins, title: "Grant Partnerships", body: "Aligned funding for workforce, equity, and cybersecurity initiatives." },
];

const impact = [
  { icon: TrendingUp, title: "Revenue Engine", body: "Cybersecurity consulting services generate sustainable, recurring revenue." },
  { icon: Building2, title: "Economic Development", body: "Local talent pipelines feed regional employer demand for security roles." },
  { icon: Users, title: "Workforce Impact", body: "Mentorship, internships, and certifications create measurable career outcomes." },
];

export default function Investor() {
  usePageMeta(
    "Investors & Partners | BridgeForward",
    "Explore corporate, government, and grant partnership opportunities with BridgeForward's cybersecurity-led social enterprise model."
  );

  return (
    <>
      <section className="relative overflow-hidden bg-background py-24 md:py-32">
        <div className="absolute inset-0 hex-grid opacity-50" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] glow-bg" />
        <div className="container mx-auto px-4 md:px-6 relative max-w-5xl">
          <p className="font-display text-xs tracking-[0.35em] text-bf-blue uppercase mb-5">
            Investors & Partners
          </p>
          <h1 className="font-heading text-4xl md:text-6xl font-extrabold text-white leading-tight">
            A revenue-funded <span className="gradient-text">community impact model</span>.
          </h1>
          <p className="mt-6 text-lg text-silver max-w-3xl leading-relaxed">
            BridgeForward operates as a cybersecurity consulting firm whose commercial success directly funds
            workforce development and community legacy programs — a self-sustaining, scalable model for
            measurable impact.
          </p>
        </div>
      </section>

      <EcosystemDiagram />

      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <h2 className="font-heading text-2xl md:text-4xl font-extrabold text-white mb-10">
            How the model creates impact
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {impact.map((i) => (
              <div key={i.title} className="glass-card rounded-2xl p-7">
                <div className="w-11 h-11 rounded-xl gradient-brand-bg flex items-center justify-center mb-5 shadow-glow">
                  <i.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-heading text-lg font-bold text-white mb-2">{i.title}</h3>
                <p className="text-sm text-silver leading-relaxed">{i.body}</p>
              </div>
            ))}
          </div>

          <h2 className="font-heading text-2xl md:text-4xl font-extrabold text-white mb-10">
            Partnership pathways
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {partners.map((p) => (
              <div key={p.title} className="glass-card rounded-2xl p-7">
                <div className="w-11 h-11 rounded-xl gradient-brand-bg flex items-center justify-center mb-5 shadow-glow">
                  <p.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-heading text-lg font-bold text-white mb-2">{p.title}</h3>
                <p className="text-sm text-silver leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {metrics.map((m) => (
              <div key={m.label} className="rounded-2xl border border-bf-purple/30 bg-bf-purple/5 p-8 text-center">
                <div className="font-display text-4xl md:text-5xl gradient-text mb-3">{m.value}</div>
                <p className="text-sm text-silver leading-relaxed">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        eyebrow="Partner With Us"
        title="Let's build a measurable impact partnership."
        body="We welcome conversations with corporate, government, and philanthropic partners aligned with the model."
        primaryLabel="Start a Conversation"
        secondaryLabel="Explore the Ecosystem"
        secondaryHref="#ecosystem"
      />
    </>
  );
}
