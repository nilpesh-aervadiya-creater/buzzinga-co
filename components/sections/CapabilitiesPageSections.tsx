import { useState } from "react";
import Testimonials from "@/components/sections/Testimonials";
import Container from "@/components/ui/Container";

const CAPABILITY_DETAILS = [
  {
    title: "Integrate Intelligence",
    service: "AI Feature Implementation",
    serviceColor: "#BFA9FE",
    details: [
      {
        label: "Your Goal",
        text: "Make your software smarter &ndash; leverage data for predictions, automate tasks, or create personalized user experiences.",
      },
      {
        label: "Deliverable",
        text: "Seamless integration of AI/ML capabilities into your applications.",
      },
      {
        label: "Our Process",
        text: "As AI natives, we expertly identify the right AI opportunities and implement them effectively. Our transparent process ensures you understand how AI adds value.",
      },
      {
        label: "Result",
        text: "Data-driven insights, automation, enhanced personalization, competitive edge.",
      },
    ],
  },
  {
    title: "Launch Your Big Idea",
    service: "MVP Development",
    serviceColor: "#FFC6BA",
    details: [
      {
        label: "Your Goal",
        text: "Quickly validate a new product concept & gather real user feedback without overspending.",
      },
      {
        label: "Deliverable",
        text: "A focused Minimum Viable Product (MVP) designed to test core hypotheses and gather crucial feedback.",
      },
      {
        label: "Our Process",
        text: "We leverage AI tools for rapid user research and design iteration, and our efficient development process gets your core product validated faster.",
      },
      {
        label: "Result",
        text: "Market validation, reduced risk, faster path to launch.",
      },
    ],
  },
  {
    title: "Modernize Your Technology",
    service: "App Modernization",
    serviceColor: "#ABEAF8",
    details: [
      {
        label: "Your Goal",
        text: "Overcome limitations of outdated software &ndash; improve speed, scalability, and user experience.",
      },
      {
        label: "Deliverable",
        text: "A revitalized, modern application built on a robust foundation.",
      },
      {
        label: "Our Process",
        text: "AI-assisted analysis helps us pinpoint bottlenecks in legacy code, and our streamlined processes ensure a smooth transition with minimal disruption, delivering a high-performance system.",
      },
      {
        label: "Result",
        text: "Improved performance, enhanced UX, scalable platform, reduced maintenance overhead.",
      },
    ],
  },
  {
    title: "Assisting Ongoing Work",
    service: "Ongoing Maintenance",
    serviceColor: "#8CF5A8",
    details: [
      {
        label: "Your Goal",
        text: "Ensure your critical applications remain stable, performant, and receive timely updates or minor feature enhancements.",
      },
      {
        label: "Deliverable",
        text: "Reliable upkeep: Proactive monitoring, maintenance, bug fixing, and feature enhancements.",
      },
      {
        label: "Our Process",
        text: "Our AI enhances support via proactive monitoring, faster debugging with log analysis, and efficient AI assistance for developing and testing incremental improvements smoothly.",
      },
      {
        label: "Result",
        text: "High stability, faster fixes, continuous upgrades and predictable costs.",
      },
    ],
  },
] as const;

const EXPERTISE_TABS = [
  {
    name: "Strategy",
    columns: [
      {
        title: "Research & Insights",
        items: [
          "Discovery & Requirement Analysis",
          "Product Auditing & Competitive Benchmarking",
          "Business & Data Analysis",
          "User Research",
        ],
      },
      {
        title: "Product & Business",
        items: [
          "Product Strategy & Roadmapping",
          "Proof of Concept (PoC) Planning",
          "Minimum Viable Product (MVP) Definition",
          "User Research",
        ],
      },
      {
        title: "Operations & Delivery",
        items: [
          "Product & Project Management",
          "Delivery Strategy & Sprints",
          "AI-Assisted Estimation & Workflow Planning",
        ],
      },
    ],
  },
  {
    name: "Design",
    columns: [
      {
        title: "Experience Design",
        items: [
          "UX Strategy & Information Architecture",
          "User Journey Mapping & Flow Optimization",
          "Wireframing & Prototyping",
          "Accessibility & Usability Audits",
        ],
      },
      {
        title: "Visual Design",
        items: [
          "User Interface Design",
          "Design Systems & Component Libraries",
          "Micro-interaction",
          "High-Fidelity Prototypes",
        ],
      },
    ],
  },
  {
    name: "Build",
    columns: [
      {
        title: "Automation & Integration",
        items: ["API Integrations", "CRM/ERP Connectivity", "Workflow Automation"],
      },
      {
        title: "Front-End",
        items: ["React", "Next.js", "Vue", "React Native", "Flutter", "& more"],
      },
      {
        title: "Back-EndDevelopment",
        items: ["Node.js", "Rube on Rails", "Python", "PostgreSQL", "MongoDB", "& more"],
      },
      {
        title: "DevOps & Infrastructure",
        items: ["CI/CD Pipelines", "Cloud Hosting", "Infrastructure Setup", "Monitoring & Maintenance"],
      },
    ],
  },
] as const;

const DELIVERABLES = [
  { title: "Web App", icon: "webApp" },
  { title: "Integration", icon: "integration" },
  { title: "Mobile App", icon: "mobileApp" },
  { title: "CMS", icon: "cms" },
  { title: "Website", icon: "website" },
  { title: "E-commerce", icon: "commerce" },
] as const;

const INDUSTRIES = [
  {
    icon: "⚙️",
    title: "SaaS & Startups",
    text: "Accelerate product cycles and scale efficiently, from MVPs to AI-powered platforms.",
  },
  {
    icon: "💳",
    title: "Fintech",
    text: "Automate operations, detect fraud, and deliver hyper-personalized financial experiences through intelligent data systems.",
  },
  {
    icon: "🧬",
    title: "Healthcare",
    text: "Enable predictive care, workflow automation, and compliant patient engagement using secure, AI-augmented systems.",
  },
  {
    icon: "🛒",
    title: "Retail & E-commerce",
    text: "Leverage real-time intelligence for demand forecasting, personalized shopping, and optimized logistics.",
  },
  {
    icon: "🚚",
    title: "Logistics",
    text: "Enhance visibility, predict bottlenecks, and optimize delivery networks through data-driven automation.",
  },
  {
    icon: "🔐",
    title: "Cybersecurity & DeepTech",
    text: "Fortify infrastructure with AI-driven threat detection, continuous monitoring, and adaptive defense mechanisms.",
  },
] as const;

const TAB_METRICS = {
  Strategy: { width: 103.719, offset: 0 },
  Design: { width: 92.469, offset: 105.719 },
  Build: { width: 77.484, offset: 200.188 },
} as const;

type DeliverableIconName = (typeof DELIVERABLES)[number]["icon"];

function DeliverableIcon({ name }: { name: DeliverableIconName }) {
  const common = {
    fill: "transparent",
    stroke: "rgb(0,0,0)",
    strokeWidth: 1,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  return (
    <svg
      viewBox="0 0 24 24"
      className="h-10 w-10"
      aria-hidden="true"
      role="presentation"
    >
      {name === "webApp" && (
        <>
          <path {...common} d="M 2 16 C 0.895 16 0 15.105 0 14 L 0 2 C 0 0.895 0.895 0 2 0 L 18 0 C 19.105 0 20 0.895 20 2 L 20 14 C 20 15.105 19.105 16 18 16 Z" transform="translate(2 4)" />
          <path {...common} d="M 0 0 L 0.01 0" transform="translate(6 8)" />
          <path {...common} d="M 0 0 L 0.01 0" transform="translate(10 8)" />
          <path {...common} d="M 0 0 L 0.01 0" transform="translate(14 8)" />
        </>
      )}
      {name === "integration" && (
        <>
          <path {...common} d="M 0.383 0 L 0 0.924" transform="translate(10.469 19.772)" />
          <path {...common} d="M 0 0.923 L 0.383 0" transform="translate(13.148 13.305)" />
          <path {...common} d="M 2.679 6.467 C 4.21 5.833 4.937 4.078 4.303 2.547 C 3.669 1.016 1.914 0.289 0.383 0.923 L 0 0" transform="translate(10.469 13.305)" />
          <path {...common} d="M 4.531 6.468 L 4.149 5.544 C 2.618 6.178 0.863 5.451 0.229 3.92 C -0.405 2.389 0.322 0.634 1.853 0" transform="translate(8.999 14.228)" />
          <path {...common} d="M 0 0.383 L 0.923 0" transform="translate(14.772 15.469)" />
          <path {...common} d="M 0 0 L 0.923 0.383" transform="translate(14.772 18.148)" />
          <path {...common} d="M 2.198 12.094 C 0.339 10.34 -0.418 7.712 0.225 5.239 C 0.869 2.765 2.809 0.838 5.288 0.213 C 7.766 -0.412 10.389 0.363 12.128 2.236 C 12.86 3.022 13.4 3.965 13.708 4.994 L 15.498 4.994 C 17.456 5.02 19.171 6.309 19.742 8.181 C 20.313 10.053 19.608 12.08 17.998 13.194" transform="translate(2.002 3.006)" />
          <path {...common} d="M 0.923 0.383 L 0 0" transform="translate(8.305 15.469)" />
          <path {...common} d="M 0.923 0 L 0 0.383" transform="translate(8.305 18.148)" />
        </>
      )}
      {name === "mobileApp" && (
        <>
          <path {...common} d="M 2 20 C 0.895 20 0 19.105 0 18 L 0 2 C 0 0.895 0.895 0 2 0 L 12 0 C 13.105 0 14 0.895 14 2 L 14 18 C 14 19.105 13.105 20 12 20 Z" transform="translate(5 2)" />
          <path {...common} d="M 0 0 L 0.01 0" transform="translate(12 18)" />
        </>
      )}
      {name === "cms" && (
        <>
          <path {...common} d="M 8.3 17 L 2 17 C 0.895 17 0 16.105 0 15 L 0 2 C 0 0.896 0.895 0 2 0 L 5.98 0 C 6.66 -0.007 7.296 0.332 7.67 0.9 L 8.33 2.1 C 8.7 2.662 9.327 3 10 3 L 18 3 C 19.105 3 20 3.896 20 5 L 20 8.3" transform="translate(2 3)" />
          <path {...common} d="M 0 0.382 L 0.923 0" transform="translate(14.305 19.148)" />
          <path {...common} d="M 0.923 0.383 L 0 0" transform="translate(14.305 16.469)" />
          <path {...common} d="M 0.383 0.923 L 0 0" transform="translate(16.469 14.305)" />
          <path {...common} d="M 0.383 0 L 0 0.924" transform="translate(16.469 20.772)" />
          <path {...common} d="M 0 0.923 L 0.383 0" transform="translate(19.148 14.305)" />
          <path {...common} d="M 0.382 0.924 L 0 0" transform="translate(19.148 20.772)" />
          <path {...common} d="M 0 0.383 L 0.924 0" transform="translate(20.772 16.469)" />
          <path {...common} d="M 0 0 L 0.924 0.383" transform="translate(20.772 19.148)" />
          <path {...common} d="M 0 3 C 0 1.343 1.343 0 3 0 C 4.657 0 6 1.343 6 3 C 6 4.657 4.657 6 3 6 C 1.343 6 0 4.657 0 3 Z" transform="translate(15 15)" />
        </>
      )}
      {name === "website" && (
        <>
          <path {...common} d="M 0 10 C 0 4.477 4.477 0 10 0 C 15.523 0 20 4.477 20 10 C 20 15.523 15.523 20 10 20 C 4.477 20 0 15.523 0 10 Z" transform="translate(2 2)" />
          <path {...common} d="M 4 0 C -1.333 5.6 -1.333 14.4 4 20 C 9.333 14.4 9.333 5.6 4 0" transform="translate(8 2)" />
          <path {...common} d="M 0 0 L 20 0" transform="translate(2 12)" />
        </>
      )}
      {name === "commerce" && (
        <>
          <path {...common} d="M 0 1 C 0 0.448 0.448 0 1 0 C 1.552 0 2 0.448 2 1 C 2 1.552 1.552 2 1 2 C 0.448 2 0 1.552 0 1 Z" transform="translate(7 20)" />
          <path {...common} d="M 0 1 C 0 0.448 0.448 0 1 0 C 1.552 0 2 0.448 2 1 C 2 1.552 1.552 2 1 2 C 0.448 2 0 1.552 0 1 Z" transform="translate(18 20)" />
          <path {...common} d="M 0 0 L 2 0 L 4.66 12.42 C 4.861 13.358 5.701 14.021 6.66 14 L 16.44 14 C 17.378 13.998 18.188 13.346 18.39 12.43 L 20.04 5 L 3.07 5" transform="translate(2.05 2.05)" />
        </>
      )}
    </svg>
  );
}

export default function CapabilitiesPageSections() {
  const [activeTab, setActiveTab] = useState<(typeof EXPERTISE_TABS)[number]["name"]>("Strategy");
  const activeExpertise = EXPERTISE_TABS.find((tab) => tab.name === activeTab) ?? EXPERTISE_TABS[0];
  const expertiseGridColumns =
    activeTab === "Design"
      ? "584px 584px"
      : activeTab === "Build"
        ? "276px 276px 276px 276px"
        : "378.656px 378.672px 378.672px";
  const activeTabMetrics = TAB_METRICS[activeTab];

  return (
    <>
      <style jsx global>{`
        @font-face {
          font-family: "Inter Display";
          src: url("/buzzinga-assets/fonts/inter-display-400.woff2") format("woff2");
          font-display: swap;
          font-style: normal;
          font-weight: 400;
        }

        @font-face {
          font-family: "Inter Display";
          src: url("/buzzinga-assets/fonts/inter-display-600.woff2") format("woff2");
          font-display: swap;
          font-style: normal;
          font-weight: 600;
        }

        .industries-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          gap: 0;
          padding: 100px 0;
          background: transparent;
          font-family: "Inter Display", "Inter", sans-serif;
        }

        .industries-content {
          width: 1200px;
          max-width: 1200px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          gap: 40px;
        }

        .industries-intro {
          width: 600px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          gap: 16px;
        }

        .industries-title {
          margin: 0;
          width: 600px;
          font-family: "Inter Display", "Inter", sans-serif;
          font-size: 48px;
          font-weight: 600;
          line-height: 57.6px;
          letter-spacing: normal;
          color: #262d30;
        }

        .industries-copy {
          margin: 0;
          width: 600px;
          font-family: "Inter Display", "Inter", sans-serif;
          font-size: 20px;
          font-weight: 400;
          line-height: 32px;
          letter-spacing: normal;
          color: #262d30;
        }

        .industries-grid {
          width: 1200px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 16px;
        }

        .industries-row {
          width: 1200px;
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: center;
          gap: 16px;
        }

        .industry-card {
          width: 389.333px;
          min-height: 120px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: space-between;
          gap: 16px;
          overflow: hidden;
          padding: 16px;
          border: 1px solid #2424241a;
          border-radius: 16px;
          background: #ffffff;
          color: #262d30;
          transition: all 300ms ease;
        }

        .industry-card:hover {
          min-height: 183.594px;
          justify-content: center;
        }

        .industry-icon {
          margin: 0;
          width: 100%;
          font-family: "Inter Display", "Inter", sans-serif;
          font-size: 32px;
          font-weight: 300;
          line-height: 38.4px;
          color: #262d30;
        }

        .industry-title {
          margin: 0;
          width: 100%;
          font-family: "Inter Display", "Inter", sans-serif;
          font-size: 20px;
          font-weight: 600;
          line-height: 30px;
          color: #262d30;
        }

        .industry-text-wrap {
          display: flex;
          flex-direction: column;
          gap: 0;
          width: 100%;
        }

        .industry-card:hover .industry-text-wrap {
          gap: 16px;
        }

        .industry-text {
          margin: 0;
          width: 100%;
          max-height: 0;
          overflow: hidden;
          opacity: 0;
          font-family: "Inter Display", "Inter", sans-serif;
          font-size: 16px;
          font-weight: 400;
          line-height: 25.6px;
          color: #262d30;
          transition: all 300ms ease;
        }

        .industry-card:hover .industry-text {
          max-height: 80px;
          opacity: 1;
        }

        @media (max-width: 1439px) {
          .industries-section {
            padding: 80px 64px;
          }
        }

        @media (max-width: 1279px) {
          .industries-section {
            padding: 64px 32px;
          }

          .industries-content,
          .industries-grid,
          .industries-row {
            width: 100%;
            max-width: 960px;
          }

          .industries-content {
            gap: 40px;
          }

          .industries-intro,
          .industries-title,
          .industries-copy {
            width: 480px;
          }

          .industries-title {
            font-size: 32px;
            line-height: 38.4px;
          }

          .industries-copy {
            font-size: 18px;
            line-height: 28.8px;
          }

          .industry-card {
            width: calc((100% - 32px) / 3);
            min-height: 194.828px;
            justify-content: center;
          }

          .industry-title {
            font-size: 18px;
            line-height: 25.2px;
          }

          .industry-text-wrap {
            gap: 16px;
          }

          .industry-text,
          .industry-card:hover .industry-text {
            max-height: none;
            opacity: 1;
          }
        }

        @media (max-width: 1023px) {
          .industries-section {
            padding: 32px 16px;
          }

          .industries-content {
            max-width: none;
            gap: 56px;
          }

          .industries-intro,
          .industries-title,
          .industries-copy {
            width: 100%;
          }

          .industries-title {
            font-size: 24px;
            line-height: 28.8px;
          }

          .industries-copy {
            font-size: 16px;
            line-height: 24px;
          }

          .industries-row {
            flex-direction: column;
            align-items: flex-start;
          }

          .industry-card,
          .industry-card:hover {
            width: 100%;
            min-height: auto;
            justify-content: center;
          }

          .industry-title {
            font-size: 14px;
            line-height: 16.8px;
          }

          .industry-text,
          .industry-card:hover .industry-text {
            max-height: none;
            opacity: 1;
          }

          .industry-text-wrap {
            gap: 16px;
          }
        }

        .expertise-grid {
          grid-template-columns: 1fr;
        }

        @media (min-width: 1280px) {
          .expertise-grid {
            grid-template-columns: var(--expertise-grid-columns);
          }
        }
      `}</style>

      <section className="bg-[url('/buzzinga-assets/images/backgrounds/capabilities-hero-bg.webp')] bg-cover bg-center bg-no-repeat pt-[120px] pb-12 [font-family:'Inter_Display','Inter',sans-serif] min-[810px]:pt-[164px] min-[810px]:pb-20">
        <Container className="max-w-[1200px]">
          <div className="flex flex-col items-start gap-4">
            <h1 className="m-0 w-full text-[28px] font-semibold leading-[33.6px] text-[#262D30] min-[810px]:text-[44px] min-[810px]:leading-[52.8px] xl:text-[56px] xl:leading-[61.6px]">
              Our Capabilities
            </h1>
            <p className="m-0 w-full text-[16px] font-normal leading-6 text-[#262D30] min-[810px]:w-[600px] min-[810px]:text-[20px] min-[810px]:leading-[32px]">
              Powered by AI-Driven Efficiency
            </p>
            <p className="m-0 w-full text-[16px] font-normal leading-6 text-[#262D30] min-[810px]:w-[600px] min-[810px]:text-[20px] min-[810px]:leading-[32px]">
              We design and build digital products with precision, creativity, and
              speed; using AI to enhance every stage of strategy, design, and
              development.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-8 [font-family:'Inter_Display','Inter',sans-serif] min-[810px]:py-16 min-[1280px]:py-20 min-[1440px]:py-[100px]">
        <Container className="flex !max-w-none flex-col items-center gap-8 px-4 min-[810px]:gap-12 min-[810px]:px-8 min-[1280px]:gap-16 min-[1280px]:!px-16 min-[1440px]:!max-w-[1200px] min-[1440px]:!px-0">
          {CAPABILITY_DETAILS.map((capability) => (
            <article
              key={capability.title}
              className="flex w-full flex-col items-start justify-center gap-2 rounded-2xl min-[1024px]:flex-row min-[1024px]:gap-4 min-[1280px]:gap-12 min-[1440px]:gap-16"
            >
              <div className="flex w-full flex-col items-center justify-center gap-0 min-[1024px]:w-[40%] min-[1280px]:w-[calc((100%-48px)/2)] min-[1440px]:w-[568px]">
                <h3 className="m-0 w-full text-[20px] font-semibold leading-[26px] text-[#262D30] min-[1024px]:text-[26px] min-[1024px]:leading-[31.2px] min-[1280px]:text-[40px] min-[1280px]:leading-[48px]">
                  {capability.title}
                </h3>
                <h3
                  className="m-0 w-full text-[20px] font-semibold leading-[26px] min-[1024px]:text-[26px] min-[1024px]:leading-[31.2px] min-[1280px]:text-[40px] min-[1280px]:leading-[48px]"
                  style={{ color: capability.serviceColor }}
                >
                  {capability.service}
                </h3>
              </div>

              <div className="flex w-full flex-col items-center justify-center gap-0 min-[1024px]:w-[calc(60%-16px)] min-[1280px]:w-[calc((100%-48px)/2)] min-[1440px]:w-[568px]">
                <div className="flex h-[22px] w-full items-center justify-center gap-2.5 py-2.5">
                  <div className="h-0.5 w-full bg-[#262D30]" />
                </div>

                {capability.details.map((detail) => (
                  <div
                    key={detail.label}
                    className="flex w-full flex-col items-start justify-center gap-1.5 py-2.5 min-[1024px]:flex-row min-[1024px]:gap-2.5"
                  >
                    <div className="flex w-full flex-col items-center justify-center gap-0 min-[1024px]:w-[33.333%] min-[1280px]:w-[180.672px] min-[1440px]:w-[186px]">
                      <p className="m-0 w-full text-[16px] font-semibold leading-6 text-[#262D30] min-[1024px]:text-[14px] min-[1024px]:font-normal min-[1024px]:leading-[22.4px] min-[1280px]:text-[16px] min-[1280px]:leading-[25.6px]">
                        {detail.label}
                      </p>
                    </div>
                    <div className="flex w-full items-end justify-center gap-2.5 min-[1024px]:w-[66.667%] min-[1280px]:w-[361.328px] min-[1440px]:w-[372px]">
                      <p
                        className="m-0 w-full text-[16px] font-normal leading-[25.6px] text-[#262D30] min-[1024px]:text-[14px] min-[1024px]:leading-[22.4px] min-[1280px]:text-[16px] min-[1280px]:leading-[25.6px]"
                        dangerouslySetInnerHTML={{ __html: detail.text }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </Container>
      </section>

      <section className="bg-[#F2F4F7] py-12 [font-family:'Inter_Display','Inter',sans-serif] min-[810px]:py-[100px]">
        <Container className="flex max-w-[1200px] flex-col items-start gap-10 min-[810px]:gap-12">
          <div className="flex h-auto w-full flex-col items-start justify-between gap-4 xl:h-[121.594px]">
            <h2 className="m-0 w-full text-[24px] font-semibold leading-[28.8px] text-[#262D30] min-[810px]:w-[768px] min-[810px]:text-[48px] min-[810px]:leading-[57.6px]">
              What Goes Behind It All
            </h2>
            <p className="m-0 w-full text-[16px] font-normal leading-6 text-[#262D30] min-[810px]:w-[768px] min-[810px]:text-[20px] min-[810px]:leading-[32px]">
              Every capability we offer is powered by a deep stack of strategy,
              design, and development expertise. Enhanced by AI to move faster
              and smarter.
            </p>
          </div>

          <div className="h-auto w-full xl:h-[365px]">
            <div className="flex h-[51px] w-full items-start overflow-hidden rounded-2xl">
              <div className="rounded-2xl bg-[#2424241a]">
                <div className="relative flex gap-0.5 p-1">
                  <div
                    className="pointer-events-none absolute top-1 bottom-1 left-1 z-0 rounded-2xl bg-[#2A2D30] transition-[transform,width] duration-300 ease-out"
                    style={{
                      width: `${activeTabMetrics.width}px`,
                      transform: `translate3d(${activeTabMetrics.offset}px, 0, 0)`,
                      transformOrigin: "50% 50% 0px",
                    }}
                  />
                  {EXPERTISE_TABS.map((tab) => {
                    const isActive = tab.name === activeTab;

                    return (
                      <button
                        key={tab.name}
                        type="button"
                        onClick={() => setActiveTab(tab.name)}
                        className="relative z-10 h-[41px] rounded-2xl px-5 py-3 text-[16px] font-normal leading-4 transition-colors duration-300 [font-family:Inter,'Inter_Display',sans-serif]"
                        style={{ width: `${TAB_METRICS[tab.name].width}px` }}
                      >
                        <span
                          className={`relative z-10 ${
                            isActive ? "text-white" : "text-[#262D30]"
                          }`}
                        >
                          {tab.name}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            <div
              className="expertise-grid mt-[40px] grid w-full gap-x-8 gap-y-8"
              style={{ "--expertise-grid-columns": expertiseGridColumns } as React.CSSProperties}
            >
              {activeExpertise.columns.map((column) => (
                <div key={column.title} className="w-full">
                  <p className="m-0 text-[18px] font-semibold leading-[25.2px] text-[#262D30]">
                    {column.title}
                  </p>
                  <div className="mt-[10px] flex flex-col gap-[10px]">
                    {column.items.map((item) => (
                      <p
                        key={item}
                        className="m-0 text-[18px] font-normal leading-[27px] text-[#262D30]"
                      >
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="h-px w-full bg-[#262D30]" />

          <div className="flex h-auto w-full flex-col items-start justify-start gap-8 xl:h-[200.406px] xl:flex-row">
            <h2 className="m-0 w-full flex-none text-[24px] font-semibold leading-[28.8px] text-[#262D30] min-[810px]:text-[48px] min-[810px]:leading-[57.6px] xl:w-[389.328px]">
              Deliverables
            </h2>

            <div className="grid w-full flex-1 grid-cols-2 gap-x-[10px] gap-y-[32px] min-[810px]:grid-cols-3 min-[810px]:gap-y-[40px]">
              {DELIVERABLES.map((deliverable) => (
                <div key={deliverable.title} className="w-full xl:w-[252.891px]">
                  <DeliverableIcon name={deliverable.icon} />
                  <p className="mt-[10px] mb-0 text-[18px] font-semibold leading-[25.2px] text-[#262D30]">
                    {deliverable.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="industries-section">
        <div className="industries-content">
          <div className="industries-intro">
            <h2 className="industries-title">Industries We Serve</h2>
            <p className="industries-copy">
              We’ve partnered with businesses across industries to reimagine
              products, modernize systems, and embed intelligence into everyday
              operations.
            </p>
          </div>

          <div className="industries-grid">
            {[INDUSTRIES.slice(0, 3), INDUSTRIES.slice(3)].map((row, rowIndex) => (
              <div key={rowIndex} className="industries-row">
                {row.map((industry) => (
                  <article key={industry.title} className="industry-card">
                    <h3 className="industry-icon">{industry.icon}</h3>
                    <div className="industry-text-wrap">
                      <h6 className="industry-title">{industry.title}</h6>
                      <p className="industry-text">{industry.text}</p>
                    </div>
                  </article>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials title="Our Work, Through Their Words" />
    </>
  );
}
