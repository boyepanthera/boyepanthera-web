"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "../../components/ThemeProvider";

export default function AuthorCard({ author }) {
  const { theme } = useTheme();

  if (!author) return null;

  return (
    <div
      className={`flex flex-col sm:flex-row items-start gap-4 p-5 rounded-lg my-8 ${
        theme === "dark" ? "bg-[#261310]" : "bg-amber-50"
      }`}
    >
      {author.avatar && (
        <div className="flex-shrink-0">
          <Image
            src={author.avatar}
            alt={author.name}
            width={80}
            height={80}
            className="rounded-full"
          />
        </div>
      )}

      <div>
        <div className="mb-2">
          <h3
            className={`text-lg font-bold ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            {author.name}
            {author.nickname && (
              <span
                className={`ml-2 text-sm font-normal ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                ({author.nickname})
              </span>
            )}
          </h3>

          <p
            className={`text-sm ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}
          >
            {author.bio}
          </p>
        </div>

        <div className="flex gap-3 text-sm">
          {author.twitter && (
            <a
              href={`https://twitter.com/${author.twitter}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`${
                theme === "dark"
                  ? "text-amber-400 hover:text-amber-300"
                  : "text-amber-600 hover:text-amber-800"
              }`}
            >
              Twitter
            </a>
          )}

          {author.github && (
            <a
              href={`https://github.com/${author.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`${
                theme === "dark"
                  ? "text-amber-400 hover:text-amber-300"
                  : "text-amber-600 hover:text-amber-800"
              }`}
            >
              GitHub
            </a>
          )}

          {author.linkedin && (
            <a
              href={`https://linkedin.com/in/${author.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`${
                theme === "dark"
                  ? "text-amber-400 hover:text-amber-300"
                  : "text-amber-600 hover:text-amber-800"
              }`}
            >
              LinkedIn
            </a>
          )}

          {author.website && (
            <a
              href={author.website}
              target="_blank"
              rel="noopener noreferrer"
              className={`${
                theme === "dark"
                  ? "text-amber-400 hover:text-amber-300"
                  : "text-amber-600 hover:text-amber-800"
              }`}
            >
              Website
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
