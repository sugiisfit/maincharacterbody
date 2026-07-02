import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();

  const blogEntries = posts.map((post) => ({
    url: `https://maincharacterbody.com/blog/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  return [
    { url: "https://maincharacterbody.com", lastModified: new Date() },
    { url: "https://maincharacterbody.com/about", lastModified: new Date() },
    { url: "https://maincharacterbody.com/blog", lastModified: new Date() },
    { url: "https://maincharacterbody.com/programs", lastModified: new Date() },
    { url: "https://maincharacterbody.com/quiz", lastModified: new Date() },
    { url: "https://maincharacterbody.com/start-here", lastModified: new Date() },
    ...blogEntries,
  ];
}
