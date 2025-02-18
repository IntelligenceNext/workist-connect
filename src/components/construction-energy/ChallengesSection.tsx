
import { Card, CardContent } from "@/components/ui/card";
import { HardHat, Clock, Leaf, Shield } from "lucide-react";

const ChallengesSection = () => {
  const challenges = [
    {
      icon: <HardHat className="h-8 w-8 text-accent" />,
      title: "Skilled Labor Shortages",
      description: "Finding and retaining qualified workers in a competitive market."
    },
    {
      icon: <Clock className="h-8 w-8 text-accent" />,
      title: "Project Complexity",
      description: "Managing large-scale projects with tight deadlines and budgets."
    },
    {
      icon: <Leaf className="h-8 w-8 text-accent" />,
      title: "Sustainability Goals",
      description: "Transitioning to renewable energy and green building practices."
    },
    {
      icon: <Shield className="h-8 w-8 text-accent" />,
      title: "Safety and Compliance",
      description: "Ensuring adherence to strict safety standards and regulations."
    }
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Addressing the Challenges of Construction & Energy
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            The construction and energy sectors face unique challenges. At Workist For IT, 
            we understand these challenges and provide workforce solutions that address them effectively.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {challenges.map((challenge, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 bg-accent/10 rounded-lg mb-4">
                    {challenge.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    {challenge.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {challenge.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChallengesSection;
