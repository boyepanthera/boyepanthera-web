import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/navbar";
import "@/app/globals.css";
import { neueMachina, neueMachinaPlain } from "./fonts";

export const metadata = {
  title: {
    default: "Olanrewaju Olaboye (Boyepanthera) | Software Engineer Portfolio",
    template: "%s | Boyepanthera",
  },
  description:
    "Portfolio of Olanrewaju Olaboye, Software, AI/ML engineer known as Boyepanthera and Boyewonder. Specializing in React, Node.js, C#, C++, Quantum and cloud technologies.",
  keywords: [
    "Olanrewaju Olaboye",
    "Boyepanthera",
    "Boyewonder",
    "Software Engineer",
    "React Developer",
    "Node.js Developer",
  ],
  authors: [{ name: "Olanrewaju Olaboye", url: "https://boyepanthera.com" }],
  creator: "Olanrewaju Olaboye (Boyepanthera)",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${neueMachina.variable} ${neueMachinaPlain.variable} font-main`}
    >
      <head />
      <body>
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
