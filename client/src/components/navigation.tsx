import { useState } from "react";
import useSmoothScroll from "@/hooks/use-smooth-scroll";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollTo = useSmoothScroll();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (target: string) => {
    scrollTo(target);
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-8 py-4 flex items-center justify-between">
          <div className="text-3xl font-bold text-primary font-mono" data-testid="nav-logo">
            nathan.duncan
          </div>
          <div className="flex items-center space-x-8">
            <button
              onClick={() => handleNavClick("#about")}
              className="nav-link text-foreground hover:text-accent font-medium"
              data-testid="nav-link-about"
            >
              About
            </button>
            <button
              onClick={() => handleNavClick("#experience")}
              className="nav-link text-foreground hover:text-accent font-medium"
              data-testid="nav-link-experience"
            >
              Experience
            </button>
            <button
              onClick={() => handleNavClick("#projects")}
              className="nav-link text-foreground hover:text-accent font-medium"
              data-testid="nav-link-projects"
            >
              Projects
            </button>
            <button
              onClick={() => handleNavClick("#contact")}
              className="nav-link text-foreground hover:text-accent font-medium"
              data-testid="nav-link-contact"
            >
              Contact
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-xl font-bold text-primary font-mono" data-testid="mobile-nav-logo">
            nathan.duncan
          </div>
          <button
            className="hamburger-menu p-2"
            onClick={toggleMenu}
            data-testid="mobile-menu-toggle"
          >
            <div
              className={`w-6 h-0.5 bg-foreground mb-1 transition-all duration-300 ${
                isMenuOpen ? "transform rotate-45 translate-y-2" : ""
              }`}
            />
            <div
              className={`w-6 h-0.5 bg-foreground mb-1 transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <div
              className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${
                isMenuOpen ? "transform -rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
        {isMenuOpen && (
          <div className="mobile-menu" data-testid="mobile-menu">
            <div className="px-4 py-4 space-y-4">
              <button
                onClick={() => handleNavClick("#about")}
                className="block text-foreground hover:text-accent font-medium w-full text-left"
                data-testid="mobile-nav-link-about"
              >
                About
              </button>
              <button
                onClick={() => handleNavClick("#experience")}
                className="block text-foreground hover:text-accent font-medium w-full text-left"
                data-testid="mobile-nav-link-experience"
              >
                Experience
              </button>
              <button
                onClick={() => handleNavClick("#projects")}
                className="block text-foreground hover:text-accent font-medium w-full text-left"
                data-testid="mobile-nav-link-projects"
              >
                Projects
              </button>
              <button
                onClick={() => handleNavClick("#contact")}
                className="block text-foreground hover:text-accent font-medium w-full text-left"
                data-testid="mobile-nav-link-contact"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
