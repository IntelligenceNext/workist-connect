
import { Button } from "@/components/ui/button";
import { 
  ClipboardList, Users, UserCheck, List,
  Calendar, ArrowRightLeft
} from "lucide-react";

const RecruitingProcess = () => {
  const steps = [
    {
      icon: <ClipboardList className="h-8 w-8" />,
      title: "Needs Assessment",
      description: "We work closely with you to understand your business goals and requirements"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Talent Mapping",
      description: "Identify top-tier candidates through our extensive network"
    },
    {
      icon: <UserCheck className="h-8 w-8" />,
      title: "Candidate Evaluation",
      description: "Conduct in-depth interviews and assessments"
    },
    {
      icon: <List className="h-8 w-8" />,
      title: "Shortlist Presentation",
      description: "Receive a curated list of highly qualified candidates"
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "Interview Coordination",
      description: "We manage the entire interview process seamlessly"
    },
    {
      icon: <ArrowRightLeft className="h-8 w-8" />,
      title: "Onboarding Support",
      description: "Assist with smooth transition and integration"
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-6">
            Our Proven Executive Recruiting Process
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Finding the right executive requires a strategic and meticulous approach. Our process 
            is designed to deliver results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-[#F97316] mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold text-primary mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-[#F97316] hover:bg-[#F97316]/90 text-white px-8"
          >
            Learn More About Our Process
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RecruitingProcess;
