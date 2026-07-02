import Link from "next/link";
import type { BlogPost } from "@/lib/posts";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article className="bg-bg-card border border-border p-6 h-full transition-all group-hover:border-gold/40 group-hover:bg-bg-card-hover">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-bold uppercase tracking-wider text-gold">
            {post.category}
          </span>
          <span className="text-xs text-text-secondary">{post.readTime}</span>
        </div>
        <h3 className="font-heading text-lg font-bold leading-tight mb-3 group-hover:text-gold transition-colors">
          {post.title}
        </h3>
        <p className="text-sm text-text-secondary leading-relaxed">
          {post.excerpt}
        </p>
        <div className="mt-4 text-xs text-text-secondary">
          {new Date(post.date).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </div>
      </article>
    </Link>
  );
}
