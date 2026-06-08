# All Blog Direct Content-To-Heading Gaps - 2026-06-08

Target section: all published blog detail rich-text sections.

Local page inspected: `http://localhost:3002/blog/{id}` from a fresh production server after `npm run build`.

Published blog pages checked:
- `/blog/getting-started`
- `/blog/whats-new`
- `/blog/styling-elements`
- `/blog/importing-content`
- `/blog/best-practices`

Artifacts:
- One-time final comparison: `output/playwright/blog-all-heading-gap/final/comparison.json`
- Rich-text screenshots at `768px`: `output/playwright/blog-all-heading-gap/final/{id}-768.png`

Measured local values after implementation:
- `whats-new`: `ol -> h2` gap `28.8px` at `375`, `390`, `430`, and `768`; `38.39px` at `1024`; `57.59px` at `1280`, `1440`, and `1920`.
- `styling-elements`: `p -> h2` gap `28.8px` at `375`, `390`, `430`, and `768`; `38.39px` at `1024`; `57.59px` at `1280`, `1440`, and `1920`.
- `importing-content`: all `p -> h3` and `p -> h2` gaps matched the same responsive values.
- `best-practices`: all `p -> h3` gaps matched the same responsive values.
- `getting-started`: no direct `p/ol/ul -> h2/h3` pairs after existing empty-spacer cleanup; no failing transitions.
- No horizontal scroll was detected on any checked blog page at `375`, `390`, `430`, `768`, `1024`, `1280`, `1440`, or `1920`.

Implementation notes:
- Updated `styles/globals.css` so the reference spacing applies to every direct blog rich-text content-to-heading pair: `p`, `ol`, or `ul` followed by `h2` or `h3`.
- Did not change blog data/content, API behavior, assets, or unrelated sections.

One-time screenshot comparison result:
- Ran Playwright once across all published blog pages and required viewport widths.
- All detected direct content-to-heading transitions passed the expected responsive gap check.
- Blocked/notes: production requests logged existing "Using local blog data fallback. Error: Blog API responded with 500" warnings, but pages rendered from local blog fallback data and verification completed.

# Blog Direct Heading Gap Reference Spacing - 2026-06-08

Target section: `/blog/best-practices` rich-text transition from "Choose Compelling Topics" paragraph to "Organize Your Content".

Live pages inspected:
- Current target: `https://www.buzzinga.co/articles/best-practices`
- Reference spacing requested by screenshot: `https://www.buzzinga.co/articles/getting-started`

Local page inspected: `http://localhost:3002/blog/best-practices` from a fresh production server after `npm run build`.

Artifacts:
- Pre-change measurements: `output/playwright/blog-direct-heading-gap/pre/measurements-790.json`
- Pre-change screenshots: `output/playwright/blog-direct-heading-gap/pre/best-790.png`, `output/playwright/blog-direct-heading-gap/pre/reference-790.png`, `output/playwright/blog-direct-heading-gap/pre/liveBest-790.png`, and `output/playwright/blog-direct-heading-gap/pre/liveReference-790.png`
- One-time final comparison: `output/playwright/blog-direct-heading-gap/final-prod/reference-{width}.png`, `output/playwright/blog-direct-heading-gap/final-prod/local-{width}.png`, `output/playwright/blog-direct-heading-gap/final-prod/liveTarget-{width}.png`, and `output/playwright/blog-direct-heading-gap/final-prod/comparison.json`

Measured values:
- Current target live page has paragraph-to-next-heading gap `0px` at `375`, `390`, `430`, `768`, `1024`, `1280`, `1440`, and `1920`.
- Reference spacing page has paragraph-to-next-heading gap `28.8px` at `375`, `390`, `430`, and `768`; `38.41px` at `1024`; `57.59px` at `1280`, `1440`, and `1920`.
- Typography matches the existing blog rich-text rules: below `1024px`, `h3` `20px/26px` and `p` `16px/24px`; at `1024px`, `h3` `26px/31.2px` and `p` `18px/28.8px`; from `1280px`, `h3` `40px/48px` and `p` `20px/32px`.

Implementation notes:
- Updated `styles/globals.css` so only direct rich-text paragraph-to-heading pairs (`.blog-rich-text p + h3`) receive the reference gap.
- Did not change blog data/content, API behavior, assets, or unrelated sections.

One-time screenshot comparison result:
- Ran Playwright screenshots once at `375`, `390`, `430`, `768`, `1024`, `1280`, `1440`, and `1920` widths after implementation.
- Local Best Practices matched the requested reference gap at every width: exact match except `1024px`, where local was `38.39px` versus reference `38.41px` due to subpixel rounding.
- No horizontal scroll was detected.
- Blocked/notes: the already-running dev server on `localhost:3000` had stale compiled CSS, so verification used `npm run build` and a fresh `next start -p 3002` server. Production requests logged existing "Using local blog data fallback. Error: Blog API responded with 500" warnings, but the page rendered and screenshot verification completed.

# Blog Best Practices Rich Text Spacing - 2026-06-08

Target section: `/blog/best-practices` inner article rich-text content beginning with "Choose Compelling Topics".

Live page inspected: `https://www.buzzinga.co/articles/best-practices`.

Local page inspected: `http://localhost:3000/blog/best-practices`.

Artifacts:
- Pre-fix screenshot and measurement at attached-image viewport: `output/playwright/blog-best-practices-spacing/pre/live-790.png`, `output/playwright/blog-best-practices-spacing/pre/local-790.png`, and `output/playwright/blog-best-practices-spacing/pre/measurements-790.json`
- One-time final comparison after renderer cleanup: `output/playwright/blog-best-practices-spacing/final-after-cleanup/live-{width}.png`, `output/playwright/blog-best-practices-spacing/final-after-cleanup/local-{width}.png`, and `output/playwright/blog-best-practices-spacing/final-after-cleanup/comparison.json`

Measured live values:
- 790px attached-image viewport: container x `95px`, width `600px`, height `792px`, padding `0px`; `h3` font `20px`, weight `600`, line-height `26px`, margin `0px`; `p` font `16px`, weight `400`, line-height `24px`, margin `16px 0 0`; heading-to-paragraph gap `16px`; paragraph-to-next-heading gap `0px`; visible children `8`; no horizontal scroll.
- 375px, 390px, 430px, 768px: same target rhythm as the 790px measurement, with responsive container width from viewport minus `32px` until maxing at `600px`.
- 1024px: container width `600px`; `h3` `26px/31.2px`; `p` `18px/28.8px`; heading-to-paragraph gap `16px`; paragraph-to-next-heading gap `0px`.
- 1280px, 1440px, 1920px: container width `600px`; `h3` `40px/48px`; `p` `20px/32px`; heading-to-paragraph gap `16px`; paragraph-to-next-heading gap `0px`.

Initial local differences:
- Visible heading/paragraph spacing matched live, but local rendered one extra trailing empty paragraph from stored rich text: `<p><br></p>`.
- The extra empty paragraph increased local rich-text container height by `40px` below 1024px, `44.8px` at 1024px, and `48px` from 1280px.

Implementation notes:
- Updated `pages/blog/[id].tsx` to strip exact empty paragraph markup (`<p><br></p>`) from HTML descriptions during rendering.
- Did not change blog data/content, API behavior, assets, or unrelated sections.

One-time screenshot comparison result:
- Ran Playwright screenshots once at `375`, `390`, `430`, `768`, `1024`, `1280`, `1440`, and `1920` widths after implementation.
- The target rich-text geometry matched the live page at all required widths: container x/width/height, visible children, output padding, typography, measured gaps, and horizontal scroll all reported zero deltas in `output/playwright/blog-best-practices-spacing/final-after-cleanup/comparison.json`.
- No blocked inspection, screenshot, or asset-download step.

# Blog Detail Rich Text Spacing - 2026-06-08

Target section: `/blog/getting-started` inner article rich-text content beginning with "Editing Content".

Live page inspected: `https://www.buzzinga.co/articles/getting-started`.

Local page inspected: `http://localhost:3000/blog/getting-started`.

Artifacts:
- Pre-fix screenshots and measurements: `output/playwright/blog-detail-spacing/pre/live-{width}.png`, `output/playwright/blog-detail-spacing/pre/local-{width}.png`, and `output/playwright/blog-detail-spacing/pre/measurements.json`
- Focused screenshot at attached-image viewport: `output/playwright/blog-detail-spacing/live-editing-716.png`, `output/playwright/blog-detail-spacing/local-editing-716.png`, and `output/playwright/blog-detail-spacing/measurements-716.json`
- One-time final comparison: `output/playwright/blog-detail-spacing/final/live-{width}.png`, `output/playwright/blog-detail-spacing/final/local-{width}.png`, and `output/playwright/blog-detail-spacing/final/comparison.json`

Measured live values:
- 375px: container x `16px`, width `343px`, max-width `700px`, padding `0px`; `h3` font `20px`, weight `600`, line-height `26px`, margin `0px`, color `rgb(38, 45, 48)`; `p` font `16px`, weight `400`, line-height `24px`, margin `16px 0 0`, color `rgb(38, 45, 48)`; paragraph-to-next-heading gap `28.8px`; no horizontal scroll.
- 390px: container x `16px`, width `358px`, padding `0px`; same `h3` and `p` styles as 375px; paragraph-to-next-heading gap `28.8px`; no horizontal scroll.
- 430px: container x `16px`, width `398px`, padding `0px`; same `h3` and `p` styles as 375px; paragraph-to-next-heading gap `28.8px`; no horizontal scroll.
- 768px: container x `84px`, width `600px`, padding `0px`; same `h3` and `p` styles as 375px; paragraph-to-next-heading gap `28.8px`; no horizontal scroll.
- 1024px: container x `212px`, width `600px`, padding `0px`; `h3` font `26px`, weight `600`, line-height `31.2px`; `p` font `18px`, weight `400`, line-height `28.8px`, margin `16px 0 0`; paragraph-to-next-heading gap `38.41px`; no horizontal scroll.
- 1280px: container x `340px`, width `600px`, padding `0px`; `h3` font `40px`, weight `600`, line-height `48px`; `p` font `20px`, weight `400`, line-height `32px`, margin `16px 0 0`; paragraph-to-next-heading gap `57.59px`; no horizontal scroll.
- 1440px: container x `420px`, width `600px`, padding `0px`; same desktop `h3` and `p` styles as 1280px; no horizontal scroll.
- 1920px: container x `660px`, width `600px`, padding `0px`; same desktop `h3` and `p` styles as 1280px; no horizontal scroll.

Initial local differences:
- Local `.ql-editor-output` inherited Quill editor padding `12px 15px`; live output padding is `0px`.
- Local rich text used pasted inline Framer desktop styles on mobile/tablet: headings `40px/48px` and paragraphs `20px/32px`; live uses `20px/26px` headings and `16px/24px` paragraphs below 1024px.
- Local did not use the live 1024px intermediate typography: headings `26px/31.2px`, paragraphs `18px/28.8px`.
- Local content inset was `15px` inside the measured container, making the text width `30px` narrower than live.
- Local mobile/tablet paragraph-to-next-heading spacing was `57.59px`; live uses `28.8px` below 1024px.

Implementation notes:
- Updated only `pages/blog/[id].tsx`, `styles/globals.css`, `docs/ui-measurements.md`, and `docs/ui-task-prompt.md`.
- Added a scoped `blog-rich-text` class to the blog description output.
- Added measured responsive CSS for the rich-text output, overriding imported Quill output padding and pasted inline Framer typography without changing blog data/content.
- Preserved the live empty `h2` spacer behavior: `28.8px` below 1024px, `38.4px` at 1024px, and `57.6px` from 1280px.

One-time screenshot comparison result:
- Ran Playwright screenshots once at `375`, `390`, `430`, `768`, `1024`, `1280`, `1440`, and `1920` widths after implementation.
- The target rich-text geometry matched the live page at all required widths: container x/width, output padding, heading/paragraph typography, measured gaps, and horizontal scroll all reported zero deltas in `output/playwright/blog-detail-spacing/final/comparison.json`.
- No blocked inspection, screenshot, or asset-download step.

# Capabilities Details Responsive Fix - 2026-06-01

Target section: `ai-native-capabilities` capability details list, beginning with "Integrate Intelligence / AI Feature Implementation".

Live page inspected: `https://www.buzzinga.co/ai-native-capabilities`.

Local page inspected: `http://127.0.0.1:3000/ai-native-capabilities`.

Artifacts:
- Raw measurements: `output/playwright/capabilities-details/measurements.json`
- Screenshots before fix: `output/playwright/capabilities-details/live-article-{width}.png` and `output/playwright/capabilities-details/local-article-{width}.png`
- One-time comparison screenshots/report: `output/playwright/capabilities-details/final/live-{width}.png`, `output/playwright/capabilities-details/final/local-{width}.png`, and `output/playwright/capabilities-details/final/comparison.json`

Measured live values:
- 375px: section content x `16px`, width `343px`; article flex `column`, gap `8px`; article height `563.531px`; title/service `20px`, weight `600`, line-height `26px`; detail rows stack label above body with row gap `6px`, padding `10px 0`; detail text `16px`, line-height `25.6px`; no horizontal scroll.
- 390px: section content x `16px`, width `358px`; article flex `column`, gap `8px`; article height `563.531px`; title/service `20px`, weight `600`, line-height `26px`; detail rows stack label above body with row gap `6px`, padding `10px 0`; no horizontal scroll.
- 430px: section content x `16px`, width `398px`; article flex `column`, gap `8px`; article height `563.531px`; title/service `20px`, weight `600`, line-height `26px`; no horizontal scroll.
- 768px: section content x `16px`, width `736px`; article flex `column`, gap `8px`; article height `435.562px`; title/service `20px`, weight `600`, line-height `26px`; detail text `16px`, line-height `25.6px`; no horizontal scroll.
- 1024px: section padding `64px 32px`; content width `960px`; article flex `row`, gap `16px`; title column `384px`; details column `560px`; title/service `26px`, weight `600`, line-height `31.2px`; detail label/text `14px`, line-height `22.4px`; no horizontal scroll.
- 1280px: section padding `80px 64px`; content width `1152px`; article flex `row`, gap `48px`; title/details columns `552px`; title/service `40px`, weight `600`, line-height `48px`; detail label width `180.672px`; detail text width `361.328px`; detail label/text `16px`, line-height `25.6px`; no horizontal scroll.
- 1440px: centered content width `1200px`; article flex `row`, gap `64px`; title/details columns `568px`; title/service `40px`, weight `600`, line-height `48px`; detail label width `186px`; detail text width `372px`; no horizontal scroll.
- 1920px: centered content width `1200px`; article flex `row`, gap `64px`; title/details columns `568px`; no horizontal scroll.

Initial local differences:
- Local used `py-12` on mobile and `py-[100px]` from 810px; live uses `32px` mobile, `64px` at 1024px, `80px` at 1280px, and `100px` at 1440px+.
- Local switched to two-column layout only at `xl`/1280px; live switches at `1024px`.
- Local mobile/tablet detail rows used horizontal label/body columns; live stacks label above text until `1024px`.
- Local title/service were `24px/28.8px` on mobile and `40px/48px` from 810px; live uses `20px/26px` below 1024px, `26px/31.2px` at 1024px, and `40px/48px` from 1280px.
- Local 1280px content was `1200px` wide with x `40px`; live content is `1152px` wide with x `64px`.

Implementation notes:
- Updated only `components/sections/CapabilitiesPageSections.tsx`.
- One-time screenshot comparison after implementation found the target article matched exactly at `1440px` and `1920px`; `375px`, `390px`, `430px`, `768px`, and `1024px` matched the measured target article geometry with minor pixel differences from live text rendering and upstream hero position; `1280px` initially remained `1200px` wide instead of live `1152px`, then was self-fixed and rechecked by measured geometry to x `64px`, width `1152px`, title width `552px`, no horizontal scroll.
- No content, data, API behavior, business logic, or assets changed.
