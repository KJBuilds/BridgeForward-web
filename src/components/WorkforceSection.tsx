import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Network, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const programs = [
  {
    title: "Tech Career Pathways",
    icon: Briefcase,
    description: "Exposure programs, career mapping, and entry into cybersecurity, AI, and technology roles.",
  },
  {
    title: "Upskilling & Bootcamps",
    icon: GraduationCap,
    description: "Hands-on workshops in cyber hygiene, governance fundamentals, and AI literacy for career-changers.",
  },
  {
    title: "Professional Ecosystem Connection",
    icon: Network,
    description: "Mentorship, professional organization access, and networking pathways into the tech industry.",
  },
];

export default function WorkforceSection() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-sm font-medium tracking-widest uppercase text-secondary mb-3">Talent & Pathways</p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
                Building the next generation of cybersecurity professionals
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Workforce development programs expose, equip, and connect individuals to technology careers,
                professional ecosystems, and upward mobility — powered by consulting revenue.
              </p>
              <Link to="/workforce-development" className="inline-flex items-center gap-2 text-sm font-medium text-secondary hover:gap-3 transition-all">
                Explore workforce programs <ArrowRight size={16} />
              </Link>
            </motion.div>

            <div className="grid gap-5">
              {programs.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.5 }}
                  className="flex items-start gap-4 bg-card rounded-xl p-5 shadow-card border border-border"
                >
                  <div className="w-10 h-10 rounded-lg bg-fuchsia-soft flex items-center justify-center flex-shrink-0">
                    <item.icon size={20} className="text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-base text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
