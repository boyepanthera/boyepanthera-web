import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/navbar";
import "@/app/globals.css";
import { neueMachina, neueMachinaPlain } from "./fonts";

export const metadata = {
  title: "Boye Portfolio",
  description: "Software Engineer Portfolio - Building scalable applications",
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
