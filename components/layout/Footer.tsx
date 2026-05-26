import Container from "@/components/ui/Container";
import { SITE } from "@/constants/site-content";

export default function Footer() {
  return (
    <footer className="site-footer bg-white pt-16 min-[810px]:pt-0">
      <Container className="flex max-w-[1200px] flex-col items-start gap-10 px-10 pb-[90px] min-[810px]:gap-[52px] min-[810px]:px-10 xl:px-0">
        <div className="grid w-full grid-cols-1 gap-y-6 min-[810px]:grid-cols-4 min-[810px]:gap-x-4 min-[810px]:gap-y-0 min-[810px]:justify-center">
          <div className="min-[810px]:col-span-2">
            <p className="m-0 font-sans text-base font-normal leading-[27.2px] text-[#262D30]">
              AI-native design and development
            </p>
            <p className="m-0 font-sans text-base font-normal leading-[27.2px] text-[#262D30]">
              for businesses that move fast.
            </p>
          </div>

          <div>
            <p className="m-0 font-sans text-base font-normal leading-[27.2px] text-[#262D30]">
              write us on
            </p>
            <a
              href={`mailto:${SITE.email}`}
              className="block font-sans text-base font-normal leading-[27.2px] text-[#262D30] hover:underline"
            >
              {SITE.email}
            </a>
          </div>

          <p className="m-0 text-base font-normal leading-[25.6px] text-[#262D30] min-[810px]:text-sm min-[810px]:leading-[22.4px] min-[1280px]:text-base min-[1280px]:leading-[25.6px]">
            <span className="block">© 2025 Buzzinga Co.</span>
            <span className="block">All Rights Reserved</span>
          </p>
        </div>

        <p className="m-0 w-full text-center text-base font-semibold leading-6 text-[#262D30] min-[810px]:text-left min-[810px]:text-lg min-[810px]:leading-[27px] min-[1280px]:text-[20px] min-[1280px]:leading-[30px]">
          {SITE.name}
        </p>
      </Container>
    </footer>
  );
}
