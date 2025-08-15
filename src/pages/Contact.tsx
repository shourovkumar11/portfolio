import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Github, 
  Linkedin, 
  Send,
  MessageCircle
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "developer@example.com",
      description: "Send me an email anytime!"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      value: "+1 (555) 123-4567",
      description: "Mon-Fri from 8am to 6pm PST"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      value: "San Francisco, CA",
      description: "Available for remote work"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Response Time",
      value: "Within 24 hours",
      description: "I'll get back to you quickly"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      href: "https://github.com",
      username: "@developer"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      href: "https://linkedin.com",
      username: "@developer"
    },
    {
      icon: <MessageCircle className="h-5 w-5" />,
      label: "Discord",
      href: "#",
      username: "developer#1234"
    }
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Message sent successfully!",
      description: "Thank you for reaching out. I'll get back to you within 24 hours.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Let's <span className="gradient-hero bg-clip-text text-transparent">Connect</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to start your next project or just want to chat about web development? 
              I'd love to hear from you!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Contact Form */}
            <div className="lg:col-span-2 animate-fade-up">
              <Card className="p-8 gradient-card shadow-elegant">
                <h2 className="text-2xl font-bold mb-6 text-card-foreground">
                  Send me a message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        required
                        placeholder="Your name"
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="your.email@example.com"
                        className="mt-2"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      required
                      placeholder="What's this about?"
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="budget">Project Budget (Optional)</Label>
                    <Input
                      id="budget"
                      name="budget"
                      placeholder="e.g., $5,000 - $10,000"
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      placeholder="Tell me about your project or say hello!"
                      rows={6}
                      className="mt-2"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    variant="hero" 
                    size="lg" 
                    disabled={isSubmitting}
                    className="w-full md:w-auto"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-6 animate-fade-up lg:animate-slide-right">
              <Card className="p-6 gradient-card shadow-card">
                <h3 className="text-xl font-semibold mb-6 text-card-foreground">
                  Get in touch
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary">
                        {item.icon}
                      </div>
                      <div>
                        <p className="font-semibold text-card-foreground">{item.title}</p>
                        <p className="text-primary">{item.value}</p>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-6 gradient-card shadow-card">
                <h3 className="text-xl font-semibold mb-6 text-card-foreground">
                  Follow me
                </h3>
                <div className="space-y-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-smooth hover:scale-105"
                    >
                      <div className="text-primary">
                        {social.icon}
                      </div>
                      <div>
                        <p className="font-medium text-card-foreground">{social.label}</p>
                        <p className="text-sm text-muted-foreground">{social.username}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </Card>

              <Card className="p-6 gradient-card shadow-card">
                <h3 className="text-xl font-semibold mb-4 text-card-foreground">
                  Quick Response
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  I typically respond to messages within 24 hours. For urgent projects, 
                  please mention it in your message and I'll prioritize accordingly.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Quick answers to common questions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                question: "What's your typical project timeline?",
                answer: "Most projects take 2-6 weeks depending on complexity. I provide detailed timelines during our initial consultation."
              },
              {
                question: "Do you work with clients remotely?",
                answer: "Yes! I work with clients worldwide. I'm comfortable with video calls, project management tools, and async communication."
              },
              {
                question: "What technologies do you specialize in?",
                answer: "I specialize in React, TypeScript, WordPress, and modern CSS frameworks. I'm always learning new technologies."
              },
              {
                question: "Do you provide ongoing maintenance?",
                answer: "Absolutely! I offer maintenance packages to keep your website updated, secure, and performing optimally."
              }
            ].map((faq, index) => (
              <Card 
                key={index} 
                className="p-6 gradient-card hover-lift animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="font-semibold mb-3 text-card-foreground">
                  {faq.question}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {faq.answer}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;