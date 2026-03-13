# Email Nurture Sequence — Red Flags Guide Download

**Purpose:** Convert free Red Flags Guide leads into paying customers ($29 Checklist → $79 Quote Review → $149 Pool Check Report)

**Setup in Brevo:** Automations → Create an Automation → Custom Automation
**Trigger:** Contact added to your Red Flags Guide list (the list your download form adds contacts to)

---

## Email 1 — Day 0 (Immediate delivery)
**Already handled by the existing `/api/red-flags-guide` endpoint** — this sends the PDF via Brevo's transactional email. No automation needed for this one.

---

## Email 2 — Day 2
**Subject:** The one thing most pool buyers get wrong
**From:** Brady Smith <help@fibreglasspoolcheck.com.au>

Hi {{contact.FIRSTNAME}},

Hope the Red Flags Guide was useful. I wanted to follow up with something I see constantly.

The number one mistake buyers make with fibreglass pools is assuming the building inspector will catch pool problems. They won't. Building inspectors check the house — they don't assess pool surfaces, equipment condition, or whether that "minor blistering" is actually the start of a $15,000 resurfacing job.

I've reviewed hundreds of fibreglass pools, and the damage that costs the most money is almost always the stuff that looks minor to an untrained eye. Small blisters, slight discolouration around fittings, hairline cracks along the waterline — these are the early warning signs of osmosis, delamination, and structural issues.

If you're looking at a property with a pool right now, take 10 minutes and walk through the checklist in the guide. Focus on items 3, 6, and 8 — those are the ones most people miss.

Got questions about what you're seeing? Just reply to this email.

Brady Smith
Fibreglass Pool Check
fibreglasspoolcheck.com.au

---

## Email 3 — Day 5
**Subject:** A $29 shortcut that could save you thousands
**From:** Brady Smith <help@fibreglasspoolcheck.com.au>

Hi {{contact.FIRSTNAME}},

If you're actively looking at a property with a fibreglass pool, the Red Flags Guide gives you a solid starting point — but it's general by design.

The Buyer Checklist ($29) is the next step up. It's a detailed, structured assessment framework you can use on-site to evaluate any fibreglass pool systematically. It covers surface condition, equipment, water chemistry indicators, structural signs, and the specific questions to ask the seller or agent.

Think of it this way: the Red Flags Guide tells you what to worry about. The Buyer Checklist tells you exactly what to check and how to document it.

It's delivered instantly via email after purchase — you can have it on your phone before your next inspection.

Get the Buyer Checklist → https://fibreglasspoolcheck.com.au/BuyerChecklist/order

If you've already got a specific pool you're concerned about and want expert eyes on it, skip ahead to the Pool Check Report — I'll assess your pool photos and give you a written report with findings and recommendations.

Brady

---

## Email 4 — Day 8
**Subject:** What a $12,000 surprise looks like
**From:** Brady Smith <help@fibreglasspoolcheck.com.au>

Hi {{contact.FIRSTNAME}},

I recently reviewed a pool for a buyer in Brisbane. The pool looked great in the real estate photos — clean water, tidy surrounds, no obvious damage.

When I looked at the close-up photos, I found widespread osmotic blistering below the waterline, early-stage delamination near the skimmer box, and equipment that was well past its service life. Total estimated repair cost: $12,000–$18,000.

The buyer used that information to renegotiate $15,000 off the purchase price. The report cost $149.

That's what a Pool Check Report does. You send me photos of the pool, and I give you a written assessment covering surface condition, visible defects, equipment state, and what it's likely to cost if repairs are needed. It's independent — I don't sell repairs or work with any contractors.

Reports are delivered within 2–3 business days. Fast enough to act before your finance clause expires.

Order a Pool Check Report → https://fibreglasspoolcheck.com.au/PoolCheckReport/order

Brady

---

## Email 5 — Day 12
**Subject:** Got a resurfacing quote? I can review it.
**From:** Brady Smith <help@fibreglasspoolcheck.com.au>

Hi {{contact.FIRSTNAME}},

Quick one — if you already own a fibreglass pool or you're getting quotes for repair work, I also offer a Quote Review service ($79).

You upload your quote (PDF or photo), and I review the scope of work, pricing, materials, and whether anything important is missing. I'll tell you if the price is fair, if the approach is right for your pool, and what questions to ask the contractor before signing.

I've seen quotes that underspec the job to win on price, and I've seen quotes that overcharge for work that isn't needed. Either way, $79 for a second opinion is cheap insurance.

Get a Quote Review → https://fibreglasspoolcheck.com.au/QuoteReview/order

Brady

---

## Email 6 — Day 16
**Subject:** Still have questions? Just reply.
**From:** Brady Smith <help@fibreglasspoolcheck.com.au>

Hi {{contact.FIRSTNAME}},

Last email from me unless you want to hear more.

If you downloaded the Red Flags Guide, you're clearly doing your homework — and that puts you ahead of most buyers. Whether you end up using one of my paid services or not, I want to make sure you've got what you need.

Quick recap of what's available:

Buyer Checklist ($29) — structured on-site assessment framework, delivered instantly. Best if you want to inspect the pool yourself.

Quote Review ($79) — independent review of a contractor's repair or resurfacing quote. Best if you've already got quotes and want a second opinion.

Pool Check Report ($149) — full written assessment based on your pool photos. Best if you want expert findings before making a buying or repair decision.

Or just reply to this email with your question and I'll point you in the right direction. I read every reply personally.

Brady Smith
Fibreglass Pool Check
fibreglasspoolcheck.com.au

---

## Brevo Setup Notes

1. **Create the automation:** Automations → Create → Custom Automation
2. **Entry point:** "A contact is added to a list" → select your Red Flags Guide list
3. **Add delays and emails:**
   - Wait 2 days → Send Email 2
   - Wait 3 days → Send Email 3
   - Wait 3 days → Send Email 4
   - Wait 4 days → Send Email 5
   - Wait 4 days → Send Email 6
4. **Exit conditions:** Consider adding an exit condition so contacts who purchase a product are removed from the sequence (requires Stripe webhook → Brevo API integration, can be added later)
5. **Sender:** Brady Smith <help@fibreglasspoolcheck.com.au> (already verified in Brevo)
6. **Unsubscribe:** Brevo handles this automatically — every email includes an unsubscribe link

### Merge Tags
- `{{contact.FIRSTNAME}}` — pulls from the firstName field saved when they download the guide
- Make sure your Red Flags Guide API saves the first name as FIRSTNAME attribute in Brevo
