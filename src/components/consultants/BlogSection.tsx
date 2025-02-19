
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const BlogSection = () => {
  const blogPosts = [
    {
      title: "Mastering Technical Interviews: A Complete Guide",
      category: "Career Advice",
      date: "March 15, 2024",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "The Future of Cloud Computing: Trends to Watch",
      category: "Industry Insights",
      date: "March 12, 2024",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Building a Strong Personal Brand in Tech",
      category: "Professional Growth",
      date: "March 10, 2024",
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Latest from Our Blog
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Stay informed with industry insights, career advice, success stories, and 
            the latest trends in recruitment, training, and IT development.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <div className="flex justify-between items-center text-sm text-muted-foreground mb-3">
                  <span>{post.category}</span>
                  <span>{post.date}</span>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-4">
                  {post.title}
                </h3>
                <Button variant="link" className="p-0 h-auto text-accent">
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            variant="outline"
            className="border-accent text-accent hover:bg-accent hover:text-white"
          >
            View All Posts
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
