
import { Building2, Users2, ClipboardCheck, Scale, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";

const ApproachSection = () => {
  const approaches = [
    {
      icon: <Building2 className="h-6 w-6" />,
      title: "Industry Expertise",
      description: "We understand the complexities of life sciences and provide solutions tailored to your organization"
    },
    {
      icon: <Users2 className="h-6 w-6" />,
      title: "Talent Sourcing",
      description: "Our extensive network ensures access to highly skilled professionals"
    },
    {
      icon: <ClipboardCheck className="h-6 w-6" />,
      title: "Rigorous Screening",
      description: "We conduct thorough assessments to ensure candidates meet your requirements"
    },
    {
      icon: <Scale className="h-6 w-6" />,
      title: "Scalable Solutions",
      description: "Whether you need temporary staff or permanent hires, we've got you covered"
    },
    {
      icon: <Headphones className="h-6 w-6" />,
      title: "Ongoing Support",
      description: "We provide continuous support to ensure your workforce performs at its best"
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-6">
            Our Proven Approach to Life Sciences Staffing
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At Workist For IT, we take a strategic and customized approach to meet 
            the unique needs of the life sciences sector
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {approaches.map((approach, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-accent mb-4">{approach.icon}</div>
              <h3 className="text-xl font-semibold text-primary mb-3">{approach.title}</h3>
              <p className="text-gray-600">{approach.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-accent hover:bg-accent/90 text-white px-8"
          >
            See How We Work
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
