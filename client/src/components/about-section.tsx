import { Award, BookOpen } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="section-padding px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold mb-2 text-sm uppercase tracking-wider">
            Get To Know More
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground" data-testid="about-title">
            About Me
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Image */}
          <div className="order-2 lg:order-1">
            <img
              src="/assets/shiptoshore1.jpg"
              alt="Ship-to-shore research project"
              className="rounded-2xl shadow-2xl w-full h-auto"
              data-testid="about-image"
            />
          </div>

          {/* About Content */}
          <div className="order-1 lg:order-2 space-y-8">
            {/* Info Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="skill-card p-6 rounded-2xl text-center" data-testid="experience-card">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Experience</h3>
                <p className="text-muted-foreground text-sm">
                  4+ years
                  <br />
                  Studying Robotics
                </p>
              </div>

              <div className="skill-card p-6 rounded-2xl text-center" data-testid="education-card">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Education</h3>
                <p className="text-muted-foreground text-sm">
                  Mechatronics and Robotics
                  <br />
                  Bachelor's of Applied Science
                </p>
              </div>
            </div>

            {/* Description */}
            <div className="prose prose-invert max-w-none" data-testid="about-description">
              <p className="text-muted-foreground leading-relaxed">
                I'm a fifth-year Mechatronics and Robotics Engineering student at Queen's
                University, currently completing a research term at the University of Waterloo,
                where I am working on projects focused on learning-based control for multi-agent
                UAV systems.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                My interests lie in intelligent and autonomous robotic systems, particularly in
                robust control and real-world UAV applications. I've contributed to research on
                finite horizon optimal control, coauthored a paper on heterogeneous agent
                rendezvous, and gained practical experience through my work at several research
                labs.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Proficient in C++, Python, ROS2, and TensorFlow, I enjoy tackling complex systems
                challenges and applying my skills to both academic and extracurricular
                projects—including work on autonomous vehicles and biomedical devices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
