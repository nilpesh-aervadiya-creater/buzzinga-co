import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";

const ease = "buzzingaSmooth";
const initializedContactForms = new WeakSet<HTMLFormElement>();

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function showReducedMotionState() {
  document.documentElement.classList.add("prefers-reduced-motion");
  document.querySelectorAll<HTMLElement>(".will-animate, .hero-line, .hero-subtext, .logo-reveal-item").forEach((el) => {
    el.style.opacity = "1";
    el.style.transform = "none";
  });
}

function animateCount(el: HTMLElement) {
  const target = Number(el.dataset.countTo || "150");
  const duration = 1200;
  const start = performance.now();
  const easeInOut = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

  const tick = (now: number) => {
    const progress = Math.min((now - start) / duration, 1);
    el.textContent = `${Math.round(target * easeInOut(progress))}+`;
    if (progress < 1) requestAnimationFrame(tick);
  };

  requestAnimationFrame(tick);
}

function initValueIconDraw() {
  document.querySelectorAll<SVGGeometryElement>(".value-icon path, .value-icon circle, .value-icon line, .value-icon polyline, .value-icon rect").forEach((shape) => {
    if (typeof shape.getTotalLength !== "function") return;
    const length = shape.getTotalLength();
    shape.style.setProperty("--path-length", `${length}`);
  });
}

function initContactSubmit() {
  document.querySelectorAll<HTMLFormElement>("[data-contact-form]").forEach((form) => {
    if (initializedContactForms.has(form)) return;

    const button = form.querySelector<HTMLButtonElement>("[data-submit-button]");
    if (!button) return;

    initializedContactForms.add(form);
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      button.disabled = true;
      button.innerHTML = '<svg class="submit-spinner" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-dasharray="42" stroke-dashoffset="14"/></svg>';

      window.setTimeout(() => {
        button.innerHTML = '<span class="submit-check" aria-hidden="true">✓</span>';
        window.setTimeout(() => {
          button.disabled = false;
          button.textContent = "Submit";
        }, 1200);
      }, 900);
    });
  });
}

function refreshScrollTriggers() {
  requestAnimationFrame(() => {
    ScrollTrigger.refresh();
    window.setTimeout(() => ScrollTrigger.refresh(), 250);
  });
}

function initPageSectionReveals() {
  document.querySelectorAll<HTMLElement>(".page-animated > section").forEach((section) => {
    const targets = Array.from(section.children).filter((child) => {
      if (!(child instanceof HTMLElement)) return false;
      if (child.tagName.toLowerCase() === "style") return false;
      if (child.classList.contains("will-animate")) return false;
      return child.querySelector(".will-animate") === null;
    });

    if (!targets.length) return;

    gsap.from(targets, {
      autoAlpha: 0.35,
      y: 34,
      duration: 1.15,
      stagger: 0.18,
      ease,
      immediateRender: false,
      clearProps: "willChange",
      scrollTrigger: { trigger: section, start: "top 88%", once: true },
    });
  });
}

export function initAnimations() {
  if (typeof window === "undefined") return undefined;

  gsap.registerPlugin(ScrollTrigger, CustomEase);
  CustomEase.create(ease, "0.22, 1, 0.36, 1");
  initContactSubmit();

  if (prefersReducedMotion()) {
    showReducedMotionState();
    return undefined;
  }

  initValueIconDraw();

  const ctx = gsap.context(() => {
    const header = document.querySelector(".site-header");
    if (header) {
      gsap.to(header, { y: 0, duration: 0.4, delay: 0.2, ease, clearProps: "willChange" });
      ScrollTrigger.create({
        start: 80,
        end: "max",
        onUpdate: (self) => header.classList.toggle("scrolled", self.scroll() > 80),
      });
    }

    gsap.to(".hero-line", { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, delay: 0.3, ease });
    gsap.to(".hero-subtext", { opacity: 1, y: 0, duration: 0.5, delay: 0.6, ease });

    const reveal = (targets: gsap.TweenTarget, vars: gsap.TweenVars = {}) => {
      gsap.to(targets, {
        opacity: 1,
        autoAlpha: 1,
        y: 0,
        x: 0,
        scale: 1,
        duration: 0.6,
        ease,
        clearProps: "willChange",
        ...vars,
      });
    };

    initPageSectionReveals();

    reveal(".intro-heading", { scrollTrigger: { trigger: ".intro-section", start: "top 78%" } });
    reveal(".intro-body", { delay: 0.1, scrollTrigger: { trigger: ".intro-section", start: "top 78%" } });
    reveal(".logo-reveal-item", { duration: 0.4, stagger: 0.08, scrollTrigger: { trigger: ".logo-slider-mask", start: "top 84%" } });

    document.querySelectorAll<HTMLElement>("[data-count-to]").forEach((stat) => {
      ScrollTrigger.create({
        trigger: stat,
        start: "top 85%",
        once: true,
        onEnter: () => animateCount(stat),
      });
    });

    reveal(".capabilities-heading, .capabilities-subtext", {
      stagger: 0.12,
      scrollTrigger: { trigger: ".capabilities-section", start: "top 78%" },
    });
    reveal(".capability-tile", {
      duration: 0.5,
      stagger: 0.1,
      scrollTrigger: { trigger: ".capabilities-grid", start: "top 82%" },
    });

    reveal(".portfolio-heading, .portfolio-description", {
      stagger: 0.1,
      scrollTrigger: { trigger: ".portfolio-section", start: "top 78%" },
    });
    reveal(".portfolio-card", {
      scale: 1,
      stagger: 0.12,
      scrollTrigger: { trigger: ".portfolio-grid", start: "top 82%" },
    });

    reveal(".values-left", {
      x: 0,
      scrollTrigger: { trigger: ".values-section", start: "top 78%" },
    });
    reveal(".value-tile", {
      duration: 0.5,
      stagger: 0.08,
      scrollTrigger: { trigger: ".values-grid", start: "top 82%" },
    });
    gsap.to(".value-icon path, .value-icon circle, .value-icon line, .value-icon polyline, .value-icon rect", {
      strokeDashoffset: 0,
      duration: 0.8,
      ease,
      scrollTrigger: { trigger: ".values-grid", start: "top 82%" },
    });

    reveal(".contact-left, .contact-form", {
      x: 0,
      stagger: 0,
      scrollTrigger: { trigger: ".contact-section", start: "top 78%" },
    });

    gsap.to(".site-footer", {
      opacity: 1,
      duration: 0.6,
      ease,
      scrollTrigger: { trigger: ".site-footer", start: "top 88%" },
    });
  });

  refreshScrollTriggers();

  return () => {
    ctx.revert();
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  };
}
