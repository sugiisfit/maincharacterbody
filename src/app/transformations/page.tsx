import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Transformations",
  description:
    "Real skinny-fat to lean transformations from men who followed the Main Character Body system.",
};

const CALENDLY = "https://calendly.com/sugiisfit/qualificationcall";

const TRANSFORMATIONS = [
  {
    src: "/images/transformations/ba-1.png",
    alt: "Body recomposition transformation",
    caption: "26, Software Engineer",
  },
  {
    src: "/images/transformations/ba-2.png",
    alt: "Fat loss transformation",
    caption: "24, Physics Graduate",
  },
  {
    src: "/images/transformations/ba-3.png",
    alt: "15kg muscle gain transformation",
    caption: "19, Medical Student",
  },
  {
    src: "/images/transformations/ba-4.png",
    alt: "5kg lean muscle gain",
    caption: "26, Tech Professional",
  },
  {
    src: "/images/transformations/ba-5.png",
    alt: "7kg fat loss transformation",
    caption: "27, Physiologist",
  },
  {
    src: "/images/transformations/ba-6.jpg",
    alt: "10kg muscle gain transformation",
    caption: "23, Hotel Manager",
  },
  {
    src: "/images/transformations/ba-7.png",
    alt: "Lean transformation",
    caption: "Client transformation",
  },
  {
    src: "/images/transformations/ba-8.png",
    alt: "Body recomposition",
    caption: "Client transformation",
  },
  {
    src: "/images/transformations/ba-9.png",
    alt: "Fat loss and muscle gain",
    caption: "Client transformation",
  },
];

const CASE_STUDIES = [
  {
    name: "Subit",
    type: "Fat Loss",
    result: "80kg \u2192 75kg",
    badge: "\u20135 KG \u00B7 Fat Loss",
    quote:
      "I\u2019ve always been active, but my efforts never translated into the results I wanted. Sugam helped me understand my relationship with food, the power of consistency, and why keeping things simple is the real secret. I\u2019ve lost 5kg, my energy is more stable than ever, and I finally feel confident and happy in my own body.",
  },
  {
    name: "Michael",
    type: "Lean Bulk",
    result: "70kg \u2192 76kg",
    badge: "+6 KG Muscle \u00B7 Bulk",
    quote:
      "As a busy banker, time is everything. In 6 months with Sugam, I gained 6kg of muscle and unlocked the muscle-up I\u2019d been chasing for years. He simplifies everything, keeps you accountable, and delivers real results. I\u2019m stronger, more energetic, and more confident than ever.",
  },
  {
    name: "Jordan",
    type: "Fat Loss",
    result: "80kg \u2192 75kg",
    badge: "\u20135 KG \u00B7 Fat Loss",
    quote:
      "I\u2019d tried everything before finding Sugam, but nothing ever stuck. Within a few months I dropped 5kg and finally started seeing the physique I\u2019d always worked toward. No gimmicks, no overwhelm \u2014 just a clear, sustainable approach that fits into real life.",
  },
];

export default function TransformationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gold/[0.04] to-transparent" />
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28 relative text-center">
          <p className="text-gold text-sm font-bold uppercase tracking-[0.2em] mb-4">
            Real People. Real Results.
          </p>
          <h1 className="font-heading text-4xl md:text-6xl font-bold leading-tight">
            100+ Men Have Made the Shift.
          </h1>
          <p className="mt-4 text-text-secondary text-lg max-w-xl mx-auto">
            Busy professionals with real schedules. No crash diets, no 6-day
            splits. Just the right system, applied consistently.
          </p>
        </div>
      </section>

      {/* Before/After Grid */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {TRANSFORMATIONS.map((img) => (
              <div
                key={img.src}
                className="border border-border/50 bg-bg-card overflow-hidden hover:border-gold/30 transition-colors"
              >
                <div className="relative aspect-[4/5]">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="px-4 py-3 border-t border-border/50 text-center">
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-text-secondary">
                    {img.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gold divider */}
      <div className="divider-gold" />

      {/* Case Studies */}
      <section className="bg-bg-card">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="text-center mb-12">
            <p className="text-gold text-sm font-bold uppercase tracking-[0.2em] mb-4">
              In Their Own Words
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold">
              Specific People. Specific Numbers.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {CASE_STUDIES.map((item) => (
              <div
                key={item.name}
                className="bg-bg border border-border/50 p-6 flex flex-col gap-3 hover:border-gold/30 transition-colors"
              >
                <p className="text-sm font-bold">
                  {item.name} &middot; {item.type}
                </p>
                <p className="font-heading text-2xl font-bold text-gold">
                  {item.result}
                </p>
                <p className="text-sm text-text-secondary leading-relaxed italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <p className="text-xs uppercase tracking-[0.08em] text-text-secondary border-t border-border/50 pt-3 mt-auto">
                  <span className="text-gold">&#9679;</span> {item.badge}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28 text-center">
          <h2 className="font-heading text-3xl md:text-5xl font-bold max-w-2xl mx-auto leading-tight">
            Ready to Be the Next One?
          </h2>
          <p className="mt-4 text-text-secondary text-lg max-w-lg mx-auto">
            Book a free 30-minute strategy call. No pitch deck. No pressure.
            Just an honest conversation about where you are and how to get where
            you want to be.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gold hover:bg-gold-hover text-bg px-10 py-4 text-sm font-bold uppercase tracking-wide transition-colors"
            >
              Book Your Free Call
            </a>
            <Link
              href="/quiz"
              className="inline-block border border-border hover:border-gold/40 text-text px-10 py-4 text-sm font-bold uppercase tracking-wide transition-colors"
            >
              Take The Free Quiz
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
