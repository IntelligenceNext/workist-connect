
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const CaseStudiesSection = () => {
  const cases = [
    {
      title: "Digital Transformation Success",
      industry: "Technology",
      result: "25% increase in operational efficiency",
      description: "A tech company implemented digital transformation strategies from our white paper, increasing operational efficiency by 25%."
    },
    {
      title: "Sustainable Manufacturing",
      industry: "Manufacturing",
      result: "30% reduction in environmental impact",
      description: "A manufacturing firm adopted sustainability practices recommended in our white paper, reducing environmental impact by 30%."
    },
    {
      title: "Retail Growth Strategy",
      industry: "Retail",
      result: "20% boost in sales",
      description: "A retail chain used market trend insights from our white paper to boost sales by 20%."
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
          Case Studies and Success Stories
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {cases.map((caseStudy, index) => (
            <div 
              key={index}
              className="bg-gray-50 p-8 rounded-xl"
            >
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle2 className="h-6 w-6 text-[#F97316]" />
                <span className="text-sm font-medium text-muted-foreground">
                  {caseStudy.industry}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary">
                {caseStudy.title}
              </h3>
              <p className="text-lg font-semibold text-[#F97316] mb-4">
                {caseStudy.result}
              </p>
              <p className="text-muted-foreground">
                {caseStudy.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white text-lg px-8"
          >
            Download Case Studies
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
