import { Cpu, Zap, Globe } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AboutSection = () => {
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation(0.1);
  
  const highlights = [
    {
      icon: Globe,
      title: "Full-Stack",
      description: "End-to-end development",
    },
    {
      icon: Cpu,
      title: "AI-Powered",
      description: "Machine learning integration",
    },
    {
      icon: Zap,
      title: "High-Performance",
      description: "Optimized for speed",
    },
  ];

  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div 
          ref={contentRef}
          className={`transition-all duration-700 ${
            contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="section-title text-center">
            About <span className="glow-text">Me</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-outfit font-light mb-10 text-center max-w-3xl mx-auto">
            Full-Stack Developer. AI Enthusiast. I build high-performance web
            apps that bridge the gap between{" "}
            <span className="text-foreground font-medium">
              human intuition
            </span>{" "}
            and{" "}
            <span className="text-foreground font-medium">
              machine intelligence
            </span>
            .
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {highlights.map((item, index) => (
              <div
                key={index}
                className={`glass-panel glow-border px-5 py-4 flex items-center gap-3 group cursor-default transition-all duration-500 ${
                  contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${index * 100 + 300}ms` }}
              >
                <item.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <p className="font-rajdhani font-semibold text-foreground">
                    {item.title}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
