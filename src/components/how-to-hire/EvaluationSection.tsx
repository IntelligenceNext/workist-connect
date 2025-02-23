
import { CheckSquare, Users, Brain, PhoneCall, UserPlus } from "lucide-react";

const EvaluationSection = () => {
  const tips = [
    {
      icon: <CheckSquare className="h-8 w-8 text-white" />,
      title: "Structured Interviews",
      description: "Ask consistent questions to ensure fair comparisons"
    },
    {
      icon: <Users className="h-8 w-8 text-white" />,
      title: "Cultural Fit",
      description: "Evaluate alignment with company values"
    },
    {
      icon: <Brain className="h-8 w-8 text-white" />,
      title: "Skills Assessment",
      description: "Use practical tests to verify capabilities"
    },
    {
      icon: <PhoneCall className="h-8 w-8 text-white" />,
      title: "Reference Checks",
      description: "Verify experience and performance"
    },
    {
      icon: <UserPlus className="h-8 w-8 text-white" />,
      title: "Team Involvement",
      description: "Include team members in the process"
    }
  ];

  return (
    <section className="py-16 px-4 bg-primary text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Tips for Effective Candidate Evaluation
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {tips.map((tip, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl"
            >
              <div className="mb-4">
                {tip.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">
                {tip.title}
              </h3>
              <p className="text-sm text-white/90">
                {tip.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EvaluationSection;
