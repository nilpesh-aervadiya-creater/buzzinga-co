import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Container from "@/components/ui/Container";
import { cn } from "@/lib/utils";
import {
  CAPABILITIES,
  CLIENT_LOGOS,
  PROJECTS,
  TESTIMONIALS,
  WHY_CLIENTS_STAY,
} from "@/constants/site-content";

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

const PROJECT_ORDER = ["MeLiSA", "JabFab", "911Switch", "Predictr"] as const;

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
            "group flex h-[250px] flex-col overflow-hidden rounded-2xl border border-[#D0D5DB] bg-transparent p-4 transition-[height,box-shadow] duration-300 hover:h-[338px] focus-within:h-[338px] focus-within:shadow-[0_18px_42px_rgba(18,24,32,0.08)]",
            CAPABILITY_POSITION_CLASSES[index]
          )}
          tabIndex={0}
        >
          <AssetIcon src={capability.icon} alt="" />
          <div className="mt-auto transition-all duration-300 group-hover:mt-6 group-focus-within:mt-6">
            <h3 className="text-[21px] font-semibold leading-[1.25] text-[#121820]">
              {capability.title}
            </h3>
            <p className="mt-2 text-[16px] font-semibold leading-[1.35] text-[#B0B6BC] opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100">
              {capability.service}
            </p>
          </div>
          <div className="max-h-0 overflow-hidden opacity-0 transition-all duration-300 group-hover:mt-5 group-hover:max-h-48 group-hover:opacity-100 group-focus-within:mt-5 group-focus-within:max-h-48 group-focus-within:opacity-100">
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
            <h2 className="text-[40px] font-semibold leading-[1.08] text-[#262D30] md:text-[52px]">
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

export function ProjectsSection() {
  const orderedProjects = PROJECT_ORDER.map((client) =>
    PROJECTS.find((project) => project.client === client)
  ).filter((project): project is (typeof PROJECTS)[number] => Boolean(project));
  const projectColumns = [
    orderedProjects.filter((project) => project.client === "MeLiSA" || project.client === "911Switch"),
    orderedProjects.filter((project) => project.client === "JabFab" || project.client === "Predictr"),
  ];

  return (
    <section className="bg-white py-20 md:py-24" id="projects">
      <Container>
        <h2 className="text-[40px] font-semibold leading-[1.1] text-[#262D30] md:text-[52px]">
          Real Results, Real Impact
        </h2>
        <p className="mt-5 max-w-[720px] text-[20px] leading-[1.5] text-[#262D30]">
          Every project tells a story. See how we&apos;ve helped businesses
          transform their ideas into reality
        </p>

        <div className="mt-14 grid gap-2 lg:grid-cols-2">
          {projectColumns.map((column, columnIndex) => (
            <div key={columnIndex} className="grid gap-2">
              {column.map((project, index) => (
                <Link
                  key={project.client}
                  href={project.href}
                  className={cn(
                    "group relative flex min-h-[520px] overflow-hidden rounded-lg px-8 pt-8 transition-transform duration-300 focus-visible:outline-offset-4 lg:min-h-[559px] lg:px-12 lg:pt-12",
                    project.className
                  )}
                >
                  <div className="relative z-10 max-w-[500px]">
                    <p className={`text-[18px] font-normal leading-[1.6] lg:text-[20px] ${index === 0 && columnIndex === 0 ? 'text-[#242424b3]': index === 0 && columnIndex === 1 ? 'text-[#cfd8ea]' : 'text-[#fff]' }`}>
                      {project.client}
                    </p>
                    <h3 className={`mt-2 text-[28px] font-semibold leading-[1.3] lg:text-[32px] ${index === 0 && columnIndex === 0 ? 'text-[#262d30]': 'text-[#fff]' }`}>
                      {project.title}
                    </h3>
                  </div>
                  <Image
                    src={project.image}
                    alt={`${project.client} project preview`}
                    width={760}
                    height={528}
                    className={cn(
                      "absolute bottom-0 left-8 h-[320px] w-[calc(100%-64px)] max-w-none object-contain object-bottom lg:left-12 lg:h-[348px] lg:w-[calc(100%-96px)]",
                      project.client === "JabFab" && "lg:w-[calc(100%-48px)]"
                    )}
                    loading="eager"
                  />
                </Link>
              ))}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToPrevious = () =>
    setActiveIndex((index) => (index === 0 ? TESTIMONIALS.length - 1 : index - 1));
  const goToNext = () =>
    setActiveIndex((index) => (index + 1) % TESTIMONIALS.length);

  return (
    <section className="bg-white py-24 text-center md:py-32">
      <Container>
        <h2 className="text-[34px] font-semibold text-[#262D30]">
          Trusted by Forward-Thinking Teams
        </h2>
        <p className="mt-2 text-[20px] text-[#262D30]">
          Don&apos;t just take our word for it. Here&apos;s what our clients say
          about working with us.
        </p>

        <div className="relative mt-20">
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center overflow-hidden rounded-full bg-[#919191]/20 transition-colors hover:bg-[#919191]/30 md:flex"
          >
            <Image
              src="/buzzinga-assets/images/icons/navigation/arrow-back.svg"
              alt=""
              width={16}
              height={16}
              aria-hidden="true"
            />
          </button>
          <div className="mx-auto max-w-[1040px] overflow-hidden">
            <ul
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {TESTIMONIALS.map((testimonial) => (
                <li key={`${testimonial.name}-${testimonial.company}`} className="w-full flex-none">
                  <blockquote className="text-[28px] italic leading-[1.55] text-[#121820] md:text-[40px]">
                    &quot;{testimonial.quote}&quot;
                  </blockquote>
                  <p className="mt-10 text-2xl font-semibold text-[#121820]">
                    {testimonial.name}
                  </p>
                  <p className="mt-1 text-2xl text-[#121820]">{testimonial.company}</p>
                </li>
              ))}
            </ul>
          </div>
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={goToNext}
            className="absolute right-0 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center overflow-hidden rounded-full bg-[#919191]/20 transition-colors hover:bg-[#919191]/30 md:flex"
          >
            <Image
              src="/buzzinga-assets/images/icons/navigation/arrow-next.svg"
              alt=""
              width={16}
              height={16}
              aria-hidden="true"
            />
          </button>
        </div>

        <div className="mt-12 flex justify-center gap-3">
          {TESTIMONIALS.map((testimonial, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Show testimonial from ${testimonial.name}`}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "h-3 rounded-full transition-[width,background-color]",
                index === activeIndex ? "w-8 bg-[#262D30]" : "w-3 bg-[#D9D9D9]"
              )}
            />
          ))}
        </div>
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

export function ContactSection() {
  return (
    <section className="bg-white py-12 md:py-20">
      <Container>
        <div className="grid gap-12 rounded-3xl bg-[#F2F4F7] p-8 md:grid-cols-[0.8fr_1.2fr] md:p-16">
          <div>
            <h2 className="text-[40px] font-semibold leading-[1.15] text-[#262D30] md:text-[52px]">
              Start Your Next
              <br />
              Journey With Us
            </h2>
            <p className="mt-7 max-w-[450px] text-[22px] leading-[1.45] text-[#121820]">
              Need a quick quote, a free 30-min consultation, or just want to
              learn more? Drop your details, and we&apos;ll be in touch within
              24 working hours to set up a call.
            </p>
          </div>

          <form className="grid gap-6">
            <label className="grid gap-2 text-sm text-[#47515A]">
              What are you interested in?*
              <select className="h-12 rounded-lg border border-[#C8CDD2] bg-white px-4 text-lg text-[#121820]">
                <option>Select...</option>
              </select>
            </label>
            <label className="grid gap-2 text-sm text-[#47515A]">
              What stage are you in your AI journey?*
              <select className="h-12 rounded-lg border border-[#C8CDD2] bg-white px-4 text-lg text-[#121820]">
                <option>Select...</option>
              </select>
            </label>
            <div className="grid gap-5 md:grid-cols-2">
              <label className="grid gap-2 text-sm text-[#47515A]">
                Name*
                <input className="h-12 rounded-lg border border-[#C8CDD2] bg-white px-4 text-lg" />
              </label>
              <label className="grid gap-2 text-sm text-[#47515A]">
                Email*
                <input
                  type="email"
                  className="h-12 rounded-lg border border-[#C8CDD2] bg-white px-4 text-lg"
                />
              </label>
            </div>
            <label className="grid gap-2 text-sm text-[#47515A]">
              Briefly describe your project-goals, challenges, and requirements,
              to help us assist you more effectively during our initial call.*
              <textarea className="min-h-[110px] rounded-lg border border-[#C8CDD2] bg-white px-4 py-3 text-lg" />
            </label>
            <button
              type="submit"
              className="h-12 rounded-lg bg-[#333333] text-base font-semibold text-white"
            >
              Submit
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}
