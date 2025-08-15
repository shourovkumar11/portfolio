import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-workspace.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-background/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-up">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-card/50 border border-border mb-8 backdrop-blur-sm">
            <span className="text-sm text-muted-foreground">👋 Welcome to my portfolio</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="block text-foreground">Front-End</span>
            <span className="block gradient-hero bg-clip-text text-transparent">
              Developer
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Crafting beautiful, responsive web experiences with modern technologies.
            Specializing in React, TypeScript, and WordPress development.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="lg" asChild>
              <Link to="/projects">
                View My Work
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="modern" size="lg" asChild>
              <Link to="/contact">Get In Touch</Link>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card/50 border border-border hover:bg-card hover:shadow-card transition-smooth hover:scale-110"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card/50 border border-border hover:bg-card hover:shadow-card transition-smooth hover:scale-110"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="mailto:developer@example.com"
              className="p-3 rounded-full bg-card/50 border border-border hover:bg-card hover:shadow-card transition-smooth hover:scale-110"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-border rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;