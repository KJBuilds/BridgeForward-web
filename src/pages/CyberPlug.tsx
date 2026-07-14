import { Users, BookOpen, Calendar, HeartHandshake, Briefcase, Library } from "lucide-react";
import CTABanner from "@/components/CTABanner";
import { usePageMeta } from "@/hooks/use-page-meta";

const features = [
  { icon: Users, title: "Professional Networking", body: "Connect with practitioners, leaders, and peers across cybersecurity." },
  { icon: BookOpen, title: "CyberPlug Blog", body: "Practical insights, career guidance, and community spotlights." },
  { icon: Calendar, title: "Industry Events", body: "Curated meetups, panels, and conference opportunities." },
  { icon: HeartHandshake, title: "Mentorship", body: "Structured matches between emerging talent and senior practitioners." },
  { icon: Briefcase, title: "Job Opportunities", body: "Roles posted by partner organizations actively hiring." },
  { icon: Library, title: "Resources", body: "Cert prep, interview guides, and ecosystem-vetted study materials." },
];

export default function CyberPlug() {
  usePageMeta(
    "CyberPlug Community | Bridge Forward",
    "CyberPlug connects aspiring and emerging cybersecurity professionals to networking, mentorship, job opportunities, and community events."
  );

  return (
    <>
      <section className="relative overflow-hidden bg-background py-24 md:py-32">
        <div className="absolute inset-0 hex-grid opacity-50" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] glow-bg" />
        <div className="container mx-auto px-4 md:px-6 relative max-w-5xl">
          <p className="font-display text-xs tracking-[0.35em] text-bf-blue uppercase mb-5">
            CyberPlug
          </p>
          <h1 className="font-heading text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Where <span className="gradient-text">opportunity</span> meets <span className="gradient-text">community</span>.
          </h1>
          <p className="mt-6 text-lg text-silver max-w-3xl leading-relaxed">
            CyberPlug is the professional community supporting Bridge Forward's workforce development mission —
            a place for emerging professionals, mentors, and employers to find each other.
          </p>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="glass-card rounded-2xl p-7">
                <div className="w-11 h-11 rounded-xl gradient-brand-bg flex items-center justify-center mb-5 shadow-glow">
                  <f.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-heading text-lg font-bold text-white mb-2">{f.title}</h3>
                <p className="text-sm text-silver leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        eyebrow="Become A Member"
        title="Plug into the next generation of cybersecurity talent."
        body="Whether you're starting your career, mentoring others, or hiring — there's a seat for you."
        primaryLabel="Get Involved"
        secondaryLabel="Explore the Ecosystem"
      />
    </>
  );
}
