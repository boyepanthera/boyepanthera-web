"use client";

import { useTheme } from "./ThemeProvider";

export default function Testimonials() {
  const { theme } = useTheme();

  // Testimonial data
  const testimonials = [
    {
      quote:
        "Boye is a powerhouse! He led the development of a custom-tailored mobile banking app for our bank, and his knowledge of DevOps and cloud development is unmatched.",
      author: "Opara",
      position: "CTO at Premium Bank",
    },
    {
      quote:
        "I had the pleasure of learning from Boye during the bootcamp, and his mentorship was instrumental in helping me secure a coveted backend role.",
      author: "Solomon Olubeko",
      position: "Software Engineer",
    },
    {
      quote:
        "Working with Boye on Edufit was a pleasant experience. He consistently delivered magic, combining technical design practice with utilitarianism through his skillsets.",
      author: "Jessica Kalu",
      position: "Co-founder",
    },
  ];

  return (
    <section
      className={`py-16 px-8 ${
        theme === "dark" ? "bg-[#1a0e0e]" : "bg-amber-50/50"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <h2
          className={`text-3xl font-bold mb-10 ${
            theme === "dark" ? "text-white" : "text-gray-900"
          }`}
        >
          Testimonials
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={`testimonial-${index}`}
              className={`
                p-6 rounded-lg
                ${
                  theme === "dark"
                    ? "bg-[#261310] border border-amber-800/20"
                    : "bg-white shadow-md shadow-amber-100/50"
                }
              `}
            >
              <p
                className={`text-sm mb-4 italic 
                ${theme === "dark" ? "text-gray-300" : "text-gray-700"}
              `}
              >
                "{testimonial.quote}"
              </p>

              <div>
                <p
                  className={`font-medium ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  {testimonial.author}
                </p>
                <p
                  className={`text-xs ${
                    theme === "dark" ? "text-amber-500" : "text-amber-600"
                  }`}
                >
                  {testimonial.position}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
