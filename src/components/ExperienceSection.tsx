import { Briefcase, Calendar, Building2 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  highlights: string[];
  accent: "primary" | "secondary";
};

const experiences: ExperienceItem[] = [
  {
    role: "Java Developer Intern",
    company: "MARKDOT INTELLECT",
    period: "June 2025 – July 2025",
    highlights: [
      "Developed and optimized Java applications with clean, efficient, and scalable code",
      "Assisted in debugging, testing, and resolving issues to improve application performance",
      "Collaborated with the development team and maintained clear project documentation",
    ],
    accent: "primary",
  },
  {
    role: "Full Stack Developer Intern",
    company: "WEBGEN Technologies",
    period: "July 2024 – August 2024",
    highlights: [
      "Collaborated with designers to build intuitive user interfaces for mobile and desktop platforms",
      "Prepared reports and documentation related to project specifications and progress",
      "Developed and maintained front-end web applications using HTML, CSS, and JavaScript",
    ],
    accent: "secondary",
  },
];

const ExperienceSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation(0.1);

  return (
    <section id="experience" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="section-title">
            Experience & <span className="glow-text">Internships</span>
          </h2>
          <p className="text-muted-foreground font-outfit max-w-2xl mx-auto">
            Hands-on experience building real-world applications and collaborating with teams.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <ExperienceCard key={exp.company} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ExperienceCard = ({
  experience,
  index,
}: {
  experience: ExperienceItem;
  index: number;
}) => {
  const { ref, isVisible } = useScrollAnimation(0.15);

  const iconBgClass =
    experience.accent === "secondary"
      ? "bg-secondary/10 border-secondary/20"
      : "bg-primary/10 border-primary/20";

  const iconColorClass =
    experience.accent === "secondary" ? "text-secondary" : "text-primary";

  const accentColor =
    experience.accent === "secondary" ? "text-secondary" : "text-primary";

  return (
    <article
      ref={ref}
      className={`glass-panel glow-border p-8 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <header className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
        <div className="flex items-start gap-4">
          <div className={`p-3 rounded-xl border ${iconBgClass}`}>
            <Briefcase className={`w-6 h-6 ${iconColorClass}`} />
          </div>
          <div>
            <h3 className="font-rajdhani text-2xl font-bold text-foreground">
              {experience.role}
            </h3>
            <div className="flex items-center gap-2 mt-1">
              <Building2 className="w-4 h-4 text-muted-foreground" />
              <span className={`font-outfit font-medium ${accentColor}`}>
                {experience.company}
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-muted/20 border border-border/20">
          <Calendar className="w-4 h-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground font-outfit">
            {experience.period}
          </span>
        </div>
      </header>

      <ul className="space-y-3">
        {experience.highlights.map((highlight, i) => (
          <li
            key={i}
            className={`flex items-start gap-3 text-muted-foreground font-outfit transition-all duration-500 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
            }`}
            style={{ transitionDelay: `${index * 150 + i * 100 + 200}ms` }}
          >
            <span className={`mt-2 w-1.5 h-1.5 rounded-full ${experience.accent === "secondary" ? "bg-secondary" : "bg-primary"}`} />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default ExperienceSection;
