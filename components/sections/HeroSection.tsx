import Image from "next/image";

const STRIP_IMAGES = [
  {
    src: "https://framerusercontent.com/images/370rfeFNz2cYfto2gCKBGECeVog.png",
    alt: "Project mockup 1",
  },
  {
    src: "https://framerusercontent.com/images/GZCremxUgw8E3TZgTmqldkJjk.png",
    alt: "Project mockup 2",
  },
  {
    src: "https://framerusercontent.com/images/KESQ5T0VbrrYFrLMb5hIZi49bw.png",
    alt: "Project mockup 3",
  },
  {
    src: "https://framerusercontent.com/images/DNnqrde4oaZ8PQajUWJuFyseKN4.png",
    alt: "Project mockup 4",
  },
  {
    src: "https://framerusercontent.com/images/2Wg4DC25OqS8CpM8LB7YkuE3sg.png",
    alt: "Project mockup 5",
  },
  {
    src: "https://framerusercontent.com/images/2mtwnLZ6IE4bb7WzbOxrImWjt8.png",
    alt: "Project mockup 6",
  },
  {
    src: "https://framerusercontent.com/images/uDpy4D6ovXifBuJW174nfmp5M.png",
    alt: "Project mockup 7",
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
        <div className="flex gap-6 w-max animate-marquee">
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
                unoptimized
                priority={i < 4}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
