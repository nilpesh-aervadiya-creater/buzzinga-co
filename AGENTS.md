<!-- BEGIN:nextjs-agent-rules -->
# This Is Not the Next.js You Know

This version has breaking changes - APIs, conventions, and file structure may differ from your training data. Before writing code, read the relevant guide in `node_modules/next/dist/docs/` and follow all deprecation notices.
<!-- END:nextjs-agent-rules -->

# UI Clone and Migration Rules

This project is a React rebuild of the live website at https://www.buzzinga.co/.

For UI work, Codex must not guess styles. Codex must inspect the live site, measure the target area, document the findings, implement the smallest matching change, and verify the result with screenshots.

Do not change content, original data, API behavior, business logic, or unrelated assets while fixing UI differences.

## Main Workflow

For every UI task:

1. Open the live website with Playwright.
2. Open the local React page with Playwright.
3. Inspect the target section on the live website.
4. Extract computed styles from the live website, including:
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
5. Write the measured values into `docs/ui-measurements.md`.
6. Create a mini implementation prompt in `docs/ui-task-prompt.md`.
7. Implement only the measured values.
8. Take screenshots of the live and local pages.
9. Compare the screenshots.
10. After completing the instructed prompt/task, run the Playwright screenshot comparison one time.
11. If screenshots do not match, create a self-fix prompt in `docs/ui-task-prompt.md`.
12. Run the self-fix prompt by using the measured values and screenshot differences as the only source of truth.
13. Fix only verified visual differences in the target section.
14. Do not repeat the full testing loop unless the user asks for another check.
15. Do not redesign.
16. Do not change sections or viewport states that the user has explicitly approved.

## Strict Rules

- Do not invent styles.
- Do not improve or redesign the live-site design.
- Preserve the current React structure unless a measured live-site difference proves that the structure or layout must change.
- Do not change unrelated files.
- Do not modify sections the user has explicitly approved.
- Prefer exact computed styles from the live website.
- If something is unknown, inspect it instead of guessing.
- Make small CSS changes.
- Always make new or adjusted UI match the live site and follow this site's established theme.
- Do not change content, original data, API behavior, business logic, or unrelated assets while fixing UI differences.
- If the live site or an asset is unavailable, record the failure in `docs/ui-measurements.md`, use only already downloaded local assets or existing styles, and do not invent replacements.
- If Playwright cannot run, record the command/error, inspect with the best available local method, and report that screenshot verification is blocked.

## Token Usage Rules

- Use the minimum context needed to complete the task correctly.
- Inspect only the files, DOM nodes, styles, screenshots, and assets related to the current target section.
- Do not paste large command outputs, full files, or repeated screenshot details into the response unless the user asks.
- Summarize findings clearly while preserving exact measured values in `docs/ui-measurements.md`.
- Keep `docs/ui-task-prompt.md` focused on the current mismatch, allowed files, measured styles, and required fix.
- Avoid re-reading or re-testing unchanged sections unless they are required for verification or the user asks.

## Required Task Report

After every UI task, Codex must report:

1. Target section worked on
2. Live page inspected
3. Local page inspected
4. Files changed
5. Measured styles collected
6. Screenshot comparison result
7. Remaining UI differences, if any
8. Any blocked inspection, screenshot, or asset-download step, including the command/error

## One-Time Playwright Testing and Self-Fix Check

After completing the instructed UI prompt/task, Codex must use Playwright screenshots one time to compare the local page with the live website.

Testing rules:

1. Start or open the local React page.
2. Open the matching live page at https://www.buzzinga.co/.
3. Set the same viewport for both live and local pages.
4. Take a Playwright screenshot of the live page.
5. Take a Playwright screenshot of the local page.
6. Compare the screenshots visually and, when available, with screenshot diff tooling.
7. If the screenshots match, record the result in the task report.
8. If the screenshots do not match, inspect the mismatched live-site elements and collect computed styles.
9. Write the mismatch details and measured styles into `docs/ui-measurements.md`.
10. Create or update `docs/ui-task-prompt.md` with a self-fix prompt that includes:
    - target page and section
    - viewport size
    - live screenshot path
    - local screenshot path
    - exact visual mismatches
    - measured live-site styles
    - files allowed to change
    - reminder not to change original data, content, API behavior, business logic, or unrelated files
11. Run the self-fix prompt immediately.
12. Apply only the smallest CSS/JSX changes required to match the live screenshot.
13. Do not repeat the full screenshot testing cycle unless the user asks for another check.
14. Report whether the one-time screenshot comparison matched, had differences, or was blocked.

## Live Website Image Rules

When recreating any page or section from the live website, use the exact same images from the live site.

Rules:

1. Do not use placeholder images.
2. Do not use random images.
3. Do not generate new images.
4. Inspect the live website DOM and CSS to find image URLs.
5. Check these locations:
   - `<img src="">`
   - `<picture>` and `<source srcset="">`
   - CSS `background-image`
   - Inline `background` styles
   - SVG image `href`
   - Lazy-load attributes such as `data-src`, `data-bg`, and `data-lazy-src`
6. Download the same images from the live site.
7. Save images inside the local project, preferably in:
   - `src/assets/images/`
   - `public/images/`
8. Use meaningful file names based on the section or page.
9. Update React components to use local image imports or public image paths.
10. Do not hotlink images from the live site in final code.
11. After replacing images, compare the local screenshot with the live screenshot using Playwright.
12. If image size, crop, object-fit, or position is different, fix the CSS to match the live site.

## Responsive UI Matching Rules

The selected page must match the live website across all important screen sizes.

Responsive rules:

1. Do not only match desktop.
2. Test the selected page at multiple viewport widths.
3. Compare the live site and local site at the same viewport size.
4. Fix layout, spacing, typography, image crop, alignment, and overflow for each size.
5. Do not redesign the responsive behavior.
6. Copy the live site's responsive behavior as closely as possible.
7. Do not break viewport widths that the user has explicitly approved while fixing another size.
8. Use Playwright screenshots for comparison.
9. Check that there is no horizontal scroll.
10. Check the header, menu, hero, sections, cards, images, buttons, and footer at every size.

Required viewport checks:

- 375px width - mobile small
- 390px width - iPhone size
- 430px width - large mobile
- 768px width - tablet
- 1024px width - small laptop/tablet landscape
- 1280px width - desktop
- 1440px width - large desktop
- 1920px width - full HD desktop

For every viewport:

1. Open the live page.
2. Take a screenshot.
3. Open the local page.
4. Take a screenshot.
5. Compare screenshots.
6. Inspect computed styles if a mismatch exists.
7. If a mismatch exists, create or update the self-fix prompt in `docs/ui-task-prompt.md`.
8. Run the self-fix prompt and fix only the required CSS/JSX.
9. Do not repeat the full viewport test unless the user asks for another check.
