import type { Metadata } from "next";
import Image from "next/image";
import Script from "next/script";
import WistiaEmbed from "@/components/WistiaEmbed";
import "./sugii.css";

export const metadata: Metadata = {
  title: "Sugii Coaching | The L.E.A.N. Lifestyle System",
  description:
    "Online coaching for men who are done looking the same. Drop the fat, build real muscle, and keep your lifestyle with Sugii's L.E.A.N. Lifestyle System.",
};

const CALENDLY = "https://calendly.com/sugiisfit/qualificationcall";

export default function VipCoachingPage() {
  return (
    <div className="sugii-lp">
      {/* Google Fonts for Bebas Neue + Montserrat */}
      <link
        href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:wght@700&display=swap"
        rel="stylesheet"
      />

      {/* ── HERO ── */}
      <section className="s-hero">
        <div className="s-hero__headline">
          Drop The Fat &nbsp;&middot;&nbsp; Build The Muscle &nbsp;&middot;&nbsp;{" "}
          <em>Keep Your Lifestyle</em>
        </div>

        <p className="s-hero__subheadline">
          The coaching system for men who are done looking the same after years
          of trying.
        </p>

        <div>
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Apply Now
          </a>
        </div>
      </section>

      {/* ── RESULTS / TRANSFORMATIONS ── */}
      <section className="s-results">
        <div className="s-results__header">
          <p className="section-label">Real People. Real Results.</p>
          <h2 className="section-title">Real Men. Real Lives. Real Results.</h2>
          <p className="section-sub">
            Busy professionals. Real schedules. No crash diets, no 2-hour
            sessions. Just the system, applied consistently.
          </p>
        </div>

        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div className="s-ba-grid">
            {[
              { src: "/images/transformations/ba-1.png", alt: "77.5kg to 76.1kg body recomposition", caption: "26, Software Engineer" },
              { src: "/images/transformations/ba-2.png", alt: "71kg to 69kg transformation", caption: "24, Physics Graduate" },
              { src: "/images/transformations/ba-3.png", alt: "50kg to 65kg, 15kg muscle gain", caption: "19, Medical Student" },
              { src: "/images/transformations/ba-4.png", alt: "55kg to 60kg, 5kg lean muscle gain", caption: "26, Tech Professional" },
              { src: "/images/transformations/ba-5.png", alt: "85kg to 77kg, 7kg fat loss", caption: "27, Physiologist" },
              { src: "/images/transformations/ba-6.jpg", alt: "50kg to 60kg, 10kg muscle gain", caption: "23, Hotel Manager" },
            ].map((img) => (
              <div key={img.src} className="s-ba-card" style={{ borderRadius: 10, overflow: "hidden", border: "1px solid rgba(255,255,255,.06)", background: "#111" }}>
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  decoding="async"
                  style={{ width: "100%", display: "block", objectFit: "cover", aspectRatio: "4/5" }}
                />
                <div className="s-ba-caption" style={{ padding: "12px 16px", fontSize: 11, fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase" as const, color: "#555", textAlign: "center" as const, borderTop: "1px solid rgba(255,255,255,.06)" }}>{img.caption}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Named Case Studies */}
        <div className="s-named-header">
          <p className="section-label">Named Case Studies</p>
          <h2 className="section-title" style={{ fontSize: "clamp(24px, 4vw, 40px)" }}>
            Specific People. Specific Numbers.
          </h2>
        </div>

        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div className="s-named-grid">
            {[
              {
                name: "Subit",
                type: "Fat Loss",
                result: "80kg \u2192 75kg",
                detail:
                  "\u201CI\u2019ve always been active, but my efforts never translated into the results I wanted. Sugam helped me understand my relationship with food, the power of consistency, and why keeping things simple is the real secret. I\u2019ve lost 5kg, my energy is more stable than ever, and I finally feel confident and happy in my own body.\u201D",
                badge: "\u20135 KG \u00B7 Fat Loss",
              },
              {
                name: "Michael",
                type: "Lean Bulk",
                result: "70kg \u2192 76kg",
                detail:
                  "\u201CAs a busy banker, time is everything. In 6 months with Sugam, I gained 6kg of muscle and unlocked the muscle-up I\u2019d been chasing for years. He simplifies everything, keeps you accountable, and delivers real results. I\u2019m stronger, more energetic, and more confident than ever.\u201D",
                badge: "+6 KG Muscle \u00B7 Bulk",
              },
              {
                name: "Jordan",
                type: "Fat Loss",
                result: "80kg \u2192 75kg",
                detail:
                  "\u201CI\u2019d tried everything before finding Sugam, but nothing ever stuck. Within a few months I dropped 5kg and finally started seeing the physique I\u2019d always worked toward. No gimmicks, no overwhelm. Just a clear, sustainable approach that fits into real life.\u201D",
                badge: "\u20135 KG \u00B7 Fat Loss",
              },
            ].map((cs) => (
              <div key={cs.name} className="s-named-card">
                <span className="s-nc-name">
                  {cs.name} &middot; {cs.type}
                </span>
                <span className="s-nc-result">{cs.result}</span>
                <p className="s-nc-detail">{cs.detail}</p>
                <span className="s-nc-meta">
                  <span className="s-dot">&#9679;</span> {cs.badge}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VSL ── */}
      <section className="s-hero" style={{ paddingTop: 0 }}>
        <p className="s-hero__sub" style={{ marginBottom: 6 }}>
          Most guys think they need to train harder.
          <br />
          That&apos;s exactly what makes it worse.
        </p>

        <p className="s-hero__sub" style={{ marginBottom: 6 }}>
          You don&apos;t need another 6-day split.
          <br />
          You don&apos;t need to live on chicken and rice.
          <br />
          You don&apos;t need the gym to become your whole personality.
        </p>

        <p className="s-hero__sub" style={{ marginBottom: 6 }}>
          You need the right stimulus, the right food, 3&ndash;4 sessions a
          week.
        </p>

        <p className="s-hero__sub" style={{ marginBottom: 14 }}>
          That&apos;s the whole game. Here&apos;s how it works &darr;
        </p>

        <div style={{ maxWidth: 820, margin: "0 auto 40px", borderRadius: 10, border: "1px solid rgba(201,168,76,.32)", boxShadow: "0 0 50px rgba(201,168,76,.22), 0 0 100px rgba(201,168,76,.10)", overflow: "hidden" }}>
          <WistiaEmbed videoId="58aaq2p491" />
        </div>

        <p className="s-hero__program">
          The L.E.A.N. Lifestyle System &nbsp;&middot;&nbsp; by Sugii
        </p>

        <div>
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Book Your Free Strategy Call
          </a>
        </div>
      </section>


      {/* ── SOUND FAMILIAR ── */}
      <section className="s-familiar">
        <div className="s-familiar__inner">
          <p className="section-label">Be honest with yourself</p>
          <h2 className="section-title">Sound Familiar?</h2>

          <ul className="s-familiar__list">
            {[
              "You\u2019ve been going to the gym for months, maybe years, and still look the same shirtless.",
              "You\u2019re stuck in the \u201Cshould I bulk or cut?\u201D loop and nothing feels right.",
              "You look decent in a t-shirt but avoid pool parties, beaches, and any situation where the shirt has to come off.",
              "You\u2019ve tried YouTube programmes, MyFitnessPal, Reddit routines. None of them stuck past week 3.",
              "You\u2019re not lazy. You\u2019re not undisciplined. You just don\u2019t have a system that actually works for your body and your life.",
              "You\u2019re watching guys with your exact starting point get results... and wondering what they know that you don\u2019t.",
            ].map((item) => (
              <li key={item} className="s-familiar__item">
                <span className="s-dot">&#9679;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <p className="s-familiar__bottom">
            If that&apos;s you, you&apos;re not broken. You&apos;ve just been
            doing it alone.
            <br />
            <strong>And that&apos;s the one thing that doesn&apos;t work.</strong>
          </p>
        </div>
      </section>

      {/* ── STEP 1: CALENDLY ── */}
      <section className="s-step-wrap" id="book">
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <div className="s-step-tag">
            <div className="s-step-num">1</div>
            <span className="s-step-title-text">Book In A Call With Sugii</span>
          </div>
          <div className="s-calendly-box">
            <div
              className="calendly-inline-widget"
              data-url={`${CALENDLY}?hide_landing_page_details=1&hide_gdpr_banner=1&background_color=111111&text_color=f5f5f5&primary_color=C9A84C`}
              style={{ minWidth: 320, height: 700 }}
            />
          </div>
        </div>
      </section>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
      />

      {/* ── WHAT YOU GET ON THE CALL ── */}
      <section className="s-what-section">
        <div className="s-what-header">
          <p className="section-label">On This Free Strategy Call</p>
          <h2 className="section-title">
            What You&apos;re Gonna Get
            <br />
            In 30 Minutes With Sugii
          </h2>
          <p className="section-sub">
            No pitch decks. No pressure. Just a clear picture of exactly where
            you are, where you want to be, and the fastest honest path between
            them.
          </p>
        </div>

        <div className="s-deliverables">
          <div className="s-deliv-card">
            <h3>Your Personalised Audit</h3>
            <p>
              Sugii will break down your current routine, habits, and lifestyle
              to pinpoint the exact bottleneck that&apos;s been blocking your
              results, even if you&apos;ve tried everything before.
            </p>
          </div>
          <div className="s-deliv-card">
            <h3>The L.E.A.N. System Walkthrough</h3>
            <p>
              Get a full breakdown of the exact system Sugii used to win a UK
              Championship while managing work, travel, and a social life, and
              how it&apos;s transformed 100+ clients.
            </p>
          </div>
          <div className="s-deliv-card">
            <h3>Your Step-by-Step Roadmap</h3>
            <p>
              Leave with a personalised, actionable plan. Not generic motivation.
              You&apos;ll know exactly what to do from day one so results start
              showing immediately.
            </p>
          </div>
        </div>
      </section>

      {/* Mid-page CTA */}
      <div className="s-mid-cta">
        <a
          href={CALENDLY}
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          I&apos;m Ready. Book My Free Call.
        </a>
      </div>

      {/* ── AUTHORITY / ABOUT SUGII ── */}
      <section className="s-authority">
        <div className="s-authority__inner">
          <div className="s-authority__photo" style={{ aspectRatio: "1/1", borderRadius: 10, overflow: "hidden", border: "1px solid rgba(201,168,76,.22)" }}>
            <Image
              src="/images/transformations/coach-photo.png"
              alt="Sugii, UK Weighted Calisthenics Champion"
              width={600}
              height={600}
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 15%" }}
            />
          </div>

          <div className="s-authority__content">
            <div className="s-auth-badge">
              UK Weighted Calisthenics Champion &middot; u80kg &middot; 2022
            </div>

            <h2>
              Meet Your Coach,
              <br />
              <span className="s-gold">Sugam &ldquo;Sugii&rdquo; Roka</span>
            </h2>

            <p>
              I&apos;ve been where you are. Packed calendar, long hours, constant
              travel, still trying to build a physique worth showing off. As
              someone who worked in finance and competed in calisthenics
              nationally, I built the L.E.A.N. Lifestyle System out of
              necessity, because generic &ldquo;eat less, move more&rdquo;
              advice simply doesn&apos;t work for high performers.
            </p>

            <p>
              Since then I&apos;ve helped over 100 busy professionals drop fat,
              build real muscle, and genuinely enjoy the process. Without
              sacrificing their career, their social life, or their sanity. Now I
              want to do the same for you.
            </p>

            <div className="s-stats-row">
              <div className="s-stat-box">
                <span className="s-stat-num">100+</span>
                <span className="s-stat-lbl">Clients Transformed</span>
              </div>
              <div className="s-stat-box">
                <span className="s-stat-num">1st</span>
                <span className="s-stat-lbl">UK Champion 2022</span>
              </div>
              <div className="s-stat-box">
                <span className="s-stat-num">6+</span>
                <span className="s-stat-lbl">Years Coaching</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="s-faq">
        <div className="s-faq__header">
          <p className="section-label">Got Questions?</p>
          <h2 className="section-title">
            Questions You&apos;re Probably
            <br />
            Asking Yourself Right Now
          </h2>
        </div>

        <div className="s-faq__grid">
          {[
            {
              q: "\u201CI\u2019ve tried coaching before and it didn\u2019t work.\u201D",
              a: "Most cookie-cutter coaches hand you a PDF and disappear. This is 1-on-1. I build your plan around your schedule, your food preferences, and your body. And I check in weekly to adjust it. If something\u2019s not working, we fix it. Not next month, that week.",
            },
            {
              q: "\u201CI travel a lot / my schedule is unpredictable.\u201D",
              a: "Half my clients are remote workers or frequent travellers. The system is built to flex. Hotel gyms, eating out, jet lag. We plan for all of it. Consistency doesn\u2019t mean perfection, it means having a framework that adapts.",
            },
            {
              q: "\u201CHow is this different from what I can find on YouTube for free?\u201D",
              a: "Information isn\u2019t your problem. You\u2019ve watched the videos. You know about progressive overload and protein targets. What you don\u2019t have is someone who sees YOUR data every week, catches the mistakes you can\u2019t see yourself, and keeps you moving when motivation drops. That\u2019s the difference.",
            },
            {
              q: "\u201CHow long until I see results?\u201D",
              a: "Most clients see noticeable changes in 4\u20136 weeks. Clothes fit differently, energy is up, lifts are progressing. Visible body composition shifts usually hit around 8\u201312 weeks. But this isn\u2019t a 12-week crash diet. It\u2019s a system you keep.",
            },
            {
              q: "\u201CWhat does it actually cost?\u201D",
              a: "Coaching starts from \u00A3450/month ($600/month). The strategy call is free with zero obligation. We\u2019ll figure out if it\u2019s the right fit before anything else.",
            },
          ].map((item) => (
            <div key={item.q} className="s-faq__item">
              <p className="s-faq__q">{item.q}</p>
              <p className="s-faq__a">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="s-final-cta">
        <div style={{ maxWidth: 960, margin: "0 auto", position: "relative" }}>
          <p className="section-label" style={{ marginBottom: 18 }}>
            Your Move
          </p>
          <h2>
            You&apos;ve Read This Far
            <br />
            <em className="s-gold">For A Reason.</em>
          </h2>
          <p>
            Something isn&apos;t working. And you know it. You&apos;re not here
            because you&apos;re lazy. You&apos;re here because you&apos;ve been
            doing this alone for too long. Book a free 30-minute call. No pitch
            deck. No pressure. Just an honest conversation about where you are,
            where you want to be, and whether I can help you get there.
          </p>
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Book My Free Strategy Call
          </a>
          <p className="s-guarantee">No commitment. No BS. Just clarity.</p>
        </div>
      </section>
    </div>
  );
}
