
import { Button } from "@/components/ui/button";
import { Clock, Users, Cog, Crown, Briefcase } from "lucide-react";

const SolutionsSection = () => {
  const solutions = [
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Temporary Staffing",
      description: "Quick access to skilled professionals for short-term projects."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Permanent Placements",
      description: "Finding the right talent for long-term roles."
    },
    {
      icon: <Cog className="h-6 w-6" />,
      title: "Managed Services",
      description: "Outsourcing workforce management to streamline operations."
    },
    {
      icon: <Crown className="h-6 w-6" />,
      title: "Executive Search",
      description: "Identifying top leadership talent to drive strategic growth."
    },
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: "Industry-Specific Solutions",
      description: "Customized staffing for tech, healthcare, manufacturing, and more."
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
          Tailored Workforce Solutions for the U.S. Market
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mb-12">
          We offer a wide range of workforce solutions designed to meet the unique needs of businesses in the United States:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {solutions.map((solution, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-md">
              <div className="text-primary mb-4">{solution.icon}</div>
              <h3 className="font-semibold text-xl mb-3">{solution.title}</h3>
              <p className="text-muted-foreground">{solution.description}</p>
            </div>
          ))}
        </div>

        <Button 
          size="lg"
          className="bg-primary hover:bg-primary/90 text-white"
        >
          Discover Our Workforce Solutions
        </Button>
      </div>
    </section>
  );
};

export default SolutionsSection;
