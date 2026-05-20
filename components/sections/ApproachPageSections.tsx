import Image from "next/image";

import Container from "@/components/ui/Container";

const PROCESS_STEPS = [
  {
    number: "1",
    title: "Intelligence-Powered Discovery",
    body: [
      "We leverage AI tools to analyze user data, market signals, support logs, competitive intelligence, and user behavior.",
      "AI surfaces latent patterns, feature ideas, and opportunity spaces; often beyond what manual research can reveal.",
      "Outcome: A product vision that's predictive, not speculative",
    ],
  },
  {
    number: "2",
    title: "Adaptive Design & Prototyping",
    body: [
      "Generative AI assists in rapid mockups, UI variants, flow alternatives, and A/B simulations.",
      "We run AI-driven usability simulations or micro-tests (synthetic users) to validate flows before full build.",
      "Outcome: Designs that anticipate user intent and evolve with early usage",
    ],
  },
  {
    number: "3",
    title: "Build, Test & Deployment",
    body: [
      "AI-assisted coding, model scaffolding, and auto-generated components accelerate development and reduce boilerplate.",
      "We integrate AI capabilities seamlessly, from smart automation to conversational and recommendation systems.",
      "Outcome: Production systems that integrate intelligence, not retrofit it",
    ],
  },
  {
    number: "4",
    title: "Continuous Learning & Optimization",
    body: [
      "User feedback, real-world prompts, and behavioral data continuously feed the system, enabling it to refine responses.",
      "Each iteration sharpens contextual understanding, reduces friction, and personalizes outcomes dynamically.",
      "Outcome: An ever-improving intelligent layer that becomes smarter & faster",
    ],
  },
] as const;

const CONNECTIONS = [
  {
    lead: "AI",
    label: "Logic & Pattern",
    text: "Surfaces insights and accelerates creation.",
    className: "bg-[#E7ECF1] text-[#121820]",
    widthClass: "md:w-[430px]",
    lineClass: "md:w-[153px]",
  },
  {
    lead: "Human",
    label: "Strategy & Creativity",
    text: "Guides context, empathy, and direction.",
    className: "bg-[#B8BEC7] text-[#121820]",
    widthClass: "md:w-[434px]",
    lineClass: "md:w-[78px]",
  },
  {
    lead: "Outcomes",
    label: "Compounded Value",
    text: "Deliver systems that improve on their own",
    className: "bg-[#292D30] text-white",
    widthClass: "md:w-[403px]",
    lineClass: "md:w-10",
  },
] as const;

const ADVANTAGES = [
  {
    value: "10x",
    title: "Faster Time to Market",
    text: "Launch in weeks, not months",
  },
  {
    value: "3x",
    title: "More Iterations",
    text: "Rapid prototyping and testing",
  },
  {
    value: "99%",
    title: "Quality Assurance",
    text: "AI-powered testing coverage",
  },
] as const;

export default function ApproachPageSections() {
  return (
    <>
      <section className="overflow-hidden bg-white pt-[150px] md:pt-[166px]">
        <Container className="max-w-[1200px]">
          <div className="max-w-[900px]">
            <h1 className="text-[44px] font-semibold leading-[1.12] text-[#262D30] md:text-[54px]">
              We Don&apos;t Add AI
              <br />
              We Build with It from Day One
            </h1>
            <p className="mt-5 max-w-[620px] text-[20px] leading-[1.45] text-[#0E171D] md:text-[22px]">
              Our AI-Native Blueprint unites design, data, and engineering into a
              continuous feedback loop that accelerates outcomes and compounds value.
            </p>
          </div>
        </Container>
        <div className="relative mt-20 h-[110px] w-full overflow-hidden md:mt-28 md:h-[236px]">
          <div className="absolute left-1/2 top-0 h-[13.86vw] max-h-[181px] w-[147vw] max-w-[1920px] -translate-x-1/2 md:h-[14.16vw] md:w-[150vw] lg:h-[181px] lg:w-[1920px]">
            <Image
              src="/buzzinga-assets/images/hero/c3dR5kayp6mfyzXzTWOMBvOKGbU.svg"
              alt=""
              fill
              priority
              sizes="(max-width: 767px) 147vw, (max-width: 1279px) 150vw, 1920px"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-white pb-28 pt-6 md:pb-36 md:pt-12">
        <Container className="max-w-[1200px]">
          <div className="space-y-6">
            {PROCESS_STEPS.map((step) => (
              <article
                key={step.number}
                className="grid gap-x-4 gap-y-5 p-4 md:min-h-[187px] md:grid-cols-[118px_minmax(0,440px)_minmax(0,576px)] md:justify-between md:gap-y-0"
              >
                <div className="flex items-center gap-4 self-start">
                  <p className="w-[14px] text-[24px] leading-[1.4] text-[#262D30]">
                    {step.number}
                  </p>
                  <span className="h-px w-[88px] bg-[#262D30]" />
                </div>
                <h2 className="text-[24px] font-semibold leading-[1.4] text-[#262D30]">
                  {step.title}
                </h2>
                <div className="space-y-3 text-[18px] leading-[1.5] text-[#262D30]">
                  {step.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#F2F4F7] py-16 md:py-12">
        <Container className="max-w-[1200px]">
          <div className="max-w-[520px]">
            <h2 className="text-[44px] font-semibold leading-[1.12] text-[#262D30] md:text-[52px]">
              How It All Connects
            </h2>
            <p className="mt-2 text-[20px] leading-[1.5] text-[#0E171D] md:text-[21px]">
              A single wave of intelligence flows through each stage of our process:
            </p>
          </div>

          <div className="mt-14 grid overflow-hidden rounded-[14px] md:flex md:overflow-visible md:rounded-none">
            {CONNECTIONS.map((item, index) => (
              <article
                key={item.lead}
                className={`flex min-h-[216px] flex-col justify-between p-6 ${item.className} ${item.widthClass} ${
                  index > 0 ? "md:-ml-[33px]" : ""
                } md:rounded-[14px]`}
              >
                <div className="flex items-center gap-5">
                  <p className="shrink-0 text-[20px] font-semibold leading-[1.3]">
                    {item.lead}
                  </p>
                  <span className={`h-px w-20 bg-current opacity-80 ${item.lineClass}`} />
                  <p className="shrink-0 text-[20px] font-semibold leading-[1.3]">
                    {item.label}
                  </p>
                </div>
                <p className="mt-12 text-[18px] leading-[1.45]">{item.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-24 md:py-[100px]">
        <Container className="max-w-[1200px]">
          <div className="grid gap-14 md:flex md:items-start md:gap-4">
            <div className="md:flex md:w-[389.328px] md:flex-col md:justify-center">
              <h2 className="text-[44px] font-semibold leading-[1.18] text-[#262D30] md:text-[48px] md:leading-[57.6px]">
                The Buzzinga Advantage
              </h2>
            </div>
            <div className="space-y-10 md:flex md:h-[462.781px] md:w-[389.344px] md:flex-col md:items-start md:justify-start md:gap-8 md:space-y-0 md:pt-2.5">
              {ADVANTAGES.map((advantage) => (
                <article
                  key={advantage.value}
                  className="md:flex md:h-[129.594px] md:w-full md:flex-col md:items-start md:justify-start md:gap-2.5"
                >
                  <h3 className="text-[50px] font-normal leading-[1] text-[#0E171D] md:w-full md:text-[48px] md:font-light md:leading-[57.6px] md:text-[#262D30]">
                    {advantage.value}
                  </h3>
                  <p className="mt-4 text-[20px] font-semibold leading-[1.35] text-[#0E171D] md:mt-0 md:w-full md:leading-[30px] md:text-[#262D30]">
                    {advantage.title}
                  </p>
                  <p className="mt-1 text-[20px] leading-[1.35] text-[#0E171D] md:mt-0 md:w-full md:leading-[32px] md:text-[#262D30]">
                    {advantage.text}
                  </p>
                </article>
              ))}
            </div>
            <article className="border-t border-[#0E171D] pt-8 md:flex md:h-[474.594px] md:w-[389.328px] md:flex-col md:items-center md:justify-start md:gap-6 md:border-t-0 md:pt-4">
              <div className="hidden h-px w-full bg-[#262D30] md:block" />
              <h3 className="text-[32px] font-semibold leading-[1.25] text-[#0E171D] md:w-full md:leading-[41.6px] md:text-[#262D30]">
                Why It Matters
              </h3>
              <div className="mt-8 space-y-4 text-[20px] leading-[1.6] text-[#0E171D] md:mt-0 md:w-full md:space-y-2.5 md:leading-[32px] md:text-[#262D30]">
                <p>Traditional software delivery treats AI as an add-on.</p>
                <p>
                  We treat it as a core design principle, embedded into how
                  products are imagined, built, and refined.
                </p>
              </div>
            </article>
          </div>
        </Container>
      </section>
    </>
  );
}
