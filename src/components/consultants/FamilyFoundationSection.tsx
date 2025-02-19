
import { Shield, Users, Lightbulb } from "lucide-react";

const FamilyFoundationSection = () => {
  const values = [
    {
      icon: <Users className="h-12 w-12 text-white" />,
      title: "Strong Community",
      description: "Join a network of professionals who support and inspire each other."
    },
    {
      icon: <Shield className="h-12 w-12 text-white" />,
      title: "Career Security",
      description: "Build a stable career path with ongoing support and opportunities."
    },
    {
      icon: <Lightbulb className="h-12 w-12 text-white" />,
      title: "Continuous Growth",
      description: "Access mentorship programs and learning resources to advance your skills."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-primary to-primary/90 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            The Family Foundation
          </h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            Our strength lies in the connections we build. We foster an environment 
            where consultants feel valued, heard, and empowered.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="text-center p-8 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-colors"
            >
              <div className="inline-block mb-4">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">
                {value.title}
              </h3>
              <p className="text-white/90">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FamilyFoundationSection;
