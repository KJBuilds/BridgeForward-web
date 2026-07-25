// BrainID: Sonnet 5 | Date: 2026-07-25 | Action: Made secondary CTA opt-in (was unconditional + broken under HashRouter); now a plain in-page anchor instead of a router Link
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface CTABannerProps {
  eyebrow?: string;
  title?: string;
  body?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function CTABanner({
  eyebrow = "Get Started",
  title = "Let's strengthen your organization — and build the future workforce together.",
  body = "Every consulting engagement funds the next scholarship, internship, and community program.",
  primaryLabel = "Request a Consultation",
  primaryHref = "/contact",
  secondaryLabel,
  secondaryHref,
}: CTABannerProps) {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div
          className="relative overflow-hidden rounded-3xl px-8 py-16 md:px-16 md:py-20 text-center"
          style={{
            backgroundImage:
              "linear-gradient(135deg, #5B2D90 0%, #8B6FC8 35%, #EC4899 70%, #F97316 100%)",
            boxShadow: "0 20px 60px -20px rgba(91,45,144,0.45)",
          }}
        >
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.4), transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.25), transparent 50%)",
            }}
          />
          <div className="relative">
            <p className="font-display text-xs tracking-[0.35em] uppercase mb-4" style={{ color: "rgba(255,255,255,0.85)" }}>
              {eyebrow}
            </p>
            <h2 className="font-heading text-3xl md:text-5xl font-extrabold leading-tight mb-6" style={{ color: "#FFFFFF" }}>
              {title}
            </h2>
            <p className="text-base md:text-lg max-w-2xl mx-auto mb-10" style={{ color: "rgba(255,255,255,0.92)" }}>
              {body}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to={primaryHref}
                className="inline-flex items-center justify-center gap-2 rounded-full px-8 h-14 text-base font-semibold bg-white hover:bg-white/95 transition-all hover:-translate-y-0.5"
                style={{ color: "#5B2D90", boxShadow: "0 8px 24px -8px rgba(0,0,0,0.25)" }}
              >
                {primaryLabel} <ArrowRight size={18} />
              </Link>
              {secondaryLabel && secondaryHref && (
                <a
                  href={secondaryHref}
                  onClick={(e) => {
                    // HashRouter treats anything after "#" as a route, so a real
                    // navigation to "#ecosystem" 404s instead of scrolling. Do the
                    // scroll ourselves and skip the router entirely.
                    if (secondaryHref.startsWith("#")) {
                      e.preventDefault();
                      document.getElementById(secondaryHref.slice(1))?.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="inline-flex items-center justify-center gap-2 rounded-full px-8 h-14 text-base font-semibold border-2 transition-all hover:bg-white/10"
                  style={{ borderColor: "rgba(255,255,255,0.85)", color: "#FFFFFF" }}
                >
                  {secondaryLabel}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
