import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Bridge Forward represents exactly what our community needs — a vision rooted in family, powered by technology, and built for generations to come.",
    name: "Community Partner",
    role: "Tulsa, Oklahoma",
  },
  {
    quote: "The combination of digital resilience training and legacy preservation is unlike anything else I've seen. This is real, meaningful work.",
    name: "Advisory Board Member",
    role: "Technology & Workforce Development",
  },
  {
    quote: "What makes Bridge Forward special is the heart behind it — encouragement converted into opportunity, generation after generation.",
    name: "Education Supporter",
    role: "Scholarship Advocate",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-secondary mb-3">What People Are Saying</p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground">
            Voices of support and encouragement
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border relative"
            >
              <Quote className="w-8 h-8 text-primary/20 mb-4" />
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 italic">
                "{t.quote}"
              </p>
              <div>
                <p className="font-serif text-foreground text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
