import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-medium tracking-widest uppercase text-accent mb-3">Brand Purpose</p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
            Bridging opportunity. Advancing futures.
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-muted-foreground leading-relaxed text-lg"
          >
            Rooted in encouragement, family love, and belief in others, BridgeForward exists to create
            environments where people feel inspired, supported, and equipped to move forward.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
