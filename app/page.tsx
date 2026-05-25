import { Navigation } from "@/components/landing/navigation";
import { HeroSection } from "@/components/landing/hero-section";
import { ProblemSection } from "@/components/landing/problem-section";
import { FeaturesSection } from "@/components/landing/features-section";
import { HowItWorksSection } from "@/components/landing/how-it-works-section";
import { MetricsSection } from "@/components/landing/metrics-section";
import { IntegrationsSection } from "@/components/landing/integrations-section";
import { SecuritySection } from "@/components/landing/security-section";
import { CredibilityMarqueeSection } from "@/components/landing/credibility-marquee-section";
import { CtaSection } from "@/components/landing/cta-section";
import { FooterSection } from "@/components/landing/footer-section";
import { StickyCtaBar } from "@/components/landing/sticky-cta-bar";

export default function Home() {
  const web3formsKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "";
  const hcaptchaSitekey = process.env.NEXT_PUBLIC_HCAPTCHA_SITEKEY ?? "";

  return (
    <main className="relative min-h-screen overflow-x-hidden noise-overlay">
      <Navigation />
      <HeroSection />
      <ProblemSection />
      <FeaturesSection />
      <HowItWorksSection />
      <MetricsSection />
      <IntegrationsSection />
      <SecuritySection />
      <CredibilityMarqueeSection />
      <CtaSection web3formsKey={web3formsKey} hcaptchaSitekey={hcaptchaSitekey} />
      <FooterSection />
      <StickyCtaBar />
    </main>
  );
}
