import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import CapabilitiesPageSections from "@/components/sections/CapabilitiesPageSections";
import { ContactSection } from "@/components/sections/HomeSections";

export default function CapabilitiesPage() {
  return (
    <>
      <Header />
      <main>
        <CapabilitiesPageSections />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
