
import { UserX, Clock, RefreshCcw, Shield, Target } from "lucide-react";

const ChallengesSection = () => {
  const challenges = [
    {
      icon: <UserX className="h-8 w-8 text-accent" />,
      title: "Talent Shortages",
      description: "Expand your search to include passive candidates and leverage professional networks.",
      bgClass: "bg-orange-50"
    },
    {
      icon: <Clock className="h-8 w-8 text-accent" />,
      title: "Time Constraints",
      description: "Use technology, such as applicant tracking systems (ATS), to streamline the process.",
      bgClass: "bg-blue-50"
    },
    {
      icon: <RefreshCcw className="h-8 w-8 text-accent" />,
      title: "High Turnover Rates",
      description: "Focus on cultural fit and career growth opportunities to retain top talent.",
      bgClass: "bg-green-50"
    },
    {
      icon: <Shield className="h-8 w-8 text-accent" />,
      title: "Bias in Hiring",
      description: "Implement blind recruitment practices and structured interviews to reduce bias.",
      bgClass: "bg-purple-50"
    },
    {
      icon: <Target className="h-8 w-8 text-accent" />,
      title: "Competition for Talent",
      description: "Offer competitive compensation packages and highlight your unique value proposition.",
      bgClass: "bg-red-50"
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
          Common Hiring Challenges and Solutions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {challenges.map((challenge, index) => (
            <div 
              key={index}
              className={`${challenge.bgClass} p-8 rounded-xl transition-transform hover:-translate-y-1`}
            >
              <div className="inline-block mb-4 bg-white p-4 rounded-full shadow-sm">
                {challenge.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary">
                {challenge.title}
              </h3>
              <p className="text-muted">
                {challenge.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChallengesSection;

