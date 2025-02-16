
import { Shield, AlertTriangle, DollarSign, Server } from "lucide-react";
import { Button } from "@/components/ui/button";

const ChallengesSection = () => {
  const challenges = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Cybersecurity Threats",
      description: "Protecting sensitive data and infrastructure from evolving risks"
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Budget Constraints",
      description: "Delivering high-quality services with limited resources"
    },
    {
      icon: <AlertTriangle className="h-6 w-6" />,
      title: "Regulatory Compliance",
      description: "Adhering to strict laws and regulations"
    },
    {
      icon: <Server className="h-6 w-6" />,
      title: "Technology Modernization",
      description: "Upgrading legacy systems to improve efficiency and service delivery"
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-6">
            Addressing the Challenges of Modern Government
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Government agencies must navigate a complex landscape of challenges. 
            At Workist For IT, we understand these challenges and provide 
            workforce solutions that address them effectively.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {challenges.map((challenge, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-accent mb-4">{challenge.icon}</div>
              <h3 className="text-xl font-semibold text-primary mb-3">{challenge.title}</h3>
              <p className="text-gray-600">{challenge.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-accent hover:bg-accent/90 text-white px-8"
          >
            Learn How We Can Help
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ChallengesSection;
