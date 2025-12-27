import { Mail, Linkedin, Github, Send } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ContactSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation(0.1);
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation(0.1);
  
  const socialLinks = [
    {
      icon: Mail,
      label: "Email",
      href: "mailto:rohithm0125@gmail.com",
      value: "rohithm0125@gmail.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/rohith-iot",
      value: "rohith-iot",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Rohith-125",
      value: "Rohith-125",
    },
  ];

  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div 
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="section-title">
            Let's <span className="glow-text">Connect</span>
          </h2>
          <p className="text-muted-foreground font-outfit max-w-xl mx-auto">
            Have a project in mind or just want to chat? I'm always open to
            discussing new opportunities.
          </p>
        </div>

        <div 
          ref={contentRef}
          className={`glass-panel glow-border p-8 md:p-12 transition-all duration-700 delay-100 ${
            contentVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {socialLinks.map((social, index) => (
              <a
                key={social.label}
                href={social.href}
                target={social.label !== "Email" ? "_blank" : undefined}
                rel={social.label !== "Email" ? "noopener noreferrer" : undefined}
                className={`group flex flex-col items-center p-6 rounded-xl bg-muted/20 border border-border/20 hover:border-primary/30 hover:bg-primary/5 transition-all duration-500 ${
                  contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${index * 100 + 200}ms` }}
              >
                <div className="p-4 rounded-xl bg-muted/30 border border-border/30 mb-4 group-hover:border-primary/30 group-hover:bg-primary/10 transition-all duration-300">
                  <social.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                </div>
                <span className="font-rajdhani font-semibold text-foreground mb-1">
                  {social.label}
                </span>
                <span className="text-sm text-muted-foreground text-center break-all">
                  {social.value}
                </span>
              </a>
            ))}
          </div>

          <div className="text-center">
            <a
              href="mailto:rohithm0125@gmail.com"
              className="neon-button-primary inline-flex items-center gap-2"
            >
              <Send className="w-4 h-4" />
              Say Hello
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground text-sm font-outfit">
            © {new Date().getFullYear()} Rohith M. Built with{" "}
            <span className="text-primary">passion</span> and{" "}
            <span className="text-secondary">code</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
