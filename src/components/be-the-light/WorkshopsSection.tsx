
import { Button } from "@/components/ui/button";
import { FileText, Users, Code, UserSquare } from "lucide-react";

const WorkshopsSection = () => {
  const workshops = [
    {
      icon: <FileText className="h-8 w-8 text-primary" />,
      title: "Resume Building",
      description: "Learn how to create a standout resume that catches employers' attention."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Interview Preparation",
      description: "Master the art of acing interviews with confidence and poise."
    },
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: "Skill Development",
      description: "Gain insights into the most in-demand skills across industries."
    },
    {
      icon: <UserSquare className="h-8 w-8 text-primary" />,
      title: "Personal Branding",
      description: "Discover how to build a strong professional presence online and offline."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Career-Readiness Workshops
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#1EAEDB] to-[#F97316] rounded-full mx-auto" />
        </div>

        <div 
          className="relative"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
        >
          <div className="absolute inset-0 bg-primary/80 backdrop-blur-sm" />
          
          <div className="relative grid md:grid-cols-2 gap-8 p-8 md:p-12">
            {workshops.map((workshop, index) => (
              <div 
                key={workshop.title}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gray-50 rounded-lg">
                    {workshop.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">
                      {workshop.title}
                    </h3>
                    <p className="text-gray-600">
                      {workshop.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-[#F97316] hover:bg-[#F97316]/90 text-white"
          >
            Register for Workshops
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WorkshopsSection;
