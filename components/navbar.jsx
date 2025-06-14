"use client";

import Link from "next/link";
import { useTheme } from "./ThemeProvider";
import Image from "next/image";
import { openInNewTab } from "./util";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const { theme } = useTheme();
  const pathname = usePathname();

  // Function to determine if a link is active
  const isActive = (path) => {
    if (path === "/") {
      return pathname === "/";
    }

    // For paths like /blog, check if the current path starts with it
    return pathname.startsWith(path);
  };

  return (
    <nav
      className={`${
        theme === "dark" ? "bg-[#1a0e0e]" : "bg-white"
      } w-full px-8 py-4 flex items-center justify-between`}
    >
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

      <div className="hidden md:flex items-center space-x-8">
        <Link
          href="/"
          className={`hover:opacity-80 transition ${
            isActive("/")
              ? theme === "dark"
                ? "text-amber-400"
                : "text-amber-800"
              : theme === "dark"
              ? "text-white/80"
              : "text-gray-700"
          }`}
        >
          Home
        </Link>
        <Link
          href="/#about"
          className={`hover:opacity-80 transition ${
            isActive("/about")
              ? theme === "dark"
                ? "text-amber-400"
                : "text-amber-800"
              : theme === "dark"
              ? "text-white/80"
              : "text-gray-700"
          }`}
        >
          About Me
        </Link>
        <Link
          href="/#projects"
          className={`hover:opacity-80 transition ${
            pathname === "/"
              ? theme === "dark"
                ? "text-white/80"
                : "text-gray-700"
              : theme === "dark"
              ? "text-white/80"
              : "text-gray-700"
          }`}
        >
          Projects
        </Link>
        <Link
          href="/blog"
          className={`hover:opacity-80 transition ${
            isActive("/blog")
              ? theme === "dark"
                ? "text-amber-400"
                : "text-amber-800"
              : theme === "dark"
              ? "text-white/80"
              : "text-gray-700"
          }`}
        >
          Blog
        </Link>
        <Link
          href="/#contact"
          className={`cursor-pointer hover:opacity-80 transition ${
            pathname === "/"
              ? theme === "dark"
                ? "text-white/80"
                : "text-gray-700"
              : theme === "dark"
              ? "text-white/80"
              : "text-gray-700"
          }`}
        >
          Contact
        </Link>
      </div>

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
