
import { Button } from "@/components/ui/button";
import { TrendingUp } from "lucide-react";

const SuccessSection = () => {
  const caseStudies = [
    {
      title: "Case Study 1",
      description: "Provided a tech company in Silicon Valley with a team of software engineers, accelerating product development by 30%."
    },
    {
      title: "Case Study 2",
      description: "Staffed a healthcare facility in New York with nurses and administrative staff, improving patient care efficiency by 25%."
    },
    {
      title: "Case Study 3",
      description: "Recruited a logistics team for a manufacturing company in Detroit, reducing supply chain costs by 20%."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
          Success Stories: Driving Growth Across the U.S.
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mb-12">
          Our solutions have helped businesses across the United States achieve remarkable results:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {caseStudies.map((study, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="h-6 w-6 text-primary" />
                <h3 className="font-semibold text-xl">{study.title}</h3>
              </div>
              <p className="text-muted-foreground">{study.description}</p>
            </div>
          ))}
        </div>

        <Button 
          size="lg"
          className="bg-primary hover:bg-primary/90 text-white"
        >
          Read More Success Stories
        </Button>
      </div>
    </section>
  );
};

export default SuccessSection;
