import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const emailSchema = z.string().trim().email("Please enter a valid email").max(255);

export default function Newsletter() {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = emailSchema.safeParse(email);
    if (!result.success) {
      setError(result.error.errors[0].message);
      return;
    }
    setError("");
    toast({ title: "You're on the list!", description: "Thank you for joining our community." });
    setEmail("");
  };

  return (
    <section className="py-16 md:py-20 bg-card border-t border-border">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 md:px-6 max-w-2xl text-center"
      >
        <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-3">Stay Connected</p>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
          Join the BridgeForward community
        </h2>
        <p className="text-muted-foreground mb-8">
          Get updates on services, CyberPlug programs, and community initiatives.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <div className="flex-1">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`h-12 bg-background border-border ${error ? "border-destructive" : ""}`}
            />
            {error && <p className="text-sm text-destructive mt-1 text-left">{error}</p>}
          </div>
          <Button type="submit" size="lg" className="h-12 rounded-lg">
            Subscribe <Send size={16} />
          </Button>
        </form>
      </motion.div>
    </section>
  );
}
