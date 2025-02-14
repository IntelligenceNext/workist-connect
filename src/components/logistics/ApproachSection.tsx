
import { Button } from "@/components/ui/button";
import { 
  Lightbulb, Users, CheckCircle2, 
  Scale, Headphones 
} from "lucide-react";

const ApproachSection = () => {
  const approaches = [
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Industry Expertise",
      description: "We understand the complexities of logistics and provide tailored solutions"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Talent Sourcing",
      description: "Our extensive network ensures access to highly skilled professionals"
    },
    {
      icon: <CheckCircle2 className="h-8 w-8" />,
      title: "Rigorous Screening",
      description: "We conduct thorough assessments to ensure perfect candidate fit"
    },
    {
      icon: <Scale className="h-8 w-8" />,
      title: "Scalable Solutions",
      description: "Solutions for peak seasons or permanent hires for long-term growth"
    },
    {
      icon: <Headphones className="h-8 w-8" />,
      title: "Ongoing Support",
      description: "We provide continuous support to ensure your workforce performs at its best"
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-6">
            Our Proven Approach to Logistics Staffing
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At Workist For IT, we take a strategic and customized approach to meet 
            the unique needs of the logistics and distribution sector.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {approaches.map((approach, index) => (
            <div 
              key={index}
              className="text-center p-6"
            >
              <div className="text-[#F97316] mb-4 flex justify-center">
                {approach.icon}
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                {approach.title}
              </h3>
              <p className="text-gray-600">{approach.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white px-8"
          >
            See How We Work
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
