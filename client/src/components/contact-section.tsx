import { Mail, Linkedin } from "lucide-react";

export default function ContactSection() {
  const handleEmailClick = () => {
    window.location.href = "mailto:nathan.duncan@queensu.ca";
  };

  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/nathan-duncan-867a83200/", "_blank");
  };

  return (
    <section id="contact" className="section-padding px-4 bg-card/20">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold mb-2 text-sm uppercase tracking-wider">
            Get In Touch
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground" data-testid="contact-title">
            Contact Me
          </h2>
          <p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto" data-testid="contact-description">
            I'm always open to discussing new opportunities, collaborations, or just connecting
            with fellow robotics enthusiasts.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {/* Email */}
          <div className="skill-card p-8 rounded-3xl text-center group hover:border-accent/50" data-testid="contact-email-card">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
              <Mail className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Email</h3>
            <p className="text-muted-foreground mb-4" data-testid="email-address">
              nathan.duncan@queensu.ca
            </p>
            <button
              onClick={handleEmailClick}
              className="btn-primary px-6 py-2 rounded-lg font-medium"
              data-testid="button-send-email"
            >
              Send Message
            </button>
          </div>

          {/* LinkedIn */}
          <div className="skill-card p-8 rounded-3xl text-center group hover:border-accent/50" data-testid="contact-linkedin-card">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors duration-300">
              <Linkedin className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">LinkedIn</h3>
            <p className="text-muted-foreground mb-4">Connect professionally</p>
            <button
              onClick={handleLinkedInClick}
              className="btn-secondary px-6 py-2 rounded-lg font-medium"
              data-testid="button-connect-linkedin"
            >
              Connect
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
