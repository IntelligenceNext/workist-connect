
import { Button } from "@/components/ui/button";
import { 
  Briefcase, Globe, Settings, Trophy, Shield 
} from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <Briefcase className="h-12 w-12" />,
      title: "Industry Expertise",
      description: "Deep insights into IT, finance, engineering, and government sectors"
    },
    {
      icon: <Globe className="h-12 w-12" />,
      title: "Global Network",
      description: "Access to highly qualified executives worldwide"
    },
    {
      icon: <Settings className="h-12 w-12" />,
      title: "Tailored Solutions",
      description: "Customized approach for your unique requirements"
    },
    {
      icon: <Trophy className="h-12 w-12" />,
      title: "Proven Track Record",
      description: "History of successful executive placements"
    },
    {
      icon: <Shield className="h-12 w-12" />,
      title: "Confidentiality Assured",
      description: "Utmost discretion and professionalism"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-6">
            Why Workist For IT Stands Out
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="text-center p-6"
            >
              <div className="text-[#F97316] mb-4 flex justify-center">
                {reason.icon}
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                {reason.title}
              </h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white px-8"
          >
            Partner with Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
