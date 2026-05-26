import Image from "next/image";
import { useState } from "react";
import Container from "@/components/ui/Container";
import { TESTIMONIALS } from "@/constants/site-content";
import { cn } from "@/lib/utils";

type TestimonialsProps = {
  title?: string;
  description?: string;
};

export default function Testimonials({
  title = "Trusted by Forward-Thinking Teams",
  description = "",
}: TestimonialsProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToPrevious = () =>
    setActiveIndex((index) => (index === 0 ? TESTIMONIALS.length - 1 : index - 1));
  const goToNext = () =>
    setActiveIndex((index) => (index + 1) % TESTIMONIALS.length);

  return (
    <section className="bg-white py-24 text-center md:py-32 [font-family:'Inter_Display','Inter',sans-serif]">
      <Container className="max-w-[1200px]">
        <h2 className="m-0 text-[34px] font-semibold leading-[51px] text-[#262D30]">
          {title}
        </h2>
        {description && (
          <p className="mt-2 mb-0 text-[20px] font-normal leading-[30px] text-[#262D30]">
            {description}
          </p>
        )}

        <div className="relative mt-20">
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center overflow-hidden rounded-[14px] bg-[#919191]/20 transition-colors hover:bg-[#919191]/30 md:flex"
          >
            <Image
              src="/buzzinga-assets/images/icons/navigation/arrow-back.svg"
              alt=""
              width={40}
              height={40}
              aria-hidden="true"
            />
          </button>

          <div className="mx-auto max-w-[1072px] overflow-hidden">
            <ul
              className="m-0 flex list-none p-0 transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {TESTIMONIALS.map((testimonial) => (
                <li
                  key={`${testimonial.name}-${testimonial.company}`}
                  className="w-full flex-none"
                >
                  <blockquote className="testimonial-quote m-0 mx-auto text-[20px] font-light italic leading-[26px] text-[#262D30] lg:text-[28px] lg:leading-[36.4px] xl:text-[36px] xl:leading-[54px]">
                    &quot;{testimonial.quote}&quot;
                  </blockquote>
                  <p className="mt-10 mb-0 text-2xl font-semibold leading-8 text-[#121820]">
                    {testimonial.name}
                  </p>
                  <p className="mt-1 mb-0 text-2xl font-normal leading-8 text-[#121820]">
                    {testimonial.company}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <button
            type="button"
            aria-label="Next testimonial"
            onClick={goToNext}
            className="absolute right-0 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center overflow-hidden rounded-[14px] bg-[#919191]/20 transition-colors hover:bg-[#919191]/30 md:flex"
          >
            <Image
              src="/buzzinga-assets/images/icons/navigation/arrow-next.svg"
              alt=""
              width={40}
              height={40}
              aria-hidden="true"
            />
          </button>
        </div>

        <div className="mt-12 flex justify-center gap-0">
          {TESTIMONIALS.map((testimonial, index) => (
            <button
              key={`${testimonial.name}-dot`}
              type="button"
              aria-label={`Show testimonial from ${testimonial.name}`}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "flex h-[30px] items-center justify-center bg-transparent py-[10px]",
                index === 0
                  ? "w-[25px] pl-[10px] pr-[5px]"
                  : index === TESTIMONIALS.length - 1
                    ? "w-[25px] pl-[5px] pr-[10px]"
                    : "w-5 px-[5px]"
              )}
            >
              <span
                className={cn(
                  "block h-[10px] w-[10px] rounded-full transition-colors",
                  index === activeIndex ? "bg-[#262D30]" : "bg-[#D9D9D9]"
                )}
              />
            </button>
          ))}
        </div>
      </Container>
    </section>
  );
}
