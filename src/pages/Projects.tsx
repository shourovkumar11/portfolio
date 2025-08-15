import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Filter } from "lucide-react";
import { useState } from "react";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "React", "WordPress", "Vue.js", "JavaScript"];

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Modern React-based e-commerce solution with advanced filtering, cart management, payment integration, and admin dashboard. Built with performance and scalability in mind.",
      technologies: ["React", "TypeScript", "Stripe", "Tailwind CSS", "Node.js"],
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
      liveUrl: "#",
      githubUrl: "#",
      category: "React",
      featured: true
    },
    {
      id: 2,
      title: "WordPress Business Theme",
      description: "Custom WordPress theme for professional services with advanced customization options, SEO optimization, and responsive design. Includes custom post types and fields.",
      technologies: ["WordPress", "PHP", "JavaScript", "SASS", "MySQL"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      liveUrl: "#",
      githubUrl: "#",
      category: "WordPress",
      featured: true
    },
    {
      id: 3,
      title: "Analytics Dashboard",
      description: "Real-time analytics dashboard with interactive charts, data visualization, and responsive design. Features include user management and report generation.",
      technologies: ["Vue.js", "Chart.js", "REST API", "Bootstrap", "Express"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      liveUrl: "#",
      githubUrl: "#",
      category: "Vue.js",
      featured: true
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "Modern portfolio website with smooth animations, contact forms, and CMS integration. Built with performance and SEO optimization in mind.",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Netlify"],
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
      liveUrl: "#",
      githubUrl: "#",
      category: "React",
      featured: false
    },
    {
      id: 5,
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates, team collaboration features, and progress tracking.",
      technologies: ["JavaScript", "Socket.io", "MongoDB", "Express", "CSS3"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
      liveUrl: "#",
      githubUrl: "#",
      category: "JavaScript",
      featured: false
    },
    {
      id: 6,
      title: "Restaurant Website",
      description: "Beautiful restaurant website with online ordering system, reservation management, and menu customization features.",
      technologies: ["WordPress", "WooCommerce", "PHP", "jQuery", "SASS"],
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
      liveUrl: "#",
      githubUrl: "#",
      category: "WordPress",
      featured: false
    }
  ];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.technologies.includes(activeFilter));

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              My <span className="gradient-hero bg-clip-text text-transparent">Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A collection of my latest work showcasing modern web development practices, 
              creative solutions, and attention to detail.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-8 animate-fade-up">
            <div className="flex flex-wrap gap-2 p-2 bg-card rounded-lg border border-border">
              {filters.map((filter) => (
                <Button
                  key={filter}
                  variant={activeFilter === filter ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setActiveFilter(filter)}
                  className="transition-smooth"
                >
                  <Filter className="h-4 w-4 mr-2" />
                  {filter}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card 
                key={project.id} 
                className="overflow-hidden gradient-card border-border hover-lift group animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                  />
                  {project.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 text-xs font-semibold gradient-hero text-primary-foreground rounded-full">
                        Featured
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-card-foreground">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
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
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                      >
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        asChild
                      >
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Have a Project in Mind?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's work together to bring your ideas to life with modern, 
            scalable web solutions.
          </p>
          <Button variant="hero" size="lg" asChild>
            <a href="/contact">Start a Project</a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;