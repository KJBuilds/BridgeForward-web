import Hero from "@/components/Hero";
import ImpactRibbon from "@/components/ImpactRibbon";
import ServicesSnapshot from "@/components/ServicesSnapshot";
import ThreePillars from "@/components/ThreePillars";
import EcosystemDiagram from "@/components/EcosystemDiagram";
import TrustBar from "@/components/TrustBar";
import FounderSpotlight from "@/components/FounderSpotlight";
import WhyBridgeForward from "@/components/WhyBridgeForward";
import CTABanner from "@/components/CTABanner";
import Newsletter from "@/components/Newsletter";
import { useEffect } from "react";

export default function Index() {
  useEffect(() => {
    document.title = "Bridge Forward Collective | Cybersecurity-Led Social Enterprise";
    const desc = "Bridge Forward delivers executive cybersecurity consulting while reinvesting revenue into workforce development, scholarships, and community legacy initiatives.";
    let m = document.querySelector('meta[name="description"]');
    if (!m) { m = document.createElement("meta"); m.setAttribute("name", "description"); document.head.appendChild(m); }
    m.setAttribute("content", desc);
  }, []);

  return (
    <>
      <Hero />
      <ImpactRibbon />
      <TrustBar />
      <ServicesSnapshot />
      <ThreePillars />
      <EcosystemDiagram />
      <FounderSpotlight />
      <WhyBridgeForward />
      <CTABanner />
      <Newsletter />
    </>
  );
}
