
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProfileSection from "@/components/ProfileSection";
import EducationSection from "@/components/EducationSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import CertificationsSection from "@/components/CertificationsSection";
import SkillsSection from "@/components/SkillsSection";
import ResponsibilitiesSection from "@/components/ResponsibilitiesSection";
import AchievementsSection from "@/components/AchievementsSection";
import HobbiesSection from "@/components/HobbiesSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  useEffect(() => {
    // Reveal animations on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".opacity-0:not(.animate-fade-in)").forEach((el) => {
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ProfileSection />
      <EducationSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <CertificationsSection />
      <AchievementsSection />
      <ResponsibilitiesSection />
      {/* <HobbiesSection /> */}
      <FooterSection />
    </div>
  );
};

export default Index;
