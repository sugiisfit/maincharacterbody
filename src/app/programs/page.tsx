import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Build a body that turns heads. Limited spots available for high-performance body transformation coaching.",
};

export default function ProgramsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gold/5 to-transparent" />
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28 relative">
          <p className="text-gold text-sm font-bold uppercase tracking-[0.2em] mb-4">
            High-Performance Body Systems
          </p>
          <h1 className="font-heading text-4xl md:text-6xl font-bold leading-tight max-w-3xl">
            Build The Body That Opens Doors
          </h1>
          <p className="mt-6 text-lg text-text-secondary max-w-xl leading-relaxed">
            You&apos;re successful everywhere else — career, relationships,
            ambition. But your body doesn&apos;t match. This is the system that
            fixes that.
          </p>
        </div>
      </section>

      {/* Problem */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="max-w-2xl">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8">
              Sound Familiar?
            </h2>
            <div className="space-y-4">
              {[
                "You look okay in clothes but you'd never take your shirt off at the beach",
                "You've tried programs, downloaded PDFs, watched hours of YouTube — but nothing sticks past a few weeks",
                "You're busy. 60-hour weeks. You don't have time to live in the gym",
                "You've seen someone similar to you get results and thought — why can't that be me?",
                "A photo, a mirror, or a comment from someone close hit you harder than you expected",
                "You know you should be in better shape for where you are in life",
              ].map((item) => (
                <div key={item} className="flex gap-4 items-start">
                  <span className="text-gold mt-1 shrink-0">&#10003;</span>
                  <p className="text-text-secondary">{item}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-text text-lg font-medium">
              You&apos;re not lazy. You&apos;ve just been trying to solve an
              identity problem with a fitness solution.
            </p>
          </div>
        </div>
      </section>

      {/* The shift */}
      <section className="border-t border-border bg-bg-card">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28 text-center">
          <p className="text-gold text-sm font-bold uppercase tracking-[0.2em] mb-4">
            The Shift
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold max-w-2xl mx-auto leading-tight">
            &ldquo;I don&apos;t want fitness to become my whole personality. But
            I do want a great body.&rdquo;
          </h2>
          <p className="mt-6 text-text-secondary max-w-lg mx-auto">
            That&apos;s the sweet spot. Training takes 20% of the equation —
            nutrition, sleep, and consistency make up the other 80%. We build a
            system around your real life, not a fantasy schedule.
          </p>
        </div>
      </section>

      {/* What you get */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <p className="text-gold text-sm font-bold uppercase tracking-[0.2em] mb-4">
            What You Get
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12">
            The Full System
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Custom Training Program",
                desc: "3-4 sessions per week, 45-60 minutes each. Built around compound lifts and progressive overload — designed for your schedule and equipment.",
              },
              {
                title: "Nutrition Strategy",
                desc: "No rigid meal plans or food elimination. A flexible framework built around your preferences, your lifestyle, and your body composition goals.",
              },
              {
                title: "Weekly Check-Ins & Adjustments",
                desc: "Direct access to me. We review your progress, troubleshoot obstacles, adjust your plan, and keep the momentum going.",
              },
              {
                title: "Form & Technique Reviews",
                desc: "Send me videos of your lifts. I'll give you specific cues to improve your form and prevent injury.",
              },
              {
                title: "Lifestyle & Recovery",
                desc: "Sleep, stress, energy management — we address everything that affects your results, not just the gym and the kitchen.",
              },
              {
                title: "Real Accountability",
                desc: "The piece most guys are missing. Someone who notices when you go quiet and won't let you quit on yourself.",
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

      {/* Who it's for */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="font-heading text-3xl font-bold mb-6 text-gold">
                This Is For You If:
              </h2>
              <div className="space-y-3">
                {[
                  "You're a professional who's ambitious about everything — except your body (until now)",
                  "You want to look sharp without making fitness your entire personality",
                  "You're ready to commit to 3-6 months of focused, consistent work",
                  "You want real guidance, not another PDF collecting dust",
                  "You're willing to be coached, held accountable, and challenged",
                ].map((item) => (
                  <div key={item} className="flex gap-3 items-start">
                    <span className="text-gold shrink-0">&#10003;</span>
                    <p className="text-text-secondary text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="font-heading text-3xl font-bold mb-6 text-text-secondary">
                This Is NOT For You If:
              </h2>
              <div className="space-y-3">
                {[
                  "You want a magic pill or overnight transformation",
                  "You're not willing to train 3x per week minimum",
                  "You're shopping for the cheapest option you can find",
                  "You're not ready to take ownership of your habits",
                  "You just want a plan with zero support or accountability",
                ].map((item) => (
                  <div key={item} className="flex gap-3 items-start">
                    <span className="text-text-secondary shrink-0">
                      &#10007;
                    </span>
                    <p className="text-text-secondary text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transformation stats */}
      <section className="border-t border-border bg-bg-card">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28 text-center">
          <p className="text-gold text-sm font-bold uppercase tracking-[0.2em] mb-8">
            The Reality
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { stat: "85%", label: "of men dissatisfied with their body" },
              { stat: "80%", label: "quit the gym within 12 months" },
              { stat: "95%", label: "of decisions to change are emotional" },
              { stat: "8-12 wks", label: "to see real, visible changes" },
            ].map((item) => (
              <div key={item.label}>
                <p className="font-heading text-3xl md:text-4xl font-bold text-gold">
                  {item.stat}
                </p>
                <p className="mt-2 text-xs text-text-secondary uppercase tracking-wider">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-gradient-to-b from-gold/5 to-transparent">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28 text-center">
          <h2 className="font-heading text-3xl md:text-5xl font-bold max-w-2xl mx-auto leading-tight">
            Limited Spots Available
          </h2>
          <p className="mt-4 text-text-secondary text-lg max-w-lg mx-auto">
            I only work with a small number of clients at a time to make sure
            everyone gets the attention they need. If you&apos;re serious, apply
            below.
          </p>
          <a
            href="https://calendly.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 bg-gold hover:bg-gold-hover text-bg px-10 py-4 text-sm font-bold uppercase tracking-wide transition-colors"
          >
            Apply for Coaching
          </a>
          <p className="mt-4 text-xs text-text-secondary">
            Free 15-minute discovery call. No pressure, no obligation.
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
                q: "How much does coaching cost?",
                a: "This is a premium, high-touch coaching experience — not a mass-market product. Pricing starts in the thousands and is discussed on the discovery call based on your goals and commitment level.",
              },
              {
                q: "How long until I see results?",
                a: "Most clients notice visible changes within 8-12 weeks. Significant, head-turning transformations take 4-6 months of consistent work.",
              },
              {
                q: "I'm really busy — will this work for me?",
                a: "That's exactly who this is built for. The #1 pain point from the men I coach is lack of time. The system works with 3 sessions per week, 45-60 minutes each. That's less than 2% of your week.",
              },
              {
                q: "Do I need a gym membership?",
                a: "A gym with basic equipment (barbell, dumbbells, cables) is ideal. But I can design programs for home setups or minimal equipment too.",
              },
              {
                q: "What if I've never trained properly before?",
                a: "Even better — beginners make the fastest progress. The program is tailored to your exact starting point.",
              },
              {
                q: "How is this different from a generic online program?",
                a: "Generic programs treat everyone the same. This is built specifically for your body, your schedule, your weak points, and your goals. And you have direct access to me — not a chatbot or a group chat.",
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
