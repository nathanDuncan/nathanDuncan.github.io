import { Check } from "lucide-react";

export default function ExperienceSection() {
  const softwareSkills = [
    { name: "Python", level: "Experienced" },
    { name: "C/C++", level: "Intermediate" },
    { name: "ROS 1/2", level: "Intermediate" },
    { name: "Git", level: "Intermediate" },
    { name: "Solidworks", level: "Intermediate" },
    { name: "Web Dev", level: "Basic" },
  ];

  const practicalSkills = [
    { name: "Research", level: "Experienced" },
    { name: "Prototyping", level: "Intermediate" },
    { name: "sRPAS", level: "Intermediate" },
    { name: "Electronics", level: "Intermediate" },
    { name: "CAD Design", level: "Advanced" },
    { name: "3D Printing", level: "Intermediate" },
  ];

  return (
    <section id="experience" className="section-padding px-4 bg-card/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold mb-2 text-sm uppercase tracking-wider">
            Explore My
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground" data-testid="experience-title">
            Experience
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Software Skills */}
          <div className="skill-card p-8 rounded-3xl" data-testid="software-skills-card">
            <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
              Software Skills
            </h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {softwareSkills.map((skill, index) => (
                <div key={index} className="flex items-center space-x-4" data-testid={`software-skill-${skill.name.toLowerCase().replace(/[/\s]/g, '-')}`}>
                  <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{skill.name}</h4>
                    <p className="text-sm text-muted-foreground">{skill.level}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Practical Skills */}
          <div className="skill-card p-8 rounded-3xl" data-testid="practical-skills-card">
            <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
              Practical Skills
            </h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {practicalSkills.map((skill, index) => (
                <div key={index} className="flex items-center space-x-4" data-testid={`practical-skill-${skill.name.toLowerCase().replace(/[/\s]/g, '-')}`}>
                  <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{skill.name}</h4>
                    <p className="text-sm text-muted-foreground">{skill.level}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
