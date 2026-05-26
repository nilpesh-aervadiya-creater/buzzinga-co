import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ContactPageSection } from "@/components/sections/ContactSection";
import ProjectsSection from "@/components/sections/ProjectsSection";

export default function Projects() {
  return (
    <>
      <Header />
      <main className="page-animated">
        <ProjectsSection title="Projects" description="" pageHeading />
        <ContactPageSection className="!pt-8" />
      </main>
      <Footer />
    </>
  );
}
