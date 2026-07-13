import { GraduationCap, Briefcase, Users, Mic, Compass, Award, HeartHandshake } from "lucide-react";
import CareerJourneyTimeline from "@/components/CareerJourneyTimeline";
import CTABanner from "@/components/CTABanner";
import { useEffect } from "react";

const programs = [
  {
    icon: Users,
    title: "CyberPlug Community",
    body: "A community designed to connect aspiring and emerging professionals to cybersecurity opportunity, visibility, and support.",
  },
  {
    icon: GraduationCap,
    title: "Training & Mentorship",
    body: "Learning experiences, coaching, and guided exposure that help individuals build confidence and navigate career entry points.",
  },
  {
    icon: Briefcase,
    title: "Internships & Career Pathways",
    body: "Practical pathways that connect talent to technology careers, work-based experience, and professional growth.",
  },
  {
    icon: Compass,
    title: "Professional Ecosystem Access",
    body: "Exposure to conferences, professional organizations, and career networks that broaden opportunity and long-term mobility.",
  },
];

export default function WorkforceDevelopment() {
  useEffect(() => {
    document.title = "Workforce Development | Bridge Forward";
  }, []);

  return (
    <>
      <section className="relative overflow-hidden bg-background py-24 md:py-32">
        <div className="absolute inset-0 hex-grid opacity-50" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] glow-bg" />
        <div className="container mx-auto px-4 md:px-6 relative max-w-5xl">
          <p className="font-display text-xs tracking-[0.35em] text-bf-blue uppercase mb-5">
            Bridge Forward Workforce Development
          </p>
          <h1 className="font-heading text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Career pathways designed to <span className="gradient-text">expand access</span>, capability, and momentum.
          </h1>
          <p className="mt-6 text-lg text-silver max-w-3xl leading-relaxed">
            Bridge Forward Workforce Development helps individuals access technology careers through community, mentorship, training, internships, and professional ecosystem exposure.
          </p>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 space-y-20">
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {programs.map((p) => (
              <div key={p.title} className="glass-card rounded-2xl p-8">
                <div className="w-12 h-12 rounded-xl gradient-brand-bg flex items-center justify-center mb-6 shadow-glow">
                  <p.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-heading text-xl font-bold text-white mb-3">{p.title}</h3>
                <p className="text-sm text-silver leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>

          {/* Connection to Ecosystem */}
          <div className="rounded-2xl border border-bf-blue/30 bg-bf-blue/5 p-8 md:p-10 text-center max-w-4xl mx-auto">
            <p className="font-display text-[11px] tracking-[0.35em] text-bf-blue uppercase mb-3">
              Ecosystem Connection
            </p>
            <h3 className="font-heading text-2xl font-bold text-white mb-4">
              How it connects to the ecosystem
            </h3>
            <p className="text-silver text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
              Workforce development is funded and strengthened by the consulting side of Bridge Forward, allowing opportunity-building efforts to grow with purpose and sustainability.
            </p>
          </div>
        </div>
      </section>

      <CareerJourneyTimeline />

      <CTABanner
        eyebrow="Workforce"
        title="Build the future workforce"
        body="Bridge Forward connects aspiring professionals to cybersecurity careers through mentorship, training, and community — funded by consulting revenue."
        primaryLabel="Get Involved"
        primaryHref="/contact"
      />
    </>
  );
}
