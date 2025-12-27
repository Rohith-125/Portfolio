import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Rohith M | Full-Stack Developer & AI Enthusiast</title>
        <meta
          name="description"
          content="Rohith M - Full-Stack Developer crafting creative code from Python to pixels. Building high-performance web apps with AI integration."
        />
        <meta
          name="keywords"
          content="Rohith M, Full-Stack Developer, AI Developer, React, Python, Web Development"
        />
        <link rel="canonical" href="https://rohithm.dev" />
      </Helmet>

      <div className="min-h-screen overflow-x-hidden">
        <Navigation />
        <main>
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <ExperienceSection />
          <SkillsSection />
          <EducationSection />
          <ContactSection />
        </main>
      </div>
    </>
  );
};

export default Index;
