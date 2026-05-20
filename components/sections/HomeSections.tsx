import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { cn } from "@/lib/utils";
import {
  CAPABILITIES,
  CLIENT_LOGOS,
  WHY_CLIENTS_STAY,
} from "@/constants/site-content";

export { ContactPageSection, ContactSection } from "./ContactSection";
export { default as ProjectsSection } from "./ProjectsSection";

function AssetIcon({ src, alt, size = 48 }: { src: string; alt: string; size?: number }) {
  return (
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
      className={cn(size === 80 ? "h-20 w-20" : "h-12 w-12", "object-contain")}
      loading="eager"
    />
  );
}

const CAPABILITY_POSITION_CLASSES = [
  "order-1",
  "order-2",
  "order-3",
  "order-4",
] as const;

export function IntroSection() {
  const logoSlides = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <section className="bg-white py-24 md:py-32">
      <Container>
        <div className="max-w-[720px]">
          <h2 className="text-[40px] font-semibold leading-[1.15] text-[#262D30] md:text-[52px]">
            We Build Intelligent Products That Transform Businesses
          </h2>
          <p className="mt-6 text-[20px] leading-[1.55] text-[#262D30]">
            We&apos;re not your typical agency. We&apos;re a team of designers,
            engineers, and AI specialists who believe that the future of product
            development is AI-native from day one. We&apos;ve helped over 150
            companies across 12 industries ship better products, faster.
          </p>
        </div>

        <div className="logo-slider-mask mt-20 overflow-hidden">
          <div className="logo-slider-track flex w-max items-center gap-12 opacity-25 md:gap-16">
            {logoSlides.map((logo, index) => (
              <div
                key={`${logo.src}-${index}`}
                className="flex h-[76px] w-[210px] flex-none items-center justify-center"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className="max-h-14 w-auto max-w-[190px] object-contain grayscale"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function CapabilityCards() {
  const orderedCapabilities = [
    CAPABILITIES[1],
    CAPABILITIES[0],
    CAPABILITIES[3],
    CAPABILITIES[2],
  ];

  return (
    <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {orderedCapabilities.map((capability, index) => (
        <article
          key={capability.title}
          className={cn(
            "mobile-capability-card group flex h-[250px] flex-col overflow-hidden rounded-2xl border border-[#D0D5DB] bg-transparent p-4 transition-[height,box-shadow] duration-300 hover:h-[338px] focus-within:h-[338px] focus-within:shadow-[0_18px_42px_rgba(18,24,32,0.08)]",
            CAPABILITY_POSITION_CLASSES[index]
          )}
          tabIndex={0}
        >
          <AssetIcon src={capability.icon} alt="" />
          <div className="mobile-capability-text mt-auto transition-all duration-300 group-hover:mt-6 group-focus-within:mt-6">
            <h3 className="text-[21px] font-semibold leading-[1.25] text-[#121820]">
              {capability.title}
            </h3>
            <p className="mobile-capability-service mt-2 text-[16px] font-semibold leading-[1.35] text-[#B0B6BC] opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100">
              {capability.service}
            </p>
          </div>
          <div className="mobile-capability-content max-h-0 overflow-hidden opacity-0 transition-all duration-300 group-hover:mt-5 group-hover:max-h-48 group-hover:opacity-100 group-focus-within:mt-5 group-focus-within:max-h-48 group-focus-within:opacity-100">
            <p className="text-[16px] leading-[1.45] text-[#121820]">
              {capability.summary}
            </p>
            <p className="mt-5 text-[16px] leading-[1.45] text-[#121820]">
              {capability.description}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}

export function CapabilitiesSection() {
  return (
    <section className="bg-[#F2F4F7] py-20 md:py-24">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="section-heading text-[40px] font-semibold leading-[1.08] text-[#262D30]">
              From Idea to Intelligence,
              <br />
              Our Capabilities
            </h2>
            <p className="mt-6 text-[20px] text-[#262D30]">
              We integrate design, development, and AI into every layer of your
              product journey.
            </p>
          </div>
          <Link href="/ai-native-capabilities" className="text-[20px] text-[#262D30]">
            View Capabilities -&gt;
          </Link>
        </div>

        <CapabilityCards />
      </Container>
    </section>
  );
}

export function WhyClientsStaySection() {
  return (
    <section className="bg-white py-24 md:py-32">
      <Container>
        <div className="grid gap-14 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="text-[40px] font-semibold leading-[1.15] text-[#262D30] md:text-[52px]">
              Why Clients Stay
              <br />
              With Us
            </h2>
            <p className="mt-6 text-[20px] leading-[1.55] text-[#262D30]">
              Because our partnership built on a different set of principles.
            </p>
            <p className="mt-5 text-[20px] leading-[1.55] text-[#262D30]">
              The traditional trap is systemic, but our commitment is absolute.
            </p>
            <Link
              href="/ai-native-capabilities"
              className="mt-8 inline-block text-[20px] text-[#262D30]"
            >
              View Capabilities -&gt;
            </Link>
          </div>

          <div className="grid gap-x-20 gap-y-12 md:grid-cols-2">
          {WHY_CLIENTS_STAY.map((item) => (
              <article key={item.title}>
                <AssetIcon src={item.icon} alt="" size={80} />
                <h3 className="mt-6 text-[22px] font-semibold text-[#121820]">
                  {item.title}
                </h3>
                <p className="mt-4 text-[18px] leading-[1.55] text-[#121820]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

