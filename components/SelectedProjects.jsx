"use client";

import { useTheme } from "./ThemeProvider";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const NewTabLink = ({ href, theme, children }) => (
  <a
    className={`
                        inline-flex items-center text-sm font-medium
                        ${
                          theme === "dark"
                            ? "text-amber-400 hover:text-amber-300"
                            : "text-amber-600 hover:text-amber-800"
                        }
                      `}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
);

export default function ScrollableProjects() {
  const { theme } = useTheme();
  const scrollContainerRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(2);

  const projects = [
    {
      id: 1,
      title: "Learning Management System",
      description:
        "A platform allowing institutions to create and manage online classes, assignments, and the evaluation system. Built in the expert content format.",
      image: "/learning-system.jpg", // Replace with your actual image path
      technologies: ["TypeScript", "React", "MongoDB", "Node"],
      link: "https://pantheratechschool.com",
    },
    {
      id: 2,
      title: "Geo-Fencing & Face Recognition",
      description:
        "Location-based authorization system enabling user authentication through face verification and GPS tracking.",
      image: "/geo-face.jpg",
      technologies: [
        "Python",
        "TensorFlow",
        "AWS",
        "PostgreSQL",
        "React Native",
      ],
      link: "https://apps.apple.com/us/app/abia-oneid-authenticator/id6475302978",
    },
    {
      id: 3,
      title: "Rentzen Platform",
      description:
        "Full-featured online store with inventory management, payment processing, and customer analytics dashboard.",
      image: "/rentzen-mobileapp.jpg",
      technologies: ["React Native", "Node.js", "MySQL", "Stripe"],
      link: "https://apps.apple.com/us/app/rentzen/id6740734022",
    },
    {
      id: 4,
      title: "Health and Wellness Market",
      description:
        "Making prescription medications more affordable to Americans through membership based service. Supplies generic medications at actual wholesale cost through this membership service.",
      image: "/predictive-model.jpg",
      technologies: ["ReactJs", "Nodejs", "React", "Laravel"],
      link: "https://www.vivmeds.com",
    },
    {
      id: 5,
      title: "Mentor-Student Booking System 'Edlyft'",
      description:
        "ML-powered tool that generates custom marketing copy, blog posts, and product descriptions based on user inputs and preferences.",
      image: "/mentor-student.jpg",
      technologies: ["Reactjs", "Nodejs", "DynamoDB", "Airtable"],
      link: "https://www.students.edlyft.com/",
    },
  ];

  // Calculate total pages based on projects count and items per page
  useEffect(() => {
    // Update items per page based on screen size
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        // lg screens and up
        setItemsPerPage(2);
      } else {
        setItemsPerPage(1);
      }
    };

    // Initial calculation
    handleResize();

    // Listen for window resize
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Update total pages whenever itemsPerPage changes
  useEffect(() => {
    setTotalPages(Math.ceil(projects.length / itemsPerPage));
  }, [itemsPerPage, projects.length]);

  // Navigation functions
  const goToPage = (pageNumber) => {
    if (pageNumber >= 0 && pageNumber < totalPages) {
      setCurrentPage(pageNumber);

      if (scrollContainerRef.current) {
        const containerWidth = scrollContainerRef.current.offsetWidth;
        scrollContainerRef.current.scrollTo({
          left: pageNumber * containerWidth,
          behavior: "smooth",
        });
      }
    }
  };

  // Visible projects for current page
  const visibleProjects = projects.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <section
      id="projects"
      className={`py-16 ${theme === "dark" ? "bg-[#1a0e0e]" : "bg-white"}`}
    >
      <div className="max-w-7xl mx-auto px-8">
        <h2
          className={`text-3xl font-bold mb-2 ${
            theme === "dark" ? "text-white" : "text-gray-900"
          }`}
        >
          Selected Projects
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div
            className={`col-span-1 pr-4 ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}
          >
            <p className="text-base">
              During my various years of professional experience, I had
              opportunity to work on a wide range of projects for numerous
              businesses and organizations.
            </p>
          </div>

          {/* Project gallery with pagination */}
          <div className="col-span-1 lg:col-span-2">
            <div
              ref={scrollContainerRef}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 overflow-hidden "
            >
              {visibleProjects.map((project) => (
                <div
                  key={project.id}
                  className={`
                    overflow-hidden rounded-xl flex flex-col
                    ${theme === "dark" ? "bg-[#261310]" : "bg-white shadow-md"}
                  `}
                >
                  {/* Project Image */}
                  <div className="relative aspect-square w-full">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Project Details */}
                  <div className="p-4">
                    <h3
                      className={`text-xl font-bold mb-2 ${
                        theme === "dark" ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {project.title}
                    </h3>

                    <p
                      className={`text-sm mb-3 ${
                        theme === "dark" ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={`${project.id}-tech-${index}`}
                          className={`
                            text-xs px-2 py-1 rounded-sm
                            ${
                              theme === "dark"
                                ? "bg-neutral-800 text-gray-300"
                                : "bg-gray-100 text-gray-700"
                            }
                          `}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* View Project Link */}
                    <NewTabLink
                      href={project.link}
                      theme={theme}
                      className={`
                        inline-flex items-center text-sm font-medium
                        ${
                          theme === "dark"
                            ? "text-amber-400 hover:text-amber-300"
                            : "text-amber-600 hover:text-amber-800"
                        }
                      `}
                    >
                      View Project
                      <ArrowRight size={16} className="ml-1" />
                    </NewTabLink>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation buttons */}
        {/* <div className="flex space-x-1 mt-4 bg-red-800">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={`page-${index}`}
              onClick={() => goToPage(index)}
              className={`
                w-8 h-8 flex items-center justify-center rounded-sm
                ${
                  currentPage === index
                    ? theme === "dark"
                      ? "bg-amber-600 text-white"
                      : "bg-amber-500 text-white"
                    : theme === "dark"
                    ? "bg-neutral-800 text-gray-400 hover:bg-neutral-700"
                    : "bg-gray-200 text-gray-500 hover:bg-gray-300"
                }
              `}
              aria-label={`Page ${index + 1}`}
            >
              {index + 1}
            </button>
          ))}
        </div> */}

        {/* Optional: Add arrow navigation controls */}
        <div className="flex space-x-2 mt-4">
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 0}
            className={`
              p-2 rounded-sm
              ${
                currentPage === 0
                  ? "opacity-50 cursor-not-allowed"
                  : "cursor-pointer"
              }
              ${
                theme === "dark"
                  ? "bg-neutral-800 text-gray-300"
                  : "bg-gray-200 text-gray-700"
              }
            `}
            aria-label="Previous page"
          >
            <ChevronLeft size={16} />
          </button>

          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage >= totalPages - 1}
            className={`
              p-2 rounded-sm
              ${
                currentPage >= totalPages - 1
                  ? "opacity-50 cursor-not-allowed"
                  : "cursor-pointer"
              }
              ${
                theme === "dark"
                  ? "bg-neutral-800 text-gray-300"
                  : "bg-gray-200 text-gray-700"
              }
            `}
            aria-label="Next page"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
