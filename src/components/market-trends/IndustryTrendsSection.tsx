
import { Globe, Laptop, Building2, Stethoscope } from "lucide-react";

const IndustryTrendsSection = () => {
  const industries = [
    {
      icon: <Laptop className="h-8 w-8 text-white" />,
      title: "Technology",
      trends: ["AI/ML Integration", "Cloud Migration", "Cybersecurity Focus"]
    },
    {
      icon: <Building2 className="h-8 w-8 text-white" />,
      title: "Financial Services",
      trends: ["Digital Banking", "Blockchain Solutions", "RegTech Growth"]
    },
    {
      icon: <Stethoscope className="h-8 w-8 text-white" />,
      title: "Healthcare",
      trends: ["Telemedicine", "AI Diagnostics", "Digital Health Records"]
    },
    {
      icon: <Globe className="h-8 w-8 text-white" />,
      title: "Manufacturing",
      trends: ["IoT Integration", "Smart Factories", "Supply Chain Tech"]
    }
  ];

  return (
    <section className="py-16 px-4 bg-primary text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Industry-Specific Trends
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((industry, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl"
            >
              <div className="mb-4">
                {industry.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">
                {industry.title}
              </h3>
              <ul className="space-y-2">
                {industry.trends.map((trend, tIndex) => (
                  <li key={tIndex} className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-accent rounded-full mr-2" />
                    {trend}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryTrendsSection;
