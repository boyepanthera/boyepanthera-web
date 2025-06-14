import { getAllPosts } from "@/lib/mdx";
import BlogLayout from "../../blog/components/BlogLayout";
import BlogCard from "../../blog/components/BlogCard";

export const metadata = {
  title: "Blog | Boye Portfolio",
  description:
    "Technical articles about software engineering, web development and AI/ML",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <BlogLayout>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </BlogLayout>
  );
}
