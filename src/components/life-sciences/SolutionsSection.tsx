
import { Microscope, FileCheck, ClipboardList, Database, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const SolutionsSection = () => {
  const solutions = [
    {
      icon: <Microscope className="h-6 w-6" />,
      title: "Research and Development",
      description: "Scientists, researchers, and lab technicians to drive innovation"
    },
    {
      icon: <FileCheck className="h-6 w-6" />,
      title: "Regulatory Affairs",
      description: "Experts to ensure compliance with industry regulations"
    },
    {
      icon: <ClipboardList className="h-6 w-6" />,
      title: "Clinical Trials",
      description: "Professionals to manage and execute clinical studies"
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Data Science and Analytics",
      description: "Specialists to analyze and interpret complex data"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Leadership Talent",
      description: "Executives and managers to oversee strategic initiatives"
    }
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-6">
            Tailored Workforce Solutions for Life Sciences
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We offer a wide range of staffing and workforce solutions to meet 
            the needs of the life sciences industry
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-accent mb-4">{solution.icon}</div>
              <h3 className="text-xl font-semibold text-primary mb-3">{solution.title}</h3>
              <p className="text-gray-600">{solution.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-accent hover:bg-accent/90 text-white px-8"
          >
            Discover Our Workforce Solutions
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
