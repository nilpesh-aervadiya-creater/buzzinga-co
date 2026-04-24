import Container from "@/components/ui/Container";
import { SITE } from "@/constants/site-content";

export default function Footer() {
  return (
    <footer className="bg-white py-16">
      <Container>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <p className="text-base text-[#262D30]">{SITE.tagline}</p>
          <div>
            <p className="text-base text-[#262D30]">write us on</p>
            <a
              href={`mailto:${SITE.email}`}
              className="text-base text-[#0046A0] hover:underline"
            >
              {SITE.email}
            </a>
          </div>
          <p className="text-base text-[#262D30]">{SITE.copyright}</p>
        </div>

        <p className="mt-12 text-base font-semibold text-[#262D30]">{SITE.name}</p>
      </Container>
    </footer>
  );
}
