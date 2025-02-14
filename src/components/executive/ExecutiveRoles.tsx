
import { Button } from "@/components/ui/button";
import { 
  UserRound, Users, ClipboardList, Building2, 
  BarChart3, Clock 
} from "lucide-react";

const ExecutiveRoles = () => {
  const roles = [
    {
      icon: <UserRound className="h-6 w-6" />,
      title: "C-Suite Executives",
      description: "CEOs, CFOs, COOs, CTOs, and CIOs who provide strategic direction"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Vice Presidents (VPs)",
      description: "Leaders who oversee key business functions and operations"
    },
    {
      icon: <ClipboardList className="h-6 w-6" />,
      title: "Directors",
      description: "Senior managers who execute strategic initiatives"
    },
    {
      icon: <Building2 className="h-6 w-6" />,
      title: "Board Members",
      description: "Independent directors and advisors providing expertise"
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Functional Heads",
      description: "Leaders in specialized areas like HR, IT, and finance"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Interim Executives",
      description: "Experienced leaders for transitions and stability"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-6">
            Executive Roles We Specialize In
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We understand that every leadership role is unique. That's why we tailor our executive 
            staffing services to fill a wide range of critical positions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {roles.map((role, index) => (
            <div 
              key={index}
              className="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-[#F97316] mb-4">{role.icon}</div>
              <h3 className="text-xl font-semibold text-primary mb-3">{role.title}</h3>
              <p className="text-gray-600">{role.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white px-8"
          >
            Explore Our Executive Roles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ExecutiveRoles;
