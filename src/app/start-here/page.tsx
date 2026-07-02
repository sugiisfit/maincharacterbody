import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Start Here",
  description:
    "New to Main Character Body? Start here — curated content to help you build a physique you're proud of.",
};

export default function StartHerePage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <p className="text-gold text-sm font-bold uppercase tracking-[0.2em] mb-4">
            Welcome
          </p>
          <h1 className="font-heading text-4xl md:text-6xl font-bold leading-tight max-w-3xl">
            New Here? Start Here.
          </h1>
          <p className="mt-6 text-lg text-text-secondary max-w-xl leading-relaxed">
            I&apos;m Sugam. I help ambitious men build physiques they&apos;re
            proud of — without living in the gym or eating like a robot.
            Here&apos;s the best place to start.
          </p>
        </div>
      </section>

      {/* Choose your path */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <p className="text-gold text-sm font-bold uppercase tracking-[0.2em] mb-4">
            Choose Your Path
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12">
            What Describes You Best?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                number: "01",
                title: "I'm skinny-fat and want to get lean",
                desc: "You look slim in clothes but soft underneath. You've tried programs but nothing stuck. Start here.",
                link: "/blog/skinny-fat-to-lean-complete-guide",
                cta: "Read the guide",
              },
              {
                number: "02",
                title: "I'm busy and need an efficient plan",
                desc: "You work 50+ hours a week and can't spend 2 hours in the gym. Here's how to build muscle in 3 sessions a week.",
                link: "/blog/how-to-build-muscle-on-a-busy-schedule",
                cta: "Read the guide",
              },
              {
                number: "03",
                title: "I want to lose fat and see my face change",
                desc: "You want a sharper jawline, visible abs, and a body that turns heads. Here's the roadmap.",
                link: "/blog/how-i-lost-face-fat-fast",
                cta: "Read the guide",
              },
            ].map((item) => (
              <Link
                key={item.number}
                href={item.link}
                className="group bg-bg-card border border-border p-8 hover:border-gold/40 transition-all block"
              >
                <span className="font-heading text-3xl font-bold text-gold/20">
                  {item.number}
                </span>
                <h3 className="font-heading text-xl font-bold mt-4 mb-3 group-hover:text-gold transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed mb-4">
                  {item.desc}
                </p>
                <span className="text-gold text-sm font-bold uppercase tracking-wide">
                  {item.cta} &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Take the quiz */}
      <section className="border-b border-border bg-bg-card">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28 text-center">
          <p className="text-gold text-sm font-bold uppercase tracking-[0.2em] mb-4">
            Not Sure Where to Start?
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Take the 60-Second Quiz
          </h2>
          <p className="text-text-secondary max-w-lg mx-auto mb-8">
            Find out your body type and get a personalised recommendation for
            your starting point. Free, no obligation.
          </p>
          <Link
            href="/quiz"
            className="inline-block bg-gold hover:bg-gold-hover text-bg px-10 py-4 text-sm font-bold uppercase tracking-wide transition-colors"
          >
            Take The Quiz
          </Link>
        </div>
      </section>

      {/* Watch my best videos */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <p className="text-gold text-sm font-bold uppercase tracking-[0.2em] mb-4">
            Watch
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-10">
            My Best Videos
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="aspect-video">
              <iframe
                src="https://www.youtube.com/embed/VkD-lr1ntNw"
                title="7 Rules to Get 10% Body Fat Without Starving"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border border-border"
              />
            </div>
            <div className="aspect-video">
              <iframe
                src="https://www.youtube.com/embed/CZYKwRtYhUM"
                title="From Skinny to Ripped | How I transformed my Friend"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border border-border"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About me brief */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28 text-center">
          <h2 className="font-heading text-3xl font-bold mb-4">
            About Me
          </h2>
          <p className="text-text-secondary max-w-lg mx-auto leading-relaxed mb-6">
            I left a finance career in London to go all-in on helping men build
            bodies they&apos;re proud of. I&apos;ve gone from 20%+ to sub-10%
            body fat multiple times, placed 2nd in UK powerlifting, and coached
            over 100 men through their transformations.
          </p>
          <Link
            href="/about"
            className="text-gold text-sm font-bold uppercase tracking-wide hover:text-gold-hover transition-colors"
          >
            Read my full story &rarr;
          </Link>
        </div>
      </section>
    </>
  );
}
