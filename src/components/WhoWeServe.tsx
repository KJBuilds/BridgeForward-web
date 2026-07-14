import { motion } from "framer-motion";
import { Building2, Heart, Database, ShieldAlert } from "lucide-react";

const segments = [
  { icon: Building2, label: "Financial services firms" },
  { icon: Heart, label: "Healthcare and professional services" },
  { icon: Database, label: "Growing businesses handling sensitive data" },
  { icon: ShieldAlert, label: "Organizations entering compliance requirements for the first time" },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true } as const,
};

export default function WhoWeServe() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div {...fadeUp} transition={{ duration: 0.5 }} className="max-w-3xl mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            You Built Something Worth Protecting.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            SMBs are the fastest-growing target for cyber attacks — and the least protected.
            BridgeForward was built specifically for businesses like yours: organizations that
            need enterprise-grade security strategy without the enterprise price tag.
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2">
          {segments.map((item, i) => (
            <motion.div
              key={item.label}
              {...fadeUp}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="bg-card rounded-xl p-6 border-l-4 border-l-primary border border-border flex items-start gap-4"
            >
              <item.icon className="w-6 h-6 text-secondary shrink-0 mt-0.5" />
              <p className="text-foreground font-medium">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
