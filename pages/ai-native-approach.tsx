import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ContactPageSection } from "@/components/sections/HomeSections";
import ApproachPageSections from "@/components/sections/ApproachPageSections";

export default function ApproachPage() {
  return (
    <>
      <Header />
      <main>
        <ApproachPageSections />
        <ContactPageSection className="!pt-20" />
      </main>
      <Footer />
    </>
  );
}
