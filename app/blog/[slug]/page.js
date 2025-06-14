import { getPostBySlug, getPostSlugs } from "@/lib/mdx";
import BlogLayout from "../../../blog/components/BlogLayout";
import ClientMDXContent from "@/components/ClientMDXContent";
import Image from "next/image";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  // Fix: Using await for params
  const slug = params?.slug;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post not found",
    };
  }

  return {
    title: `${post.frontmatter.title} | Boye Portfolio Blog`,
    description: post.frontmatter.excerpt || "Technical article by Boye",
  };
}

export async function generateStaticParams() {
  const posts = getPostSlugs();

  return posts.map((post) => ({
    slug: post.replace(/\.mdx$/, ""),
  }));
}

export default function BlogPostPage({ params }) {
  // Fix: Using awaited params
  const slug = params?.slug;
  const post = getPostBySlug(slug);

  if (!post) {
    return notFound();
  }

  const { frontmatter, content } = post;

  return (
    <BlogLayout>
      <article>
        {frontmatter.image && (
          <div className="relative h-64 w-full mb-8">
            <Image
              src={frontmatter.image}
              alt={frontmatter.title}
              fill
              className="object-cover rounded-lg"
            />
          </div>
        )}

        {/* <h1
          className={`text-3xl font-bold mb-2 ${
            frontmatter.image ? "" : "mt-6"
          }`}
        >
          {frontmatter.title}
        </h1> */}

        <div className="flex flex-wrap items-center mb-8 gap-4">
          <time className="text-sm text-gray-500 dark:text-gray-400">
            {new Date(frontmatter.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>

          <span className="text-sm text-gray-500 dark:text-gray-400">
            {frontmatter.readingTime}
          </span>

          {frontmatter.categories && (
            <div className="flex gap-2">
              {frontmatter.categories.map((category) => (
                <span
                  key={category}
                  className="text-xs px-2 py-1 rounded-sm bg-gray-100 dark:bg-neutral-800 text-gray-700 dark:text-gray-300"
                >
                  {category}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="mdx-content">
          <ClientMDXContent source={content} />
        </div>
      </article>
    </BlogLayout>
  );
}
