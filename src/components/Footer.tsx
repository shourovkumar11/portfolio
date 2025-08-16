import { Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Navigation",
      links: [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Projects", href: "/projects" },
        { label: "Contact", href: "/contact" },
      ]
    },
    {
      title: "Services",
      links: [
        { label: "Frontend Development", href: "/projects" },
        { label: "WordPress Development", href: "/projects" },
        { label: "UI/UX Design", href: "/projects" },
        { label: "Web Optimization", href: "/projects" },
      ]
    },
    {
      title: "Connect",
      links: [
        { label: "GitHub", href: "https://github.com", external: true },
        { label: "LinkedIn", href: "https://linkedin.com", external: true },
        { label: "Email", href: "mailto:developer@example.com", external: true },
        { label: "Resume", href: "#", external: true },
      ]
    }
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link 
              to="/" 
              className="text-2xl font-bold gradient-hero bg-clip-text text-transparent hover:scale-105 transition-smooth inline-block"
            >
              DevPortfolio
            </Link>
            <p className="mt-4 text-muted-foreground">
              Creating beautiful, functional web experiences with modern technologies 
              and attention to detail.
            </p>
            <div className="flex space-x-4 mt-6">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary hover:bg-accent transition-smooth hover:scale-110"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary hover:bg-accent transition-smooth hover:scale-110"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="mailto:developer@example.com"
                className="p-2 rounded-lg bg-secondary hover:bg-accent transition-smooth hover:scale-110"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-4 text-card-foreground">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-smooth"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        className="text-muted-foreground hover:text-primary transition-smooth"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {currentYear} DevPortfolio. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;