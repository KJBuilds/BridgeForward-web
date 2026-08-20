import Hero from "@/components/Hero";
import ServicesSnapshot from "@/components/ServicesSnapshot";
import ThreePillars from "@/components/ThreePillars";
import WhyBridgeForward from "@/components/WhyBridgeForward";
import CTABanner from "@/components/CTABanner";
import Newsletter from "@/components/Newsletter";
import { usePageMeta } from "@/hooks/use-page-meta";
import { getRouteMeta } from "@/lib/route-meta";

export default function Index() {
  // Title/description sourced from src/lib/route-meta.js -- the same map the
  // post-build static-meta generator (scripts/generate-static-meta.mjs)
  // reads, so the two can't drift apart.
  const { title, description } = getRouteMeta("/");
  usePageMeta(title, description);

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
