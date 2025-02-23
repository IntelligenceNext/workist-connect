
import { FileText, Users, MessageSquare, CheckCircle, ClipboardList } from "lucide-react";

const KeyStepsSection = () => {
  const steps = [
    {
      icon: <FileText className="h-8 w-8 text-accent" />,
      title: "Define the Role",
      description: "Clearly outline job responsibilities, qualifications, and required skills."
    },
    {
      icon: <Users className="h-8 w-8 text-accent" />,
      title: "Source Candidates",
      description: "Utilize multiple channels to attract a diverse pool of applicants."
    },
    {
      icon: <ClipboardList className="h-8 w-8 text-accent" />,
      title: "Screen Resumes",
      description: "Evaluate applications to shortlist qualified candidates."
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-accent" />,
      title: "Conduct Interviews",
      description: "Use behavioral, technical, and cultural fit interviews."
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-accent" />,
      title: "Make an Offer",
      description: "Extend competitive offers and ensure smooth onboarding."
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
          Key Steps in the Hiring Process
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="mb-4 bg-primary/5 p-4 rounded-full w-fit">
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
