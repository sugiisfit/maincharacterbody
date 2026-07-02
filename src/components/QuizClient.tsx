"use client";

import { useState } from "react";
import Link from "next/link";

const questions = [
  {
    question: "What best describes your current body?",
    options: [
      { label: "Slim in clothes but soft underneath", value: "skinny-fat" },
      { label: "Carrying extra weight, especially around the midsection", value: "overweight" },
      { label: "Thin and lean but lacking muscle mass", value: "skinny" },
      { label: "Muscular but carrying more fat than I'd like", value: "bulky" },
    ],
  },
  {
    question: "How much gym experience do you have?",
    options: [
      { label: "None / less than 3 months", value: "none" },
      { label: "3-12 months (on and off)", value: "beginner" },
      { label: "1-3 years", value: "intermediate" },
      { label: "3+ years", value: "advanced" },
    ],
  },
  {
    question: "What's your biggest frustration with your body?",
    options: [
      { label: "I look okay in clothes but terrible shirtless", value: "shirtless" },
      { label: "I've tried programs but nothing sticks", value: "consistency" },
      { label: "I don't have time for the gym", value: "time" },
      { label: "I don't know what to eat", value: "nutrition" },
    ],
  },
  {
    question: "How much time can you commit to training per week?",
    options: [
      { label: "2-3 hours (3 sessions)", value: "3x" },
      { label: "3-5 hours (4-5 sessions)", value: "4-5x" },
      { label: "5+ hours", value: "5+" },
      { label: "Less than 2 hours", value: "<2" },
    ],
  },
  {
    question: "What's your #1 goal right now?",
    options: [
      { label: "Lose fat and get lean", value: "cut" },
      { label: "Build muscle and size", value: "bulk" },
      { label: "Both — lose fat AND build muscle", value: "recomp" },
      { label: "Look better and feel confident", value: "confidence" },
    ],
  },
];

const results: Record<string, { type: string; title: string; description: string }> = {
  "skinny-fat": {
    type: "Type 2: True Skinny-Fat",
    title: "Body Recomposition is Your Path",
    description:
      "You're likely 18-22% body fat with low muscle mass. The good news? You're in the perfect position for body recomposition — losing fat and building muscle simultaneously. This is where the biggest visual transformations happen.",
  },
  overweight: {
    type: "Type 3: Cut First",
    title: "A Strategic Cut Will Transform You",
    description:
      "You're carrying extra body fat that's hiding your frame. Your priority is a structured caloric deficit with high protein and resistance training to preserve muscle while the fat comes off. Most guys in your position see dramatic face and body changes within 12 weeks.",
  },
  skinny: {
    type: "Type 1: Lean Bulk",
    title: "Time to Build Your Foundation",
    description:
      "You're lean but undermuscled. Your path is a controlled lean bulk with progressive overload — eating in a slight surplus while training hard. You'll gain muscle faster than anyone else because you're starting from scratch. Expect noticeable changes in 8-12 weeks.",
  },
  bulky: {
    type: "Type 2+: Strategic Cut",
    title: "Reveal What You've Already Built",
    description:
      "You have a solid muscle base — now it's about revealing it. A strategic deficit with high protein will strip the fat while preserving the muscle underneath. Your jawline, arms, and shoulders will pop within weeks.",
  },
};

export default function QuizClient() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [email, setEmail] = useState("");
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (value: string) => {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);
    setStep(step + 1);
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setShowResults(true);
  };

  const bodyType = answers[0] || "skinny-fat";
  const result = results[bodyType];

  // Results screen
  if (showResults && result) {
    return (
      <div className="mx-auto max-w-2xl px-6 py-20 md:py-28">
        <div className="text-center mb-10">
          <p className="text-gold text-sm font-bold uppercase tracking-[0.2em] mb-4">
            Your Result
          </p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold">
            {result.type}
          </h1>
        </div>
        <div className="bg-bg-card border border-border p-8 mb-8">
          <h2 className="font-heading text-2xl font-bold mb-4 text-gold">
            {result.title}
          </h2>
          <p className="text-text-secondary leading-relaxed">
            {result.description}
          </p>
        </div>
        <div className="text-center space-y-4">
          <p className="text-text font-medium">
            Want a personalised plan for your body type?
          </p>
          <Link
            href="/programs"
            className="inline-block bg-gold hover:bg-gold-hover text-bg px-8 py-4 text-sm font-bold uppercase tracking-wide transition-colors"
          >
            Apply for 1-to-1 Coaching
          </Link>
          <p className="text-text-secondary text-sm">
            Or explore the{" "}
            <Link href="/blog" className="text-gold hover:text-gold-hover">
              free content
            </Link>{" "}
            to start learning.
          </p>
        </div>
      </div>
    );
  }

  // Email capture screen
  if (step >= questions.length) {
    return (
      <div className="mx-auto max-w-xl px-6 py-20 md:py-28 text-center">
        <p className="text-gold text-sm font-bold uppercase tracking-[0.2em] mb-4">
          Step {questions.length + 1} of {questions.length + 1}
        </p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
          Your Results Are Ready
        </h2>
        <p className="text-text-secondary mb-8">
          Enter your email to see your personalised Skinny-Fat Type and
          recommended plan.
        </p>
        <form onSubmit={handleEmailSubmit} className="max-w-sm mx-auto">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
            className="w-full bg-bg-card border border-border px-4 py-3 text-sm text-text placeholder:text-text-secondary focus:outline-none focus:border-gold/40 mb-4"
          />
          <button
            type="submit"
            className="w-full bg-gold hover:bg-gold-hover text-bg px-6 py-4 text-sm font-bold uppercase tracking-wide transition-colors"
          >
            See My Results
          </button>
          <p className="text-xs text-text-secondary mt-3">
            No spam. Unsubscribe anytime.
          </p>
        </form>
      </div>
    );
  }

  // Question screen
  const q = questions[step];

  return (
    <div className="mx-auto max-w-2xl px-6 py-20 md:py-28">
      {/* Progress bar */}
      <div className="mb-10">
        <div className="flex justify-between text-xs text-text-secondary mb-2">
          <span>
            Question {step + 1} of {questions.length}
          </span>
          <span>{Math.round(((step + 1) / questions.length) * 100)}%</span>
        </div>
        <div className="h-1 bg-border">
          <div
            className="h-1 bg-gold transition-all duration-300"
            style={{
              width: `${((step + 1) / questions.length) * 100}%`,
            }}
          />
        </div>
      </div>

      <h2 className="font-heading text-2xl md:text-3xl font-bold mb-8">
        {q.question}
      </h2>

      <div className="space-y-3">
        {q.options.map((option) => (
          <button
            key={option.value}
            onClick={() => handleAnswer(option.value)}
            className="w-full text-left bg-bg-card border border-border p-5 hover:border-gold/40 hover:bg-bg-card-hover transition-all group cursor-pointer"
          >
            <span className="text-text group-hover:text-gold transition-colors">
              {option.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
