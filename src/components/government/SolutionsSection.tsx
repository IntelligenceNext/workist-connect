
import { ShieldCheck, Users, Briefcase, Scale, UserCog } from "lucide-react";
import { Button } from "@/components/ui/button";

const SolutionsSection = () => {
  const solutions = [
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: "IT and Cybersecurity Experts",
      description: "Professionals to protect data and modernize systems"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Administrative Support",
      description: "Skilled staff for day-to-day operations and customer service"
    },
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: "Project Managers",
      description: "Leaders to oversee complex initiatives and ensure timely delivery"
    },
    {
      icon: <Scale className="h-6 w-6" />,
      title: "Policy and Compliance Specialists",
      description: "Experts to navigate regulatory requirements"
    },
    {
      icon: <UserCog className="h-6 w-6" />,
      title: "Leadership Talent",
      description: "Executives and managers to drive strategic growth and innovation"
    }
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-6">
            Tailored Workforce Solutions for Government Agencies
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We offer a wide range of staffing and workforce solutions to meet 
            the needs of government agencies
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
