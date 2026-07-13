import { motion } from "framer-motion";
import { Building2, ClipboardCheck, Users, Briefcase, Handshake, GraduationCap } from "lucide-react";

const metrics = [
  { icon: Building2, value: "0+", label: "Organizations Protected" },
  { icon: ClipboardCheck, value: "0+", label: "Cybersecurity Assessments Completed" },
  { icon: Users, value: "0+", label: "Professionals Mentored" },
  { icon: Briefcase, value: "0+", label: "Internships Facilitated" },
  { icon: Handshake, value: "0+", label: "Community Partnerships" },
  { icon: GraduationCap, value: "Coming Soon", label: "Scholarships Awarded" },
];

export default function ImpactRibbon() {
  return (
    <section aria-labelledby="impact-heading" className="bg-white py-14 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-[#E2E8F0] bg-white shadow-card px-6 py-10 md:px-10 md:py-12"
        >
          <div className="text-center mb-10">
            <p className="font-display text-[11px] md:text-xs tracking-[0.35em] uppercase text-[#5B2D90] mb-3">
              Measured Impact
            </p>
            <h2 id="impact-heading" className="font-heading text-2xl md:text-4xl font-extrabold text-[#1E293B]">
              Our Impact
            </h2>
          </div>

          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-10">
            {metrics.map((m, i) => (
              <motion.li
                key={m.label}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="flex flex-col items-center text-center"
              >
                <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] mb-4">
                  <m.icon className="w-5 h-5 text-[#5B2D90]" strokeWidth={1.75} />
                </span>
                <span className="font-heading text-2xl md:text-3xl font-extrabold text-[#1E293B] leading-none">
                  {m.value}
                </span>
                <span className="mt-2 text-xs md:text-[13px] leading-snug text-[#475569] max-w-[14ch]">
                  {m.label}
                </span>
              </motion.li>
            ))}
          </ul>

          <p className="mt-12 text-center text-sm md:text-base text-[#475569] italic max-w-3xl mx-auto">
            Every engagement strengthens cybersecurity while expanding opportunity across our community.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
