"use client";

import { useState } from "react";

export default function YouTubeEmbed({
  videoId,
  title,
}: {
  videoId: string;
  title: string;
}) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <div className="aspect-video w-full">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full border border-border"
        />
      </div>
    );
  }

  return (
    <button
      onClick={() => setPlaying(true)}
      className="relative aspect-video w-full group cursor-pointer border border-border overflow-hidden"
      aria-label={`Play: ${title}`}
    >
      <img
        src={`https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-bg/30 group-hover:bg-bg/10 transition-colors flex items-center justify-center">
        <div className="w-16 h-16 bg-gold/90 rounded-full flex items-center justify-center group-hover:bg-gold transition-colors">
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-7 h-7 text-bg ml-1"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-bg/80 to-transparent">
        <p className="font-heading text-sm font-bold text-text">{title}</p>
      </div>
    </button>
  );
}
