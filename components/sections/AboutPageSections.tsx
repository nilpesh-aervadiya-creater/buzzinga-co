import { useState } from "react";
import Image from "next/image";

const WHY_PARAGRAPHS = [
  { text: "We’ve always been fascinated by two things, aesthetics and technology. The way something looks, feels, and works. The balance between logic and emotion, between beauty and engineering. That’s what drew us here.", strong: false },
  { text: "Over time, that fascination turned into expertise (the ability to build good things), thoughtfully and precisely. And because we don’t have a product of our own to build, we lend that ability to those who do.", strong: false },
  { text: "Buzzinga Co. exists to help people build what matters.", strong: true },
  { text: "That’s the entire purpose -> to keep creating our best work, every single time, for those chasing something meaningful.", strong: false },
];

const PRINCIPLES = [
  { icon: "💬", title: "Proactive Clarity", lead: "You’ll always know what to expect and what not to.", body: "We set clear expectations upfront and communicate continuously -> so you’re never guessing where things stand." },
  { icon: "🤝", title: "Genuine Ownership", lead: "We take projects personally.", body: "Every deliverable carries our care and conviction -> as if we were building it for ourselves." },
  { icon: "🧭", title: "Radical Transparency", lead: "No inflated promises, no hidden costs, no guesswork.", body: "We stay honest about timelines, challenges, and results -> because trust compounds faster than speed ever can." },
  { icon: "🌿", title: "Easy to Work With", lead: "It’s an underrated skill, but our partners value it the most.", body: "We keep the process simple, human, and clear -> even in a digital-first world." },
];

const CLIENT_STAY_ROWS = [
  {
    past: "Projects that drift past deadlines and bleed budgets with little explanation?",
    pastHighlight: "drift past deadlines and bleed budgets",
    us: "We believe in proactive clarity. Our satisfaction comes from your success, which starts with setting realistic expectations upfront and maintaining transparent communication, so you always know where things stand. No surprises.",
    usHighlight: "We believe in proactive clarity.",
  },
  {
    past: "They were managing their vendors more than collaborating with them?",
    pastHighlight: "managing their vendors more than collaborating",
    us: "We take genuine ownership. Your goals become our goals. We dive deep to understand your vision and commit to seeing it through, providing dedicated focus long after the initial launch.",
    usHighlight: "We take genuine ownership.",
  },
  {
    past: "They were unsure how or if modern approaches like AI are genuinely being used to benefit their project, or if it's just buzzwords",
    pastHighlight: "unsure how or if modern approaches",
    us: "It's why radical transparency is fundamental to our AI-native approach. Our focus is always on delivering demonstrable, measurable value and building trust through openness, not just using trendy terms.",
    usHighlight: "radical transparency",
  },
  {
    past: "Struggling to see a real return on investment or meaningful improvement from their tech initiatives",
    pastHighlight: "Struggling to see a real return on investment",
    us: "We focus relentlessly on results. Our definition of a successful project isn't just deployment; it's delivering a solution that provides measurable value and maintains peak performance. We're honest about what's achievable and committed to delivering on our promises.",
    usHighlight: "We focus relentlessly on results.",
  },
];

const FAQ_ITEMS = [
  {
    question: "What is Buzzinga's mission?",
    answer: [
      "Buzzinga exists to bring together design, technology, and intelligence -> to create software that works beautifully and is built with care.",
    ],
  },
  {
    question: "What kind of companies do you work with?",
    answer: [
      "We collaborate with startups, growing businesses, and enterprises who care about design, technology, and building thoughtfully.",
      "If you value craft and clarity, we’ll get along well.",
    ],
  },
  {
    question: "Can you help us with just design or just development?",
    answer: [
      "Absolutely. We often start with design-only or development-only engagements.",
      "Our goal is to meet you where you are — and scale as your needs grow.",
    ],
  },
  {
    question: "What’s the typical engagement model?",
    answer: [
      "We offer both fixed-scope projects and dedicated team retainers.",
      "Either way, we adapt to your rhythm — fast, flexible, and transparent.",
    ],
  },
  {
    question: "How can I get an estimate for my project?",
    answer: [
      "Just reach out through our contact form with a short note about what you’re planning — even a rough idea is fine.",
      "We’ll review it, schedule a quick discovery call, and share an estimate within 24–48 working hours.",
    ],
  },
];

function AboutHeroSection() {
  return (
    <section className="relative flex h-[648px] w-full flex-col items-center justify-end gap-[90px] overflow-hidden bg-white px-16 pt-[162px] pb-20 [font-family:'Inter_Display','Inter',sans-serif] max-[809px]:h-[650px] max-[809px]:gap-10 max-[809px]:px-4 max-[809px]:pt-[120px] max-[809px]:pb-12">
      <Image
        src="/buzzinga-assets/images/about/about-hero-sky.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 z-0 object-cover object-center"
      />
      <div className="relative z-10 flex w-full max-w-[1200px] flex-col items-start justify-start gap-8 max-[1439px]:w-full max-[1279px]:w-full max-[809px]:max-w-[1200px] max-[809px]:gap-6">
        <div className="hidden w-4/5 flex-col items-start justify-start gap-8 min-[810px]:flex">
          <h1 className="m-0 w-full text-[56px] font-semibold leading-[61.6px] text-[#262D30] max-[1279px]:text-[44px] max-[1279px]:leading-[52.8px]">
            Every pixel, every line of code, every decision carries our
            fingerprint of care, craft, and accountability.
          </h1>
          <p className="m-0 w-full text-[20px] font-normal leading-[32px] text-[#262D30]">
            Buzzinga Co. is driven by a simple truth -&gt; when we build, we
            build as if it&apos;s ours.
          </p>
        </div>

        <div className="flex w-[308.688px] flex-col items-start justify-start gap-8 min-[810px]:hidden">
          <h1 className="m-0 w-full text-[28px] font-semibold leading-[33.6px] text-[#262D30]">
            We blend design, engineering, and AI to deliver better outcomes,
            faster. Transform your ideas into intelligent digital products.
          </h1>
          <p className="m-0 w-full text-[16px] font-normal leading-[24px] text-[#262D30]">
            We blend design, engineering, and AI to deliver better outcomes,
            faster. Transform your ideas into intelligent digital products.
          </p>
        </div>
      </div>
    </section>
  );
}

function WhyWeExistSection() {
  return (
    <section className="flex w-full flex-col items-center justify-start gap-[90px] bg-white px-0 py-[100px] [font-family:'Inter_Display','Inter',sans-serif] max-[809px]:gap-10 max-[809px]:px-4 max-[809px]:py-8">
      <div className="flex w-full max-w-[1200px] flex-col items-start justify-start gap-8 max-[1439px]:w-[calc(100%-128px)] max-[1439px]:max-w-none max-[1279px]:w-[calc(100%-64px)] max-[809px]:w-full max-[809px]:max-w-[1200px] max-[809px]:gap-6">
        <div className="flex w-[772px] flex-col items-start justify-start gap-8 max-[809px]:w-full">
          <h2 className="m-0 w-full text-[48px] font-semibold leading-[57.6px] text-[#262D30] max-[809px]:text-[24px] max-[809px]:leading-[28.8px]">
            Why We Exist
          </h2>
          <div className="flex w-full flex-col items-start gap-8">
            {WHY_PARAGRAPHS.map((paragraph) => (
              <p key={paragraph.text} className={`m-0 w-full text-[20px] leading-[32px] text-[#262D30] max-[809px]:text-[16px] max-[809px]:leading-[24px] ${paragraph.strong ? "font-semibold" : "font-normal"}`}>
                {paragraph.text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PrinciplesSection() {
  return (
    <section className="flex w-full flex-col items-center justify-start bg-[#F2F4F7] px-0 py-[100px] [font-family:'Inter_Display','Inter',sans-serif] max-[809px]:px-4 max-[809px]:py-8">
      <div className="flex w-full max-w-[1200px] flex-col items-start justify-start gap-12 max-[1439px]:w-[calc(100%-128px)] max-[1439px]:max-w-none max-[1279px]:w-[calc(100%-64px)] max-[809px]:w-full max-[809px]:max-w-[1200px] max-[809px]:gap-8">
        <div className="flex w-[600px] flex-col items-start justify-start gap-4 max-[809px]:w-full">
          <h2 className="m-0 w-full text-[48px] font-semibold leading-[57.6px] text-[#262D30] max-[809px]:text-[24px] max-[809px]:leading-[28.8px]">
            Our Principles
          </h2>
          <p className="m-0 w-full text-[20px] font-normal leading-[32px] text-[#262D30] max-[809px]:text-[16px] max-[809px]:leading-[24px]">
            Because reliable partnerships are built on more than talent. They&apos;re built on principles we don&apos;t compromise.
          </p>
        </div>

        <div className="flex min-h-[269.969px] w-full flex-row items-start justify-center gap-8 max-[809px]:min-h-0 max-[809px]:flex-col">
          {PRINCIPLES.map((principle) => (
            <article key={principle.title} className="flex w-[276px] flex-col items-start justify-start gap-4 max-[809px]:w-full max-[809px]:gap-3">
              <p className="m-0 w-full text-[32px] font-normal leading-[38.4px] text-[#262D30]">{principle.icon}</p>
              <h3 className="m-0 text-[20px] font-semibold leading-[30px] text-[#262D30] max-[809px]:text-[16px] max-[809px]:leading-[24px]">
                {principle.title}
              </h3>
              <p className="m-0 w-full text-[16px] font-normal leading-[25.6px] text-[#262D30]">
                {principle.lead}
              </p>
              <p className="m-0 w-full text-[16px] font-normal leading-[25.6px] text-[#262D30]">
                {principle.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ChevronIcon({ open, className }: { open: boolean; className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={`${className ?? ""} transition-transform duration-300 ease-out ${open ? "rotate-180" : ""}`}
      fill="none"
    >
      <path
        d="M6 9l6 6 6-6"
        stroke={open? "currentColor" : "#262D30"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HighlightedText({
  text,
  highlight,
  className,
}: {
  text: string;
  highlight: string;
  className: string;
}) {
  const start = text.indexOf(highlight);

  if (start === -1) {
    return <>{text}</>;
  }

  const before = text.slice(0, start);
  const after = text.slice(start + highlight.length);

  return (
    <>
      {before}
      <span className={className}>{highlight}</span>
      {after}
    </>
  );
}

function ClientStayPromptSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className={`flex w-full flex-col items-center justify-start overflow-hidden transition-[background-color,padding-top] duration-300 ease-out ${isOpen ? 'bg-[#262D30] pt-20 max-[809px]:pt-8' : 'bg-[#e1e8f0] pt-0'} px-0 pb-0 [font-family:'Inter_Display','Inter',sans-serif] max-[809px]:px-4`}>
      <button
        type="button"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
        className="flex w-full max-w-[1200px] cursor-pointer items-center justify-between gap-6 border-0 bg-transparent p-0 text-left max-[1439px]:w-[calc(100%-128px)] max-[1439px]:max-w-none max-[1279px]:w-[calc(100%-64px)] max-[809px]:w-full"
      >
        <h4 className={`m-0 w-[1158px] ${isOpen ? 'text-[32px] leading-[41.6px] font-semibold text-white max-[809px]:text-[24px] max-[809px]:leading-[31.2px]' : 'text-[22px] p-6'}   max-[809px]:w-auto`}>
          Do you want to know why clients stay with us?
        </h4>
        <ChevronIcon open={isOpen} className="h-6 w-6 shrink-0 text-white" />
      </button>

      <div
        className={`grid w-full max-w-[1200px] transition-[grid-template-rows,margin-top] duration-300 ease-out max-[1439px]:w-[calc(100%-128px)] max-[1439px]:max-w-none max-[1279px]:w-[calc(100%-64px)] max-[809px]:w-full ${
          isOpen ? "mt-10 grid-rows-[1fr] opacity-100 max-[809px]:mt-8" : "mt-0 grid-rows-[0fr] opacity-100"
        }`}
      >
        <div className={`flex min-h-0 w-full flex-col overflow-hidden ${isOpen ? 'pb-20 pt-2' : ''} text-white max-[809px]:pb-0 max-[809px]:pt-0`}>
          <div className="flex w-full gap-[87px] border-b border-white/15 py-3 max-[809px]:hidden">
            <p className="m-0 w-[342px] text-[14px] font-semibold uppercase leading-[22.4px] tracking-[2px] text-white/60">
              Their Past Experiences
            </p>
            <p className="m-0 w-[772px] text-[14px] font-semibold uppercase leading-[22.4px] tracking-[2px] text-white/60">
              Their Experience with Us
            </p>
          </div>
          {CLIENT_STAY_ROWS.map((row) => (
            <div key={row.past} className="flex w-full gap-8 border-b border-white/15 py-3 max-[809px]:flex-col max-[809px]:gap-3 max-[809px]:py-5">
              <p className="m-0 w-[399px] text-[16px] font-semibold leading-[25.6px] text-white max-[809px]:w-full">
                <HighlightedText text={row.past} highlight={row.pastHighlight} className="text-[#FF4A4A]" />
              </p>
              <p className="m-0 w-[769px] text-[16px] font-semibold leading-[25.6px] text-white max-[809px]:w-full">
                <HighlightedText text={row.us} highlight={row.usHighlight} className="text-[#5DDB74]" />
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqItem({ item }: { item: (typeof FAQ_ITEMS)[number] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full border-b border-[#262D30]">
      <button
        type="button"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
        className="flex min-h-16 w-full cursor-pointer items-center justify-between gap-2.5 border-0 bg-transparent px-0 py-4 text-left"
      >
        <span className="m-0 w-[calc(100%-42px)] text-[20px] font-semibold leading-[30px] text-[#262D30] max-[809px]:text-[16px] max-[809px]:leading-[24px]">
          {item.question}
        </span>
        <ChevronIcon open={isOpen} className="h-6 w-6 shrink-0 text-[#262D30]" />
      </button>
      <div
        className={`grid w-full transition-[grid-template-rows,opacity,padding-bottom] duration-300 ease-out ${
          isOpen ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] pb-0 opacity-0"
        }`}
      >
        <div className="flex min-h-0 w-full flex-col gap-3 overflow-hidden pr-10 max-[809px]:pr-0">
          {item.answer.map((paragraph) => (
            <p key={paragraph} className="m-0 text-[16px] font-normal leading-[25.6px] text-[#262D30]">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

function FaqSection() {
  return (
    <section className="flex w-full flex-col items-center justify-start bg-white px-0 py-20 [font-family:'Inter_Display','Inter',sans-serif] max-[809px]:px-4 max-[809px]:pt-8 max-[809px]:pb-12">
      <div className="flex w-full max-w-[1200px] flex-col items-start justify-start gap-14 max-[1439px]:w-[calc(100%-128px)] max-[1439px]:max-w-none max-[1279px]:w-[calc(100%-64px)] max-[809px]:w-full max-[809px]:max-w-[1200px]">
        <div className="flex w-full items-start justify-start gap-4 max-[809px]:flex-col">
          <h2 className="m-0 w-[396px] text-[48px] font-semibold leading-[57.6px] text-[#262D30] max-[809px]:w-full max-[809px]:text-[24px] max-[809px]:leading-[28.8px]">
            FAQs
          </h2>
          <div className="flex w-[788px] flex-col items-start justify-start gap-0 pt-2.5 max-[809px]:w-full">
            {FAQ_ITEMS.map((item) => (
              <FaqItem key={item.question} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function AboutPageSections() {
  return (
    <>
      <AboutHeroSection />
      <WhyWeExistSection />
      <PrinciplesSection />
      <ClientStayPromptSection />
      <FaqSection />
    </>
  );
}
