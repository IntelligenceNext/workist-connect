
import { ListFilter, Users, Lightbulb, PhoneCall, UserPlus } from "lucide-react";

const EvaluationSection = () => {
  const tips = [
    {
      icon: <ListFilter className="h-8 w-8 text-white" />,
      title: "Use Structured Interviews",
      description: "Ask consistent questions to all candidates to ensure fair comparisons."
    },
    {
      icon: <Users className="h-8 w-8 text-white" />,
      title: "Assess Cultural Fit",
      description: "Evaluate how well candidates align with your company's values and culture."
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-white" />,
      title: "Test Skills",
      description: "Use practical tests or assignments to assess technical and problem-solving abilities."
    },
    {
      icon: <PhoneCall className="h-8 w-8 text-white" />,
      title: "Check References",
      description: "Verify the candidate's experience and performance with previous employers."
    },
    {
      icon: <UserPlus className="h-8 w-8 text-white" />,
      title: "Involve the Team",
      description: "Include team members in the interview process for diverse perspectives."
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

