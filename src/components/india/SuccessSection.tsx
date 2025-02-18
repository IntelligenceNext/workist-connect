
import { Button } from "@/components/ui/button";
import { TrendingUp } from "lucide-react";

const SuccessSection = () => {
  const caseStudies = [
    {
      title: "Tech Success in Bengaluru",
      description: "Provided a tech company in Bengaluru with a team of software engineers, accelerating product development by 30%.",
      gradient: "from-[#FF9933]/10 to-[#FF9933]/20"
    },
    {
      title: "Healthcare Excellence in Mumbai",
      description: "Staffed a healthcare facility in Mumbai with nurses and administrative staff, improving patient care efficiency by 25%.",
      gradient: "from-[#138808]/10 to-[#138808]/20"
    },
    {
      title: "Manufacturing Innovation in Pune",
      description: "Recruited a logistics team for a manufacturing company in Pune, reducing supply chain costs by 20%.",
      gradient: "from-[#FF9933]/10 to-[#138808]/20"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-5"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80")',
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Success Stories: Driving Growth Across India
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mb-12">
          Our solutions have helped businesses across India achieve remarkable results:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {caseStudies.map((study, index) => (
            <div 
              key={index} 
              className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-gradient-to-br ${study.gradient} backdrop-blur-sm`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-white p-2 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-[#FF9933]" />
                </div>
                <h3 className="font-semibold text-xl text-gray-900">{study.title}</h3>
              </div>
              <p className="text-gray-700">{study.description}</p>
            </div>
          ))}
        </div>

        <Button 
          size="lg"
          className="bg-[#FF9933] hover:bg-[#FF9933]/90 text-white shadow-lg"
        >
          Read More Success Stories
        </Button>
      </div>
    </section>
  );
};

export default SuccessSection;
