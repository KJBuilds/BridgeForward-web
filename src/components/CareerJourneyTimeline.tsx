import { motion } from "framer-motion";

const steps = [
  { stage: "Student", note: "Curiosity & exposure" },
  { stage: "Learner", note: "Skills & fundamentals" },
  { stage: "Intern", note: "Real-world experience" },
  { stage: "Analyst", note: "Entry-level role" },
  { stage: "Engineer", note: "Technical depth" },
  { stage: "Consultant", note: "Advisory expertise" },
  { stage: "Security Leader", note: "Executive impact" },
];

export default function CareerJourneyTimeline() {
  return (
    <section className="relative bg-background py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mb-12">
          <p className="font-display text-xs tracking-[0.35em] text-bf-blue uppercase mb-4">
            Career Journey
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-white">
            From classroom to <span className="gradient-text">security leader</span>.
          </h2>
        </div>

        {/* Desktop horizontal */}
        <div className="hidden md:block relative">
          <div className="absolute top-6 left-0 right-0 h-px bg-gradient-to-r from-bf-blue via-bf-purple to-bf-magenta opacity-50" />
          <div className="grid grid-cols-7 gap-4 relative">
            {steps.map((s, i) => (
              <motion.div
                key={s.stage}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-12 h-12 rounded-full gradient-brand-bg flex items-center justify-center text-white font-bold text-sm shadow-glow mb-4">
                  {i + 1}
                </div>
                <h4 className="font-heading text-sm font-bold text-white mb-1">{s.stage}</h4>
                <p className="text-xs text-silver leading-snug">{s.note}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile vertical */}
        <div className="md:hidden space-y-4 relative">
          <div className="absolute top-2 bottom-2 left-6 w-px bg-gradient-to-b from-bf-blue via-bf-purple to-bf-magenta opacity-50" />
          {steps.map((s, i) => (
            <div key={s.stage} className="flex items-start gap-4 relative">
              <div className="w-12 h-12 shrink-0 rounded-full gradient-brand-bg flex items-center justify-center text-white font-bold text-sm shadow-glow z-10">
                {i + 1}
              </div>
              <div className="pt-2">
                <h4 className="font-heading text-base font-bold text-white">{s.stage}</h4>
                <p className="text-sm text-silver">{s.note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
