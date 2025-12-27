import { Code, Wrench } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const SkillsSection = () => {
  const languages = ["Python", "Java", "HTML", "CSS", "JavaScript", "MySQL"];
  const tools = ["React.js", "Node.js", "FastAPI", "Git & GitHub"];
  
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation(0.1);
  const { ref: langRef, isVisible: langVisible } = useScrollAnimation(0.1);
  const { ref: toolsRef, isVisible: toolsVisible } = useScrollAnimation(0.1);

  return (
    <section id="skills" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div 
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="section-title">
            Skills & <span className="glow-text">Expertise</span>
          </h2>
          <p className="text-muted-foreground font-outfit max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Languages */}
          <div 
            ref={langRef}
            className={`glass-panel glow-border p-8 transition-all duration-700 ${
              langVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                <Code className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-rajdhani text-2xl font-bold text-foreground">
                Languages
              </h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {languages.map((lang, index) => (
                <span
                  key={lang}
                  className={`skill-tag transition-all duration-500 ${
                    langVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${index * 100 + 200}ms` }}
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>

          {/* Tools & Frameworks */}
          <div 
            ref={toolsRef}
            className={`glass-panel glow-border p-8 transition-all duration-700 delay-100 ${
              toolsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-secondary/10 border border-secondary/20">
                <Wrench className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-rajdhani text-2xl font-bold text-foreground">
                Tools & Frameworks
              </h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {tools.map((tool, index) => (
                <span
                  key={tool}
                  className={`skill-tag transition-all duration-500 ${
                    toolsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${index * 100 + 200}ms` }}
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
