# Results email (for the GHL workflow)

Qualified people go straight to booking, so this email delivers the written
results afterward and catches the ones who bailed before picking a time. Wire
it into the same GHL workflow the webhook triggers (`application_source =
Assessment Funnel V1`). Send it 10 to 15 minutes after submission so the call
booking stays the first ask.

The webhook delivers everything needed as contact fields: the score and both
reads arrive in `notes` (e.g. `Second Prime Score 61. Risk: 43 (flag) |
Performance: 61 (drift)`), the performance answers in `symptoms`, and the
risk answers in `already_tried`. Map them to custom fields when building the
workflow so the merge tags below resolve.

Two variants. GHL branches on the `qualified` field.

---

## Variant A — qualified, hasn't booked yet (or booked; same email works)

**Subject options (test these):**
1. `{{contact.first_name}}, your Second Prime Score: {{score}}`
2. Your results, in writing
3. What your answers say, {{contact.first_name}}

**Body:**

{{contact.first_name}},

Your Second Prime Score came out to **{{score}} out of 100**.

The short version:

- **Risk: {{risk_status}}.** Built from what you told us about your body
  composition, family history, and how long it's been since anyone tested you
  past a standard physical.
- **Performance: {{performance_status}}.** Built from your energy, focus,
  sleep, and drive answers.

Here's the honest caveat. Your answers can point, and only labs can confirm.
Symptoms are the last thing to show up, usually years after the numbers start
moving. A standard physical checks a few dozen markers. We measure 1,000+ and
read them against optimal, the way we've done for 500+ founders and
executives.

That's exactly what the 15-minute call is for. We go through your read line by
line, tell you which labs would confirm or clear each flag, and give you a
straight answer on whether we can help. No pitch at the end.

**[Book your 15-minute call]({{booking_link}})**

Andrew Martin
Founder and Biologist, Second Prime

*This score is an educational self-assessment based on your answers. It is
not a diagnosis and is not a substitute for medical care.*

---

## Variant B — disqualified

**Subject:** Your results, and a straight answer

**Body:**

{{contact.first_name}},

Your Second Prime Score came out to **{{score}} out of 100**. Risk:
{{risk_status}}. Performance: {{performance_status}}.

We'll be straight with you: based on where you are right now, our programs
would be the wrong fit, and we'd rather say that than take your time or
money.

Your results still stand, so use them. Get real bloodwork done this year.
Anything flagged in your read is worth a conversation with your doctor, and
ask for more than the standard panel: fasting insulin, ApoB, a full hormone
panel, hs-CRP.

If your situation changes, the door is open. We'd genuinely welcome you back.

Andrew Martin
Founder and Biologist, Second Prime

*Same disclaimer as above.*

---

## Follow-up sequence note

If the qualified contact hasn't booked within 24 hours, GHL should send one
nudge: subject `Your results are still waiting, {{contact.first_name}}`, body
2 lines: "Your Risk read came back {{risk_status}}. 15 minutes gets it
explained: {{booking_link}}." After that, drop them into the normal
long-term nurture. The trigger-event answer (`trigger_event` field) is the
best personalization hook for later sends.
