import { useState, useEffect } from "react";
import { Mail, Phone, Linkedin, Send } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const inquiryTypes = [
  "Business Inquiry",
  "Speaking Engagement",
  "Partnership Request",
  "Volunteer Interest",
];

export default function Contact() {
  const [type, setType] = useState(inquiryTypes[0]);

  useEffect(() => {
    document.title = "Contact | Bridge Forward";
  }, []);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message received",
      description: "Thanks — we'll be in touch within one business day.",
    });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <>
      <section className="relative overflow-hidden bg-background py-24 md:py-32">
        <div className="absolute inset-0 hex-grid opacity-50" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] glow-bg" />
        <div className="container mx-auto px-4 md:px-6 relative max-w-5xl">
          <p className="font-display text-xs tracking-[0.35em] text-bf-blue uppercase mb-5">Contact</p>
          <h1 className="font-heading text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Let's <span className="gradient-text">talk</span>.
          </h1>
          <p className="mt-6 text-lg text-silver max-w-2xl leading-relaxed">
            Request a consultation, propose a partnership, book a speaking engagement, or volunteer with the
            workforce mission.
          </p>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-6">
            <a href="mailto:Kisha@BridgeForward.tech" className="glass-card rounded-2xl p-6 flex items-center gap-4 hover:border-bf-blue/50">
              <Mail className="w-5 h-5 text-bf-blue" />
              <div>
                <p className="text-xs uppercase tracking-wider text-silver">Email</p>
                <p className="text-white font-medium">Kisha@BridgeForward.tech</p>
              </div>
            </a>
            <a href="tel:9186303998" className="glass-card rounded-2xl p-6 flex items-center gap-4 hover:border-bf-blue/50">
              <Phone className="w-5 h-5 text-bf-blue" />
              <div>
                <p className="text-xs uppercase tracking-wider text-silver">Phone</p>
                <p className="text-white font-medium">918-630-3998</p>
              </div>
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="glass-card rounded-2xl p-6 flex items-center gap-4 hover:border-bf-blue/50">
              <Linkedin className="w-5 h-5 text-bf-blue" />
              <div>
                <p className="text-xs uppercase tracking-wider text-silver">LinkedIn</p>
                <p className="text-white font-medium">Connect with the founder</p>
              </div>
            </a>
          </div>

          <form onSubmit={onSubmit} className="lg:col-span-3 glass-card rounded-2xl p-8 space-y-5">
            <div>
              <label className="text-xs uppercase tracking-wider text-silver mb-2 block">Inquiry Type</label>
              <div className="flex flex-wrap gap-2">
                {inquiryTypes.map((t) => (
                  <button
                    type="button"
                    key={t}
                    onClick={() => setType(t)}
                    className={`text-xs px-3 py-2 rounded-full border transition-colors ${
                      type === t
                        ? "border-bf-blue bg-bf-blue/10 text-white"
                        : "border-white/10 text-silver hover:border-white/30"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-xs uppercase tracking-wider text-silver mb-2 block">Name</label>
                <input required name="name" className="w-full bg-bf-black/60 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-bf-blue" />
              </div>
              <div>
                <label className="text-xs uppercase tracking-wider text-silver mb-2 block">Email</label>
                <input required type="email" name="email" className="w-full bg-bf-black/60 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-bf-blue" />
              </div>
            </div>
            <div>
              <label className="text-xs uppercase tracking-wider text-silver mb-2 block">Organization (optional)</label>
              <input name="org" className="w-full bg-bf-black/60 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-bf-blue" />
            </div>
            <div>
              <label className="text-xs uppercase tracking-wider text-silver mb-2 block">Message</label>
              <textarea required name="message" rows={5} className="w-full bg-bf-black/60 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-bf-blue" />
            </div>
            <button type="submit" className="btn-brand inline-flex items-center justify-center gap-2 rounded-full px-7 h-12 text-sm font-semibold">
              Send Message <Send size={16} />
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
