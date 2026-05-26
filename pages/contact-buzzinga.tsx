import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ContactPageSection } from "@/components/sections/HomeSections";

export default function ContactBuzzinga() {
  return (
    <>
      <Header />
      <main className="page-animated">
        <ContactPageSection />
      </main>
      <Footer />
    </>
  );
}
