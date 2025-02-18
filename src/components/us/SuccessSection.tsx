
import { Button } from "@/components/ui/button";
import { TrendingUp } from "lucide-react";

const SuccessSection = () => {
  const caseStudies = [
    {
      title: "Case Study 1",
      description: "Provided a tech company in Silicon Valley with a team of software engineers, accelerating product development by 30%.",
      gradient: "from-blue-500/10 to-cyan-500/10"
    },
    {
      title: "Case Study 2",
      description: "Staffed a healthcare facility in New York with nurses and administrative staff, improving patient care efficiency by 25%.",
      gradient: "from-emerald-500/10 to-teal-500/10"
    },
    {
      title: "Case Study 3",
      description: "Recruited a logistics team for a manufacturing company in Detroit, reducing supply chain costs by 20%.",
      gradient: "from-orange-500/10 to-amber-500/10"
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
          Success Stories: Driving Growth Across the U.S.
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mb-12">
          Our solutions have helped businesses across the United States achieve remarkable results:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {caseStudies.map((study, index) => (
            <div 
              key={index} 
              className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-gradient-to-br ${study.gradient} backdrop-blur-sm`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-white p-2 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-xl text-gray-900">{study.title}</h3>
              </div>
              <p className="text-gray-700">{study.description}</p>
            </div>
          ))}
        </div>

        <Button 
          size="lg"
          className="bg-primary hover:bg-primary/90 text-white shadow-lg"
        >
          Read More Success Stories
        </Button>
      </div>
    </section>
  );
};

export default SuccessSection;
