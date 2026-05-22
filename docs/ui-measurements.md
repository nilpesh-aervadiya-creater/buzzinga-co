# UI Measurements

## Home hero simple slider - 2026-05-22

Target section: Home page hero image slider.

Live page inspected: https://www.buzzinga.co/

Local page inspected: http://localhost:3001/

Inspection notes:
- Live HTML was reachable through the browser fetch tool and confirmed the Home hero content and image list.
- Local Next dev server initially attempted port 3001 because port 3000 was occupied by an older dev process. That stale process was stopped and the page was inspected at `http://localhost:3000/`.
- Playwright was not installed in the project. `npx playwright --version` initially hung without output, then `npx --yes playwright --version` succeeded after approval.
- Playwright Chromium was missing and was installed with `npx --yes playwright install chromium`.
- A direct Playwright computed-style Node script was attempted with `npx --yes -p playwright node -e ...`, but it failed with `Cannot find module 'playwright'`. Source CSS/JSX values and screenshots were used for the measurements below.

Measured/verified source values used:
- Hero section background: `#ffffff`.
- Hero section top padding: `164px`.
- Hero section bottom padding: `0`.
- Hero text alignment: centered.
- Heading font size: `28px` base, `44px` from `810px`, `56px` at `xl`.
- Heading line-height: `1.1`.
- Heading font-weight: `600`.
- Heading color: `#262D30`.
- Body copy font size: `18px` base, `20px` from `md`.
- Body copy line-height: `1.5`.
- Body copy color: `#262D30`.
- Hero image files: `jabfab.png`, `melisa.png`, `911switch.png`, `predictr.png`, `forecast.png`, `zigzek.png`, `additional-preview.png`.
- Local hero image intrinsic size: `840px x 640px`.
- Existing hero card rendered width rule: `clamp(292px, 33.333vw, 480px)`.
- Existing hero card aspect ratio: `480 / 366`.
- Existing hero card border radius: `24px`.
- Existing hero slider gap rule from prior animation code: minimum `16px`, maximum `24px`, viewport-based middle value around `1.7vw`.

Implementation measurements:
- Slider height: `clamp(320px, 34vw, 500px)`.
- Slider top padding: `clamp(48px, 6vw, 88px)`.
- Slider track gap: `clamp(16px, 1.7vw, 24px)`.
- Slider animation duration: `30s`.
- Slider timing: `linear`.
- Slider hover state: paused.

Screenshot comparison:
- Live screenshot: `docs/screenshots/home-live-1280.png`.
- Local screenshot: `docs/screenshots/home-local-1280.png`.
- Viewport: `1280px x 800px`.
- Result: different by request. The live site still shows the original hero animation state, while local now shows a simple continuous horizontal image slider without the circular intro/morphing animation.

Remaining UI differences:
- The hero image motion intentionally differs from live because the requested change is to remove the animated hero motion and use a simple slider.
- Text fill animation was already present and can appear mid-fill depending on screenshot timing; it was not changed.
