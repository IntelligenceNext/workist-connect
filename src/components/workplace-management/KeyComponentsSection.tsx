
import { LayoutGrid, Users, Computer, Shield, Leaf } from "lucide-react";

const KeyComponentsSection = () => {
  const components = [
    {
      icon: <LayoutGrid className="h-8 w-8 text-accent" />,
      title: "Space Optimization",
      description: "Strategic planning and allocation of workspace to maximize efficiency and comfort"
    },
    {
      icon: <Users className="h-8 w-8 text-accent" />,
      title: "Employee Engagement",
      description: "Creating an environment that promotes collaboration and employee satisfaction"
    },
    {
      icon: <Computer className="h-8 w-8 text-accent" />,
      title: "Technology Integration",
      description: "Implementing smart solutions for seamless workplace operations"
    },
    {
      icon: <Shield className="h-8 w-8 text-accent" />,
      title: "Health and Safety",
      description: "Ensuring a secure and healthy work environment for all employees"
    },
    {
      icon: <Leaf className="h-8 w-8 text-accent" />,
      title: "Sustainability",
      description: "Promoting eco-friendly practices and sustainable workplace solutions"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-6">
            Key Components of Workplace Management
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our comprehensive approach addresses all critical aspects of modern workplace management
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {components.map((component, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="mb-6 p-4 bg-accent/10 rounded-lg inline-block">
                {component.icon}
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">
                {component.title}
              </h3>
              <p className="text-gray-600">
                {component.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyComponentsSection;
