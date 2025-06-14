"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "../../components/ThemeProvider";

export default function BlogCard({ post }) {
  const { theme } = useTheme();
  const { slug, frontmatter } = post;

  return (
    <Link href={`/blog/${slug}`}>
      <div
        className={`
          rounded-lg overflow-hidden h-full flex flex-col
          ${
            theme === "dark"
              ? "bg-[#261310] hover:bg-[#2c1712]"
              : "bg-white hover:bg-amber-50"
          } 
          transition-colors border
          ${theme === "dark" ? "border-amber-900/20" : "border-amber-100"}
        `}
      >
        {frontmatter.image && (
          <div className="relative h-48 w-full">
            <Image
              src={frontmatter.image}
              alt={frontmatter.title}
              fill
              className="object-cover"
            />
          </div>
        )}

        <div className="p-5 flex-grow flex flex-col">
          <h3
            className={`text-xl font-bold mb-2 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            {frontmatter.title}
          </h3>

          <p
            className={`text-sm mb-3 flex-grow ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}
          >
            {frontmatter.excerpt}
          </p>

          <div className="flex justify-between items-center mt-4">
            <span
              className={`text-xs ${
                theme === "dark" ? "text-amber-500" : "text-amber-600"
              }`}
            >
              {new Date(frontmatter.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>

            {frontmatter.categories && frontmatter.categories.length > 0 && (
              <span
                className={`
                  text-xs px-2 py-1 rounded-sm 
                  ${
                    theme === "dark"
                      ? "bg-neutral-800 text-gray-300"
                      : "bg-gray-100 text-gray-700"
                  }
                `}
              >
                {frontmatter.categories[0]}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
