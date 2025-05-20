"use client";

import HeroSection from "@/components/HeroSection";
import SelectedProjects from "@/components/SelectedProjects";
import AboutMe from "@/components/AboutMe";
import Toolbox from "@/components/Toolbox";
import WorkExperience from "@/components/WorkExperience";
import Testimonials from "@/components/Testimonials";
import SimpleContactSection from "@/components/SimpleContactSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <SelectedProjects />
      <AboutMe />
      <Toolbox />
      <WorkExperience />
      <Testimonials />
      <SimpleContactSection />
    </main>
  );
}
