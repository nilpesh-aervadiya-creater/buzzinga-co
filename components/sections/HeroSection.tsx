import Image from "next/image";

const STRIP_IMAGES = [
  {
    src: "/buzzinga-assets/images/hero/jabfab.png",
    alt: "JabFab dashboard project preview",
  },
  {
    src: "/buzzinga-assets/images/hero/melisa.png",
    alt: "MeLiSA mobile project preview",
  },
  {
    src: "/buzzinga-assets/images/hero/911switch.png",
    alt: "911Switch mobile project preview",
  },
  {
    src: "/buzzinga-assets/images/hero/predictr.png",
    alt: "Predictr mobile project preview",
  },
  {
    src: "/buzzinga-assets/images/hero/forecast.png",
    alt: "Forecast dashboard project preview",
  },
  {
    src: "/buzzinga-assets/images/hero/zigzek.png",
    alt: "Zigzek mobile project preview",
  },
  {
    src: "/buzzinga-assets/images/hero/additional-preview.png",
    alt: "Additional project preview",
  },
];

// Duplicate for seamless loop
const MARQUEE_IMAGES = [...STRIP_IMAGES, ...STRIP_IMAGES];

export default function HeroSection() {
  return (
    <section className="w-full bg-white pt-[164px] pb-0">
      {/* Hero text block */}
      <div className="text-center px-6">
        <h1 className="text-[40px] leading-[1.1] font-semibold text-[#262D30] tracking-normal md:text-[56px]">
          Ship Better Products, Faster,
          <br />
          With AI&#8209;Native Design &amp; Development
        </h1>

        <div className="mt-6 flex flex-col items-center gap-0">
          <p className="text-[18px] leading-[1.5] text-[#262D30] md:text-[20px]">
            We blend design, engineering, and AI to deliver better outcomes, faster.
          </p>
          <p className="text-[18px] leading-[1.5] text-[#262D30] md:text-[20px]">
            Transform your ideas into intelligent digital products.
          </p>
        </div>
      </div>

      {/* Image marquee strip */}
      <div className="mt-20 overflow-hidden w-full">
        <div className="hero-marquee-track flex gap-6 w-max">
          {MARQUEE_IMAGES.map((img, i) => (
            <div
              key={i}
              className="flex-shrink-0 rounded-2xl overflow-hidden"
              style={{ width: 480, height: 366 }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={480}
                height={366}
                className="object-cover w-full h-full"
                priority={i < 4}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
