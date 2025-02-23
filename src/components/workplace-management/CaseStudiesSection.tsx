
import { Award, ChartBarIcon, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const CaseStudiesSection = () => {
  const caseStudies = [
    {
      icon: <Award className="h-12 w-12 text-accent" />,
      title: "Global Tech Company",
      metric: "40% Increase",
      description: "in workplace efficiency through our strategic space optimization solutions"
    },
    {
      icon: <ChartBarIcon className="h-12 w-12 text-accent" />,
      title: "Financial Services Firm",
      metric: "50% Reduction",
      description: "in operational costs after implementing our workplace management system"
    },
    {
      icon: <Users className="h-12 w-12 text-accent" />,
      title: "Healthcare Organization",
      metric: "90% Satisfaction",
      description: "rate among employees following workplace transformation project"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-6">
            Case Studies and Success Stories
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Real results from our workplace management solutions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {caseStudies.map((study, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center"
            >
              <div className="mb-6 flex justify-center">
                {study.icon}
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">
                {study.title}
              </h3>
              <div className="text-2xl font-bold text-accent mb-4">
                {study.metric}
              </div>
              <p className="text-gray-600">
                {study.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg"
            className="bg-accent hover:bg-accent/90 text-white px-8"
          >
            View All Case Studies
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
