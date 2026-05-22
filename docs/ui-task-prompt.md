# UI Task Prompt

Target page: Home (`/`)

Target section: Hero image area below the headline and supporting copy.

Requested change: Remove the custom animated hero image motion and make the hero image area work like a simple slider.

Allowed files:
- `components/sections/HeroSection.tsx`
- `styles/globals.css`
- `docs/ui-measurements.md`
- `docs/ui-task-prompt.md`

Measured styles/source of truth:
- Preserve existing hero content, copy, image order, and local image assets.
- Preserve hero section background `#ffffff`, top padding `164px`, bottom padding `0`, centered text.
- Preserve existing heading and paragraph typography already in `HeroSection.tsx`.
- Preserve image card width `clamp(292px, 33.333vw, 480px)`, aspect ratio `480 / 366`, and border radius `24px`.
- Use the same seven hero images from `public/buzzinga-assets/images/hero/`.
- Replace the custom circular/morphing JS animation with a simple continuous horizontal slider row.
- Do not change original data, content, API behavior, business logic, or unrelated files.

Screenshot check:
- Live screenshot path: `docs/screenshots/home-live-1280.png`.
- Local screenshot path: `docs/screenshots/home-local-1280.png`.
- Viewport: `1280px x 800px`.
- Result: screenshots differ because the requested local behavior removes the live site's original circular/morphing hero animation and replaces it with a simple slider.

Self-fix prompt:
- Keep the simple slider behavior. Do not restore the circular intro, JS `requestAnimationFrame` animation, morphing, per-card transforms, or z-index choreography.
- If refining, compare only stable visual shell values: card sizing, card radius, image crop, vertical offset, and horizontal gap.
- Do not change original data, content, API behavior, business logic, or unrelated files.
