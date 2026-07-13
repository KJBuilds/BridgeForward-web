import { motion } from "framer-motion";
import { ShieldCheck, Target, BriefcaseBusiness, ClipboardCheck, AlertTriangle, SearchCheck, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Risk Assessments",
    icon: SearchCheck,
    description: "Identify business, technical, and operational cyber risks through structured assessments.",
  },
  {
    title: "Penetration Testing",
    icon: Target,
    description: "Uncover vulnerabilities and strengthen your organization's overall security posture.",
  },
  {
    title: "vCISO Services",
    icon: BriefcaseBusiness,
    description: "Executive-level cybersecurity leadership without the cost of a full-time CISO.",
  },
  {
    title: "Governance & Compliance",
    icon: ClipboardCheck,
    description: "Strengthen policy structure, governance foundations, and compliance readiness.",
  },
  {
    title: "Tabletop Exercises",
    icon: AlertTriangle,
    description: "Scenario-based exercises to practice incident response and decision-making.",
  },
  {
    title: "Program Reviews",
    icon: ShieldCheck,
    description: "Evaluate cybersecurity efforts and identify opportunities to strengthen resilience.",
  },
];

export default function CyberServices() {
  return (
    <section className="py-20 md:py-28 bg-background relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mb-12">
          <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-3">
            Services
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Cybersecurity services that drive revenue and build resilience
          </h2>
          <p className="text-lg text-muted-foreground">
            Practical consulting across risk, governance, testing, and readiness — 
            designed for organizations that need accessible, expert support.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group bg-card rounded-xl p-6 border border-border hover:border-primary/30 transition-all duration-300"
            >
              <item.icon className="h-8 w-8 text-primary" />
              <h3 className="mt-4 font-bold text-lg text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-10"
        >
          <Link to="/services">
            <Button variant="outline" className="rounded-lg border-border hover:bg-card gap-2">
              View All Services & Packages <ArrowRight size={16} />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
