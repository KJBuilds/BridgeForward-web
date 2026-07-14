import Hero from "@/components/Hero";
import ServicesSnapshot from "@/components/ServicesSnapshot";
import ThreePillars from "@/components/ThreePillars";
import WhyBridgeForward from "@/components/WhyBridgeForward";
import CTABanner from "@/components/CTABanner";
import Newsletter from "@/components/Newsletter";
import { usePageMeta } from "@/hooks/use-page-meta";

export default function Index() {
  usePageMeta(
    "BridgeForward | Cybersecurity-Led Social Enterprise",
    "BridgeForward delivers executive cybersecurity consulting while reinvesting revenue into workforce development, scholarships, and community legacy initiatives."
  );

  return (
    <>
      <Hero />
      <ServicesSnapshot />
      <ThreePillars />
      <WhyBridgeForward />
      <CTABanner
        title="Protect your business. Power something bigger."
        body="Partner with BridgeForward for cybersecurity services that strengthen resilience while helping fund workforce and legacy initiatives that move communities forward."
        primaryLabel="Request a Consultation"
        primaryHref="/contact"
      />
      <Newsletter />
    </>
  );
}
