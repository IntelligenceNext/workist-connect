
import { Lightbulb, Target, Brain, FileText } from "lucide-react";

const WhySection = () => {
  const reasons = [
    {
      icon: <Brain className="h-8 w-8 text-accent" />,
      title: "Practical Insights",
      description: "Learn from real examples of successful implementations"
    },
    {
      icon: <Target className="h-8 w-8 text-accent" />,
      title: "Problem-Solving",
      description: "Discover how other organizations have overcome similar challenges"
    },
    {
      icon: <FileText className="h-8 w-8 text-accent" />,
      title: "Credibility",
      description: "Understand the proven impact of workforce solutions"
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-accent" />,
      title: "Decision-Making",
      description: "Use case studies to inform and validate your strategic decisions"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-primary mb-4">
          Why Case Studies Matter
        </h2>
        
        <div className="w-32 h-2 bg-gradient-to-r from-[#1EAEDB] to-[#F97316] rounded-full mx-auto mb-12" />
        
        <p className="text-lg text-center text-muted mb-16 max-w-3xl mx-auto">
          Case studies are powerful tools for understanding how theoretical strategies translate 
          into real-world success. Here's why they matter for your organization:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <div className="mb-4 bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center">
                {reason.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary">
                {reason.title}
              </h3>
              <p className="text-muted">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySection;
