import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const postsDirectory = path.join(process.cwd(), "blog/content/posts");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug) {
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = path.join(postsDirectory, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Parse frontmatter and content
  const { data, content } = matter(fileContents);

  // Calculate reading time
  const readTime = readingTime(content);

  return {
    slug: realSlug,
    frontmatter: {
      ...data,
      readingTime: readTime.text,
    },
    content,
  };
}

export function getAllPosts() {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .sort((a, b) => {
      const dateA = new Date(a.frontmatter.date);
      const dateB = new Date(b.frontmatter.date);
      return dateB - dateA;
    });

  return posts;
}

export function getAuthorBySlug(slug) {
  const authorsDirectory = path.join(process.cwd(), "blog/content/authors");
  const fullPath = path.join(authorsDirectory, `${slug}.mdx`);

  // Check if the file exists
  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    ...data,
    slug,
    content,
  };
}

export function getCategoryPosts(category) {
  const allPosts = getAllPosts();
  return allPosts.filter((post) =>
    post.frontmatter.categories?.includes(category)
  );
}
