
import { BriefcaseBusinessIcon, ChartBar, Computer, Users, Leaf } from "lucide-react";

const ExpertiseSection = () => {
  const expertiseAreas = [
    {
      icon: <BriefcaseBusinessIcon className="h-8 w-8 text-white" />,
      title: "Strategic Planning",
      description: "Developing comprehensive workplace strategies aligned with business goals"
    },
    {
      icon: <ChartBar className="h-8 w-8 text-white" />,
      title: "Performance Analytics",
      description: "Data-driven insights to optimize workplace efficiency"
    },
    {
      icon: <Computer className="h-8 w-8 text-white" />,
      title: "Technology Solutions",
      description: "Integration of modern workplace technologies and systems"
    },
    {
      icon: <Users className="h-8 w-8 text-white" />,
      title: "Change Management",
      description: "Guiding organizations through workplace transformations"
    },
    {
      icon: <Leaf className="h-8 w-8 text-white" />,
      title: "Sustainable Practices",
      description: "Implementing eco-friendly workplace solutions"
    }
  ];

  return (
    <section className="py-20 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            Our Expertise in Workplace Management
          </h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            Leveraging years of experience to deliver exceptional workplace solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseAreas.map((area, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
            >
              <div className="mb-6 p-4 bg-accent rounded-lg inline-block">
                {area.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">
                {area.title}
              </h3>
              <p className="text-white/80">
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
