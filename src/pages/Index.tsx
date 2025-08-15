import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import SkillsSection from "@/components/SkillsSection";
import ProjectsPreview from "@/components/ProjectsPreview";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <SkillsSection />
      <ProjectsPreview />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
