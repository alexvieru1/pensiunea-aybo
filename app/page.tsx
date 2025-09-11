import { AboutUs } from "@/components/about-us";
import { ContactSection } from "@/components/contact-section";
import { Facilities } from "@/components/facilities";
import { HeroSection } from "@/components/hero-section";
import SiteNavbar from "@/components/site-navbar";
import { PricingSection } from "@/components/pricings-section";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <div className="bg-gray-100">
      <SiteNavbar />
      <HeroSection />
      <AboutUs />
      <Facilities />
      <PricingSection />
      <ContactSection />
      <SiteFooter />
    </div>
  );
}
