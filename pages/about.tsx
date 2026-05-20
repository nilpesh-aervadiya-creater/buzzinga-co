import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AboutPageSections from "@/components/sections/AboutPageSections";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <AboutPageSections />
      </main>
      <Footer />
    </>
  );
}
