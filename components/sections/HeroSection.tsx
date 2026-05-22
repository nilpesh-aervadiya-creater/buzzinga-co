import Image from "next/image";
import TextFillAnimation from "@/components/Animations/TextFillAnimation/TextFillAnimation";

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

export default function HeroSection() {
  const sliderImages = [...STRIP_IMAGES, ...STRIP_IMAGES];

  return (
    <section className="w-full bg-white pt-[164px] pb-0">
      {/* Hero text block */}
      <div className="mx-auto w-full px-6 text-center">
        <TextFillAnimation
          as="h1"
          className="text-[28px] leading-[1.1] font-semibold text-[#262D30] tracking-normal min-[810px]:text-[44px] xl:text-[56px]"
          color="#262D30"
        >
          Ship Better Products, Faster,
          <br />
          With AI&#8209;Native Design &amp; Development
        </TextFillAnimation>

        <div className="mt-6 flex flex-col items-center gap-0">
          <p className="text-[18px] leading-[1.5] text-[#262D30] md:text-[20px]">
            We blend design, engineering, and AI to deliver better outcomes, faster.
          </p>
          <p className="text-[18px] leading-[1.5] text-[#262D30] md:text-[20px]">
            Transform your ideas into intelligent digital products.
          </p>
        </div>
      </div>

      {/* Image slider */}
      <div className="hero-motion-slider w-full overflow-hidden">
        <div className="hero-motion-track flex w-max items-end">
          {sliderImages.map((img, i) => (
            <div key={`${img.src}-${i}`} className="hero-motion-card shrink-0 overflow-hidden rounded-2xl">
              <Image
                src={img.src}
                alt={img.alt}
                width={840}
                height={640}
                className="object-cover w-full h-full"
                loading="eager"
                aria-hidden={i >= STRIP_IMAGES.length}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
