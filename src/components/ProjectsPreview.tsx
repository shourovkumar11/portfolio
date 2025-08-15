import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ProjectsPreview = () => {
  const featuredProjects = [
    {
      title: "E-Commerce Platform",
      description: "Modern React-based e-commerce solution with advanced filtering, cart management, and payment integration.",
      technologies: ["React", "TypeScript", "Stripe", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "WordPress Business Theme",
      description: "Custom WordPress theme for professional services with advanced customization options and SEO optimization.",
      technologies: ["WordPress", "PHP", "JavaScript", "SASS"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Dashboard Analytics",
      description: "Real-time analytics dashboard with interactive charts, data visualization, and responsive design.",
      technologies: ["Vue.js", "Chart.js", "REST API", "Bootstrap"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work demonstrating modern web development practices
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <Card 
              key={index} 
              className="overflow-hidden gradient-card border-border hover-lift group animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 text-xs font-medium bg-accent/20 text-accent-foreground rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-smooth"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-smooth"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center animate-fade-up">
          <Button variant="gradient" size="lg" asChild>
            <Link to="/projects">
              View All Projects
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPreview;