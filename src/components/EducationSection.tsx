import { GraduationCap, MapPin, Calendar } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

type EducationItem = {
  title: string;
  institution: string;
  location: string;
  period: string;
  highlight?: "primary" | "secondary";
};

const education: EducationItem[] = [
  {
    title: "B.E CSE (IOT)",
    institution: "SNS College of Engineering",
    location: "Coimbatore",
    period: "2022 - Present",
    highlight: "primary",
  },
  {
    title: "Higher Secondary Education",
    institution: "Sri Ramakrishna Matriculation Higher Secondary School",
    location: "Coimbatore",
    period: "2020 - 2022",
    highlight: "secondary",
  },
];

const EducationSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation(0.1);

  return (
    <section id="education" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="section-title">
            Education <span className="glow-text">Timeline</span>
          </h2>
          <p className="text-muted-foreground font-outfit max-w-2xl mx-auto">
            My academic path and the foundation behind my engineering mindset.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {education.map((item, index) => (
            <EducationCard key={item.title} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const EducationCard = ({
  item,
  index,
}: {
  item: EducationItem;
  index: number;
}) => {
  const { ref, isVisible } = useScrollAnimation(0.15);

  const iconBgClass =
    item.highlight === "secondary"
      ? "bg-secondary/10 border-secondary/20"
      : "bg-primary/10 border-primary/20";

  const iconColorClass =
    item.highlight === "secondary" ? "text-secondary" : "text-primary";

  return (
    <article
      ref={ref}
      className={`glass-panel glow-border p-8 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <header className="flex items-start gap-4">
        <div className={`p-3 rounded-xl border ${iconBgClass}`}>
          <GraduationCap className={`w-6 h-6 ${iconColorClass}`} />
        </div>
        <div>
          <h3 className="font-rajdhani text-2xl font-bold text-foreground">
            {item.title}
          </h3>
          <p className="text-muted-foreground font-outfit mt-1">
            {item.institution}
          </p>
        </div>
      </header>

      <div className="mt-6 grid sm:grid-cols-2 gap-4">
        <div className="flex items-center gap-3 rounded-xl bg-muted/20 border border-border/20 px-4 py-3">
          <MapPin className="w-4 h-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground font-outfit">
            {item.location}
          </span>
        </div>
        <div className="flex items-center gap-3 rounded-xl bg-muted/20 border border-border/20 px-4 py-3">
          <Calendar className="w-4 h-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground font-outfit">
            {item.period}
          </span>
        </div>
      </div>
    </article>
  );
};

export default EducationSection;
