import Navigation from "@/components/navigation";
import ProfileSection from "@/components/profile-section";
import AboutSection from "@/components/about-section";
import ExperienceSection from "@/components/experience-section";
import ProjectsSection from "@/components/projects-section";
import ContactSection from "@/components/contact-section";
import UAVBackground from "@/components/uav-background";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <UAVBackground />
      <Navigation />
      <ProfileSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold text-primary font-mono mb-4 md:mb-0">
              nathan.duncan
            </div>
            <div className="flex space-x-8">
              <a
                href="#about"
                className="text-muted-foreground hover:text-accent transition-colors duration-300"
                data-testid="footer-link-about"
              >
                About
              </a>
              <a
                href="#experience"
                className="text-muted-foreground hover:text-accent transition-colors duration-300"
                data-testid="footer-link-experience"
              >
                Experience
              </a>
              <a
                href="#projects"
                className="text-muted-foreground hover:text-accent transition-colors duration-300"
                data-testid="footer-link-projects"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-muted-foreground hover:text-accent transition-colors duration-300"
                data-testid="footer-link-contact"
              >
                Contact
              </a>
            </div>
          </div>
          <div className="text-center mt-8 pt-8 border-t border-border">
            <p className="text-muted-foreground text-sm">
              © 2024 Nathan Duncan. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
