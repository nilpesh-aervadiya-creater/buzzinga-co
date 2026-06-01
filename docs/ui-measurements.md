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
