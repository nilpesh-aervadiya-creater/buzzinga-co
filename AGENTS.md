<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# UI Clone / Migration Rules

This project is a React rebuild of an existing live website.

Codex must not guess UI styles. Codex must inspect, measure, document, then implement.

## Main workflow

For every UI task:

1. Open the live website using Playwright.
2. Open the local React page using Playwright.
3. Inspect the target section on the live website.
4. Extract computed styles from the live website:
   - font-family
   - font-size
   - font-weight
   - line-height
   - letter-spacing
   - color
   - background-color
   - width
   - height
   - padding
   - margin
   - border-radius
   - box-shadow
   - display
   - position
   - gap
   - grid/flex settings
   - image size
   - container max-width
5. Write those measured values into `docs/ui-measurements.md`.
6. Create a mini implementation prompt for itself inside `docs/ui-task-prompt.md`.
7. Implement only the measured values.
8. Take screenshots of live and local pages.
9. Compare screenshots.
10. Fix only the differences.
11. Do not redesign.
12. Do not change already approved sections.

## Strict rules

- Do not invent styles.
- Do not improve the design.
- Do not change original layout unless the live site uses that layout.
- Do not change unrelated files.
- Do not modify approved sections.
- Prefer exact computed styles from the live website.
- If something is unknown, inspect it instead of guessing.
- Make small CSS changes.
- Keep original React structure unless structure is the reason for mismatch.

## Output required after every task

Codex must report:

1. Target section worked on
2. Live page inspected
3. Local page inspected
4. Files changed
5. Measured styles collected
6. Screenshot comparison result
7. Remaining UI differences, if any


## Live Website Image Rule

Live website:
https://www.buzzinga.co/

When recreating any page/section from the live website, use the exact same images from the live site.

Rules:
1. Do not use placeholder images.
2. Do not use random images.
3. Do not generate new images.
4. Inspect the live website DOM and CSS to find image URLs.
5. Check these places:
   - <img src="">
   - <picture> / <source srcset="">
   - CSS background-image
   - inline style background
   - SVG image href
   - lazy-load attributes like data-src, data-bg, data-lazy-src
6. Download the same images from the live site.
7. Save them inside the local project, preferably:
   src/assets/images/
   or
   public/images/
8. Use meaningful file names based on section/page.
9. Update React components to use local image imports or public image paths.
10. Do not hotlink images from the live site in final code.
11. After replacing images, compare local screenshot with live screenshot using Playwright.
12. If image size, crop, object-fit, or position is different, fix CSS to match the live site.


## Responsive UI Matching Rule

The selected page must match the live website across all important screen sizes.

Live website:
https://www.buzzinga.co/

Responsive rules:
1. Do not only match desktop.
2. Test the selected page at multiple viewport widths.
3. Compare live site and local site at the same viewport size.
4. Fix layout, spacing, typography, image crop, alignment, and overflow for each size.
5. Do not redesign the responsive behavior.
6. Copy the live site's responsive behavior as closely as possible.
7. Do not break already approved screen sizes while fixing another size.
8. Use Playwright screenshots for comparison.
9. Check that there is no horizontal scroll.
10. Check header, menu, hero, sections, cards, images, buttons, and footer at every size.

Required viewport checks:
- 375px width — mobile small
- 390px width — iPhone size
- 430px width — large mobile
- 768px width — tablet
- 1024px width — small laptop/tablet landscape
- 1280px width — desktop
- 1440px width — large desktop
- 1920px width — full HD desktop

For every viewport:
1. Open live page.
2. Take screenshot.
3. Open local page.
4. Take screenshot.
5. Compare screenshots.
6. Inspect computed styles if mismatch exists.
7. Fix only required CSS/JSX.
8. Re-check the same viewport.