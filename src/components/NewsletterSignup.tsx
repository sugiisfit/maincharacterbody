"use client";

import { useState } from "react";

export default function NewsletterSignup({
  variant = "inline",
}: {
  variant?: "inline" | "hero";
}) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className={variant === "hero" ? "text-center" : ""}>
        <p className="text-gold font-heading text-xl font-bold">
          You&apos;re in.
        </p>
        <p className="text-text-secondary text-sm mt-1">
          Check your inbox for your first email.
        </p>
      </div>
    );
  }

  return (
    <div className={variant === "hero" ? "text-center" : ""}>
      <p
        className={`font-heading font-bold ${variant === "hero" ? "text-2xl md:text-3xl mb-2" : "text-lg mb-1"}`}
      >
        Join 9,000+ Men Building Their Main Character Body
      </p>
      <p className="text-text-secondary text-sm mb-4">
        Weekly insights on training, nutrition, and building a physique that
        matches your ambition. No spam.
      </p>
      <form
        onSubmit={handleSubmit}
        className={`flex gap-2 ${variant === "hero" ? "max-w-md mx-auto" : "max-w-md"} flex-col sm:flex-row`}
      >
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
          className="flex-1 bg-bg-card border border-border px-4 py-3 text-sm text-text placeholder:text-text-secondary focus:outline-none focus:border-gold/40"
        />
        <button
          type="submit"
          className="bg-gold hover:bg-gold-hover text-bg px-6 py-3 text-sm font-bold uppercase tracking-wide transition-colors shrink-0"
        >
          Join Free
        </button>
      </form>
    </div>
  );
}
