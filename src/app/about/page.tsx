import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story behind Main Character Body — helping ambitious men build physiques they're proud of.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <p className="text-gold text-sm font-bold uppercase tracking-[0.2em] mb-4">
            About
          </p>
          <h1 className="font-heading text-4xl md:text-6xl font-bold leading-tight max-w-3xl">
            Getting Lean Is an Identity Problem, Not a Fitness Problem
          </h1>
          <p className="mt-6 text-lg text-text-secondary max-w-xl leading-relaxed">
            I left a finance career in London to help driven men build the body
            that opens doors. No gimmicks. No shortcuts. Just the work — and a
            system that actually delivers.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/images/about-physique.jpg"
                alt="Sugam — Main Character Body"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <h2 className="font-heading text-3xl font-bold mb-6">
                The Story
              </h2>
              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p>
                  I started training at 17. Skinny, zero confidence, no idea
                  what I was doing. I did what most guys do — followed random
                  YouTube programs, tried extreme diets, overtrained, and got
                  nowhere.
                </p>
                <p>
                  I was the classic skinny-fat guy. Slim in a shirt, soft
                  underneath. Nothing worked because nothing was built for
                  someone like me.
                </p>
                <p>
                  So I figured it out myself. Studied everything about body
                  recomposition, muscle growth, fat loss. Applied it. Went from
                  20%+ body fat to under 10% — multiple times. Competed in
                  powerlifting. Placed 2nd in the UK at under-80kg.
                </p>
                <p>
                  Meanwhile, I was building a career in finance in London.
                  Masters from Nottingham. Good salary. The safe path everyone
                  around me was taking.
                </p>
                <p>
                  But I knew I was meant for something bigger. So I left it all
                  — the job, the security, the comfortable life — to go all-in
                  on helping other men transform their bodies and their
                  confidence.
                </p>
                <p className="text-text font-medium">
                  That&apos;s why I built Main Character Body. Because your
                  physique should match your ambition.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <p className="text-gold text-sm font-bold uppercase tracking-[0.2em] mb-4">
            Philosophy
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12">
            What We Believe
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Identity First",
                desc: "We don't just build bodies — we build the identity of someone who carries themselves differently. The physique is a byproduct of who you become.",
              },
              {
                title: "Results Over Theory",
                desc: "What works in real life beats what works on paper. Every recommendation comes from experience and proven results, not trends.",
              },
              {
                title: "Systems Over Willpower",
                desc: "The best program is the one you'll follow for years, not weeks. We build systems that fit your life, not the other way around.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-bg-card border border-border p-8"
              >
                <h3 className="font-heading text-xl font-bold mb-3">
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

      {/* Stats / credibility */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { stat: "20%+ to sub-10%", label: "Body fat transformations" },
              { stat: "2nd Place UK", label: "U80kg Powerlifting" },
              { stat: "3-4x/week", label: "All it takes" },
              { stat: "100+", label: "Men coached" },
            ].map((item) => (
              <div key={item.label}>
                <p className="font-heading text-2xl md:text-3xl font-bold text-gold">
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
      <section className="bg-gradient-to-b from-gold/5 to-transparent">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold">
            Ready to Work Together?
          </h2>
          <p className="mt-4 text-text-secondary max-w-md mx-auto">
            Limited spots available for 1-on-1 coaching. See if it&apos;s the
            right fit.
          </p>
          <Link
            href="/programs"
            className="inline-block mt-8 bg-gold hover:bg-gold-hover text-bg px-10 py-4 text-sm font-bold uppercase tracking-wide transition-colors"
          >
            View Programs
          </Link>
        </div>
      </section>
    </>
  );
}
