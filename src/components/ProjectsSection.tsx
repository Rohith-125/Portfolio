import { ExternalLink, Sparkles, Clock, Github } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface Project {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  comingSoon?: boolean;
}

const projects: Project[] = [
  {
    title: "Inbox'd",
    description:
      "A professional AI-powered email marketing automation platform that streamlines high-conversion outreach with real-time analytics and a dark mode dashboard.",
    tech: ["React", "Node.js", "Python", "AI/ML"],
    link: "https://github.com/Rohith-125/Inbox-d---Intelligent-Email-Campaigns-with-AI",
  },
  {
    title: "Kleio.ai",
    description:
      "A smart household assistant for Indian families, helping manage groceries, predict consumption, and reduce food waste with AI-powered recommendations.",
    tech: ["React", "Tailwind", "Python", "TensorFlow"],
    link: "https://github.com/Rohith-125/Kleio.ai",
  },
  {
    title: "More Projects",
    description:
      "Exciting new projects are in development. Stay tuned for innovative solutions that push the boundaries of web and AI technologies.",
    tech: ["Coming Soon"],
    comingSoon: true,
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  const cardContent = (
    <>
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          {project.comingSoon ? (
            <Clock className="w-6 h-6 text-secondary" />
          ) : (
            <Sparkles className="w-6 h-6 text-primary group-hover:rotate-12 transition-transform duration-300" />
          )}
          <h3 className="font-rajdhani text-2xl font-bold text-foreground">
            {project.title}
          </h3>
        </div>
        {!project.comingSoon && project.link && (
          <div className="p-2 rounded-lg bg-muted/30 border border-border/30 text-muted-foreground group-hover:text-primary group-hover:border-primary/30 transition-all duration-300 group-hover:scale-110">
            <Github className="w-5 h-5" />
          </div>
        )}
      </div>

      <p className="text-muted-foreground font-outfit leading-relaxed mb-6">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.tech.map((tech, i) => (
          <span
            key={i}
            className={`skill-tag ${
              project.comingSoon
                ? "bg-secondary/10 text-secondary border-secondary/20"
                : ""
            }`}
          >
            {tech}
          </span>
        ))}
      </div>
    </>
  );

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {project.comingSoon ? (
        <div className="glass-panel glow-border p-8 group opacity-70 cursor-default h-full">
          {cardContent}
        </div>
      ) : (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="glass-panel glow-border p-8 group cursor-pointer hover:scale-[1.02] transition-all duration-500 block h-full"
        >
          {cardContent}
        </a>
      )}
    </div>
  );
};

const ProjectsSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation(0.1);

  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div 
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="section-title">
            Featured <span className="glow-text">Projects</span>
          </h2>
          <p className="text-muted-foreground font-outfit max-w-2xl mx-auto">
            A selection of projects that showcase my expertise in building
            innovative, AI-powered solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
