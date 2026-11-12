# Design system

The site reads as an enterprise consultancy profile: a navy masthead, white
content bands, hairline rules instead of heavy cards, and a serif used only for
headings and figures. Tokens live in `app/globals.css`; use the names below,
never raw values.

## Colour

| Token | Value | Role |
| --- | --- | --- |
| `navy` | `oklch(0.2 0.055 259)` | Hero and contact bands, logo tile, primary nav button |
| `navy-soft` | `oklch(0.26 0.06 259)` | Hover state on navy buttons |
| `primary` | `oklch(0.46 0.17 259)` | Figures, eyebrows, icons, active nav underline, "Current" tag |
| `background` | `oklch(0.985 0.003 250)` | Page background |
| `card` | `oklch(1 0 0)` | Cards, metrics band, embedded scheduler surface |
| `secondary` | `oklch(0.955 0.01 250)` | Alternating section bands (at 60% opacity) |
| `foreground` | `oklch(0.21 0.045 258)` | Headings and body text on light surfaces |
| `muted-foreground` | `oklch(0.48 0.03 256)` | Supporting text and labels |
| `border` | `oklch(0.9 0.01 250)` | Hairlines and card outlines |

On navy, text is white, supporting text `slate-300`, labels `slate-400`, and
`sky-200`/`sky-300` carry eyebrows and icons. Rules on navy are `white/15`.
There is one accent family (blue); do not add a second. The site is light only.

## Typography

- Headings and figures: Source Serif 4 (`font-serif`), weight 600, tight tracking.
- Everything else: Geist (`font-sans`). Geist Mono is loaded but reserved for code.
- Scale: `text-xs` eyebrows and labels, `text-sm` supporting text, `text-lg` lead
  paragraphs, `text-xl` role titles, `text-3xl` to `text-5xl` section headings,
  up to `text-7xl` for the hero headline.
- Eyebrows are uppercase, weight 600, tracking `0.18em` to `0.2em`.
- Lead paragraphs are capped at `max-w-xl` to `max-w-3xl`.

## Spacing and layout

- Content width `max-w-[1400px]`, gutters `px-6` (mobile) and `lg:px-10`.
- Sections use `py-24`; the hero uses `pt-32 pb-20`, larger from `lg`.
- Grid gaps: `gap-6` for cards, `gap-12` to `gap-24` between columns.
- Light and tinted bands alternate; navy opens and closes the page.

## Shape and depth

- Radius is `rounded-sm` everywhere. No pills, no large rounded cards.
- Structure comes from 1px rules (`border-border`, `divide-y`) and a 2px top
  rule in `primary` or `foreground` for emphasis.
- Shadows: `shadow-sm` on capability cards, `shadow-md` on hover. Nothing else.

## Components

- Primary button on navy: white fill, navy text, `px-6 py-3.5`, `hover:bg-slate-100`.
- Secondary button on navy: `border-white/30`, `hover:bg-white/10`.
- Nav button: navy fill, white text, `hover:bg-navy-soft`.
- Link row (contact): icon, uppercase label, medium-weight value, arrow;
  rows separated by `white/15` rules, `hover:bg-white/5`.
- Metric: serif figure in `primary` above a `text-sm` muted label.
- Tag: `rounded-sm border bg-card px-2.5 py-1 text-xs`.
- Scheduler: third-party booking page in an iframe on a `card` surface with a
  `white/15` outline, always paired with a link that opens it in a new tab.

## Imagery and icons

Icons are Lucide, 16 to 24px, in `primary` on light surfaces and `sky-300` on
navy. There is no photography or illustration; the only decoration is the
hairline grid behind the hero.

## Content rules

- Headline figures must describe the career as a whole or name the project
  they come from.
- No personal email address or phone number on the site. Contact goes through
  the scheduler and LinkedIn.
