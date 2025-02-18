
import { Button } from "@/components/ui/button";
import { TrendingUp } from "lucide-react";

const SuccessSection = () => {
  const caseStudies = [
    {
      title: "Tech Success in Bengaluru",
      description: "Provided a tech company with a team of software engineers, accelerating product development by 30%.",
      metric: "+30%",
      color: "from-[#FF9933] to-[#FF5733]"
    },
    {
      title: "Healthcare Excellence in Mumbai",
      description: "Staffed a healthcare facility with nurses and administrative staff, improving patient care efficiency by 25%.",
      metric: "+25%",
      color: "from-[#138808] to-[#0D6B0D]"
    },
    {
      title: "Manufacturing Innovation in Pune",
      description: "Recruited a logistics team for a manufacturing company, reducing supply chain costs by 20%.",
      metric: "-20%",
      color: "from-[#FF9933] to-[#138808]"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
            Success Stories
          </h2>
          <div className="w-24 h-1 bg-[#FF9933] mx-auto mb-8 animate-fade-in delay-100" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div 
              key={index} 
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${study.color} rounded-2xl opacity-10 group-hover:opacity-20 transition-opacity`} />
              <div className="relative bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in"
                   style={{ animationDelay: `${index * 200}ms` }}>
                <div className="flex items-center justify-between mb-6">
                  <TrendingUp className="h-8 w-8 text-[#FF9933]" />
                  <span className="text-3xl font-bold bg-gradient-to-r from-[#FF9933] to-[#138808] bg-clip-text text-transparent">
                    {study.metric}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{study.title}</h3>
                <p className="text-gray-600">{study.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-[#1A1F2C] hover:bg-[#1A1F2C]/90 text-white shadow-lg animate-pulse"
          >
            Read More Success Stories
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SuccessSection;
