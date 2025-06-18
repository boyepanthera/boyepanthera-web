"use client";

export default function PersonSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Olanrewaju Olaboye",
          alternateName: ["Boyepanthera", "Boyewonder"],
          description:
            "Software Engineer specializing in React, Node.js and cloud technologies",
          image: "https://boyepanthera.com/authors/boyepanthera.jpg",
          url: "https://boyepanthera.com",
          sameAs: [
            "https://github.com/boyepanthera",
            "https://twitter.com/boyepanthera",
            "https://linkedin.com/in/olanrewaju-olaboye",
          ],
          jobTitle: "Software Engineer",
          knowsAbout: ["JavaScript", "React", "Node.js", "Web Development"],
        }),
      }}
    />
  );
}
