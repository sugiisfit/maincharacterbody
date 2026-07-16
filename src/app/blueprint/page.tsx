import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Hybrid Athlete Blueprint",
  description:
    "Go from skinny-fat to lean, sharp and athletic in 12 weeks — 4 hours a week, no fasting, no gym-bro nonsense. The Hybrid Athlete Blueprint.",
};

// Live Stripe Payment Link (£39). In Stripe, set this link's post-payment
// confirmation to redirect to https://maincharacterbody.com/thank-you.
const CHECKOUT_URL = "https://buy.stripe.com/eVq14of4XgUYdbHh1I0Ny0d";
const PRICE = "£39";

export default function BlueprintPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gold/5 to-transparent" />
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28 relative">
          <p className="text-gold text-sm font-bold uppercase tracking-[0.2em] mb-4">
            The Hybrid Athlete Blueprint
          </p>
          <h1 className="font-heading text-4xl md:text-6xl font-bold leading-tight max-w-3xl">
            You&apos;re Not Fat. You&apos;re Skinny-Fat.
          </h1>
          <p className="mt-6 text-lg text-text-secondary max-w-xl leading-relaxed">
            That&apos;s the exact reason cutting <em>or</em> bulking has never
            worked for you. Go from skinny-fat to lean, sharp and athletic in 12
            weeks — 4 hours a week, no fasting, no gym-bro nonsense.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={CHECKOUT_URL}
              className="inline-block bg-gold hover:bg-gold-hover text-bg px-10 py-4 text-sm font-bold uppercase tracking-wide transition-colors"
            >
              Get The Blueprint — {PRICE}
            </a>
            <span className="text-xs text-text-secondary">
              Lifetime access · no subscription · 30-day money-back guarantee
            </span>
          </div>
        </div>
      </section>

      {/* The look */}
      <section className="border-t border-border bg-bg-card">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <p className="text-gold text-sm font-bold uppercase tracking-[0.2em] mb-4">
            The Look You Actually Want
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold max-w-2xl leading-tight">
            Lean, sharp, athletic. The main character — not the bloated
            gym bro.
          </h2>
          <p className="mt-6 text-text-secondary max-w-2xl leading-relaxed">
            Think Bruce Lee, Fight-Club Brad Pitt, the lead — not a bodybuilder.
            That look lives at 10&ndash;12% body fat with real muscle
            underneath: abs show, your V-taper appears, and your face and
            jawline sharpen. It&apos;s completely achievable naturally — no
            drugs, no shortcuts.
          </p>
        </div>
      </section>

      {/* Why it's different */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <p className="text-gold text-sm font-bold uppercase tracking-[0.2em] mb-4">
            Why This Is Different
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12 max-w-2xl">
            No fasting. No stimulants. No living in the gym.
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "No fasting, no skipping meals",
                desc: "Most lean-physique programs make you fast 16 hours and skip breakfast. You'll eat 3–4 normal meals a day. Two numbers to hit. That's the whole game.",
              },
              {
                title: "Hybrid training for the athletic look",
                desc: "Calisthenics, skills and weights combined — for the sharp, athletic body, not just size. Every move works on a bar, rings, or the floor. No equipment excuse.",
              },
              {
                title: "Mindset first",
                desc: "Getting lean is an identity problem, not a fitness problem. We fix the self-image that keeps snapping you back — the step every other program skips.",
              },
              {
                title: "100% natural, and achievable",
                desc: "This is the body I actually built, drug-free, more than once. You're not chasing a physique you can only get on gear. You're building one you can keep.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-bg-card border border-border p-8 hover:border-gold/40 transition-colors"
              >
                <h3 className="font-heading text-xl font-bold mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's inside */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <p className="text-gold text-sm font-bold uppercase tracking-[0.2em] mb-4">
            What&apos;s Inside
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12">
            The 12-Week System
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                n: "01",
                title: "Become the Guy",
                desc: "Fix the self-image that keeps snapping you back to your old body. The mindset foundation no other program teaches — with a fill-in identity worksheet.",
              },
              {
                n: "02",
                title: "The 2-Lever Recomp",
                desc: "Build muscle and lose fat at the same time, tracking only two things: calories and protein. No fasting, no misery, with a done-for-you lookup table.",
              },
              {
                n: "03",
                title: "Train Like a Hybrid Athlete",
                desc: "The done-for-you 4-day program (plus a 3-day fallback for busy weeks). Skills-first, compound-driven, one progression rule — with a training logbook.",
              },
              {
                n: "04",
                title: "Lean for Life",
                desc: "Hit 10–12% and actually stay there. The maintenance skill nobody teaches — so this is the last program you ever need to buy.",
              },
            ].map((item) => (
              <div
                key={item.n}
                className="bg-bg-card border border-border p-8 hover:border-gold/40 transition-colors"
              >
                <p className="font-heading text-gold text-2xl font-bold mb-2">
                  {item.n}
                </p>
                <h3 className="font-heading text-xl font-bold mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-text-secondary max-w-2xl">
            <span className="text-text font-medium">Plus:</span> your
            personalised Skinny-Fat Type starting point, the Busy-Man Daily
            Blueprint, and access to the private community with full exercise
            demos.
          </p>
        </div>
      </section>

      {/* Transformation proof */}
      <section className="border-t border-border bg-bg-card">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <p className="text-gold text-sm font-bold uppercase tracking-[0.2em] mb-8 text-center">
            Proof It Works
          </p>
          {/* TODO: replace with hero before/after — before (skinny-fat) + attainable lean-athletic after (not the stage-peak comp shot). */}
          <div className="mx-auto max-w-2xl aspect-[16/10] border border-border bg-bg flex items-center justify-center">
            <span className="text-text-secondary text-sm">
              [ before / after image ]
            </span>
          </div>
          <p className="mt-6 text-center text-text-secondary max-w-lg mx-auto text-sm">
            A real, natural transformation — the lean, athletic look this
            program is built to deliver.
          </p>
        </div>
      </section>

      {/* The offer */}
      <section
        id="get-the-blueprint"
        className="border-t border-border bg-gradient-to-b from-gold/5 to-transparent"
      >
        <div className="mx-auto max-w-3xl px-6 py-20 md:py-28 text-center">
          <p className="text-gold text-sm font-bold uppercase tracking-[0.2em] mb-4">
            The Offer
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold leading-tight">
            Everything, for {PRICE}
          </h2>
          <div className="mt-10 text-left bg-bg-card border border-border p-8 space-y-3">
            {[
              "The full 12-week Hybrid Athlete Blueprint (4 modules)",
              "The 4-day program + 3-day fallback + training logbook",
              "The 2-lever nutrition system + calorie & protein lookup table",
              "The Become the Guy identity worksheet",
              "Skinny-Fat Type starting point + Busy-Man Daily Blueprint",
              "Private community with full exercise demos",
              "Lifetime access — one payment, no subscription",
            ].map((item) => (
              <div key={item} className="flex gap-3 items-start">
                <span className="text-gold shrink-0">&#10003;</span>
                <p className="text-text-secondary text-sm">{item}</p>
              </div>
            ))}
          </div>
          <a
            href={CHECKOUT_URL}
            className="inline-block mt-8 bg-gold hover:bg-gold-hover text-bg px-10 py-4 text-sm font-bold uppercase tracking-wide transition-colors"
          >
            Get The Blueprint — {PRICE}
          </a>
          <p className="mt-4 text-xs text-text-secondary">
            30-day money-back guarantee. Follow it for a month — if you&apos;re
            not becoming the main character, email me and I&apos;ll refund you.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
          <h2 className="font-heading text-3xl font-bold mb-10 text-center">
            Common Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "I'm really busy — will this work for me?",
                a: "It's built for exactly that. 4 hours a week, with a 3-day fallback for the weeks life gets in the way. No fasting windows, no living in the gym.",
              },
              {
                q: "I've failed at this before.",
                a: "Everyone who buys this has. That's Module 1 — you didn't have a discipline problem, you had an identity problem. We fix that first.",
              },
              {
                q: "Do I need a gym, or can I do calisthenics?",
                a: "Both, or either. Every exercise has a bodyweight and a weighted version — bar, rings, or floor. Use what you've got.",
              },
              {
                q: "Will I get bulky?",
                a: "No. This builds the lean, athletic look on purpose — sharp and defined, not big.",
              },
              {
                q: "Is it natural?",
                a: "100%. That's the whole point — an achievable body you can actually keep.",
              },
              {
                q: "What do I actually get?",
                a: "A designed digital program (ebook + worksheets + logbook) you can read on any device, plus access to the private community with exercise demos. Yours forever, one payment.",
              },
            ].map((item) => (
              <div key={item.q} className="border-b border-border pb-6">
                <h3 className="font-heading text-lg font-bold mb-2">
                  {item.q}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
