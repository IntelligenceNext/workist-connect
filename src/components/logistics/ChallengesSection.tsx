
import { Button } from "@/components/ui/button";
import { Clock, AlertTriangle, Users, ChipIcon } from "lucide-react";

const ChallengesSection = () => {
  const challenges = [
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Rising Customer Expectations",
      description: "Faster delivery times and real-time tracking demands"
    },
    {
      icon: <AlertTriangle className="h-6 w-6" />,
      title: "Supply Chain Disruptions",
      description: "Navigating global uncertainties and demand fluctuations"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Labor Shortages",
      description: "Finding and retaining skilled workers in a competitive market"
    },
    {
      icon: <ChipIcon className="h-6 w-6" />,
      title: "Technology Integration",
      description: "Adopting automation, IoT, and data analytics to stay ahead"
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-6">
            Addressing the Challenges of Modern Logistics
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            The logistics and distribution industry faces unique challenges. 
            At Workist For IT, we understand these challenges and provide 
            workforce solutions that address them head-on.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {challenges.map((challenge, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-[#F97316] mb-4">{challenge.icon}</div>
              <h3 className="text-xl font-semibold text-primary mb-3">{challenge.title}</h3>
              <p className="text-gray-600">{challenge.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white px-8"
          >
            Learn How We Can Help
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ChallengesSection;
