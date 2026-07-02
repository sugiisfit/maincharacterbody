import Link from "next/link";
import Image from "next/image";
import BlogCard from "@/components/BlogCard";
import NewsletterSignup from "@/components/NewsletterSignup";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import { getLatestPosts } from "@/lib/posts";

export default function Home() {
  const latestPosts = getLatestPosts(3);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-gym.jpg"
            alt="Training in the gym"
            fill
            className="object-cover object-center opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/90 to-bg/40" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-bg" />
        </div>
        <div className="mx-auto max-w-6xl px-6 py-28 md:py-40 relative">
          <p className="text-gold text-sm font-bold uppercase tracking-[0.2em] mb-4">
            Your Transformation Starts Here
          </p>
          <h1 className="font-heading text-5xl md:text-7xl font-bold leading-[0.95] max-w-3xl">
            Build a Body That
            <br />
            <span className="text-gold">Turns Heads.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-text-secondary max-w-xl leading-relaxed">
            You weren&apos;t meant to blend in. Get the training, nutrition, and
            game plan to build the physique you&apos;ve always wanted — and
            become the main character of your own life.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href="/quiz"
              className="inline-block bg-gold hover:bg-gold-hover text-bg px-8 py-4 text-sm font-bold uppercase tracking-wide text-center transition-colors"
            >
              Take The Free Quiz
            </Link>
            <a
              href="https://youtube.com/@sugiisfit"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-border hover:border-gold/40 text-text px-8 py-4 text-sm font-bold uppercase tracking-wide text-center transition-colors"
            >
              Watch on YouTube
            </a>
          </div>
          <div className="mt-10">
            <NewsletterSignup variant="inline" />
          </div>
        </div>
      </section>

      {/* Social proof bar */}
      <section className="border-t border-b border-border bg-bg-card">
        <div className="mx-auto max-w-6xl px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { stat: "9,000+", label: "YouTube Subscribers" },
              { stat: "7.5M+", label: "Video Views" },
              { stat: "2nd UK", label: "U80kg Powerlifting" },
              { stat: "100+", label: "Men Coached" },
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
      </section>

      {/* Featured videos */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-gold text-sm font-bold uppercase tracking-[0.2em] mb-4">
                Watch &amp; Learn
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold">
                Featured Videos
              </h2>
            </div>
            <a
              href="https://youtube.com/@sugiisfit"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-block text-gold text-sm font-bold uppercase tracking-wide hover:text-gold-hover transition-colors"
            >
              Subscribe on YouTube &rarr;
            </a>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <YouTubeEmbed
              videoId="VkD-lr1ntNw"
              title="7 Rules to Get 10% Body Fat Without Starving"
            />
            <YouTubeEmbed
              videoId="KNvVlu-iwlo"
              title="How I Lost Face Fat... FAST"
            />
            <YouTubeEmbed
              videoId="K67AdzUySBs"
              title="how i stopped obsessing and got shredded"
            />
          </div>
          <a
            href="https://youtube.com/@sugiisfit"
            target="_blank"
            rel="noopener noreferrer"
            className="md:hidden inline-block mt-8 text-gold text-sm font-bold uppercase tracking-wide hover:text-gold-hover transition-colors"
          >
            Subscribe on YouTube &rarr;
          </a>
        </div>
      </section>

      {/* Who is this for */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gold text-sm font-bold uppercase tracking-[0.2em] mb-4">
                Who Is This For
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold leading-tight">
                For the guy who knows he&apos;s capable of more
              </h2>
              <p className="mt-4 text-text-secondary leading-relaxed">
                You&apos;re ambitious. You work hard at everything else in life.
                But your body doesn&apos;t reflect who you really are. You look
                in the mirror and see potential — not results.
              </p>
              <p className="mt-3 text-text-secondary leading-relaxed">
                Main Character Body exists to close that gap. The right training.
                The right nutrition. The right mindset. Everything you need to
                build a physique that matches your ambition.
              </p>
              <Link
                href="/start-here"
                className="inline-block mt-6 text-gold text-sm font-bold uppercase tracking-wide hover:text-gold-hover transition-colors"
              >
                Start here &rarr;
              </Link>
            </div>
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/images/lifestyle-pool.jpg"
                alt="Lean athletic physique"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/60 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Latest articles */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-gold text-sm font-bold uppercase tracking-[0.2em] mb-4">
                Latest Content
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold">
                From the Blog
              </h2>
            </div>
            <Link
              href="/blog"
              className="hidden md:inline-block text-gold text-sm font-bold uppercase tracking-wide hover:text-gold-hover transition-colors"
            >
              View all &rarr;
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {latestPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
          <Link
            href="/blog"
            className="md:hidden inline-block mt-8 text-gold text-sm font-bold uppercase tracking-wide hover:text-gold-hover transition-colors"
          >
            View all content &rarr;
          </Link>
        </div>
      </section>

      {/* CTA section */}
      <section className="relative border-t border-border overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/lifestyle-night.jpg"
            alt=""
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-bg/80 via-bg/90 to-bg" />
        </div>
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28 text-center relative">
          <h2 className="font-heading text-3xl md:text-5xl font-bold max-w-2xl mx-auto leading-tight">
            Ready to Build a Body You&apos;re Actually Proud Of?
          </h2>
          <p className="mt-4 text-text-secondary text-lg max-w-lg mx-auto mb-10">
            Join the newsletter for weekly training, nutrition, and mindset
            insights — or take the quiz to find your starting point.
          </p>
          <NewsletterSignup variant="hero" />
        </div>
      </section>
    </>
  );
}
