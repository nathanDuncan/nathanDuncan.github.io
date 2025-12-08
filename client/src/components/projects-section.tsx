import { Github, ExternalLink, FileText, PlayCircle } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "UAV-USV Landing with Model Predictive Control",
      company: "Robora Lab",
      companyLogo: "/assets/Robora_Logo.jpg", 
      companyLink: "https://roboralab.com/",
      supervisor: "Dr. Melissa Greeff",
      timeline: "Jan 2024 - June 2024",
      description:
        "This paper aims to solve a consensus rendezvous problem for a heterogeneous robot team of an uncrewed surface vessel and unmanned aerial vehicle operating in harsh open waters. Co-authored by Jess Stephenson, Dr. Melissa Greeff, and myself, we develop a novel sequential distributed model predictive control scheme to coordinate a safe landing location and minimize tilt at touchdown. ",
      image:
        "/assets/Robora_Lab_MPC_Landing.mp4",
      technologies: ["Python", "MPC", "Optimization"],
      githubLink: "https://github.com/nathanDuncan",
      skills: ["Python", "MPC", "Control Theory"],
      links: {
        github: "https://github.com/nathanDuncan/UAV-USV_MPC",
        deliverable: "https://ieeexplore.ieee.org/document/10557042", // Add PDF link if available
        // demo: "#",
      },
    },
    {
      id: 2,
      title: "WATBOT Competition",
      company: "WATBOTs",
      companyLogo: "/assets/WATBOTs_Logo.png", 
      companyLink: "https://www.uwwatbots.com/",
      // supervisor: "",
      timeline: "July 2025",
      description:
        "In summer 2025, while at the University of Waterloo I participated in the university's 150 g battle bot competition with team members Antonio and Rick. We designed a cylindrical bodied agent using Fusion360 and set up the electronics system for remote control and satisfiaction of all safety requirements. Our robot named Thor's Hammer placed second in the competition.",
      image:
        "/assets/watbot_cad.png",
      technologies: ["CAD", "Fusion360", "Electronics"],
      links: {
        // github: "https://github.com/nathanDuncan/",
        // deliverable: "", 
        // demo: "#",
      },
    },
    {
      id: 3,
      title: "Tronassic Park Bot",
      company: "MREN303: Mechatronics Design III",
      companyLogo: "/assets/queens_logo.jpg", 
      companyLink: "https://smithengineering.queensu.ca/mre/index.html",
      supervisor: "Dr. Amy Wu",
      timeline: "Jan - April 2024",
      description:
        "Mechatronics Design III motivated students to apply their engineering skills by hosting a head-to-head mobile robotics competition. The setup of the competition was to rescue a trapped man from a dinosaur park, by first autonomously navigating the entryway and then corralling the dinosaurs into their enclosures and transporting the man to an evacuation pad. Our team designed a mobile system and 2-DOF manipulator from scratch using mainly laser cut MDF and 3D printed ABS for custom parts. Once the platform was assembled it was programmed with an autonomous line following mode and manual operation mode via Gamepad.",
      image:
        "/assets/mren303_robot.jpg",
      technologies: ["Mechanical Design", "Raspberry Pi", "Electronics"],
      links: {
        // github: "https://github.com/nathanDuncan/",
        deliverable: "/assets/mren303_report.pdf", 
        // demo: "#",
      },
    },
    {
      id: 4,
      title: "Ship-To-Shore: Mapping of drifting objects",
      company: "Robora Lab",
      companyLogo: "/assets/Robora_Logo.jpg", 
      companyLink: "https://roboralab.com/",
      supervisor: "Dr. Melissa Greeff",
      timeline: "July - Oct 2023",
      description:
        "My first research project attempting to generate spatiotemporal maps of semi-static shoreline environments via unmanned aerial vehicles to track drifting objects and inform safe surface vessel docking routes. I designed mounting devices for the UAV sensor suite and performed large data set collections during field trials on Lake Ontario. The mapping and detection of drifting objects was performed using a LiDAR Inertial Odometry Smoothing and Mapping algorithm.",
      image:
        "/assets/sts_profile.jpg",
      technologies: ["Field Robotics", "LIO-SAM", "UAVs"],
      links: {
        // github: "https://github.com/nathanDuncan/",
        deliverable: "/assets/STS_Poster_3.png", 
        // demo: "#",
      },
    },
  ];

  return (
    <section id="projects" className="section-padding px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold mb-2 text-sm uppercase tracking-wider">
            Browse My Recent
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground" data-testid="projects-title">
            Projects
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="skill-card p-6 rounded-3xl group"
              data-testid={`project-card-${project.id}`}
            >
              {/* 1. Company/Association Header */}
              {(project.company || project.companyLogo) && (
                <div className="px-6 py-4 flex items-center justify-between bg-secondary/5">
                  <div className="flex items-center gap-3">
                    {/* Optional Logo */}
                    {project.companyLogo ? (
                      <img 
                        src={project.companyLogo} 
                        alt="Logo" 
                        className="w-8 h-8 object-contain rounded-sm"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none'; // Hide if missing
                        }}
                      />
                    ) : null}
                    
                    {/* Company Name with Link */}
                    {project.companyLink ? (
                      <a 
                        href={project.companyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                      >
                        {project.company || "Organization"}
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : (
                      <span className="text-sm font-semibold text-muted-foreground">
                        {project.company}
                      </span>
                    )}
                  </div>
                </div>
              )}
              
              {/* 2. Image Underneath */}
              <div className="w-full aspect-video rounded-xl relative overflow-hidden bg-muted">
                 <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* 3. Title */}
              <h3 className="text-xl font-bold text-foreground mb-3" data-testid={`project-title-${project.id}`}>
                {project.title}
              </h3>

              {/* 4. Supervisor (Optional) */}
              {project.supervisor && (
                <p className="text-sm text-muted-foreground mb-1">
                  <span className="font-semibold text-foreground/80">Supervisor:</span> {project.supervisor}
                </p>
              )}

              {/* 5. Date/Timeline (Optional) */}
              {project.timeline && (
                <p className="text-sm text-muted-foreground mb-4">
                  <span className="font-semibold text-foreground/80">Timeline:</span> {project.timeline}
                </p>
              )}


              {/* 7. Skills */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className={`px-3 py-1 rounded-md text-xs font-medium bg-secondary/30 border border-secondary${
                      index === 0
                        ? "bg-primary/20 text-primary"
                        : index === 1
                        ? "bg-accent/20 text-accent"
                        : "bg-secondary/20 text-secondary-foreground"
                    }`}
                    data-testid={`project-tech-${project.id}-${tech.toLowerCase().replace(/[/\s]/g, '-')}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* 6. Description */}
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed border-t" data-testid={`project-description-${project.id}`}>
                {project.description}
              </p>

              {/* 8. Links (Github, Deliverable, Demo) */}
                <div className="flex flex-wrap gap-3 mt-auto pt-4 border-t border-border/50">
                  {project.links.github && (
                    <button
                      onClick={() => window.open(project.links.github, "_blank")}
                      className="flex-1 inline-flex items-center justify-center gap-2 btn-secondary px-4 py-2 rounded-lg text-sm font-medium hover:bg-secondary/80 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span>GitHub</span>
                    </button>
                  )}
                  
                  {project.links.deliverable && (
                    <button
                      onClick={() => window.open(project.links.deliverable, "_blank")}
                      className="flex-1 inline-flex items-center justify-center gap-2 btn-primary px-4 py-2 rounded-lg text-sm font-medium hover:bg-secondary/80 transition-colors"
                    >
                      <FileText className="w-4 h-4" />
                      <span>Report</span>
                    </button>
                  )}

                  {project.links.demo && (
                    <button
                      onClick={() => window.open(project.links.demo, "_blank")}
                      disabled={project.links.demo === "#"}
                      className="flex-1 inline-flex items-center justify-center gap-2 btn-primary px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <PlayCircle className="w-4 h-4" />
                      <span>Live Demo</span>
                    </button>
                  )}
                </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
