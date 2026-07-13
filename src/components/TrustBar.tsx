const items = [
  "20+ Years Experience",
  "M.S. Cybersecurity",
  "PMP · CySA+ · PenTest+",
  "NIST AI RMF Aligned",
  
];

export default function TrustBar() {
  return (
    <section className="border-y border-white/5 bg-bf-charcoal/60 py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
          {items.map((i) => (
            <span
              key={i}
              className="text-[11px] md:text-xs tracking-[0.25em] uppercase text-silver/80"
            >
              {i}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
