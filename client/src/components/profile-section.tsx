import useSmoothScroll from "@/hooks/use-smooth-scroll";
import { ChevronDown, Github, Linkedin } from "lucide-react";

export default function ProfileSection() {
  const scrollTo = useSmoothScroll();

  const handleDownloadCV = () => {
    // In a real implementation, this would link to the actual CV
    window.open("/assets/nduncan_resume.pdf", "_blank");
  };

  return (
    <section
      id="profile"
      className="min-h-screen flex items-center justify-center pt-20 px-4"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
          {/* Profile Picture */}
          <div className="hexagon-container animate-fade-in" data-testid="profile-picture">
            <img
              src="/assets/NathanD_Profile_Pic.jpg"
              alt="Nathan Duncan - Robotics Engineer"
              className="profile-pic"
            />
          </div>

          {/* Profile Content */}
          <div className="text-center lg:text-left animate-slide-up max-w-lg">
            <p className="text-muted-foreground text-lg mb-2 font-medium" data-testid="greeting">
              Hello, I'm
            </p>
            <h1
              className="text-4xl lg:text-5xl font-bold text-primary mb-4 font-mono name-typing"
              data-testid="name"
            >
              Nathan Duncan
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed" data-testid="title">
              Robotics Engineering Student
              <br />
              <span className="text-accent font-semibold">@ Queen's University</span>
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <button
                onClick={handleDownloadCV}
                className="btn-primary px-8 py-3 rounded-full font-semibold"
                data-testid="button-download-cv"
              >
                Download CV
              </button>
              <button
                onClick={() => scrollTo("#contact")}
                className="btn-secondary px-8 py-3 rounded-full font-semibold"
                data-testid="button-contact-info"
              >
                Contact Info
              </button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-6">
              <a
                href="https://www.linkedin.com/in/nathan-duncan-867a83200/"
                className="text-muted-foreground hover:text-accent transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-linkedin"
              >
                <Linkedin className="w-8 h-8" />
              </a>
              <a
                href="https://github.com/nathanDuncan"
                className="text-muted-foreground hover:text-accent transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-github"
              >
                <Github className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Arrow */}
        <div className="flex justify-center mt-16">
          <button
            onClick={() => scrollTo("#about")}
            className="scroll-arrow animate-bounce"
            data-testid="scroll-arrow"
          >
            <ChevronDown className="w-6 h-6 text-muted-foreground" />
          </button>
        </div>
      </div>
    </section>
  );
}
