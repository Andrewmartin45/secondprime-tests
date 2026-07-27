# Second Prime Assessment Funnel — Handoff

Built July 2026 for cold Meta traffic. A quiz funnel: the prospect scores
themselves, the results page interprets the score and twists the knife, and the
call is positioned as the way to confirm what the score suggests. Five pages,
self-contained (fonts, logo, images, CSS all included, copied from funnel-v2).

**Flow:** `index.html` (landing + video) → `assessment.html` (14 questions +
5 trust interstitials) → `results.html` (score + breakdown + video + CTA) →
`booking.html` → `thank-you.html`.

## How it works

**Landing (`index.html`)** — short by design. Hero with video slot, the 5
systems the score reads, 3-step how-it-works, proof band, cases, final CTA.
Every CTA goes to the assessment.

**Assessment (`assessment.html`)**
- 14 scored/context questions in 6 sections: the seat you're in, energy and
  focus, metabolic, sleep/recovery/drive, hidden risk, fit.
- 5 interstitials between sections (Hims/Hers style): the AHA "normal
  cholesterol" stat, the D.R. brain-fog testimonial, the Dustin case card, the
  testosterone-decline stat with the J.M. quote, and the R.S. skeptic quote.
  They're steps in the sequence with `data-kind="int"`; progress counts
  questions only, and Back skips over them.
- Scoring: answers carry `data-domain` + `data-pts` (deductions). Score =
  100 minus scaled deductions, floor ~22 so nobody bottoms out. Domains get
  solid / drifting / red-flag status by share of max deduction.
- Qualification is the same gate as funnel v2, framed as "fit" questions:
  owners under $500K revenue and non-owners under $200K income get the $10K
  investment question; a no there marks them disqualified. DQ users still see
  their results, minus the booking CTAs (soft path instead).
- Contact gate sits before the score ("Your score is ready. Where do we send
  it?"), then a fake-calculating screen, then results.

**Results (`results.html`)** — reads `localStorage.sp_assessment`. Animated
gauge, verdict line by score band, domain bars, up to 3 "what it's costing
you" blocks (flags first), the honest-caveat section (answers point, labs
confirm), video slot, booking CTA with the 3-step call preview, case strip.
Direct visits with no stored result bounce back to the assessment.

**Booking / thank-you** — copied from funnel-v2 (custom calendar with GHL
widget fallback), with the process copy reworded around the score review.

## Wiring

- **GHL webhook:** same inbound webhook as funnel v2. Fires on assessment
  submit for qualified AND disqualified. `application_source` is
  `Assessment Funnel V1`; the score and domain breakdown arrive in `notes`
  (e.g. `Second Prime Score 61. Energy & Focus: 44 (flag) | ...`), and the
  symptom answers are packed into `symptoms` / `already_tried` so Mike sees
  everything before triage.
- **Facebook pixel:** wired on all 5 pages (Amartinco LLC's Pixel,
  `500535282073021`, from the Dr. Martin - EHP 1 ad account). PageView
  everywhere, `CompleteRegistration` on assessment submit, `Schedule` on the
  thank-you page. Neutral names only per Meta health-advertiser rules; the
  pixel does not fire on localhost. If ads should run from a different ad
  account/pixel, swap the ID in the head snippet on all 5 pages.
- **Videos:** two slots with placeholder frames. Scripts and swap instructions
  in `VIDEO-SCRIPTS.md`. Until real videos land, the landing placeholder
  click starts the assessment and the results placeholder scrolls to the CTA.
- **Hosting:** same two modes as funnel v2. Static anywhere (booking falls
  back to the embedded GHL widget) or Vercel with `GHL_CALENDAR_ID` +
  `GHL_API_KEY` for the native calendar (`api/` included).

## Brand rules baked in (do not deviate)

- Zodiak headlines, Satoshi everything else, loaded locally.
- New styles live in `css/assess.css` only; `styles.css` and `funnel.css` are
  untouched copies from funnel-v2. Bump `?v=` on edits.
- The call is a **15-minute call** everywhere. No pricing on any page.
- Stats and testimonials are reused verbatim from funnel-v2 / the live site.
  Nothing new was invented; if you add claims, source them first.
- Score disclaimer (educational, not a diagnosis) is in both footers. Keep it.
