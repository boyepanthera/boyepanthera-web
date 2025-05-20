"use client";

import { useTheme } from "./ThemeProvider";

export default function WorkExperience() {
  const { theme } = useTheme();

  // Work experience data
  const experiences = [
    {
      company: "MegaStack Tech",
      role: "Senior Software Engineer",
      period: "Jun 2021 - Present",
      responsibilities: [
        "Spearheaded the development of a Learning Management System for 2,000+ users, using TypeScript, React, and MongoDB.",
        "Led a team to create a geo-fencing and face recognition app that verifies user identity and location, used across Nigeria.",
        "Developed a real-time tracking solution, AppointCare Connect, integrated with over 15 hospital banks, impacting over 20,000 banking agencies.",
      ],
    },
    {
      company: "Panthera Tech School",
      role: "Lead Backend Developer",
      period: "Jul 2019 - Jun 2021",
      responsibilities: [
        "Designed and upgraded the curriculum for Node.js and React.js bootcamp, training over 3,000 students.",
        "Mentored graduate who became Software Backend, Full stack, and Mobile App development roles across Nigeria.",
      ],
    },
    {
      company: "Edufit (Remote)",
      role: "Lead Software Engineer",
      period: "May 2017 - Jun 2020",
      responsibilities: [
        "Developed Web features for Edufit's LMS web app, increasing learner-student engagement and course completion.",
        "Engineered a speech AI tech used by over 5,000 students, enhancing learning effectiveness.",
      ],
    },
    {
      company: "Guaranteed Trust Bank",
      role: "FinTech Technology Developer",
      period: "Jan 2016 - Jun 2018",
      responsibilities: [
        "Created web applications to automate banking processes using Python, Node.js, React, and SQL.",
        "Designed protocol module for loan management automation and expected credit loss (ECL) compliance.",
      ],
    },
  ];

  return (
    <section
      className={`py-16 px-8 ${theme === "dark" ? "bg-[#1a0e0e]" : "bg-white"}`}
    >
      <div className="max-w-7xl mx-auto">
        <h2
          className={`text-3xl font-bold mb-10 ${
            theme === "dark" ? "text-white" : "text-gray-900"
          }`}
        >
          Work Experience
        </h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={`experience-${index}`}
              className="grid grid-cols-1 md:grid-cols-4 gap-6"
            >
              {/* Company info - takes 1/4 width on desktop */}
              <div>
                <h3
                  className={`text-lg font-semibold ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  {exp.company}
                </h3>
                <p
                  className={`text-sm ${
                    theme === "dark" ? "text-amber-500" : "text-amber-600"
                  }`}
                >
                  {exp.role}
                </p>
                <p
                  className={`text-xs mt-1 ${
                    theme === "dark" ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  {exp.period}
                </p>
              </div>

              {/* Responsibilities - takes 3/4 width on desktop */}
              <div className="md:col-span-3">
                <ul className="space-y-3">
                  {exp.responsibilities.map((responsibility, respIndex) => (
                    <li
                      key={`resp-${index}-${respIndex}`}
                      className={`
                        flex items-start
                        ${theme === "dark" ? "text-gray-300" : "text-gray-700"}
                      `}
                    >
                      <span
                        className={`mr-2 text-sm 
                        ${
                          theme === "dark" ? "text-amber-500" : "text-amber-600"
                        }
                      `}
                      >
                        •
                      </span>
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
