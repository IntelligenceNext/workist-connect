
import { Card, CardContent } from "@/components/ui/card";
import { HardHat, Wrench, Users, Shield, BrainCircuit } from "lucide-react";

const SolutionsSection = () => {
  const solutions = [
    {
      icon: <HardHat className="h-8 w-8 text-accent" />,
      title: "Construction Professionals",
      description: "Skilled workers for site management, engineering, and trades."
    },
    {
      icon: <Wrench className="h-8 w-8 text-accent" />,
      title: "Renewable Energy Experts",
      description: "Specialists in solar, wind, and other sustainable energy technologies."
    },
    {
      icon: <Users className="h-8 w-8 text-accent" />,
      title: "Project Managers",
      description: "Leaders to oversee complex projects and ensure timely delivery."
    },
    {
      icon: <Shield className="h-8 w-8 text-accent" />,
      title: "Safety and Compliance Officers",
      description: "Professionals to ensure adherence to safety standards and regulations."
    },
    {
      icon: <BrainCircuit className="h-8 w-8 text-accent" />,
      title: "Leadership Talent",
      description: "Executives and managers to drive strategic growth and innovation."
    }
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Tailored Workforce Solutions for Construction & Energy
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We offer a wide range of staffing and workforce solutions to meet the 
            needs of the construction and energy sectors. Our specialized talent 
            pool ensures you have access to the right professionals for your projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {solutions.map((solution, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 bg-accent/10 rounded-lg mb-4">
                    {solution.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    {solution.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {solution.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SolutionsSection;
