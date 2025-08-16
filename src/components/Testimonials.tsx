import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "Marketing Director",
    company: "TechStart Solutions",
    rating: 5,
    review: "Exceptional work on our company website. The design is modern, responsive, and exactly what we envisioned. Delivered on time and exceeded expectations.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "CEO",
    company: "Digital Innovations",
    rating: 5,
    review: "Outstanding WordPress development skills. Created a complex e-commerce site that performs flawlessly. Highly professional and great communication throughout.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    position: "Project Manager",
    company: "Creative Agency Co",
    rating: 5,
    review: "Transformed our outdated website into a stunning, user-friendly platform. The attention to detail and creative solutions were impressive.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 4,
    name: "David Thompson",
    position: "Founder",
    company: "Startup Hub",
    rating: 5,
    review: "Incredible front-end development work. The website loads fast, looks amazing on all devices, and our conversion rates have improved significantly.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 5,
    name: "Lisa Park",
    position: "Operations Manager",
    company: "Global Enterprises",
    rating: 5,
    review: "Professional, reliable, and talented. Delivered a complex WordPress site with custom functionality exactly as requested. Will definitely hire again.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 6,
    name: "Alex Kumar",
    position: "CTO",
    company: "InnovateTech",
    rating: 5,
    review: "Exceptional technical skills and creative vision. Built a responsive web application that perfectly matches our brand and business requirements.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
  }
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          className={`w-4 h-4 ${
            index < rating
              ? "fill-yellow-400 text-yellow-400"
              : "fill-muted text-muted-foreground"
          }`}
        />
      ))}
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="py-20 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Client Testimonials
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Don't just take my word for it. Here's what my clients say about working with me.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.id}
              className="gradient-card border-border/50 hover-lift group animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-border"
                  />
                  <div>
                    <h3 className="font-semibold text-foreground text-sm">
                      {testimonial.name}
                    </h3>
                    <p className="text-muted-foreground text-xs">
                      {testimonial.position}
                    </p>
                    <p className="text-accent text-xs font-medium">
                      {testimonial.company}
                    </p>
                  </div>
                </div>

                <StarRating rating={testimonial.rating} />

                <p className="text-muted-foreground text-sm mt-4 leading-relaxed">
                  "{testimonial.review}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full gradient-accent border border-border/50">
            <div className="flex">
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  className="w-5 h-5 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <span className="text-foreground font-semibold">5.0 Average Rating</span>
            <span className="text-muted-foreground">•</span>
            <span className="text-muted-foreground">50+ Happy Clients</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;