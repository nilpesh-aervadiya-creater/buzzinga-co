import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/constants/site-content";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateScrolled = () => setIsScrolled(window.scrollY > 24);

    updateScrolled();
    window.addEventListener("scroll", updateScrolled, { passive: true });

    return () => window.removeEventListener("scroll", updateScrolled);
  }, []);

  return (
    <header
      className={`site-header fixed left-0 right-0 top-0 z-50 backdrop-blur-[10px] transition-[height] duration-300 z-[10000] ${
        isScrolled ? "h-[58px] bg-white/70 border-b border-[#242424]/10" : "h-[64px] md:h-[78px]"
      }`}
    >
      <div className="mx-auto flex h-full w-full max-w-[1920px] items-center justify-between px-4 min-[810px]:px-6 xl:px-10">
        <Link href="/" className="flex h-full flex-shrink-0 items-center">
          <Image
            src="/buzzinga-assets/images/header-logo.svg"
            alt="Buzzinga Co."
            width={166}
            height={28}
            className="h-[26px] w-auto"
            priority
            unoptimized
          />
        </Link>

        <nav className="absolute bottom-0 left-1/2 top-0 hidden -translate-x-1/2 items-center gap-6 min-[810px]:flex xl:gap-12">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="whitespace-nowrap text-[14px] leading-[1.6] text-[#262D30] transition-opacity hover:opacity-60 xl:text-[16px]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact-buzzinga"
          className="header-cta hidden h-full items-center whitespace-nowrap text-[16px] font-[700] leading-[1.5] tracking-[-0.02em] text-[#262D30] !underline !decoration-[2.5px] underline-offset-[3px] min-[810px]:flex"
        >
          Contact Us
        </Link>

        <button
          className="flex h-10 w-10 items-center justify-center min-[810px]:hidden"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
        >
          <span className="relative block h-6 w-6">
            <span
              className={`absolute left-0 top-[8px] block h-[1.5px] w-6 bg-[#262D30] transition-transform duration-300 ${
                menuOpen ? "translate-y-[3px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[14px] block h-[1.5px] w-6 bg-[#262D30] transition-transform duration-300 ${
                menuOpen ? "-translate-y-[3px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      <div
        className={`absolute left-0 right-0 overflow-hidden border-t border-[#EBEBEB] bg-white/90 shadow-sm backdrop-blur-[10px] transition-[max-height,opacity,transform] duration-300 ease-out min-[810px]:hidden ${
          isScrolled ? "top-[58px]" : "top-[64px]"
        } ${menuOpen ? "max-h-[420px] translate-y-0 opacity-100" : "max-h-0 -translate-y-2 opacity-0"}`}
      >
        <div className="flex flex-col items-start gap-5 px-4 py-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[16px] leading-[1.5] text-[#262D30]"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact-buzzinga"
            className="rounded-[10px] text-[16px] font-bold leading-[1.5] text-[#262D30] underline decoration-2 underline-offset-[3px]"
            onClick={() => setMenuOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
}
