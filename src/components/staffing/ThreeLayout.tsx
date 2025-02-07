
import { Briefcase, Clock, User } from "lucide-react";

const ThreeLayout = () => {
  const columns = [
    {
      icon: <Clock className="w-12 h-12 text-primary" />,
      title: "Short-Term Contracts",
      description: "Sure, it's about finding someone who fits on paper. But staffing firms like ours know it's much more than that. Even when it's a short engagement, we are committed to finding the right fit."
    },
    {
      icon: <Briefcase className="w-12 h-12 text-primary" />,
      title: "Long-Term Contracts",
      description: "Long term contracts are about finding the right culture fit for your team, who's also got the chops & work ethic to deliver."
    },
    {
      icon: <User className="w-12 h-12 text-primary" />,
      title: "Direct Placement",
      description: "As a leading staffing company, we know there's an art to finding the right person for an organization & team. We take great pride in finding 'the one' for any given role, from the C-suite to an entry level position."
    }
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-primary mb-12">
          Whatever You Need... We've Got You
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {columns.map((column, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-6 p-4 bg-gray-50 rounded-full">
                {column.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-primary">
                {column.title}
              </h3>
              <p className="text-gray-600">
                {column.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThreeLayout;
