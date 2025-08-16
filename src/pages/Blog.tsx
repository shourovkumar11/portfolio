import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Building Scalable React Applications with TypeScript",
      excerpt: "Learn how to structure large React applications using TypeScript for better maintainability and developer experience.",
      content: "In this comprehensive guide, we'll explore best practices for building scalable React applications with TypeScript. From project structure to advanced type patterns...",
      author: "John Doe",
      date: "2024-01-15",
      readTime: "8 min read",
      tags: ["React", "TypeScript", "Architecture"],
      featured: true
    },
    {
      id: 2,
      title: "Modern CSS Techniques: Grid, Flexbox, and Beyond",
      excerpt: "Discover the latest CSS features and how to use them effectively in your web projects.",
      content: "CSS has evolved tremendously in recent years. Let's dive into modern layout techniques and advanced CSS features that will elevate your frontend skills...",
      author: "John Doe",
      date: "2024-01-10",
      readTime: "6 min read",
      tags: ["CSS", "Layout", "Frontend"]
    },
    {
      id: 3,
      title: "WordPress Development Best Practices in 2024",
      excerpt: "Essential tips and modern approaches for WordPress development that every developer should know.",
      content: "WordPress continues to power a significant portion of the web. Here are the best practices and modern development approaches you should adopt...",
      author: "John Doe",
      date: "2024-01-05",
      readTime: "10 min read",
      tags: ["WordPress", "PHP", "Best Practices"]
    },
    {
      id: 4,
      title: "The Future of Web Development: Trends to Watch",
      excerpt: "Exploring emerging technologies and trends that will shape the future of web development.",
      content: "As we move forward, several key trends are emerging in web development. From AI integration to new frameworks, let's explore what's coming next...",
      author: "John Doe",
      date: "2023-12-28",
      readTime: "7 min read",
      tags: ["Trends", "Future", "Technology"]
    },
    {
      id: 5,
      title: "Performance Optimization for React Apps",
      excerpt: "Practical techniques to improve the performance of your React applications and deliver better user experiences.",
      content: "Performance is crucial for user experience. In this article, we'll cover various optimization techniques specifically for React applications...",
      author: "John Doe",
      date: "2023-12-20",
      readTime: "9 min read",
      tags: ["React", "Performance", "Optimization"]
    }
  ];

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              My <span className="gradient-hero bg-clip-text text-transparent">Blog</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Insights, tutorials, and thoughts on web development, technology trends, 
              and everything in between. Join me on this journey of continuous learning.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8 animate-fade-up">
              <h2 className="text-2xl font-bold mb-4">Featured Post</h2>
            </div>
            <Card className="p-8 gradient-card shadow-elegant animate-fade-up hover-lift">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center space-x-2 mb-4">
                    <Badge variant="secondary">Featured</Badge>
                    {featuredPost.tags.map((tag, index) => (
                      <Badge key={index} variant="outline">{tag}</Badge>
                    ))}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-card-foreground">
                    {featuredPost.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center space-x-6 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-2" />
                      {featuredPost.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      {new Date(featuredPost.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  <Button variant="gradient">
                    Read Article
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
                <div className="lg:order-first">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
                    <div className="text-6xl opacity-50">📚</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="pb-16 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 animate-fade-up">
            <h2 className="text-3xl font-bold mb-4">Latest Articles</h2>
            <p className="text-xl text-muted-foreground">
              Explore my latest thoughts and tutorials
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <Card 
                key={post.id} 
                className="p-6 gradient-card hover-lift animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg mb-6 flex items-center justify-center">
                  <div className="text-4xl opacity-50">
                    {post.tags[0] === 'React' ? '⚛️' : 
                     post.tags[0] === 'CSS' ? '🎨' : 
                     post.tags[0] === 'WordPress' ? '📝' : 
                     post.tags[0] === 'Trends' ? '🚀' : '💻'}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-card-foreground line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>
                
                <Button variant="modern" className="w-full">
                  Read More
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-8 gradient-card shadow-elegant text-center animate-fade-up">
            <h2 className="text-3xl font-bold mb-4">
              Stay <span className="gradient-hero bg-clip-text text-transparent">Updated</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Subscribe to get notified about new blog posts and updates
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg border border-border bg-background text-foreground"
              />
              <Button variant="gradient">
                Subscribe
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;