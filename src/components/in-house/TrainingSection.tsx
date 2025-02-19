
import { GraduationCap, Target, Users, LineChart } from "lucide-react";

const TrainingSection = () => {
  const programs = [
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: "Leadership Academy",
      description: "A comprehensive program to develop leadership skills and prepare you for future roles."
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Skill Enhancement",
      description: "Regular workshops and training sessions to keep you updated with the latest industry trends."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Mentorship Programs",
      description: "Guidance from experienced leaders to support your career progression."
    },
    {
      icon: <LineChart className="h-8 w-8" />,
      title: "Personal Development",
      description: "Opportunities to build soft skills, such as communication, teamwork, and problem-solving."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Training & Development - The WIT Way
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            At Workist For IT, we believe in continuous learning and growth. Our training and 
            development programs are designed to help you reach your full potential.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-primary mb-6 transform transition-transform group-hover:scale-110">
                {program.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                {program.title}
              </h3>
              <p className="text-gray-600">
                {program.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainingSection;
