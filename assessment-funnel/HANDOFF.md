# Second Prime Assessment Funnel — Handoff

Built July 2026 for cold Meta traffic, repositioned July 27 after Andrew's
review. POSITIONING (do not drift from this): the funnel is an INTAKE, step 1
of working with Second Prime, and the call is step 2 where they get answers
and a direction. The intake arms the team; nobody "reviews results" with the
prospect, and no numeric score is ever shown to them (it exists only for
internal triage in the webhook). Self-contained files (fonts, logo, images,
CSS copied from funnel-v2).

**Flow:** `index.html` (landing + video) → `assessment.html` (14 questions +
4 dynamic trust interstitials) → qualified: `booking.html` → `thank-you.html`
/ disqualified: `results.html` soft path. `FLOW.html` is a visual map of every
step and branch; open it in a browser.

## How it works

**Landing (`index.html`)** — video slot at top of the hero, every CTA goes to
the assessment. Copy promises the score plus a Risk and Performance read.

**Assessment (`assessment.html`)**
- 14 questions: outcome, age, role, then 4 performance (energy, focus, sleep,
  drive), 3 risk (body comp, family history, testing depth), trigger event,
  money question (revenue for owners, income otherwise), conditional $10K
  invest question, timeline, then contact.
- 4 interstitials, 3 of them DYNAMIC: each reads the answers just given and
  shows matching proof. Role → "built for owners/operators" positioning.
  Worst performance answer → testosterone math + J.M., or the 3pm-fog
  chemistry + D.R., or the strong-baseline + R.S. variant. Risk answers →
  family-history stat, or 1,000-vs-40-markers, or "the read is the other
  half," all ending on the Dustin case card. Copy pulls from
  `outputs/Market_Copy_Messaging_File.md` (the market's own words).
- Scoring: 2 buckets. Performance = energy + focus + sleep + drive (max 18
  deduction points). Risk = body comp + family + testing gap (max 14). Bucket
  status: solid under 28%, drifting to 60%, flagged above. Overall score =
  100 minus scaled deductions, floor ~22.
- Qualification: same gate as funnel v2. Owners under $500K revenue and
  non-owners under $200K income get the $10K question; a "more than I can
  invest" there disqualifies.
- Routing after submit: qualified → `booking.html` directly (results are the
  call's agenda, never shown first). Disqualified → `results.html` soft path.

**Intake summary (`results.html`)** — for disqualified users, the thank-you
link, and the email link. No gauge, no number: status chips (Risk /
Performance) up top, book CTA + video at the very top (both hidden for DQ),
then the two sections, worse one first, each with "mirror" cards: the
person's own answer quoted back, with what it usually means in labs. Direct
visits with no stored result bounce to the intake. `?demo=1` / `?demo=dq`
preview modes.

**Booking (`booking.html`)** — step 2 of 2. Headline: "Your intake is in.
Pick your time." Above the calendar: up to 3 plain-language flags computed
from their answers ("The afternoon energy crash", "Family health history"),
never a score. Video slot below the calendar ("what happens on the call").
Custom calendar with GHL widget fallback, same as funnel v2. `?demo=1`
previews the flags strip.

**Thank-you (`thank-you.html`)** — show-rate homework + "see your full
breakdown" button to the results page. Curiosity gets satisfied after
booking.

## Wiring

- **GHL webhook:** same inbound webhook as funnel v2, fires for qualified AND
  disqualified. `application_source` = `Assessment Funnel V1`. Score and both
  reads in `notes` (`Second Prime Score 61. Risk: 43 (flag) | Performance: 61
  (drift)`), performance answers in `symptoms`, risk answers in
  `already_tried`, trigger event in `trigger_event`.
- **Results email:** the funnel promises results by email. Build the GHL
  workflow from `RESULTS-EMAIL.md` (2 variants + a 24-hour no-book nudge).
  This is required wiring, the same tier as SMS reminders.
- **Facebook pixel:** wired on all 5 pages (Amartinco LLC's Pixel,
  `500535282073021`, from the Dr. Martin - EHP 1 ad account). PageView
  everywhere, `CompleteRegistration` on assessment submit, `Schedule` on the
  thank-you page. Neutral names only per Meta health-advertiser rules. The
  pixel does not fire on localhost, github.io, or tests.secondprime.io.
- **Videos:** two slots (landing hero, top of results). Scripts in
  `VIDEO-SCRIPTS.md`. Until real videos land, the landing placeholder click
  starts the assessment and the results placeholder scrolls to the CTA.
- **GHL calendar:** cap availability at 14 days out, align the widget copy to
  "15-minute call," instant SMS confirmation + reminder (highest-impact
  show-rate lever in the research).
- **Hosting:** static anywhere (booking falls back to the GHL widget) or
  Vercel with `GHL_CALENDAR_ID` + `GHL_API_KEY` for the native calendar
  (`api/` included). Preview lives at tests.secondprime.io/assessment-funnel/.

## Brand rules baked in (do not deviate)

- Zodiak headlines, Satoshi everything else, loaded locally.
- New styles live in `css/assess.css` only; bump `?v=` on edits.
- The call is a **15-minute call** everywhere. No pricing on any page.
- Stats and testimonials reused verbatim from funnel-v2 / the live site plus
  the Market Copy Messaging File. If you add claims, source them first.
- Score disclaimer (educational, not a diagnosis) stays in both footers and
  the results email.
