
import { UserCircle2, Settings, Code, Speaker, Landmark } from "lucide-react";

const OpportunitiesSection = () => {
  const departments = [
    {
      icon: <UserCircle2 className="h-8 w-8" />,
      title: "Human Resources",
      roles: ["Talent Acquisition", "Employee Engagement", "Organizational Development"]
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Operations",
      roles: ["Project Management", "Process Optimization", "Business Strategy"]
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Technology",
      roles: ["IT Support", "Software Development", "Cybersecurity"]
    },
    {
      icon: <Speaker className="h-8 w-8" />,
      title: "Marketing and Communications",
      roles: ["Branding", "Digital Marketing", "Corporate Communications"]
    },
    {
      icon: <Landmark className="h-8 w-8" />,
      title: "Finance and Administration",
      roles: ["Accounting", "Financial Planning", "Office Management"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Opportunities at Workist For IT
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Workist For IT offers a wide range of career opportunities across various functions and levels. 
            Whether you're an experienced professional or just starting your career, we have roles that match your expertise and aspirations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map((dept, index) => (
            <div 
              key={index}
              className="bg-gray-50 p-8 rounded-xl hover:bg-primary hover:text-white transition-colors duration-300 group"
            >
              <div className="text-primary group-hover:text-white transition-colors duration-300 mb-6">
                {dept.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">
                {dept.title}
              </h3>
              <ul className="space-y-2">
                {dept.roles.map((role, roleIndex) => (
                  <li key={roleIndex} className="flex items-center">
                    <span className="w-2 h-2 bg-accent rounded-full mr-2" />
                    {role}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OpportunitiesSection;
