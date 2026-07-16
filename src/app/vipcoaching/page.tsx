import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Premium 1-to-1 Coaching",
  description:
    "The coaching system for skinny-fat men who are done looking the same after years of trying. Drop the fat, build the muscle, keep your lifestyle.",
};

const CALENDLY = "https://calendly.com/sugiisfit/qualificationcall";

export default function VipCoachingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gold/5 to-transparent" />
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28 relative">
          <p className="text-gold text-sm font-bold uppercase tracking-[0.2em] mb-4">
            Drop The Fat · Build The Muscle · Keep Your Lifestyle
          </p>
          <h1 className="font-heading text-4xl md:text-6xl font-bold leading-tight max-w-3xl">
            The coaching system for skinny-fat men who are done looking the same
            after years of trying.
          </h1>
          <div className="mt-6 space-y-2 text-lg text-text-secondary max-w-2xl leading-relaxed">
            <p>
              Most guys think they need to train harder. Skinny-fat is the one
              body type where that makes it worse.
            </p>
            <p className="text-text">
              You don&apos;t need another 6-day split. You don&apos;t need to
              live on chicken and rice. You don&apos;t need the gym to become
              your whole personality.
            </p>
            <p>
              You need the right stimulus, the right food, 3&ndash;4 sessions a
              week.
            </p>
          </div>
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 bg-gold hover:bg-gold-hover text-bg px-10 py-4 text-sm font-bold uppercase tracking-wide transition-colors"
          >
            Book Your Free Strategy Call
          </a>
        </div>
      </section>

      {/* Sound familiar */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="max-w-2xl">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8">
              Sound Familiar?
            </h2>
            <div className="space-y-4">
              {[
                "You've been going to the gym for months — years, even — and you look basically the same.",
                "You're stuck in the bulk-or-cut loop, never committing to either.",
                "You look okay in clothes, but you avoid every shirtless situation.",
                "You've failed program after program — YouTube, MyFitnessPal, Reddit.",
                "You're disciplined in every other area of life. You just don't have a system that works.",
                "You've watched someone with your exact starting point get results — and wondered why not you.",
              ].map((item) => (
                <div key={item} className="flex gap-4 items-start">
                  <span className="text-gold mt-1 shrink-0">&#10003;</span>
                  <p className="text-text-secondary">{item}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-text text-lg font-medium">
              If that&apos;s you — you&apos;re not broken. You&apos;ve just been
              doing it alone. And that&apos;s the one thing that doesn&apos;t
              work.
            </p>
          </div>
        </div>
      </section>

      {/* Free call */}
      <section className="border-t border-border bg-bg-card">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <p className="text-gold text-sm font-bold uppercase tracking-[0.2em] mb-4">
            On This Free Strategy Call
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12 max-w-2xl">
            What you get in 30 minutes with Sugii
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                n: "01",
                title: "Your Personalised Audit",
                desc: "I break down your current routine, habits and lifestyle to pinpoint the exact bottleneck blocking your results — even if you've tried everything before.",
              },
              {
                n: "02",
                title: "The L.E.A.N. System Walkthrough",
                desc: "A full breakdown of the exact system I used to win a UK Championship while managing work, travel and a social life — and how it's transformed 100+ clients.",
              },
              {
                n: "03",
                title: "Your Step-by-Step Roadmap",
                desc: "You leave with a personalised, actionable plan. Not generic motivation — you'll know exactly what to do from day one.",
              },
            ].map((item) => (
              <div
                key={item.n}
                className="bg-bg border border-border p-8 hover:border-gold/40 transition-colors"
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
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-10 bg-gold hover:bg-gold-hover text-bg px-10 py-4 text-sm font-bold uppercase tracking-wide transition-colors"
          >
            I&apos;m Ready. Book My Free Call.
          </a>
        </div>
      </section>

      {/* Coach bio */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
          <div
            className="aspect-[4/5] border border-border bg-bg-card bg-cover bg-center"
            style={{ backgroundImage: "url(/images/about-suited.jpg)" }}
            role="img"
            aria-label="Sugam 'Sugii' Roka — UK Weighted Calisthenics Champion"
          />
          <div>
            <p className="text-gold text-sm font-bold uppercase tracking-[0.2em] mb-4">
              UK Weighted Calisthenics Champion · u80kg · 2022
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              Meet Your Coach, Sugam &ldquo;Sugii&rdquo; Roka
            </h2>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                I&apos;ve been where you are. Packed calendar, long hours,
                constant travel — and still trying to build a physique worth
                showing off. As someone who worked in finance and competed in
                calisthenics nationally, I built the L.E.A.N. Lifestyle System
                out of necessity, because generic &ldquo;eat less, move
                more&rdquo; advice simply doesn&apos;t work for high performers.
              </p>
              <p>
                Since then I&apos;ve helped over 100 busy professionals drop
                fat, build real muscle, and genuinely enjoy the process —
                without sacrificing their career, their social life, or their
                sanity. Now I want to do the same for you.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { stat: "100+", label: "Clients Transformed" },
                { stat: "1st", label: "UK Champion 2022" },
                { stat: "6+ yrs", label: "Coaching" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="font-heading text-2xl md:text-3xl font-bold text-gold">
                    {item.stat}
                  </p>
                  <p className="mt-1 text-xs text-text-secondary uppercase tracking-wider">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="border-t border-border bg-bg-card">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <p className="text-gold text-sm font-bold uppercase tracking-[0.2em] mb-4">
            Specific People. Specific Numbers.
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Real Men. Real Lives. Real Results.
          </h2>
          <p className="text-text-secondary max-w-2xl mb-12">
            Busy professionals. Real schedules. No crash diets, no 2-hour
            sessions. Just the system, applied consistently.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Subit",
                badge: "–5 KG · Fat Loss",
                quote:
                  "I've always been active, but my efforts never translated into results. Sugam helped me understand my relationship with food, the power of consistency, and why keeping things simple is the real secret. I've lost 5kg, my energy is stable, and I finally feel confident in my own body.",
              },
              {
                name: "Michael",
                badge: "+6 KG Muscle · Bulk",
                quote:
                  "As a busy banker, time is everything. In 6 months with Sugam I gained 6kg of muscle and unlocked the muscle-up I'd chased for years. He simplifies everything, keeps you accountable, and delivers real results. I'm stronger, more energetic, and more confident than ever.",
              },
              {
                name: "Jordan",
                badge: "–5 KG · Fat Loss",
                quote:
                  "I'd tried everything before finding Sugam, but nothing ever stuck. Within a few months I dropped 5kg and finally started seeing the physique I'd always worked toward. No gimmicks, no overwhelm — just a clear, sustainable approach that fits real life.",
              },
            ].map((item) => (
              <div key={item.name} className="bg-bg border border-border p-8">
                <p className="text-gold text-xs font-bold uppercase tracking-wider mb-4">
                  {item.badge}
                </p>
                <p className="text-sm text-text-secondary leading-relaxed italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <p className="mt-4 font-heading font-bold">— {item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
          <h2 className="font-heading text-3xl font-bold mb-10 text-center">
            Got Questions?
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "I've tried coaching before and it didn't work.",
                a: "Most cookie-cutter coaches hand you a PDF and disappear. This is 1-on-1. I build your plan around your schedule, your food preferences and your body, and I check in weekly to adjust it. If something's not working, we fix it — that week, not next month.",
              },
              {
                q: "I travel a lot / my schedule is unpredictable.",
                a: "Half my clients are remote workers or frequent travellers. The system is built to flex — hotel gyms, eating out, jet lag, we plan for all of it. Consistency doesn't mean perfection, it means a framework that adapts.",
              },
              {
                q: "How is this different from what I can find on YouTube for free?",
                a: "Information isn't your problem — you've watched the videos. What you don't have is someone who sees YOUR data every week, catches the mistakes you can't see, and keeps you moving when motivation drops. That's the difference.",
              },
              {
                q: "How long until I see results?",
                a: "Most clients see noticeable changes in 4–6 weeks — clothes fit differently, energy is up, lifts are progressing. Visible body-composition shifts usually hit around 8–12 weeks. But this isn't a crash diet — it's a system you keep.",
              },
              {
                q: "What does it actually cost?",
                a: "Coaching starts from £450/month ($600/month). The strategy call is free with zero obligation — we'll figure out if it's the right fit before anything else.",
              },
            ].map((item) => (
              <div key={item.q} className="border-b border-border pb-6">
                <h3 className="font-heading text-lg font-bold mb-2">{item.q}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-border bg-gradient-to-b from-gold/5 to-transparent">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28 text-center">
          <p className="text-gold text-sm font-bold uppercase tracking-[0.2em] mb-4">
            Your Move
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold max-w-2xl mx-auto leading-tight">
            You&apos;ve read this far for a reason.
          </h2>
          <p className="mt-6 text-text-secondary text-lg max-w-xl mx-auto">
            Something isn&apos;t working — and you know it. You&apos;re not here
            because you&apos;re lazy. You&apos;re here because you&apos;ve been
            doing this alone for too long. Book a free 30-minute call. No pitch
            deck. No pressure. Just an honest conversation.
          </p>
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 bg-gold hover:bg-gold-hover text-bg px-10 py-4 text-sm font-bold uppercase tracking-wide transition-colors"
          >
            Book My Free Strategy Call
          </a>
          <p className="mt-4 text-xs text-text-secondary">
            No commitment. No BS. Just clarity.
          </p>
        </div>
      </section>
    </>
  );
}
