
import { ScrollText, Users, ClipboardCheck, MessageSquare, CheckCircle } from "lucide-react";

const KeyStepsSection = () => {
  const steps = [
    {
      icon: <ScrollText className="h-8 w-8 text-accent" />,
      title: "Define the Role",
      description: "Clearly outline the job responsibilities, qualifications, and skills required."
    },
    {
      icon: <Users className="h-8 w-8 text-accent" />,
      title: "Source Candidates",
      description: "Use multiple channels to attract a diverse pool of applicants."
    },
    {
      icon: <ClipboardCheck className="h-8 w-8 text-accent" />,
      title: "Screen Resumes",
      description: "Evaluate resumes and applications to shortlist candidates who meet your criteria."
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-accent" />,
      title: "Conduct Interviews",
      description: "Use behavioral, technical, and cultural fit interviews to assess candidates."
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-accent" />,
      title: "Make an Offer",
      description: "Extend a competitive offer and ensure a smooth onboarding process."
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
          Key Steps in the Hiring Process
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="inline-block mb-4 bg-primary/5 p-4 rounded-full">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary">
                {step.title}
              </h3>
              <p className="text-muted">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyStepsSection;

