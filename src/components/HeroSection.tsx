import { ArrowDown, Code2, Sparkles, FileDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl floating" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl floating-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/3 to-transparent rounded-full blur-2xl" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Code badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/30 border border-border/30 backdrop-blur-sm mb-8 animate-fade-up">
          <Code2 className="w-4 h-4 text-primary" />
          <span className="text-sm text-muted-foreground font-outfit">
            Full-Stack Developer
          </span>
          <Sparkles className="w-4 h-4 text-secondary" />
        </div>

        {/* Main heading */}
        <h1 className="font-rajdhani text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-6 animate-fade-up animation-delay-200">
          <span className="text-foreground">Rohith</span>
          <span className="glow-text"> M</span>
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-muted-foreground font-outfit font-light max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-up animation-delay-400">
          Crafting Creative Code,{" "}
          <span className="text-foreground">From Python to Pixels</span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up animation-delay-600">
          <a href="#projects" className="neon-button-primary">
            View My Work
          </a>
          <a href="#contact" className="neon-button-outline">
            Get in Touch
          </a>
          <a
            href="/Rohith_Resume.pdf"
            download
            className="neon-button-outline flex items-center gap-2"
          >
            <FileDown className="w-4 h-4" />
            Resume
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-fade-up animation-delay-800">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <span className="text-xs font-outfit uppercase tracking-widest">
              Scroll
            </span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
