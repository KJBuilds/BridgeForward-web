import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Bridge Forward gave us clarity on where our biggest risks were — and a plan to fix them. No fluff, just results.",
    name: "Client Testimonial",
    role: "Coming Soon",
  },
  {
    quote: "Their approach to cybersecurity felt different. Strategic, practical, and built around our actual business needs.",
    name: "Client Testimonial",
    role: "Coming Soon",
  },
  {
    quote: "Working with Bridge Forward meant we could finally stop guessing about our security posture and start acting on real data.",
    name: "Client Testimonial",
    role: "Coming Soon",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true } as const,
};

export default function SocialProof() {
  return (
    <section className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div {...fadeUp} transition={{ duration: 0.5 }} className="max-w-3xl mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trusted By Organizations Ready to Get Serious About Security.
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              {...fadeUp}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-background rounded-xl p-8 border border-border"
            >
              <Quote className="w-8 h-8 text-secondary/40 mb-4" />
              <p className="text-foreground leading-relaxed italic mb-6">"{t.quote}"</p>
              <div>
                <p className="text-sm font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
