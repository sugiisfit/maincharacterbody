import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import type { Metadata } from "next";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  return (
    <article>
      <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
        {/* Back link */}
        <Link
          href="/blog"
          className="text-sm text-text-secondary hover:text-gold transition-colors"
        >
          &larr; Back to all articles
        </Link>

        {/* Header */}
        <header className="mt-8 mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-gold">
              {post.category}
            </span>
            <span className="text-xs text-text-secondary">
              {post.readTime}
            </span>
            <span className="text-xs text-text-secondary">
              {new Date(post.date).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
          </div>
          <h1 className="font-heading text-3xl md:text-5xl font-bold leading-tight">
            {post.title}
          </h1>
          <p className="mt-4 text-lg text-text-secondary leading-relaxed">
            {post.excerpt}
          </p>
        </header>

        {/* Content */}
        <div className="prose prose-invert prose-gold max-w-none">
          {post.content.split("\n").map((line, i) => {
            const trimmed = line.trim();
            if (!trimmed) return null;

            if (trimmed.startsWith("### ")) {
              return (
                <h3
                  key={i}
                  className="font-heading text-xl font-bold mt-10 mb-4"
                >
                  {trimmed.slice(4)}
                </h3>
              );
            }
            if (trimmed.startsWith("## ")) {
              return (
                <h2
                  key={i}
                  className="font-heading text-2xl font-bold mt-12 mb-4"
                >
                  {trimmed.slice(3)}
                </h2>
              );
            }
            if (trimmed.startsWith("- ")) {
              return (
                <li
                  key={i}
                  className="text-text-secondary ml-4 mb-1 list-disc"
                >
                  {trimmed.slice(2)}
                </li>
              );
            }
            if (trimmed.startsWith("**") && trimmed.endsWith("**")) {
              return (
                <p key={i} className="text-text font-semibold my-4">
                  {trimmed.slice(2, -2)}
                </p>
              );
            }

            // Handle inline bold
            const parts = trimmed.split(/(\*\*.*?\*\*)/g);
            return (
              <p key={i} className="text-text-secondary leading-relaxed mb-4">
                {parts.map((part, j) =>
                  part.startsWith("**") && part.endsWith("**") ? (
                    <strong key={j} className="text-text font-semibold">
                      {part.slice(2, -2)}
                    </strong>
                  ) : (
                    <span key={j}>{part}</span>
                  )
                )}
              </p>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 p-8 bg-bg-card border border-border text-center">
          <h3 className="font-heading text-2xl font-bold mb-2">
            Want personalised guidance?
          </h3>
          <p className="text-text-secondary mb-6">
            Get a program built specifically for your body, your schedule, and
            your goals.
          </p>
          <Link
            href="/programs"
            className="inline-block bg-gold hover:bg-gold-hover text-bg px-8 py-3 text-sm font-bold uppercase tracking-wide transition-colors"
          >
            View Programs
          </Link>
        </div>
      </div>
    </article>
  );
}
