import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import {
  CapabilitiesSection,
  ContactSection,
  IntroSection,
  ProjectsSection,
  TestimonialsSection,
  WhyClientsStaySection,
} from "@/components/sections/HomeSections";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <IntroSection />
        <CapabilitiesSection />
        <ProjectsSection />
        <TestimonialsSection />
        <WhyClientsStaySection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
