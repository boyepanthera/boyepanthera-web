"use client";

import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "./ThemeProvider";
import { openInNewTab } from "./util";

export default function Navbar() {
  const { theme } = useTheme();

  return (
    <nav
      className={`${
        theme === "dark" ? "bg-[#1a0e0e]" : "bg-white"
      } w-full px-8 py-4 flex items-center justify-between`}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <div className="h-8 w-8 mr-2 relative">
          <Image
            src={`${theme === "dark" ? "/secondary-logo.svg" : "/logo.svg"}`}
            alt="BoyePanthera Logo"
            fill
            className="object-contain"
          />
        </div>
        <span
          className={`font-medium ${
            theme === "dark" ? "text-white" : "text-gray-900"
          }`}
        >
          BoyePanthera
        </span>
      </Link>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center space-x-8">
        <Link
          href="/"
          className={`hover:opacity-80 transition ${
            theme === "dark" ? "text-amber-400" : "text-amber-800"
          }`}
        >
          Home
        </Link>
        <Link
          href="/about"
          className={`hover:opacity-80 transition ${
            theme === "dark" ? "text-white/80" : "text-gray-700"
          }`}
        >
          About Me
        </Link>
        <Link
          href="/#projects"
          className={`hover:opacity-80 transition ${
            theme === "dark" ? "text-white/80" : "text-gray-700"
          }`}
        >
          Projects
        </Link>
        <Link
          href="/#contact"
          className={`cursor-pointer hover:opacity-80 transition ${
            theme === "dark" ? "text-white/80" : "text-gray-700"
          }`}
        >
          Contact
        </Link>
      </div>

      {/* Right side items: Theme toggle and CTA button */}
      <div className="flex items-center space-x-4">
        <ThemeToggle />
        <button
          onClick={() =>
            openInNewTab("https://calendly.com/boyepanthera/30min")
          }
          className={`
            px-4 py-2 rounded-md justify-center text-sm font-medium transition-colors text-center 
            ${
              theme === "dark"
                ? "bg-amber-600 text-white hover:bg-amber-700"
                : "bg-none text-[#E59503] hover:bg-amber-200 border rounded-lg"
            }
          `}
        >
          LET'S TALK
        </button>
      </div>
    </nav>
  );
}
