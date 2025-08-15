import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, MapPin, Calendar, Award } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const timeline = [
    {
      year: "2023",
      title: "Senior Frontend Developer",
      company: "Tech Solutions Inc.",
      description: "Leading frontend development projects and mentoring junior developers."
    },
    {
      year: "2021",
      title: "WordPress Developer",
      company: "Creative Agency",
      description: "Specialized in custom WordPress themes and plugin development."
    },
    {
      year: "2019",
      title: "Junior Web Developer",
      company: "Digital Studio",
      description: "Started my professional journey in web development."
    }
  ];

  const achievements = [
    { number: "50+", label: "Projects Completed" },
    { number: "3+", label: "Years Experience" },
    { number: "20+", label: "Happy Clients" },
    { number: "5", label: "Technologies Mastered" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About <span className="gradient-hero bg-clip-text text-transparent">Me</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                I'm a passionate frontend developer with a love for creating beautiful, 
                functional web experiences. With expertise in modern frameworks and 
                WordPress development, I help businesses bring their digital visions to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button variant="gradient" asChild>
                  <a href="#" download>
                    <Download className="h-4 w-4" />
                    Download Resume
                  </a>
                </Button>
                <Button variant="modern" asChild>
                  <Link to="/contact">Get In Touch</Link>
                </Button>
              </div>
              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  San Francisco, CA
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  Available for freelance
                </div>
              </div>
            </div>
            <div className="animate-fade-up lg:animate-slide-right">
              <Card className="p-8 gradient-card shadow-elegant">
                <div className="grid grid-cols-2 gap-6">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2">
                        {achievement.number}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {achievement.label}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-16 bg-muted/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Professional Experience
            </h2>
            <p className="text-xl text-muted-foreground">
              My journey in web development
            </p>
          </div>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div 
                key={index} 
                className="flex items-start space-x-6 animate-fade-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full gradient-hero flex items-center justify-center text-primary-foreground font-bold">
                    {item.year.slice(-2)}
                  </div>
                </div>
                <Card className="flex-1 p-6 gradient-card hover-lift">
                  <div className="flex items-center mb-2">
                    <h3 className="text-xl font-semibold text-card-foreground">
                      {item.title}
                    </h3>
                    <Award className="h-5 w-5 ml-2 text-primary" />
                  </div>
                  <p className="text-primary font-medium mb-2">{item.company}</p>
                  <p className="text-muted-foreground">{item.description}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-8 gradient-card shadow-elegant animate-fade-up">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Beyond <span className="gradient-hero bg-clip-text text-transparent">Code</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-card-foreground">Philosophy</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I believe in writing clean, maintainable code and creating user experiences 
                  that are not just functional, but delightful. Every project is an opportunity 
                  to learn something new and push the boundaries of what's possible on the web.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-card-foreground">Interests</h3>
                <p className="text-muted-foreground leading-relaxed">
                  When I'm not coding, you'll find me exploring new technologies, contributing 
                  to open source projects, or sharing knowledge through blog posts and community 
                  talks. I'm also passionate about photography and outdoor adventures.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;