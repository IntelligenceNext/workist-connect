
import { Users, Code, BarChart, Building2, Globe } from "lucide-react";

const expertiseItems = [
  {
    icon: <Users className="h-6 w-6" />,
    title: "IT Staffing",
    description: "Providing skilled professionals for temporary, permanent, and project-based roles."
  },
  {
    icon: <Code className="h-6 w-6" />,
    title: "Technology Solutions",
    description: "Delivering innovative IT solutions tailored to your business needs."
  },
  {
    icon: <BarChart className="h-6 w-6" />,
    title: "Workforce Optimization",
    description: "Helping organizations streamline operations and improve efficiency."
  },
  {
    icon: <Building2 className="h-6 w-6" />,
    title: "Industry-Specific Solutions",
    description: "Customized services for sectors like healthcare, manufacturing, retail, and more."
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Global Reach",
    description: "Serving clients across the globe with a focus on quality and excellence."
  }
];

const ExpertiseSection = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-primary mb-16">
          Our Expertise
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseItems.map((item, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="inline-block mb-4 bg-primary/5 p-4 rounded-full">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary">
                {item.title}
              </h3>
              <p className="text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            With years of experience and collaborations with over 100 top multinational 
            companies (MNCs), Workist For IT has established itself as a trusted partner 
            in the IT and workforce solutions industry.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
