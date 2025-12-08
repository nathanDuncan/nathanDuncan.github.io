import { useEffect } from "react";
import Navigation from "@/components/navigation";
import ProfileSection from "@/components/profile-section";
import AboutSection from "@/components/about-section";
import ExperienceSection from "@/components/experience-section";
import ProjectsSection from "@/components/projects-section";
import ContactSection from "@/components/contact-section";
import UAVAnimation from "@/components/uav-animation";

export default function Home() {
  useEffect(() => {
    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-up');
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    // MAIN WRAPPER: Removed "bg-background" from here to prevent it from covering the drones
    <div className="min-h-screen text-foreground font-sans overflow-x-hidden relative">
      
      {/* LAYER 1 (Bottom): The solid background color */}
      {/* We force this to be the very back layer with z-[-50] */}
      <div className="fixed inset-0 bg-background -z-50 pointer-events-none" />

      {/* LAYER 2 (Middle): The UAV Animation */}
      {/* The component itself has z-[-10], so it sits ON TOP of Layer 1 (-50) but BEHIND Layer 3 */}
        <UAVAnimation />
      

      {/* LAYER 3 (Top): The Scrollable Content */}
      {/* We use z-[10] and 'relative' to ensure all text/buttons are clickable and sharp */}
      <div className="relative z-10">
        <Navigation />
        <ProfileSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
        
        
        {/* Footer */}
        {/* Added a subtle background to the footer so drones don't look messy flying behind the copyright text */}
        <footer className="py-8 px-4 border-t border-border bg-background/90 backdrop-blur-sm">
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
    </div>
  );
}