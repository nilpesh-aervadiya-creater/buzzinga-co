# All Blog Direct Content-To-Heading Gaps Self-Fix Prompt - 2026-06-08

Target pages:
- `/blog/getting-started`
- `/blog/whats-new`
- `/blog/styling-elements`
- `/blog/importing-content`
- `/blog/best-practices`

Target section: all direct rich-text content-to-heading transitions in blog detail pages.

Viewport sizes:
- `375`, `390`, `430`, `768`, `1024`, `1280`, `1440`, `1920`

Allowed files:
- `styles/globals.css`
- `docs/ui-measurements.md`
- `docs/ui-task-prompt.md`

Screenshot and report paths:
- `output/playwright/blog-all-heading-gap/final/comparison.json`
- `output/playwright/blog-all-heading-gap/final/{id}-768.png`

Exact visual mismatch:
- The previous update applied spacing only to `p + h3`, so other blog pages using `p + h2` or `ol + h2` did not receive the same content-to-heading spacing.

Measured styles to implement:
- `.blog-rich-text p + h2`, `p + h3`, `ol + h2`, `ol + h3`, `ul + h2`, and `ul + h3`: margin-top `28.8px`.
- At `min-width: 1024px`: same selector group margin-top `38.4px`.
- At `min-width: 1280px`: same selector group margin-top `57.6px`.

Required fix:
- Apply the spacing to all direct content-to-heading pairs used by blog rich text.
- Preserve existing typography, content, API behavior, business logic, assets, unrelated files, and approved sections.

# Blog Direct Heading Gap Reference Spacing Self-Fix Prompt - 2026-06-08

Target page: local `/blog/best-practices`.

Target section: direct paragraph-to-heading transitions in blog rich text, especially "Choose Compelling Topics" paragraph to "Organize Your Content".

Reference page: `https://www.buzzinga.co/articles/getting-started`, matching the user's second screenshot.

Viewport sizes:
- `375`, `390`, `430`, `768`, `1024`, `1280`, `1440`, `1920`

Allowed files:
- `styles/globals.css`
- `docs/ui-measurements.md`
- `docs/ui-task-prompt.md`

Screenshot paths:
- Pre-change: `output/playwright/blog-direct-heading-gap/pre/{best,reference,liveBest,liveReference}-790.png`
- Final: `output/playwright/blog-direct-heading-gap/final-prod/{reference,local,liveTarget}-{width}.png`

Exact visual mismatch:
- The red-line area in the user screenshot is a direct paragraph-to-heading transition with `0px` gap.
- The requested reference screenshot uses a paragraph-to-next-heading gap of `28.8px` below `1024px`, `38.41px` at `1024px`, and `57.59px` from `1280px`.

Measured styles to implement:
- `.blog-rich-text p + h3`: margin-top `28.8px`.
- At `min-width: 1024px`: `.blog-rich-text p + h3` margin-top `38.4px`.
- At `min-width: 1280px`: `.blog-rich-text p + h3` margin-top `57.6px`.
- Preserve all existing rich-text typography, color, padding, content, and asset behavior.

Required fix:
- Add spacing only for direct paragraph-to-heading pairs in blog rich text.
- Do not change original blog data/content, API behavior, business logic, assets, unrelated files, or approved sections.

# Blog Best Practices Rich Text Spacing Self-Fix Prompt - 2026-06-08

Target page: local `/blog/best-practices`; live reference `https://www.buzzinga.co/articles/best-practices`.

Target section: inner article rich-text content beginning with "Choose Compelling Topics".

Viewport sizes:
- `375`, `390`, `430`, `768`, `1024`, `1280`, `1440`, `1920`

Allowed files:
- `pages/blog/[id].tsx`
- `styles/globals.css`
- `docs/ui-measurements.md`
- `docs/ui-task-prompt.md`

Live screenshot paths:
- `output/playwright/blog-best-practices-spacing/pre/live-790.png`
- `output/playwright/blog-best-practices-spacing/final-after-cleanup/live-{width}.png`

Local screenshot paths:
- `output/playwright/blog-best-practices-spacing/pre/local-790.png`
- `output/playwright/blog-best-practices-spacing/final-after-cleanup/local-{width}.png`

Exact visual mismatches:
- Local rendered one extra trailing empty rich-text paragraph (`<p><br></p>`) that live does not render.
- This added extra article content height: `40px` below 1024px, `44.8px` at 1024px, and `48px` from 1280px.

Measured live styles to preserve:
- 790px viewport: container x `95px`, width `600px`, height `792px`, padding `0px`; `h3` `20px/26px`, weight `600`, margin `0px`; `p` `16px/24px`, weight `400`, margin `16px 0 0`; heading-to-paragraph gap `16px`; paragraph-to-next-heading gap `0px`; visible children `8`.
- 1024px: `h3` `26px/31.2px`, `p` `18px/28.8px`, same measured gaps.
- 1280px and above: `h3` `40px/48px`, `p` `20px/32px`, same measured gaps.
- All widths: output padding `0px`, color `#262D30`, Inter Display, letter-spacing `0`, no horizontal scroll.

Required fix:
- Remove only empty generated rich-text paragraphs from rendered blog HTML.
- Do not change original blog data/content, API behavior, business logic, assets, unrelated files, or approved sections.

# Blog Detail Rich Text Spacing Self-Fix Prompt - 2026-06-08

Target page: local `/blog/getting-started`; live reference `https://www.buzzinga.co/articles/getting-started`.

Target section: inner article rich-text content beginning with "Editing Content".

Viewport sizes:
- `375`, `390`, `430`, `768`, `1024`, `1280`, `1440`, `1920`

Allowed files:
- `pages/blog/[id].tsx`
- `styles/globals.css`
- `docs/ui-measurements.md`
- `docs/ui-task-prompt.md`

Live screenshot paths:
- `output/playwright/blog-detail-spacing/pre/live-375.png`
- `output/playwright/blog-detail-spacing/pre/live-390.png`
- `output/playwright/blog-detail-spacing/pre/live-430.png`
- `output/playwright/blog-detail-spacing/pre/live-768.png`
- `output/playwright/blog-detail-spacing/pre/live-1024.png`
- `output/playwright/blog-detail-spacing/pre/live-1280.png`
- `output/playwright/blog-detail-spacing/pre/live-1440.png`
- `output/playwright/blog-detail-spacing/pre/live-1920.png`

Local screenshot paths:
- `output/playwright/blog-detail-spacing/pre/local-375.png`
- `output/playwright/blog-detail-spacing/pre/local-390.png`
- `output/playwright/blog-detail-spacing/pre/local-430.png`
- `output/playwright/blog-detail-spacing/pre/local-768.png`
- `output/playwright/blog-detail-spacing/pre/local-1024.png`
- `output/playwright/blog-detail-spacing/pre/local-1280.png`
- `output/playwright/blog-detail-spacing/pre/local-1440.png`
- `output/playwright/blog-detail-spacing/pre/local-1920.png`

Exact visual mismatches:
- Local rich-text content has unwanted editor padding `12px 15px`; live has `0px`.
- Local mobile/tablet rich-text headings and paragraphs are too large because pasted inline Framer desktop styles win.
- Local mobile/tablet content text is inset by `15px` inside the measured container.
- Local 1024px typography does not match the live intermediate breakpoint.
- Local mobile/tablet paragraph-to-next-heading spacing is desktop-sized instead of the measured live spacer height.

Measured live styles to implement:
- Below 1024px: output padding `0px`; container width is viewport minus `32px` until maxing at `600px`; `h3` `20px`, weight `600`, line-height `26px`, margin `0px`; `p` `16px`, weight `400`, line-height `24px`, margin `16px 0 0`; empty spacer `h2` line-height `28.8px`; paragraph-to-next-heading gap `28.8px`.
- 1024px: output padding `0px`; container width `600px`; `h3` `26px/31.2px`; `p` `18px/28.8px`; empty spacer `h2` line-height `38.4px`; paragraph-to-next-heading gap `38.41px`.
- 1280px and above: output padding `0px`; container width `600px`; `h3` `40px/48px`; `p` `20px/32px`; empty spacer `h2` line-height `57.6px`; paragraph-to-next-heading gap `57.59px`.
- All widths: color `#262D30`, Inter Display, letter-spacing `0`, no horizontal scroll.

Required fix:
- Scope the rich-text override to the blog detail output only.
- Override Quill output padding and pasted inline Framer rich-text sizes.
- Do not change original data, content, API behavior, business logic, assets, unrelated files, or approved sections.

# Capabilities Details Responsive Self-Fix Prompt - 2026-06-01

Target page: `/ai-native-capabilities`.

Target section: capability details list beginning with "Integrate Intelligence / AI Feature Implementation".

Allowed files:
- `components/sections/CapabilitiesPageSections.tsx`
- `docs/ui-measurements.md`
- `docs/ui-task-prompt.md`

Live screenshot paths:
- `output/playwright/capabilities-details/live-article-375.png`
- `output/playwright/capabilities-details/live-article-390.png`
- `output/playwright/capabilities-details/live-article-430.png`
- `output/playwright/capabilities-details/live-article-768.png`
- `output/playwright/capabilities-details/live-article-1024.png`
- `output/playwright/capabilities-details/live-article-1280.png`
- `output/playwright/capabilities-details/live-article-1440.png`
- `output/playwright/capabilities-details/live-article-1920.png`

Local screenshot paths:
- `output/playwright/capabilities-details/local-article-375.png`
- `output/playwright/capabilities-details/local-article-390.png`
- `output/playwright/capabilities-details/local-article-430.png`
- `output/playwright/capabilities-details/local-article-768.png`
- `output/playwright/capabilities-details/local-article-1024.png`
- `output/playwright/capabilities-details/local-article-1280.png`
- `output/playwright/capabilities-details/local-article-1440.png`
- `output/playwright/capabilities-details/local-article-1920.png`

Measured live styles to implement:
- Mobile and tablet below 1024px: article flex column, gap `8px`; title/service `20px`, weight `600`, line-height `26px`; detail rows flex column, gap `6px`, padding `10px 0`; detail text `16px`, line-height `25.6px`.
- 1024px: section padding `64px 32px`; content width `960px`; article flex row, gap `16px`; title column `384px`; details column `560px`; title/service `26px`, line-height `31.2px`; detail label/text `14px`, line-height `22.4px`.
- 1280px: section padding `80px 64px`; content width `1152px`; article flex row, gap `48px`; title/details columns `552px`; title/service `40px`, line-height `48px`; detail label width `180.672px`; detail text width `361.328px`.
- 1440px and 1920px: centered content width `1200px`; article flex row, gap `64px`; title/details columns `568px`; detail label width `186px`; detail text width `372px`.

Required fix:
- Apply only the measured responsive layout, spacing, and type values above.
- Do not change original data, content, API behavior, business logic, unrelated files, or approved sections.
