import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Container from "@/components/ui/Container";
import { NAV_LINKS } from "@/constants/site-content";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white h-[64px] md:h-[78px]">
      <Container className="flex items-center justify-between h-full">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="https://framerusercontent.com/images/18t8zHcSVBTBkzJ16bFeFe3mULc.svg"
            alt="Buzzinga Co."
            width={154}
            height={26}
            priority
            unoptimized
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-10 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[16px] text-[#262D30] hover:opacity-60 transition-opacity"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link
          href="/contact-buzzinga"
          className="hidden text-[16px] font-bold text-[#262D30] underline underline-offset-2 decoration-2 md:block"
        >
          Contact Us
        </Link>

        {/* Mobile hamburger — two-bar style matching original */}
        <button
          className="flex flex-col gap-[6px] md:hidden"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle navigation menu"
        >
          <span className="block h-[2px] w-6 bg-[#262D30]" />
          <span className="block h-[2px] w-6 bg-[#262D30]" />
        </button>
      </Container>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="absolute top-[64px] left-0 right-0 border-t border-[#EBEBEB] bg-white shadow-sm md:hidden">
          <Container className="flex flex-col gap-5 py-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[16px] text-[#262D30]"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact-buzzinga"
              className="text-[16px] font-bold text-[#262D30] underline underline-offset-2 decoration-2"
              onClick={() => setMenuOpen(false)}
            >
              Contact Us
            </Link>
          </Container>
        </div>
      )}
    </header>
  );
}
