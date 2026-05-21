import { useRef, useState } from "react";
import Image from "next/image";

const SERVICES = [
  "Project Management",
  "UX Research",
  "User Interface Design",
  "React Native Development",
  "Back-end Development",
];

const DELIVERABLES = ["MeLiSA Mobile App", "MeLiSA Admin Mobile App"];

const DISCOVERY_APPS = [
  {
    title: "MeLiSA App",
    description: "For end-users to request and receive live or scheduled support.",
  },
  {
    title: "Echo Company App",
    description: "For representatives to manage requests, availability, and support sessions.",
  },
];

const APPROACH_ITEMS = [
  {
    title: "Simple",
    description: "One-tap access to help.",
  },
  {
    title: "Consistent",
    description: "Unified interface across roles.",
  },
  {
    title: "Reliable",
    description: "Built for real-time use in high-pressure environments.",
  },
];

function EchoHealthcareDivider() {
  return (
    <section className="flex w-full justify-center px-4 pt-16 min-[810px]:px-16">
      <div className="h-px w-full max-w-[700px] bg-[#262D30]" />
    </section>
  );
}

function EchoHealthcareMediaBox({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`flex w-full justify-center overflow-hidden rounded-2xl bg-[#EBEBEB] px-12 pb-0 pt-12 ${className}`}
    >
      {children}
    </div>
  );
}

function EchoHealthcareDiagramMedia() {
  return (
    <section className="flex w-full justify-center px-4 pt-16 min-[810px]:px-16">
      <div className="flex w-full max-w-[1152px] flex-col gap-6 min-[810px]:gap-16">
        <EchoHealthcareMediaBox>
          <Image
            src="/buzzinga-assets/images/project-detail/echohealthcare-discovery-approach.png"
            alt=""
            width={2099}
            height={1804}
            unoptimized
            className="block h-auto w-[65.8667vw] max-w-[893px] min-[810px]:w-[69.765625vw]"
          />
        </EchoHealthcareMediaBox>
      </div>
    </section>
  );
}

function EchoHealthcareSliderArrow({
  direction,
  disabled,
  onClick,
}: {
  direction: "Previous" | "Next";
  disabled: boolean;
  onClick: () => void;
}) {
  const image =
    direction === "Previous"
      ? "carousel-arrow-prev.svg"
      : "carousel-arrow-next.svg";

  return (
    <button
      type="button"
      aria-label={direction}
      disabled={disabled}
      onClick={onClick}
      className={`absolute top-1/2 z-10 h-10 w-10 -translate-y-1/2 overflow-hidden rounded-[40px] border-0 bg-[rgba(0,0,0,0.2)] p-0 transition-opacity ${
        direction === "Previous" ? "left-5" : "right-5"
      } ${disabled ? "cursor-default opacity-0" : "cursor-pointer opacity-100"}`}
    >
      <Image
        src={`/buzzinga-assets/images/project-detail/${image}`}
        alt=""
        width={40}
        height={40}
        unoptimized
        className="block h-10 w-10"
      />
    </button>
  );
}

function EchoHealthcareImageSlider() {
  const sliderRef = useRef<HTMLUListElement>(null);
  const snapTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const wheelLockRef = useRef(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const slideCount = 2;

  const scrollToSlide = (index: number) => {
    const slider = sliderRef.current;
    if (!slider) return;

    const nextIndex = Math.max(0, Math.min(slideCount - 1, index));
    const slideWidth = slider.children[0]?.getBoundingClientRect().width ?? slider.clientWidth;
    slider.scrollTo({
      left: nextIndex * (slideWidth + 10),
      behavior: "smooth",
    });
    setActiveIndex(nextIndex);
  };

  const snapToNearestSlide = (slider: HTMLUListElement) => {
    if (snapTimeoutRef.current) {
      clearTimeout(snapTimeoutRef.current);
    }

    snapTimeoutRef.current = setTimeout(() => {
      const slideWidth = slider.children[0]?.getBoundingClientRect().width ?? slider.clientWidth;
      scrollToSlide(Math.round(slider.scrollLeft / (slideWidth + 10)));
    }, 120);
  };

  const handleWheel = (event: React.WheelEvent<HTMLUListElement>) => {
    if (Math.abs(event.deltaX) < 8) return;

    event.preventDefault();

    if (wheelLockRef.current) return;
    wheelLockRef.current = true;
    scrollToSlide(activeIndex + (event.deltaX > 0 ? 1 : -1));

    window.setTimeout(() => {
      wheelLockRef.current = false;
    }, 520);
  };

  return (
    <section className="flex w-full justify-center overflow-hidden px-4 pt-24 min-[810px]:px-8 min-[810px]:pt-16 min-[1200px]:px-16">
      <div className="relative flex aspect-[1200/700] w-full max-w-[1152px] overflow-hidden rounded-[32px]">
        <ul
          ref={sliderRef}
          className="project-scrollbar m-0 flex h-full w-full snap-x snap-mandatory list-none gap-[10px] overflow-x-auto overflow-y-hidden scroll-smooth p-0"
          onScroll={(event) => {
            const slideWidth =
              event.currentTarget.children[0]?.getBoundingClientRect().width ??
              event.currentTarget.clientWidth;
            setActiveIndex(Math.round(event.currentTarget.scrollLeft / (slideWidth + 10)));
            snapToNearestSlide(event.currentTarget);
          }}
          onWheel={handleWheel}
        >
          {[
            "echohealthcare-approach-carousel-1.png",
            "echohealthcare-approach-carousel-2.png",
          ].map((image) => (
            <li key={image} className="h-full w-full shrink-0 snap-start">
              <Image
                src={`/buzzinga-assets/images/project-detail/${image}`}
                alt=""
                width={1200}
                height={700}
                unoptimized
                className="block h-full w-full object-cover"
              />
            </li>
          ))}
        </ul>
        <EchoHealthcareSliderArrow
          direction="Previous"
          disabled={activeIndex === 0}
          onClick={() => scrollToSlide(activeIndex - 1)}
        />
        <EchoHealthcareSliderArrow
          direction="Next"
          disabled={activeIndex === slideCount - 1}
          onClick={() => scrollToSlide(activeIndex + 1)}
        />
      </div>
    </section>
  );
}

function BriefInfoCard({
  title,
  items,
  className = "",
}: {
  title: string;
  items: string[];
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col items-start gap-4 rounded-2xl bg-[#F2F4F7] p-6 ${className}`}
    >
      <p className="m-0 w-full text-[14px] font-semibold leading-[21px] text-[#262D30] min-[810px]:text-[18px] min-[810px]:leading-[25.2px]">
        {title}
      </p>
      <div className="flex w-full flex-col items-center justify-center gap-2">
        {items.map((item) => (
          <p
            key={item}
            className="m-0 w-full text-[16px] font-normal leading-[25.6px] text-[#262D30]"
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}

function DiscoveryAppCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex w-full flex-col items-start gap-2 rounded-2xl bg-[#F2F4F7] p-6 min-[810px]:h-[150px]">
      <p className="m-0 w-full text-[16px] font-semibold leading-6 text-[#262D30] min-[810px]:text-[20px] min-[810px]:leading-[30px]">
        {title}
      </p>
      <p className="m-0 w-full text-[16px] font-normal leading-6 text-[#262D30] min-[810px]:text-[20px] min-[810px]:leading-8">
        {description}
      </p>
    </div>
  );
}

function ApproachFeatureCard({
  title,
  description,
  tall = false,
}: {
  title: string;
  description: string;
  tall?: boolean;
}) {
  return (
    <div
      className={`flex w-full flex-col items-start gap-2 rounded-2xl bg-[#F2F4F7] p-5 min-[810px]:p-6 ${
        tall ? "min-[810px]:h-[150px]" : "min-[810px]:h-[118px]"
      }`}
    >
      <p className="m-0 w-full text-[16px] font-semibold leading-6 text-[#262D30] min-[810px]:text-[20px] min-[810px]:leading-[30px]">
        {title}
      </p>
      <p className="m-0 w-full text-[16px] font-normal leading-6 text-[#262D30] min-[810px]:text-[20px] min-[810px]:leading-8">
        {description}
      </p>
    </div>
  );
}

export function EchoHealthcareHeroSection() {
  return (
    <section className="flex w-full justify-center pb-12 pt-[120px] min-[810px]:pb-0 min-[810px]:pt-[162px]">
      <div className="flex w-full max-w-[1200px] flex-col items-center gap-6 min-[810px]:gap-16">
        <div className="flex w-full flex-col items-start gap-4 rounded-2xl">
          <p className="m-0 w-full text-[18px] text-center font-normal leading-[25.2px] text-[rgba(36,36,36,0.7)] min-[810px]:text-[24px] min-[810px]:leading-[33.6px]">
            Echo Healthcare -&gt; MeLiSA
          </p>
          <h1 className="m-0 w-full text-center text-[28px] font-semibold leading-[33.6px] tracking-normal text-[#262D30] min-[810px]:text-[56px] min-[810px]:leading-[61.6px]">
            <span className="block">Enabling efficient medical</span>
            <span className="block">simulation support services</span>
          </h1>
        </div>

        <div className="flex w-full justify-center rounded-[32px] bg-[#EBEBEB] px-12 pb-0 pt-12">
          <Image
            src="/buzzinga-assets/images/project-detail/echohealthcare-hero.png"
            alt=""
            width={1520}
            height={1056}
            priority
            unoptimized
            className="block h-auto w-[clamp(217px,calc(88.04vw-113.15px),929px)]"
          />
        </div>
      </div>
    </section>
  );
}

export function EchoHealthcareBriefSection() {
  return (
    <section className="flex w-full justify-center px-4 pb-0 pt-0 min-[810px]:px-16 min-[810px]:pt-20">
      <div className="flex w-full max-w-[700px] flex-col items-start gap-4">
        <h3 className="m-0 w-full text-[20px] font-semibold leading-[26px] text-[#262D30] min-[810px]:text-[40px] min-[810px]:leading-[48px]">
          Brief
        </h3>

        <p className="m-0 w-full text-[16px] font-normal leading-6 text-[#262D30] min-[810px]:text-[20px] min-[810px]:leading-8">
          Echo Healthcare provides advanced medical simulation and education products to leading
          universities and institutions. However, managing simulators required frequent expert
          assistance, which made real-time support difficult.
        </p>

        <p className="m-0 w-full text-[20px] font-normal leading-[30px] text-[#262D30] min-[810px]:leading-8">
          Buzzinga Co. partnered with Echo Healthcare to design and develop MeLiSA (Master Level
          Service Agreement), a mobile solution that connects users with simulator experts in under
          a minute, transforming their support operations.
        </p>

        <div className="flex w-full flex-col items-start gap-2 pt-4 min-[810px]:flex-row min-[810px]:pb-4">
          <BriefInfoCard
            title="Services"
            items={SERVICES}
            className="w-full min-[810px]:h-[271px] min-[810px]:w-[370px]"
          />

          <div className="flex w-full flex-col items-center justify-center gap-2 min-[810px]:w-[322px]">
            <BriefInfoCard title="Deliverables" items={DELIVERABLES} className="w-full" />
            <BriefInfoCard
              title="Domain"
              items={["Healthcare and Education Technology"]}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function EchoHealthcareChallengeDivider() {
  return <EchoHealthcareDivider />;
}

export function EchoHealthcareChallengeSection() {
  return (
    <section className="flex w-full justify-center px-4 pb-0 pt-16 min-[810px]:px-16">
      <div className="flex w-full max-w-[700px] flex-col items-start gap-4 min-[810px]:flex-row min-[810px]:gap-6">
        <div className="flex w-auto flex-col justify-center min-[810px]:w-[210px]">
          <p className="m-0 text-[18px] font-semibold leading-[25.2px] text-[#262D30] min-[810px]:text-[24px] min-[810px]:leading-[33.6px]">
            Challenge
          </p>
        </div>

        <div className="flex w-full flex-row items-center justify-center gap-[10px] pt-0.5 min-[810px]:w-[466px]">
          <div className="flex w-full flex-col justify-center">
            <p className="m-0 w-full text-[20px] font-normal leading-[30px] text-[#262D30] min-[810px]:leading-8">
              The existing web-based system made real-time assistance slow and complex. Users in
              classrooms and labs often needed quick, hands-free help. We needed to create a
              mobile-first solution that offered instant connection to simulator experts through
              audio, video, or chat with minimal steps.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function EchoHealthcareDiscoveryApproachMediaSection() {
  return <EchoHealthcareDiagramMedia />;
}

export function EchoHealthcareDiscoverySection() {
  return (
    <section className="flex w-full justify-center px-4 pb-0 pt-16 min-[810px]:px-16">
      <div className="flex w-full max-w-[700px] flex-col items-start gap-4 min-[810px]:flex-row min-[810px]:gap-6">
        <div className="flex w-auto flex-col justify-center min-[810px]:w-[210px]">
          <p className="m-0 text-[18px] font-semibold leading-[25.2px] text-[#262D30] min-[810px]:text-[24px] min-[810px]:leading-[33.6px]">
            Discovery
          </p>
        </div>

        <div className="flex w-full flex-col items-center justify-center gap-6 pt-0.5 min-[810px]:w-[466px]">
          <div className="flex w-full flex-col justify-center">
            <p className="m-0 w-full text-[20px] font-normal leading-[30px] text-[#262D30] min-[810px]:leading-8">
              We conducted workshops with Echo Healthcare&rsquo;s support and sales teams to
              understand user needs and workflows. The research revealed three key user types:
              End-users, Company Representatives, and Admins, each requiring different tools and
              permissions.
            </p>
          </div>

          <div className="flex w-full flex-col items-center justify-center gap-2">
            <p className="m-0 w-full text-[16px] font-normal leading-6 text-[#262D30] min-[810px]:text-[20px] min-[810px]:leading-8">
              To address this, we proposed two mobile apps:
            </p>
            {DISCOVERY_APPS.map((app) => (
              <DiscoveryAppCard key={app.title} {...app} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function EchoHealthcareApproachSection() {
  return (
    <section className="flex w-full justify-center px-4 pb-0 pt-20 min-[810px]:px-16 min-[810px]:pt-16">
      <div className="flex w-full max-w-[700px] flex-col items-start gap-4 min-[810px]:flex-row min-[810px]:gap-6">
        <div className="flex w-auto flex-col justify-center min-[810px]:w-[210px]">
          <p className="m-0 text-[18px] font-semibold leading-[25.2px] text-[#262D30] min-[810px]:text-[24px] min-[810px]:leading-[33.6px]">
            Approach
          </p>
        </div>

        <div className="flex w-full flex-col items-center justify-center gap-6 pt-0.5 min-[810px]:w-[466px]">
          <div className="flex w-full flex-col justify-center">
            <p className="m-0 w-full text-[16px] font-normal leading-6 text-[#262D30] min-[810px]:text-[20px] min-[810px]:leading-8">
              Our process began with detailed user journey mapping and flow diagrams to ensure every
              scenario was covered. We validated low-fidelity wireframes with real users before
              finalizing the visual direction. Every design decision was guided by Echo
              Healthcare&rsquo;s brand and accessibility standards.
            </p>
          </div>

          <div className="flex w-full flex-col items-center justify-center gap-2">
            <p className="m-0 w-full text-[16px] font-normal leading-6 text-[#262D30] min-[810px]:text-[20px] min-[810px]:leading-8">
              We focused on making the experience:
            </p>
            {APPROACH_ITEMS.map((item) => (
              <ApproachFeatureCard
                key={item.title}
                {...item}
                tall={item.title === "Reliable"}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function EchoHealthcareApproachMediaSection() {
  return <EchoHealthcareImageSlider />;
}
