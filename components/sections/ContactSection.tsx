import Container from "@/components/ui/Container";
import { cn } from "@/lib/utils";

const CONTACT_FORM_EMAIL = "yashbuzzinga03@gmail.com";
const CONTACT_FORM_ACTION = `https://formsubmit.co/${CONTACT_FORM_EMAIL}`;

interface ContactPageSectionProps {
  className?: string;
}

export function ContactPageSection({ className }: ContactPageSectionProps) {
  return (
    <section className={cn("contact-section bg-white pt-[162px] pb-[100px]", className)}>
      <Container>
        <div style={{ fontFeatureSettings: "'zero' 1, 'cv11' 1, 'ss01' 1" }} className="relative flex h-auto flex-col items-start justify-start gap-10 rounded-[24px] bg-[#F2F4F7] p-8 xl:flex-row xl:gap-8 xl:p-[72px]">
          <div className="contact-left will-animate -translate-x-8 flex w-full flex-none flex-col items-start gap-4 xl:w-[calc((100%-32px)/2)]">
            <h2 className="m-0 w-full text-[24px] font-semibold leading-[28.8px] text-[#262D30] min-[810px]:text-[40px] min-[810px]:leading-[46px] xl:max-w-[425px] xl:text-[48px] xl:leading-[57.6px]">
              Start Your Next
              <br />
              Journey With Us
            </h2>
            <p className="m-0 w-full lg:max-w-[485px] text-[18px] font-normal leading-[28px] text-[#262D30] xl:text-[20px] xl:leading-[32px]">
              Need a quick quote, a free 30-min consultation, or just want to
              learn more? Drop your details, and we&apos;ll be in touch within
              24 working hours to set up a call.
            </p>
          </div>

          <form
            action={CONTACT_FORM_ACTION}
            method="post"
            className="contact-form will-animate translate-x-8 relative flex w-full flex-none flex-col items-start gap-5 [font-family:'Inter_Display','Inter',sans-serif] xl:w-[calc((100%-32px)/2)]"
            data-contact-form
          >
            <input type="hidden" name="_subject" value="New Buzzinga contact form response" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <label className="relative flex w-full flex-col gap-[10px] text-[12px] font-medium leading-[14.4px] text-[#242424b3] [font-family:'Inter_Display','Inter',sans-serif]">
              What are you interested in?*
              <select
                name="Interested in"
                required
                defaultValue=""
                className="contact-field h-[43.203px] w-full rounded-[10px] border border-[#b8bcc2] bg-white px-3 text-[16px] font-normal leading-[19.2px] text-[#262D30] [font-family:'Inter_Display','Inter',sans-serif]"
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

            <label className="relative flex w-full flex-col gap-[10px] text-[12px] font-medium leading-[14.4px] text-[#242424b3] [font-family:'Inter_Display','Inter',sans-serif]">
              What stage are you in your AI journey?*
              <select
                name="AI journey stage"
                required
                defaultValue=""
                className="contact-field h-[43.203px] w-full rounded-[10px] border border-[#b8bcc2] bg-white px-3 text-[16px] font-normal leading-[19.2px] text-[#262D30] [font-family:'Inter_Display','Inter',sans-serif]"
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
              <label className="flex w-full flex-col gap-[10px] text-[12px] font-medium leading-[14.4px] text-[#242424b3] [font-family:'Inter_Display','Inter',sans-serif]">
                Name*
                <input
                  name="Name"
                  required
                  className="contact-field h-[43.203px] rounded-[10px] border border-[#b8bcc2] bg-white px-3 text-[16px] font-normal leading-[19.2px] text-[#262D30] [font-family:'Inter_Display','Inter',sans-serif]"
                />
              </label>
              <label className="flex w-full flex-col gap-[10px] text-[12px] font-medium leading-[14.4px] text-[#242424b3] [font-family:'Inter_Display','Inter',sans-serif]">
                Email*
                <input
                  type="email"
                  name="Email"
                  required
                  className="contact-field h-[43.203px] rounded-[10px] border border-[#b8bcc2] bg-white px-3 text-[16px] font-normal leading-[19.2px] text-[#262D30] [font-family:'Inter_Display','Inter',sans-serif]"
                />
              </label>
            </div>

            <label className="flex w-full flex-col gap-[10px] text-[12px] font-medium leading-[16.8px] text-[#242424b3] [font-family:'Inter_Display','Inter',sans-serif]">
              Briefly describe your project&mdash;goals, challenges, and requirements,
              to help us assist you more effectively during our initial call.*
              <textarea
                name="Project details"
                required
                className="contact-field h-[100px] resize-y rounded-[10px] border border-[#b8bcc2] bg-white px-3 py-3 text-[16px] font-normal leading-[20.8px] text-[#262D30] [font-family:'Inter_Display','Inter',sans-serif]"
              />
            </label>

            <button
              type="submit"
              className="contact-submit relative flex h-10 w-full items-center justify-center rounded-[10px] bg-[#333333] p-0 text-[14px] font-semibold leading-[16.8px] text-white transition-colors hover:bg-[rgba(51,51,51,0.85)] [font-family:'Inter_Display','Inter',sans-serif]"
              data-submit-button
            >
              Submit
            </button>
            <p
              className="m-0 hidden w-full text-center text-[14px] font-medium leading-[19.6px] [font-family:'Inter_Display','Inter',sans-serif]"
              data-submit-status
              role="status"
              aria-live="polite"
            />
          </form>
        </div>
      </Container>
    </section>
  );
}
