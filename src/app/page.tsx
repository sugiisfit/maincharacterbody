import Link from "next/link";
import Image from "next/image";
import BlogCard from "@/components/BlogCard";
import NewsletterSignup from "@/components/NewsletterSignup";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import { getLatestPosts } from "@/lib/posts";

const HERO_TRANSFORMATIONS = [
  {
    src: "/images/transformations/ba-1.png",
    alt: "Body recomposition,Software Engineer, 26",
  },
  {
    src: "/images/transformations/ba-2.png",
    alt: "Fat loss transformation,Physics Graduate, 24",
  },
  {
    src: "/images/transformations/ba-3.png",
    alt: "Muscle gain,Medical Student, 19",
  },
  {
    src: "/images/transformations/ba-4.png",
    alt: "Lean muscle gain,Tech Professional, 26",
  },
];

const SHOWCASE_TRANSFORMATIONS = [
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
    alt: "15kg muscle gain",
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
    alt: "10kg muscle gain",
    caption: "23, Hotel Manager",
  },
];

export default function Home() {
  const latestPosts = getLatestPosts(3);

  return (
    <>
      {/* Hero,proof-first */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gold/[0.04] via-transparent to-transparent" />
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-32 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gold text-sm font-bold uppercase tracking-[0.2em] mb-4">
                Training &middot; Nutrition &middot; Mindset
              </p>
              <h1 className="font-heading text-4xl md:text-6xl font-bold leading-[0.95]">
                Build Your
                <br />
                <span className="text-gold">Main Character Body.</span>
              </h1>
              <p className="mt-6 text-lg text-text-secondary max-w-lg leading-relaxed">
                You&apos;re not lazy. You&apos;ve just been following the wrong
                plan. This is the training and nutrition system built for your
                body type. By someone who had the same one.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/quiz"
                  className="inline-block bg-gold hover:bg-gold-hover text-bg px-8 py-4 text-sm font-bold uppercase tracking-wide text-center transition-colors"
                >
                  Take The Free Quiz
                </Link>
                <Link
                  href="/transformations"
                  className="inline-block border border-border hover:border-gold/40 text-text px-8 py-4 text-sm font-bold uppercase tracking-wide text-center transition-colors"
                >
                  See The Proof
                </Link>
              </div>
            </div>

            {/* Transformation proof grid */}
            <div className="grid grid-cols-2 gap-3">
              {HERO_TRANSFORMATIONS.map((img) => (
                <div
                  key={img.src}
                  className="relative aspect-[3/4] border border-border/50 overflow-hidden group"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg/40 to-transparent" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social proof bar */}
      <section className="border-t border-b border-border bg-bg-card">
        <div className="mx-auto max-w-6xl px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { stat: "100+", label: "Men Transformed" },
              { stat: "9,000+", label: "YouTube Subscribers" },
              { stat: "7.5M+", label: "Video Views" },
              { stat: "2nd UK", label: "U80kg Weighted Calisthenics" },
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

      {/* Transformations showcase */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="text-center mb-12">
            <p className="text-gold text-sm font-bold uppercase tracking-[0.2em] mb-4">
              Real People. Real Results.
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold">
              Transformations That Speak for Themselves
            </h2>
            <p className="mt-4 text-text-secondary max-w-xl mx-auto">
              Busy professionals with real schedules. No crash diets, no 2-hour
              sessions. Just the right system, applied consistently.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SHOWCASE_TRANSFORMATIONS.map((img) => (
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
          <div className="text-center mt-10">
            <Link
              href="/transformations"
              className="text-gold text-sm font-bold uppercase tracking-wide hover:text-gold-hover transition-colors"
            >
              See all transformations &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Gold divider */}
      <div className="divider-gold" />

      {/* Featured long-form videos */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-gold text-sm font-bold uppercase tracking-[0.2em] mb-4">
                Watch &amp; Learn
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold">
                Start With These
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
              videoId="vxcajWtOues"
              title="If I Wanted to Fix Skinny Fat FAST, This Is What I'd Do"
            />
            <YouTubeEmbed
              videoId="KJM0_XWCe30"
              title="The Bulk vs Cut Mistake That's Keeping You Skinny Fat"
            />
            <YouTubeEmbed
              videoId="VkD-lr1ntNw"
              title="7 Rules to Get 10% Body Fat Without Starving"
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

      {/* Who is this for,painfully specific */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gold text-sm font-bold uppercase tracking-[0.2em] mb-4">
                Is This You?
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold leading-tight">
                You look fine in a shirt.
                <br />
                But you hate taking it off.
              </h2>
              <div className="mt-6 space-y-4 text-text-secondary leading-relaxed">
                <p>
                  You&apos;ve tried bulking. Got softer. Tried cutting.
                  Just got smaller. You&apos;ve done the YouTube
                  programmes, tracked macros for 2 weeks, and nothing stuck past
                  month one.
                </p>
                <p>
                  You&apos;re not undisciplined. You&apos;re smart, ambitious,
                  and successful in every other area of life. Your body is the
                  one thing that hasn&apos;t caught up yet.
                </p>
                <p className="text-text font-medium">
                  That&apos;s exactly who this is for.
                </p>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 items-start">
                <Link
                  href="/quiz"
                  className="inline-block bg-gold hover:bg-gold-hover text-bg px-8 py-4 text-sm font-bold uppercase tracking-wide text-center transition-colors"
                >
                  Find Your Body Type
                </Link>
                <Link
                  href="/start-here"
                  className="inline-block text-gold text-sm font-bold uppercase tracking-wide hover:text-gold-hover transition-colors py-4"
                >
                  Start here &rarr;
                </Link>
              </div>
            </div>
            <div className="relative aspect-[3/4] overflow-hidden border border-border/50">
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
                Latest Articles
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
            View all articles &rarr;
          </Link>
        </div>
      </section>

      {/* Final CTA */}
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
            Become the Main Character.
          </h2>
          <p className="mt-4 text-text-secondary text-lg max-w-lg mx-auto mb-10">
            Join thousands of men building their main character body. Weekly
            training, nutrition, and mindset insights. All free.
          </p>
          <NewsletterSignup variant="hero" />
        </div>
      </section>
    </>
  );
}
