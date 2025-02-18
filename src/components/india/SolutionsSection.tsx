
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
      description: "Customized staffing for IT, healthcare, manufacturing, and more."
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#FF9933]/5 to-[#138808]/5" />
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-5"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80")',
        }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Tailored Workforce Solutions for the Indian Market
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mb-12">
          We offer a wide range of workforce solutions designed to meet the unique needs of businesses in India:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {solutions.map((solution, index) => (
            <div 
              key={index} 
              className="group p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
            >
              <div className="bg-[#FF9933]/10 p-3 rounded-lg w-fit mb-4 group-hover:bg-[#FF9933]/20 transition-colors">
                <div className="text-[#FF9933]">{solution.icon}</div>
              </div>
              <h3 className="font-semibold text-xl mb-3 text-gray-900">{solution.title}</h3>
              <p className="text-gray-700">{solution.description}</p>
            </div>
          ))}
        </div>

        <Button 
          size="lg"
          className="bg-[#138808] hover:bg-[#138808]/90 text-white shadow-lg"
        >
          Discover Our Workforce Solutions
        </Button>
      </div>
    </section>
  );
};

export default SolutionsSection;
