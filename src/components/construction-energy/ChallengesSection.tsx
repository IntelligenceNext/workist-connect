
import { Users, Clock, Leaf, Shield } from "lucide-react";

const ChallengesSection = () => {
  const challenges = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Skilled Labor Shortages",
      description: "Finding and retaining qualified workers in a competitive market"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Project Complexity",
      description: "Managing large-scale projects with tight deadlines and budgets"
    },
    {
      icon: <Leaf className="h-6 w-6" />,
      title: "Sustainability Goals",
      description: "Transitioning to renewable energy and green building practices"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Safety and Compliance",
      description: "Ensuring adherence to strict safety standards and regulations"
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-6">
            Addressing the Challenges of Construction & Energy
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At Workist For IT, we understand these challenges and provide workforce solutions 
            that address them effectively.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
      </div>
    </section>
  );
};

export default ChallengesSection;
