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
    widthClass: "xl:w-[396px]",
    lineClass: "xl:w-[153px]",
  },
  {
    lead: "Human",
    label: "Strategy & Creativity",
    text: "Guides context, empathy, and direction.",
    className: "bg-[#B4BAC2] text-[#121820]",
    widthClass: "xl:w-[402px]",
    lineClass: "flex-1",
  },
  {
    lead: "Outcomes",
    label: "Compounded Value",
    text: "Deliver systems that improve on their own",
    className: "bg-[#2A2D30] text-white",
    widthClass: "xl:w-[402px]",
    lineClass: "xl:w-10",
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
      <section className="overflow-hidden bg-white pt-[100px] min-[810px]:pt-[166px]">
        <Container className="max-w-[1200px]">
          <div className="max-w-[900px]">
            <h1 className="text-[28px] font-semibold leading-[33.6px] text-[#262D30] min-[810px]:text-[44px] min-[810px]:leading-[1.12] xl:text-[54px]">
              We Don&apos;t Add AI
              <br />
              We Build with It from Day One
            </h1>
            <p className="mt-4 max-w-[620px] text-[16px] leading-[24px] text-[#262D30] min-[810px]:mt-5 min-[810px]:text-[22px] min-[810px]:leading-[1.45] min-[810px]:text-[#0E171D]">
              Our AI-Native Blueprint unites design, data, and engineering into a
              continuous feedback loop that accelerates outcomes and compounds value.
            </p>
          </div>
        </Container>
        <div className="relative mt-10 h-[78px] w-full overflow-hidden min-[810px]:mt-28 min-[810px]:h-[236px]">
          <div className="absolute left-1/2 top-0 h-[13.86vw] max-h-[181px] w-[147vw] max-w-[1920px] -translate-x-1/2 min-[768px]:h-[14.45vw] min-[768px]:w-[153.4vw] min-[810px]:h-[14.16vw] min-[810px]:w-[150vw] xl:h-[13.575vw] xl:w-[144vw] min-[1440px]:h-[181px] min-[1440px]:w-[1920px]">
            <Image
              src="/buzzinga-assets/images/hero/c3dR5kayp6mfyzXzTWOMBvOKGbU.svg"
              alt=""
              fill
              priority
              sizes="(max-width: 767px) 147vw, (max-width: 809px) 153.4vw, (max-width: 1279px) 150vw, (max-width: 1439px) 144vw, 1920px"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-white pb-16 pt-6 min-[810px]:pb-36 min-[810px]:pt-12">
        <Container className="max-w-[1200px]">
          <div className="space-y-8 min-[810px]:space-y-6">
            {PROCESS_STEPS.map((step) => (
              <article
                key={step.number}
                className="grid grid-cols-[40px_minmax(0,1fr)] gap-x-4 gap-y-3 min-[810px]:min-h-[187px] min-[810px]:grid-cols-[118px_minmax(0,440px)_minmax(0,576px)] min-[810px]:justify-between min-[810px]:gap-y-0 min-[810px]:p-4"
              >
                <div className="flex items-center gap-4 self-start">
                  <p className="w-[14px] text-[18px] leading-[25.2px] text-[#262D30] min-[810px]:text-[24px] min-[810px]:leading-[1.4]">
                    {step.number}
                  </p>
                  <span className="h-px w-[88px] bg-[#262D30]" />
                </div>
                <h2 className="text-[18px] font-semibold leading-[25.2px] text-[#262D30] min-[810px]:text-[24px] min-[810px]:leading-[1.4]">
                  {step.title}
                </h2>
                <div className="col-span-2 space-y-2.5 text-[14px] leading-[21px] text-[#262D30] min-[810px]:col-span-1 min-[810px]:space-y-3 min-[810px]:text-[18px] min-[810px]:leading-[1.5]">
                  {step.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#F2F4F7] py-16 xl:py-[100px]">
        <Container className="max-w-[1200px]">
          <div className="max-w-[520px] xl:max-w-[660px]">
            <h2 className="text-[24px] font-semibold leading-[28.8px] text-[#262D30] min-[810px]:text-[44px] min-[810px]:leading-[1.12] xl:text-[52px]">
              How It All Connects
            </h2>
            <p className="mt-0 max-w-[233px] text-[16px] leading-[24px] text-[#262D30] min-[810px]:mt-2 min-[810px]:max-w-none min-[810px]:text-[21px] min-[810px]:leading-[1.5] min-[810px]:text-[#0E171D] xl:max-w-[429px]">
              A single wave of intelligence flows through each stage of our process:
            </p>
          </div>

          <div className="mt-8 grid overflow-hidden rounded-[16px] xl:mt-12 lg:flex xl:overflow-visible" style={{background: "linear-gradient(270deg, rgb(231, 234, 238) 0%, rgb(180, 188, 193) 37.3768%, rgb(232, 236, 239) 64%)"}}>
            {CONNECTIONS.map((item) => (
              <article
                key={item.lead}
                className={`flex flex-1 flex-col p-6 xl:min-h-[216px] xl:justify-between ${item.className} ${item.widthClass} xl:rounded-[16px]`}
              >
                <div className="flex flex-nowrap items-center gap-5">
                  <p className="text-[16px] font-semibold leading-[24px] xl:shrink-0 xl:text-[20px] xl:leading-[1.3]">
                    {item.lead}
                  </p>
                  <span className={`h-px flex-1 bg-current opacity-80 ${item.lineClass}`} />
                  <p className="text-[16px] font-semibold leading-[24px] xl:shrink-0 xl:text-[20px] xl:leading-[1.3]">
                    {item.label}
                  </p>
                </div>
                <p className="mt-1 text-[14px] leading-[21px] xl:mt-12 xl:text-[18px] xl:leading-[1.45]">{item.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-8 min-[810px]:py-[100px]">
        <Container className="max-w-[1200px]">
          <div className="grid gap-6 xl:flex xl:items-start xl:gap-4">
            <div className="xl:flex xl:w-[389.328px] xl:flex-col xl:justify-center">
              <h2 className="text-[24px] font-semibold leading-[28.8px] text-[#262D30] min-[810px]:text-[44px] min-[810px]:leading-[1.18] xl:text-[48px] xl:leading-[57.6px]">
                The Buzzinga Advantage
              </h2>
            </div>
            <div className="space-y-8 xl:flex xl:h-[462.781px] xl:w-[389.344px] xl:flex-col xl:items-start xl:justify-start xl:gap-8 xl:space-y-0 xl:pt-2.5">
              {ADVANTAGES.map((advantage) => (
                <article
                  key={advantage.value}
                  className="xl:flex xl:h-[129.594px] xl:w-full xl:flex-col xl:items-start xl:justify-start xl:gap-2.5"
                >
                  <h3 className="text-[28px] font-light leading-[36.4px] text-[#262D30] xl:w-full xl:text-[48px] xl:leading-[57.6px]">
                    {advantage.value}
                  </h3>
                  <p className="mt-3 text-[16px] font-semibold leading-[24px] text-[#262D30] xl:mt-0 xl:w-full xl:text-[20px] xl:leading-[30px]">
                    {advantage.title}
                  </p>
                  <p className="mt-0 text-[16px] leading-[24px] text-[#262D30] xl:w-full xl:text-[20px] xl:leading-[32px]">
                    {advantage.text}
                  </p>
                </article>
              ))}
            </div>
            <article className="border-t border-[#0E171D] pt-8 xl:flex xl:h-[474.594px] xl:w-[389.328px] xl:flex-col xl:items-center xl:justify-start xl:gap-6 xl:border-t-0 xl:pt-4">
              <div className="hidden h-px w-full bg-[#262D30] xl:block" />
              <h3 className="text-[24px] font-semibold leading-[28.8px] text-[#262D30] xl:w-full xl:text-[32px] xl:leading-[41.6px]">
                Why It Matters
              </h3>
              <div className="mt-6 space-y-4 text-[16px] leading-[24px] text-[#262D30] xl:mt-0 xl:w-full xl:space-y-2.5 xl:text-[20px] xl:leading-[32px]">
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
