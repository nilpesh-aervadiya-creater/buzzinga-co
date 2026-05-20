import Container from "@/components/ui/Container";
import { cn } from "@/lib/utils";

export function ContactSection() {
  return (
    <section className="bg-white py-12 md:py-20">
      <Container>
        <div className="grid gap-12 rounded-3xl bg-[#F2F4F7] p-8 md:grid-cols-[0.6fr_0.6fr] md:p-[72px]">
          <div>
            <h2 className="text-[40px] font-semibold leading-[1.15] text-[#262D30] md:text-[48px]">
              Start Your Next
              <br />
              Journey With Us
            </h2>
            <p className="mt-7 text-[20px] leading-[1.45] text-[#121820]">
              Need a quick quote, a free 30-min consultation, or just want to
              learn more? Drop your details, and we&apos;ll be in touch within
              24 working hours to set up a call.
            </p>
          </div>

          <form className="grid gap-6">
            <label className="grid gap-2 text-[12px] text-[#242424b3]">
              What are you interested in?*
              <select className="h-12 rounded-[10px] border border-[#C8CDD2] bg-white text-[16px] text-[#121820]">
                <option>Select...</option>
              </select>
            </label>
            <label className="grid gap-2 text-[12px] text-[#242424b3]">
              What stage are you in your AI journey?*
              <select className="h-12 rounded-[10px] border border-[#C8CDD2] bg-white text-[16px] text-[#121820]">
                <option>Select...</option>
              </select>
            </label>
            <div className="grid gap-5 md:grid-cols-2">
              <label className="grid gap-2 text-[12px] text-[#242424b3]">
                Name*
                <input className="h-12 rounded-[10px] border border-[#C8CDD2] bg-white text-[16px]" />
              </label>
              <label className="grid gap-2 text-[12px] text-[#242424b3]">
                Email*
                <input
                  type="email"
                  className="h-12 rounded-[10px] border border-[#C8CDD2] bg-white text-[16px]"
                />
              </label>
            </div>
            <label className="grid gap-2 text-[12px] text-[#242424b3]">
              Briefly describe your project-goals, challenges, and requirements,
              to help us assist you more effectively during our initial call.*
              <textarea className="min-h-[110px] rounded-[10px] border border-[#C8CDD2] bg-white text-[16px]" />
            </label>
            <button
              type="submit"
              className="h-10 rounded-[10px] bg-[#333333] text-base font-semibold text-white"
            >
              Submit
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}

interface ContactPageSectionProps {
  className?: string;
}

export function ContactPageSection({ className }: ContactPageSectionProps) {
  return (
    <section className={cn("bg-white pt-[162px] pb-[100px]", className)}>
      <Container>
        <div className="relative flex h-auto flex-col items-start justify-start gap-10 rounded-[24px] bg-[#F2F4F7] p-8 xl:h-[610.422px] xl:flex-row xl:gap-8 xl:p-[72px]">
          <div className="flex w-full flex-none flex-col items-start gap-4 xl:w-[calc((100%-32px)/2)]">
            <h2 className="m-0 w-full text-[40px] font-semibold leading-[46px] text-[#262D30] xl:max-w-[425px] xl:text-[48px] xl:leading-[57.6px]">
              Start Your Next
              <br />
              Journey With Us
            </h2>
            <p className="m-0 w-full text-[18px] font-normal leading-[28px] text-[#262D30] xl:max-w-[425px] xl:text-[20px] xl:leading-[32px]">
              Need a quick quote, a free 30-min consultation, or just want to
              learn more? Drop your details, and we&apos;ll be in touch within
              24 working hours to set up a call.
            </p>
          </div>

          <form className="relative flex w-full flex-none flex-col items-start gap-5 [font-family:Inter] xl:w-[calc((100%-32px)/2)]">
            <label className="relative flex w-full flex-col gap-[10px] text-[12px] font-medium leading-[14.4px] text-[#242424b3] [font-family:Inter]">
              What are you interested in?*
              <select
                defaultValue=""
                className="h-[43.203px] w-full rounded-[10px] border border-[#b8bcc2] bg-white px-3 text-[16px] font-normal leading-[19.2px] text-[#262D30] [font-family:Inter]"
              >
                <option value="" disabled>
                  Select...
                </option>
                <option>I want a free 30-minute consultation</option>
                <option>I&apos;m looking for a project quote</option>
                <option>I&apos;m exploring long-term partnership opportunities</option>
                <option>I&apos;m just curious to learn more about your work &amp; services</option>
              </select>
            </label>

            <label className="relative flex w-full flex-col gap-[10px] text-[12px] font-medium leading-[14.4px] text-[#242424b3] [font-family:Inter]">
              What stage are you in your AI journey?*
              <select
                defaultValue=""
                className="h-[43.203px] w-full rounded-[10px] border border-[#b8bcc2] bg-white px-3 text-[16px] font-normal leading-[19.2px] text-[#262D30] [font-family:Inter]"
              >
                <option value="" disabled>
                  Select...
                </option>
                <option>We are in early exploratory phase. Need AI partner to guide us.</option>
                <option>We have a fair understanding of what we want to accomplish. Need to start with the AI discovery phase.</option>
                <option>We have the team and budget to build the AI solution. We need a AI development partner to execute the project.</option>
                <option>We&apos;re not exploring AI developments at the moment.</option>
              </select>
            </label>

            <div className="flex w-full flex-col gap-5 md:flex-row">
              <label className="flex w-full flex-col gap-[10px] text-[12px] font-medium leading-[14.4px] text-[#242424b3] [font-family:Inter]">
                Name*
                <input className="h-[43.203px] rounded-[10px] border border-[#b8bcc2] bg-white px-3 text-[16px] font-normal leading-[19.2px] text-[#262D30] [font-family:Inter]" />
              </label>
              <label className="flex w-full flex-col gap-[10px] text-[12px] font-medium leading-[14.4px] text-[#242424b3] [font-family:Inter]">
                Email*
                <input
                  type="email"
                  className="h-[43.203px] rounded-[10px] border border-[#b8bcc2] bg-white px-3 text-[16px] font-normal leading-[19.2px] text-[#262D30] [font-family:Inter]"
                />
              </label>
            </div>

            <label className="flex w-full flex-col gap-[10px] text-[12px] font-medium leading-[16.8px] text-[#242424b3] [font-family:Inter]">
              Briefly describe your project&mdash;goals, challenges, and requirements,
              to help us assist you more effectively during our initial call.*
              <textarea className="h-[100px] resize-y rounded-[10px] border border-[#b8bcc2] bg-white px-3 py-3 text-[16px] font-normal leading-[20.8px] text-[#262D30] [font-family:Inter]" />
            </label>

            <button
              type="submit"
              className="relative flex h-10 w-full items-center justify-center rounded-[10px] bg-[#333333] p-0 text-[14px] font-semibold leading-[16.8px] text-white transition-colors hover:bg-[rgba(51,51,51,0.85)] [font-family:Inter]"
            >
              Submit
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}
