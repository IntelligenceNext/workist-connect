
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CaseStudiesSection = () => {
  const caseStudies = [
    {
      title: "Digital Transformation in Healthcare",
      description: "How we helped a major healthcare provider modernize their IT infrastructure.",
      impact: "30% increase in operational efficiency"
    },
    {
      title: "FinTech Innovation Strategy",
      description: "Developing a blockchain solution for a leading financial institution.",
      impact: "50% reduction in transaction processing time"
    },
    {
      title: "Manufacturing IoT Integration",
      description: "Implementing smart factory solutions for a global manufacturer.",
      impact: "25% improvement in production efficiency"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
          Success Stories
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">
                {study.title}
              </h3>
              <p className="text-muted mb-4">
                {study.description}
              </p>
              <div className="bg-primary/5 p-4 rounded-lg">
                <p className="text-accent font-semibold">
                  Impact: {study.impact}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="default"
            size="lg"
            className="bg-accent hover:bg-accent/90"
          >
            View All Case Studies
            <ArrowRight className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
