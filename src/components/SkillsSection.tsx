import { Card } from "@/components/ui/card";
import { 
  Palette, 
  Code, 
  Smartphone, 
  Zap,
  Database,
  Globe
} from "lucide-react";

const SkillsSection = () => {
  const skills = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Frontend Development",
      description: "React, Vue.js, TypeScript, JavaScript ES6+",
      technologies: ["React", "Vue.js", "TypeScript", "JavaScript", "Next.js"]
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "UI/UX Design",
      description: "Responsive design, CSS3, Tailwind CSS, SASS",
      technologies: ["Tailwind CSS", "SASS", "CSS3", "Figma", "Adobe XD"]
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "WordPress Development",
      description: "Custom themes, plugins, and full-stack solutions",
      technologies: ["WordPress", "PHP", "MySQL", "WooCommerce", "ACF"]
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Responsive Design",
      description: "Mobile-first approach, cross-browser compatibility",
      technologies: ["Mobile-First", "Flexbox", "Grid", "Bootstrap", "PWA"]
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Backend Integration",
      description: "RESTful APIs, GraphQL, database management",
      technologies: ["REST API", "GraphQL", "Node.js", "MongoDB", "MySQL"]
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Performance Optimization",
      description: "SEO, speed optimization, modern build tools",
      technologies: ["Webpack", "Vite", "SEO", "Lighthouse", "Analytics"]
    }
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive skill set covering modern web development technologies and best practices
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <Card 
              key={index} 
              className="p-6 gradient-card border-border hover-lift animate-fade-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-primary mb-4 group-hover:scale-110 transition-smooth">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-card-foreground">
                {skill.title}
              </h3>
              <p className="text-muted-foreground mb-4">
                {skill.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {skill.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;