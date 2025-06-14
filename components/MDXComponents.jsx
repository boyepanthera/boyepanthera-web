"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "./ThemeProvider";

// Change the function to return the components directly, not as a hook
export default function MDXComponents() {
  const { theme } = useTheme();

  return {
    h1: ({ children }) => (
      <h1
        className={`text-3xl font-bold mt-8 mb-4 ${
          theme === "dark" ? "text-white" : "text-gray-900"
        }`}
      >
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2
        className={`text-2xl font-bold mt-8 mb-3 ${
          theme === "dark" ? "text-white" : "text-gray-900"
        }`}
      >
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3
        className={`text-xl font-bold mt-6 mb-2 ${
          theme === "dark" ? "text-white" : "text-gray-900"
        }`}
      >
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p
        className={`my-4 ${
          theme === "dark" ? "text-gray-300" : "text-gray-700"
        }`}
      >
        {children}
      </p>
    ),
    a: ({ href, children }) => (
      <Link
        href={href}
        className={`${
          theme === "dark"
            ? "text-amber-400 hover:text-amber-300"
            : "text-amber-600 hover:text-amber-800"
        }`}
      >
        {children}
      </Link>
    ),
    ul: ({ children }) => <ul className="list-disc pl-6 my-4">{children}</ul>,
    ol: ({ children }) => (
      <ol className="list-decimal pl-6 my-4">{children}</ol>
    ),
    li: ({ children }) => (
      <li
        className={`mt-2 ${
          theme === "dark" ? "text-gray-300" : "text-gray-700"
        }`}
      >
        {children}
      </li>
    ),
    code: ({ className, children }) => {
      // Special handling for inline code vs code blocks
      const isInline = !className;
      if (isInline) {
        return (
          <code
            className={`px-1 py-0.5 rounded-sm text-sm font-mono 
              ${
                theme === "dark"
                  ? "bg-gray-800 text-gray-200"
                  : "bg-gray-100 text-gray-800"
              }`}
          >
            {children}
          </code>
        );
      }
      return <code className={className}>{children}</code>;
    },
    pre: ({ children }) => (
      <pre
        className={`p-4 my-6 overflow-x-auto rounded-lg text-sm 
          ${
            theme === "dark"
              ? "bg-gray-800 text-gray-200"
              : "bg-gray-100 text-gray-800"
          }`}
      >
        {children}
      </pre>
    ),
    img: ({ src, alt }) => (
      <div className="my-6">
        <Image
          src={src}
          alt={alt || ""}
          width={800}
          height={500}
          className="rounded-lg mx-auto"
        />
      </div>
    ),
    blockquote: ({ children }) => (
      <blockquote
        className={`border-l-4 pl-4 italic my-6
          ${
            theme === "dark"
              ? "border-amber-500 text-gray-400"
              : "border-amber-600 text-gray-600"
          }`}
      >
        {children}
      </blockquote>
    ),
  };
}
