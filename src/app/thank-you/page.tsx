import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Welcome — Your Blueprint",
  description: "Your Hybrid Athlete Blueprint is ready.",
  robots: { index: false, follow: false },
};

// DOWNLOAD_URL = the designed Blueprint PDF (still needed — host it, then set here).
// SKOOL_URL    = the private community (demos + community).
const DOWNLOAD_URL = "#";
const SKOOL_URL = "https://www.skool.com/active-achievers-7834";

export default function ThankYouPage() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gold/5 to-transparent" />
      <div className="mx-auto max-w-3xl px-6 py-24 md:py-32 relative text-center">
        <p className="text-gold text-sm font-bold uppercase tracking-[0.2em] mb-4">
          Payment Received
        </p>
        <h1 className="font-heading text-4xl md:text-6xl font-bold leading-tight">
          Welcome to Main Character Body.
        </h1>
        <p className="mt-6 text-lg text-text-secondary max-w-xl mx-auto leading-relaxed">
          You just did the thing 95% of people never do — you committed. Here&apos;s
          everything you need to start today.
        </p>

        {/* Steps */}
        <div className="mt-12 space-y-4 text-left">
          {[
            {
              n: "01",
              title: "Download your Blueprint",
              desc: "The full 12-week Hybrid Athlete Blueprint — ebook, worksheets and training logbook. Save it to your phone.",
              cta: { label: "Download the Blueprint", href: DOWNLOAD_URL },
            },
            {
              n: "02",
              title: "Join the community",
              desc: "Your exercise demos and the private community live here. Post your first workout and your before photo.",
              cta: { label: "Join the community", href: SKOOL_URL },
            },
            {
              n: "03",
              title: "Start with Module 1",
              desc: "Do not skip it. Read 'Become the Guy' and fill in the identity worksheet before you touch a weight. The body is downstream of that page.",
              cta: null,
            },
          ].map((item) => (
            <div
              key={item.n}
              className="bg-bg-card border border-border p-8 flex flex-col md:flex-row md:items-center gap-6"
            >
              <p className="font-heading text-gold text-3xl font-bold shrink-0">
                {item.n}
              </p>
              <div className="flex-1">
                <h2 className="font-heading text-xl font-bold mb-1">
                  {item.title}
                </h2>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {item.desc}
                </p>
              </div>
              {item.cta && (
                <a
                  href={item.cta.href}
                  className="inline-block bg-gold hover:bg-gold-hover text-bg px-6 py-3 text-sm font-bold uppercase tracking-wide transition-colors shrink-0 text-center"
                >
                  {item.cta.label}
                </a>
              )}
            </div>
          ))}
        </div>

        <p className="mt-12 text-sm text-text-secondary">
          Didn&apos;t get access, or need help? Email{" "}
          <a href="mailto:sugiisfit@gmail.com" className="text-gold hover:underline">
            sugiisfit@gmail.com
          </a>
          .
        </p>
      </div>
    </section>
  );
}
