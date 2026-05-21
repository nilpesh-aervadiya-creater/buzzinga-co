import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import CapabilitiesPageSections from "@/components/sections/CapabilitiesPageSections";
import { ContactPageSection } from "@/components/sections/HomeSections";

export default function CapabilitiesPage() {
  return (
    <>
      <Header />
      <main>
        <CapabilitiesPageSections />
        <ContactPageSection className="!pt-20" />
      </main>
      <Footer />
    </>
  );
}
