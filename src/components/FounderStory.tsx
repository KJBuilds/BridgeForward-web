import { motion } from "framer-motion";
import PlaceholderImage from "@/components/PlaceholderImage";

export default function FounderStory() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <PlaceholderImage label="Founder Story — Coming Soon" aspectRatio="square" />
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-medium tracking-widest uppercase text-accent mb-3">The Story Behind the Mission</p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
              Rooted in family. Driven by encouragement.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Bridge Forward Collective was born from a legacy of encouragement — the kind that shows up,
              spends time, and believes in people when they need it most. It's a vision shaped by family love,
              community connection, and a commitment to creating opportunity for the next generation.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Every initiative within Bridge Forward reflects the values of someone who believed that
              showing up and investing in others could change the trajectory of families and communities.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
