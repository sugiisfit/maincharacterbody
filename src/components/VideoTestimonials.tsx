"use client";

import { useRef, useCallback, useEffect, useState } from "react";

const TESTIMONIALS = [
  { name: "Prince", label: "Muscle Up", video: "/videos/testimonial-1.mp4" },
  { name: "Coaching", label: "Handstand", video: "/videos/testimonial-2.mp4" },
  { name: "Dimas", label: "Muscle Up", video: "/videos/testimonial-3.mp4" },
  { name: "Sulav", label: "Bodybuilder x Calisthenics", video: "/videos/testimonial-4.mp4" },
  { name: "Anmol", label: "90 to 125kg Bench", video: "/videos/testimonial-5.mp4" },
  { name: "Min", label: "First Calisthenics Session", video: "/videos/testimonial-6.mp4" },
];

export default function VideoTestimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [playingIdx, setPlayingIdx] = useState<number | null>(null);

  const shouldScroll = TESTIMONIALS.length >= 4;

  const handlePlay = useCallback((idx: number) => {
    videoRefs.current.forEach((v, i) => {
      if (v && i !== idx) {
        v.pause();
        v.currentTime = 0;
      }
    });

    const video = videoRefs.current[idx];
    if (!video) return;

    if (playingIdx === idx) {
      video.pause();
      setPlayingIdx(null);
    } else {
      video.play();
      setPlayingIdx(idx);
    }
  }, [playingIdx]);

  useEffect(() => {
    const handlers: (() => void)[] = [];
    videoRefs.current.forEach((v, i) => {
      if (!v) return;
      const handler = () => setPlayingIdx((prev) => (prev === i ? null : prev));
      v.addEventListener("ended", handler);
      handlers.push(() => v.removeEventListener("ended", handler));
    });
    return () => handlers.forEach((h) => h());
  }, []);

  // For scrolling mode, duplicate items so the loop looks seamless
  const items = shouldScroll ? [...TESTIMONIALS, ...TESTIMONIALS] : TESTIMONIALS;

  return (
    <section className="s-video-testimonials">
      <div className="s-video-testimonials__header">
        <p className="section-label">Hear It From Them</p>
        <h2 className="section-title">Client Testimonials</h2>
      </div>

      <div className="s-vt-track-wrap">
        <div
          className={`s-vt-track ${shouldScroll ? "s-vt-track--scrolling" : "s-vt-track--static"}`}
          ref={trackRef}
        >
          {items.map((t, i) => (
            <div key={i} className="s-vt-card">
              <div className="s-vt-video-wrap">
                {t.video ? (
                  <>
                    <video
                      ref={(el) => { videoRefs.current[i] = el; }}
                      src={t.video}
                      muted={false}
                      playsInline
                      preload="metadata"
                      className="s-vt-video"
                    />
                    <button
                      className={`s-vt-play-btn ${playingIdx === i ? "s-vt-playing" : ""}`}
                      onClick={() => handlePlay(i)}
                      aria-label={playingIdx === i ? "Pause" : "Play"}
                    >
                      {playingIdx === i ? "\u275A\u275A" : "\u25B6"}
                    </button>
                  </>
                ) : (
                  <div className="s-vt-placeholder">
                    <span>+</span>
                  </div>
                )}
              </div>
              <div className="s-vt-info">
                <span className="s-vt-name">{t.name}</span>
                <span className="s-vt-label">{t.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
