
import { FileWarning, Users, Microscope, Database } from "lucide-react";
import { Button } from "@/components/ui/button";

const ChallengesSection = () => {
  const challenges = [
    {
      icon: <FileWarning className="h-6 w-6" />,
      title: "Regulatory Complexity",
      description: "Navigating stringent compliance requirements and approvals"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Talent Shortages",
      description: "Finding and retaining skilled professionals in a competitive market"
    },
    {
      icon: <Microscope className="h-6 w-6" />,
      title: "R&D Innovation",
      description: "Accelerating research and development to bring new treatments to market"
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Data Management",
      description: "Handling vast amounts of data from clinical trials and research"
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-6">
            Addressing the Challenges of the Life Sciences Industry
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            The life sciences sector faces unique challenges. At Workist For IT, 
            we understand these challenges and provide workforce solutions that 
            address them effectively.
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
