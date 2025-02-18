
import { Button } from "@/components/ui/button";
import { Briefcase, Users, CheckCircle, Scale, HeadphonesIcon } from "lucide-react";

const ApproachSection = () => {
  const approaches = [
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: "Industry Expertise",
      description: "We understand the complexities of various industries and provide tailored solutions."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Talent Sourcing",
      description: "Our extensive network ensures access to highly skilled professionals."
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Rigorous Screening",
      description: "We conduct thorough assessments to ensure candidates meet your requirements."
    },
    {
      icon: <Scale className="h-6 w-6" />,
      title: "Scalable Solutions",
      description: "Whether you need temporary staff or permanent hires, we've got you covered."
    },
    {
      icon: <HeadphonesIcon className="h-6 w-6" />,
      title: "Ongoing Support",
      description: "We provide continuous support to ensure your workforce performs at its best."
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-br from-[#FF9933]/5 to-[#138808]/5">
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Our Proven Approach to Workforce Solutions
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mb-12">
          At Workist For IT, we take a strategic and customized approach to meet the unique needs of businesses in India.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {approaches.map((approach, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="bg-[#FF9933]/10 p-3 rounded-lg w-fit mb-4">
                <div className="text-[#FF9933]">{approach.icon}</div>
              </div>
              <h3 className="font-semibold text-xl mb-3 text-gray-900">{approach.title}</h3>
              <p className="text-gray-700">{approach.description}</p>
            </div>
          ))}
        </div>

        <Button 
          size="lg"
          className="bg-[#138808] hover:bg-[#138808]/90 text-white shadow-lg"
        >
          See How We Work
        </Button>
      </div>
    </section>
  );
};

export default ApproachSection;
