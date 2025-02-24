
import { Lightbulb, BookOpen, ChartBar, Target, Award } from "lucide-react";

const WhySection = () => {
  const reasons = [
    {
      icon: <BookOpen className="h-8 w-8 text-accent" />,
      title: "Practical Insights",
      description: "Learn from real examples of successful implementations."
    },
    {
      icon: <Target className="h-8 w-8 text-accent" />,
      title: "Problem-Solving",
      description: "Discover how other organizations have overcome similar challenges."
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-accent" />,
      title: "Inspiration",
      description: "Gain ideas and strategies that can be applied to your own business."
    },
    {
      icon: <Award className="h-8 w-8 text-accent" />,
      title: "Credibility",
      description: "Understand the proven impact of workforce solutions through documented success stories."
    },
    {
      icon: <ChartBar className="h-8 w-8 text-accent" />,
      title: "Decision-Making",
      description: "Use case studies to inform and validate your strategic decisions."
    }
  ];

  return (
    <section className="py-16 px-8 border-t border-white/10 bg-primary">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          Why Case Studies Matter
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="bg-primary-dark p-6 rounded-lg hover:shadow-md transition-shadow border border-white/10"
            >
              <div className="mb-6 bg-white/5 p-4 rounded-full w-fit">
                {reason.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">
                {reason.title}
              </h3>
              <p className="text-white/80">
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
