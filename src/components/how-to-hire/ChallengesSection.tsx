
import { UserX, Clock, RefreshCcw, Shield, Target } from "lucide-react";

const ChallengesSection = () => {
  const challenges = [
    {
      icon: <UserX className="h-8 w-8 text-accent" />,
      title: "Talent Shortages",
      problem: "Limited pool of qualified candidates",
      solution: "Expand search to include passive candidates and leverage professional networks"
    },
    {
      icon: <Clock className="h-8 w-8 text-accent" />,
      title: "Time Constraints",
      problem: "Long hiring processes",
      solution: "Use applicant tracking systems (ATS) to streamline the process"
    },
    {
      icon: <RefreshCcw className="h-8 w-8 text-accent" />,
      title: "High Turnover",
      problem: "Difficulty retaining talent",
      solution: "Focus on cultural fit and career growth opportunities"
    },
    {
      icon: <Shield className="h-8 w-8 text-accent" />,
      title: "Bias in Hiring",
      problem: "Unconscious bias affecting decisions",
      solution: "Implement blind recruitment and structured interviews"
    },
    {
      icon: <Target className="h-8 w-8 text-accent" />,
      title: "Competition",
      problem: "High competition for top talent",
      solution: "Offer competitive packages and highlight unique value proposition"
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
              className="bg-gray-50 p-6 rounded-xl"
            >
              <div className="mb-4 bg-primary/5 p-4 rounded-full w-fit">
                {challenge.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary">
                {challenge.title}
              </h3>
              <p className="text-muted mb-4">
                {challenge.problem}
              </p>
              <div className="bg-white p-4 rounded-lg">
                <p className="text-sm text-accent font-medium">
                  Solution: {challenge.solution}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChallengesSection;
