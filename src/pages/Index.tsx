import Hero from "@/components/Hero";
import ServicesSnapshot from "@/components/ServicesSnapshot";
import ThreePillars from "@/components/ThreePillars";
import WhyBridgeForward from "@/components/WhyBridgeForward";
import CTABanner from "@/components/CTABanner";
import Newsletter from "@/components/Newsletter";
import { useEffect } from "react";

export default function Index() {
  useEffect(() => {
    document.title = "Bridge Forward | Cybersecurity-Led Social Enterprise";
    const desc = "Bridge Forward delivers executive cybersecurity consulting while reinvesting revenue into workforce development, scholarships, and community legacy initiatives.";
    let m = document.querySelector('meta[name="description"]');
    if (!m) { m = document.createElement("meta"); m.setAttribute("name", "description"); document.head.appendChild(m); }
    m.setAttribute("content", desc);
  }, []);

  return (
    <>
      <Hero />
      <ServicesSnapshot />
      <ThreePillars />
      <WhyBridgeForward />
      <CTABanner
        title="Protect your business. Power something bigger."
        body="Partner with Bridge Forward for cybersecurity services that strengthen resilience while helping fund workforce and legacy initiatives that move communities forward."
        primaryLabel="Request a Consultation"
        primaryHref="/contact"
      />
      <Newsletter />
    </>
  );
}
