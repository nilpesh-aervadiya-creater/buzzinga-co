import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Container from "@/components/ui/Container";
import { cn } from "@/lib/utils";
import {
  CAPABILITIES,
  CLIENT_LOGOS,
  WHY_CLIENTS_STAY,
} from "@/constants/site-content";

export { ContactPageSection } from "./ContactSection";
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

function InlineSvgIcon({ src, alt, size = 80 }: { src: string; alt: string; size?: number }) {
  const [svg, setSvg] = useState("");

  useEffect(() => {
    let active = true;

    fetch(src)
      .then((response) => response.text())
      .then((text) => {
        if (active) setSvg(text);
      })
      .catch(() => {
        if (active) setSvg("");
      });

    return () => {
      active = false;
    };
  }, [src]);

  if (!svg) {
    return <span aria-label={alt} style={{ display: "inline-block", height: size, width: size }} />;
  }

  return (
    <span
      aria-label={alt}
      className="value-inline-svg"
      style={{ display: "inline-block", height: size, width: size }}
      dangerouslySetInnerHTML={{ __html: svg }}
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
    <section className="intro-section bg-white py-24 md:py-32">
      <Container>
        <div className="max-w-[720px]">
          <h2 className="intro-heading will-animate text-[24px] font-semibold leading-[1.2] text-[#262D30] min-[810px]:text-[40px] min-[810px]:leading-[1.15] xl:text-[52px]">
            We Build Intelligent Products That Transform Businesses
          </h2>
          <p className="intro-body will-animate mt-6 text-[20px] leading-[1.55] text-[#262D30]">
            We&apos;re not your typical agency. We&apos;re a team of designers,
            engineers, and AI specialists who believe that the future of product
            development is AI-native from day one. We&apos;ve helped over <span data-count-to="150">150+</span>
            companies across 12 industries ship better products, faster.
          </p>
        </div>

        <div className="logo-slider-mask mt-20 overflow-hidden">
          <div className="logo-slider-track flex w-max items-center gap-12 opacity-25 md:gap-16">
            {logoSlides.map((logo, index) => (
              <div
                key={`${logo.src}-${index}`}
                className="logo-reveal-item flex h-[76px] w-[210px] flex-none items-center justify-center"
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
    <div className="capabilities-grid mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-[repeat(4,288px)] xl:justify-center">
      {orderedCapabilities.map((capability, index) => (
        <article
          key={capability.title}
          className={cn(
            "capability-tile will-animate mobile-capability-card group flex h-[250px] flex-col overflow-hidden rounded-2xl border border-[#D0D5DB] bg-transparent p-4 transition-[height,box-shadow] duration-300 hover:h-[338px] focus-within:h-[338px] focus-within:shadow-[0_18px_42px_rgba(18,24,32,0.08)]",
            "relative items-start justify-between border-0 after:absolute after:inset-0 after:rounded-2xl after:border after:border-[rgba(36,36,36,0.2)] after:content-['']",
            CAPABILITY_POSITION_CLASSES[index]
          )}
          tabIndex={0}
        >
          <AssetIcon src={capability.icon} alt="" />
          <div className="mobile-capability-text transition-all duration-300 group-hover:mt-6 group-focus-within:mt-6">
            <h3 className="text-[20px] font-semibold leading-[30px] text-[#262D30]">
              {capability.title}
            </h3>
            <p className="mobile-capability-service mt-0 max-h-0 overflow-hidden text-[16px] font-semibold leading-[1.35] text-[#B0B6BC] opacity-0 transition-all duration-200 group-hover:mt-2 group-hover:max-h-12 group-hover:opacity-100 group-focus-within:mt-2 group-focus-within:max-h-12 group-focus-within:opacity-100">
              {capability.service}
            </p>
            <div className="mobile-capability-content max-h-0 overflow-hidden opacity-0 transition-all duration-300 group-hover:mt-5 group-hover:max-h-48 group-hover:opacity-100 group-focus-within:mt-5 group-focus-within:max-h-48 group-focus-within:opacity-100">
              <p className="text-[16px] leading-[1.45] text-[#121820]">
                {capability.summary}
              </p>
              <p className="mt-5 text-[16px] leading-[1.45] text-[#121820]">
                {capability.description}
              </p>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

export function CapabilitiesSection() {
  return (
    <section className="capabilities-section bg-[#F2F4F7] py-20 md:py-24">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="capabilities-heading will-animate section-heading text-[24px] font-semibold leading-[1.2] text-[#262D30] min-[810px]:text-[40px] min-[810px]:leading-[1.08]">
              From Idea to Intelligence,
              <br />
              Our Capabilities
            </h2>
            <p className="capabilities-subtext will-animate mt-6 text-[20px] text-[#262D30]">
              We integrate design, development, and AI into every layer of your
              product journey.
            </p>
          </div>
          <Link href="/ai-native-capabilities" className="capabilities-link text-[20px] text-[#262D30]">
            View Capabilities <span className="capabilities-arrow">-&gt;</span>
          </Link>
        </div>

        <CapabilityCards />
      </Container>
    </section>
  );
}

export function WhyClientsStaySection() {
  return (
    <section className="values-section bg-white py-20">
      <Container>
        <div className="grid gap-14 md:grid-cols-[432px_668px] md:gap-[100px]">
          <div className="values-left will-animate -translate-x-10">
            <h2 className="text-[24px] font-semibold leading-[1.2] text-[#262D30] min-[810px]:text-[40px] min-[810px]:leading-[1.15] xl:text-[52px]">
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
              className="capabilities-link mt-8 inline-block text-[20px] text-[#262D30]"
            >
              View Capabilities <span className="capabilities-arrow">-&gt;</span>
            </Link>
          </div>

          <div className="values-grid grid gap-x-[100px] gap-y-6 md:grid-cols-[286px_284px]">
          {WHY_CLIENTS_STAY.map((item) => (
              <article key={item.title} className="value-tile will-animate">
                <span className="value-icon inline-block">
                  <InlineSvgIcon src={item.icon} alt="" size={80} />
                </span>
                <h3 className="mt-4 text-[20px] font-semibold leading-[30px] text-[#121820]">
                  {item.title}
                </h3>
                <p className="mt-[10px] text-[18px] leading-[1.55] text-[#121820]">
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

