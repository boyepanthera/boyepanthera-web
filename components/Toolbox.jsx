"use client";

import { useTheme } from "./ThemeProvider";

export default function Toolbox() {
  const { theme } = useTheme();

  // Toolbox data structure
  const toolboxCategories = [
    {
      title: "Front-End Development",
      skills: [
        "Languages & Frameworks: JavaScript, React, HTML, CSS, JavaScript/ES6",
        "UI/UX Development: React Native, Flutter, Tailwind CSS",
        "UI/UX: Responsive design, Cross-platform development",
      ],
    },
    {
      title: "Back-End Development",
      skills: [
        "Languages: Node.js, Python, Java, PHP, Golang",
        "API Development: RESTful APIs, GraphQL, WebSockets",
        "Microservice Architecture: Docker, AWS Lambda, Kubernetes",
      ],
    },
    {
      title: "Database Management",
      skills: [
        "SQL: PostgreSQL, MySQL, Oracle, Microsoft SQL Server",
        "NoSQL: MongoDB, Redis, Kafka, Elasticsearch",
        "ORM/ODM: Mongoose, Knex, Sequelize, Prisma",
      ],
    },
    {
      title: "AI/ML & Data Science",
      skills: [
        "Algorithms: Supervised and Unsupervised Machine Learning, Natural Language Processing, Statistical Models",
        "Libraries: PyTorch, TensorFlow, scikit-learn, Pandas, NumPy, Jupyter",
        "Data Analysis & Visualization: Power BI, Matplotlib, advanced analytics, SQL visualization techniques",
      ],
    },
    {
      title: "DevOps & Deployment",
      skills: [
        "Continuous Integration/Delivery: Jenkins, CircleCI, GitLab CI/CD",
        "Cloud Services: AWS, GCP, Azure, Heroku, DigitalOcean",
        "Containerization: Docker, Kubernetes, Terraform, Redis",
      ],
    },
    {
      title: "Other Tools & Tech",
      skills: [
        "Version Control: Git, GitHub, Bitbucket, GitLab",
        "Project Management & Agile Systems: Jira, Trello, Asana, Notion",
        "Testing Frameworks: Mocha, Jest, Cypress, Selenium",
      ],
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
          className={`text-3xl font-bold mb-8 ${
            theme === "dark" ? "text-white" : "text-gray-900"
          }`}
        >
          My Toolbox
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {toolboxCategories.map((category, index) => (
            <div
              key={`toolbox-${index}`}
              className={`
              ${
                theme === "dark"
                  ? "border-t border-amber-700/30"
                  : "border-t border-amber-200"
              }
              pt-4
            `}
            >
              <h3
                className={`text-lg font-semibold mb-3 ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                {category.title}
              </h3>

              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li
                    key={`skill-${index}-${skillIndex}`}
                    className={`
                      text-sm flex items-start
                      ${theme === "dark" ? "text-gray-300" : "text-gray-700"}
                    `}
                  >
                    <span
                      className={`mr-2 mt-1 text-xs 
                      ${theme === "dark" ? "text-amber-500" : "text-amber-600"}
                    `}
                    >
                      •
                    </span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
