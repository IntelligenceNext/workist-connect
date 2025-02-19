
import { Button } from "@/components/ui/button";
import { FileText, Users, TrendingUp, Rocket } from "lucide-react";

const GettingStartedSection = () => {
  const steps = [
    {
      icon: <FileText className="h-8 w-8 text-accent" />,
      title: "Resume Building",
      description: "Get expert help crafting a resume that highlights your unique skills and experiences."
    },
    {
      icon: <Users className="h-8 w-8 text-accent" />,
      title: "Interview Preparation",
      description: "Receive comprehensive interview coaching and preparation support."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-accent" />,
      title: "Technical Training",
      description: "Access our extensive training resources and upskilling programs."
    },
    {
      icon: <Rocket className="h-8 w-8 text-accent" />,
      title: "Market Insights",
      description: "Stay informed about industry trends and market opportunities."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Getting Started
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            Joining Workist For IT is simple. Whether you're an experienced consultant 
            or a fresh talent, we guide you through every step.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="p-3 bg-accent/10 rounded-lg inline-block mb-4">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-accent hover:bg-accent/90 text-white"
          >
            Start Your Journey
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GettingStartedSection;
