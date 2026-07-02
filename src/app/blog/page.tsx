import type { Metadata } from "next";
import BlogCard from "@/components/BlogCard";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Content",
  description:
    "Articles and videos on training, nutrition, fat loss, and building a physique you're proud of.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <section>
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <p className="text-gold text-sm font-bold uppercase tracking-[0.2em] mb-4">
          Content
        </p>
        <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4">
          Articles &amp; Videos
        </h1>
        <p className="text-text-secondary text-lg max-w-xl mb-12">
          No fluff, no clickbait. Training, nutrition, and mindset content for
          men who want real results.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
