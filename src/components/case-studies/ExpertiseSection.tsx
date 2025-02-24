
import { FileText, Database, Globe, TrendingUp, Brain } from "lucide-react";

const ExpertiseSection = () => {
  const expertiseAreas = [
    {
      icon: <FileText className="h-8 w-8 text-accent" />,
      title: "Comprehensive Analysis",
      description: "Detailed examination of successful implementations"
    },
    {
      icon: <Database className="h-8 w-8 text-accent" />,
      title: "Data-Driven Insights",
      description: "Actionable recommendations based on real-world data"
    },
    {
      icon: <Brain className="h-8 w-8 text-accent" />,
      title: "Industry-Specific Focus",
      description: "Tailored case studies for various sectors"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-accent" />,
      title: "Thought Leadership",
      description: "Establishing your organization as a leader"
    },
    {
      icon: <Globe className="h-8 w-8 text-accent" />,
      title: "Global Perspective",
      description: "Insights from a global network of experts"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-primary mb-4">
          Our Expertise in Case Studies
        </h2>
        
        <div className="w-32 h-2 bg-gradient-to-r from-[#1EAEDB] to-[#F97316] rounded-full mx-auto mb-12" />
        
        <p className="text-lg text-center text-muted mb-16 max-w-3xl mx-auto">
          With collaborations with over 100 top multinational companies (MNCs), 
          Workist For IT has a proven track record in delivering impactful case studies:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {expertiseAreas.map((area, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="mb-4 bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center">
                {area.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary">
                {area.title}
              </h3>
              <p className="text-muted">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
