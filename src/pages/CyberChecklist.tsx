import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ShieldAlert,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Clock,
  BarChart3,
  Download,
  CalendarCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

const valuePoints = [
  {
    icon: ShieldAlert,
    title: "Identify gaps in your security posture",
    description:
      "Uncover blind spots in your current defenses before attackers do.",
  },
  {
    icon: Clock,
    title: "Evaluate incident readiness",
    description:
      "Assess whether your team can respond effectively when a breach occurs.",
  },
  {
    icon: BarChart3,
    title: "Understand your risk level",
    description:
      "Get a clear picture of where your organization stands and what to prioritize.",
  },
];

export default function CyberChecklist() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HERO */}
      <section className="relative overflow-hidden py-24 md:py-36">
        <div className="absolute inset-0 cyber-grid" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[700px] bg-primary/5 rounded-full blur-[140px] animate-pulse-glow" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px]" />

        <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-4xl text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0}
          >
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary mb-8">
              Free Cyber Risk Checklist
            </div>
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={1}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight"
          >
            Is Your Organization Truly Prepared for a{" "}
            <span className="gradient-text">Cyber Incident?</span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={2}
            className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Identify your risk gaps before they become business disruptions.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={3}
            className="mt-10"
          >
            <Button
              size="lg"
              className="text-base rounded-lg h-14 px-10 text-lg"
            >
              <Download className="mr-2 h-5 w-5" />
              Download the Cyber Risk Checklist
            </Button>
          </motion.div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.div variants={fadeUp} custom={0}>
              <AlertTriangle className="h-12 w-12 text-destructive mx-auto mb-6" />
            </motion.div>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="text-3xl md:text-4xl font-bold"
            >
              Most organizations have tools,{" "}
              <span className="text-primary">but lack execution.</span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto"
            >
              Cybersecurity failures happen in the gap between strategy and
              readiness. Having a firewall doesn't mean you're prepared. Having a
              policy doesn't mean your team can execute it under pressure.
            </motion.p>

            <motion.div
              variants={fadeUp}
              custom={3}
              className="mt-12 grid md:grid-cols-3 gap-6"
            >
              {[
                { stat: "68%", label: "of breaches involve a human element" },
                {
                  stat: "277 days",
                  label: "average time to identify & contain a breach",
                },
                {
                  stat: "$4.45M",
                  label: "average cost of a data breach in 2023",
                },
              ].map((item) => (
                <div
                  key={item.stat}
                  className="rounded-xl border border-border bg-background p-6"
                >
                  <p className="text-3xl font-bold gradient-text">
                    {item.stat}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {item.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* VALUE */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <motion.p
              variants={fadeUp}
              custom={0}
              className="text-sm font-semibold uppercase tracking-widest text-primary mb-3"
            >
              What You'll Learn
            </motion.p>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="text-3xl md:text-4xl font-bold"
            >
              This checklist will help you:
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {valuePoints.map((point, i) => (
              <motion.div
                key={point.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i + 1}
                className="rounded-2xl border border-border bg-card p-8 text-center hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
              >
                <div className="mx-auto w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <point.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-3">{point.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {point.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.div variants={fadeUp} custom={0}>
              <ShieldCheck className="h-12 w-12 text-primary mx-auto mb-6" />
            </motion.div>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="text-3xl md:text-4xl font-bold"
            >
              Built by experts you can trust.
            </motion.h2>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto"
            >
              Created by cybersecurity, risk, and operations professionals with{" "}
              <span className="text-foreground font-semibold">
                25+ years of experience
              </span>{" "}
              protecting organizations across industries. This isn't theory — it's
              built from real-world assessments and enterprise engagements.
            </motion.p>

            <motion.div
              variants={fadeUp}
              custom={3}
              className="mt-10 flex flex-wrap justify-center gap-6"
            >
              {[
                "Enterprise Risk",
                "Compliance & Governance",
                "Incident Response",
                "Security Architecture",
              ].map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground"
                >
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  {badge}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* PRIMARY CTA */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 gradient-hero-bg opacity-90" />
        <div className="absolute inset-0 cyber-grid opacity-20" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-4 md:px-6 text-center relative z-10 max-w-3xl"
        >
          <motion.h2
            variants={fadeUp}
            custom={0}
            className="text-3xl md:text-4xl font-bold text-primary-foreground"
          >
            Take the first step toward clarity and control.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={1}
            className="mt-4 text-lg text-primary-foreground/70 leading-relaxed max-w-2xl mx-auto"
          >
            Download the checklist and start identifying the gaps that matter most
            to your organization's resilience.
          </motion.p>
          <motion.div variants={fadeUp} custom={2} className="mt-8">
            <Button
              size="lg"
              className="text-base rounded-lg h-14 px-10 text-lg bg-primary-foreground text-background hover:bg-primary-foreground/90"
            >
              <Download className="mr-2 h-5 w-5" />
              Download the Cyber Risk Checklist
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* SECONDARY CTA */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-2xl border border-border bg-card p-10 md:p-14 text-center"
          >
            <motion.div variants={fadeUp} custom={0}>
              <CalendarCheck className="h-12 w-12 text-accent mx-auto mb-6" />
            </motion.div>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="text-3xl md:text-4xl font-bold"
            >
              Ready for a deeper assessment?
            </motion.h2>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="mt-4 text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto"
            >
              Go beyond the checklist. Schedule a Cyber Risk Assessment with
              BridgeForward and get expert-led insights tailored to your
              organization.
            </motion.p>
            <motion.div variants={fadeUp} custom={3} className="mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button size="lg" className="text-base rounded-lg h-12 px-8">
                  Schedule a Cyber Risk Assessment <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/services">
                <Button
                  variant="outline"
                  size="lg"
                  className="text-base rounded-lg h-12 px-8 border-border hover:bg-card"
                >
                  Explore Services
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
