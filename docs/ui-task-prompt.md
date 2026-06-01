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
