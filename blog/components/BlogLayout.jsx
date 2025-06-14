"use client";

import Link from "next/link";
import { useTheme } from "../../components/ThemeProvider";

export default function BlogLayout({ children }) {
  const { theme } = useTheme();

  return (
    <div
      className={`min-h-screen ${
        theme === "dark" ? "bg-[#1a0e0e]" : "bg-white"
      }`}
    >
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-10">
          <Link
            href="/blog"
            className={`text-xl font-bold ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            My Technical Blog
          </Link>
          <p
            className={`mt-2 ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Insights on software engineering, AI/ML, and web development
          </p>
        </div>
        <main>{children}</main>
      </div>
    </div>
  );
}
