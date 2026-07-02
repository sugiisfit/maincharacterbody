import type { Metadata } from "next";
import QuizClient from "@/components/QuizClient";

export const metadata: Metadata = {
  title: "What's Your Body Type? — Free Quiz",
  description:
    "Take the free 60-second quiz to discover your body type and get a personalised plan to build your main character body.",
};

export default function QuizPage() {
  return <QuizClient />;
}
