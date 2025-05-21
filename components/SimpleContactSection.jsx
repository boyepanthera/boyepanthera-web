"use client";

import { useTheme } from "./ThemeProvider";
import Link from "next/link";
import { Twitter, Linkedin } from "lucide-react";

export default function SimpleContactSection() {
  const { theme } = useTheme();

  return (
    <footer
      className={`
      py-16 px-8
      ${
        theme === "dark" ? "bg-[#140a0a] text-white" : "bg-[#1a0a00] text-white"
      }
    `}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Let's work together</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-300 max-w-md">
              Are you ready to bring your next project to life? Get in touch,
              and let's build something incredible together.
            </p>
          </div>

          <div className="space-y-3">
            <p className="flex items-baseline">
              <span className="text-amber-400 font-medium w-12">Email:</span>
              <a
                href="mailto:boye@megastacktech.com"
                className="text-gray-300 hover:text-amber-400 transition-colors"
              >
                boye@megastacktech.com
              </a>
            </p>

            <p className="flex items-baseline">
              <span className="text-amber-400 font-medium w-12">Phone:</span>
              <a
                href="tel:+1234567890"
                className="text-gray-300 hover:text-amber-400 transition-colors"
              >
                (316) 928-8901
              </a>
            </p>

            <div className="flex space-x-4 pt-4">
              <a
                href="https://twitter.com/boyepanthera"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-amber-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>

              <a
                href="https://linkedin.com/in/olaboye-olanrewaju/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-amber-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-gray-800 flex justify-between">
          <p className="text-xs text-gray-400">
            © 2025 Boye. All rights reserved.
          </p>

          <div className="text-amber-400">
            {/* You could add a small logo here if needed */}
          </div>
        </div>
      </div>
    </footer>
  );
}
