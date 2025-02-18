
import { Flask, FileCheck, ClipboardList } from "lucide-react";
import { Button } from "@/components/ui/button";

const SuccessSection = () => {
  const successStories = [
    {
      icon: <Flask className="h-6 w-6" />,
      title: "Biotech Research Team",
      description: "Provided a biotech company with a team of researchers, accelerating the development of a new drug"
    },
    {
      icon: <FileCheck className="h-6 w-6" />,
      title: "Regulatory Success",
      description: "Recruited a regulatory affairs specialist for a pharmaceutical company, ensuring timely approval of a new treatment"
    },
    {
      icon: <ClipboardList className="h-6 w-6" />,
      title: "Clinical Trial Efficiency",
      description: "Staffed a clinical trials team for a research organization, improving trial efficiency by 25%"
    }
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-6">
            Success Stories: Driving Innovation in Life Sciences
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our solutions have helped life sciences organizations achieve remarkable results
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {successStories.map((story, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-accent mb-4">{story.icon}</div>
              <h3 className="text-xl font-semibold text-primary mb-3">{story.title}</h3>
              <p className="text-gray-600">{story.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-accent hover:bg-accent/90 text-white px-8"
          >
            Read More Success Stories
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SuccessSection;
