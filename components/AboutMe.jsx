"use client";

import { useTheme } from "./ThemeProvider";
import Image from "next/image";

export default function ExactMatchAboutMe() {
  const { theme } = useTheme();

  return (
    <section
      className={`py-16 px-8 ${theme === "dark" ? "bg-[#1a0e0e]" : "bg-white"}`}
      id="about"
    >
      <div className="max-w-7xl mx-auto">
        <h2
          className={`text-3xl font-bold mb-10 ${
            theme === "dark" ? "text-white" : "text-gray-900"
          }`}
        >
          About Me
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Bio Text - takes up 2/3 of the space on desktop */}
          <div className="lg:col-span-2">
            <div
              className={`space-y-4 ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
            >
              <p>
                I'm Boye, a skilled Software Engineer with a strong foundation
                in full-stack development and AI/ML. I combine a Computer
                Science degree and Information Sciences from Wichita State
                University specializing in AI/ML, Computer vision and
                Cybersecurity.
              </p>

              <p>
                With over eight years of experience, I've successfully led
                projects in fintech, education, and the public sector. I've also
                mentored thousands of developers, sharing my knowledge and
                passion for technology. My expertise in machine learning and
                data science, coupled with my practical experience, enables me
                to create innovative, secure, and scalable solutions that
                address specific business needs.
              </p>
            </div>
          </div>

          {/* Profile Image - takes up 1/3 of the space on desktop */}
          <div className="flex justify-center lg:justify-end">
            <div
              className={`
              relative w-full max-w-xs aspect-[3/4] rounded-xl overflow-hidden shadow-lg
              ${theme === "dark" ? "shadow-amber-900/10" : "shadow-gray-300/50"}
            `}
            >
              <Image
                src="/boye-image.jpg" // Replace with the path to your second profile image
                alt="Boye - Software Engineer"
                fill
                className="object-cover"
              />

              {/* Colored border for dark mode only */}
              {theme === "dark" && (
                <div className="absolute inset-0 rounded-xl border border-amber-700/30"></div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
