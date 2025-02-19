
import { BookOpen, Users, TrendingUp, Heart, Coffee } from "lucide-react";

const WhySection = () => {
  const benefits = [
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Innovative Environment",
      description: "Be part of a forward-thinking organization that values creativity and innovation."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Collaborative Culture",
      description: "Work with a diverse and inclusive team that supports and inspires each other."
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Growth Opportunities",
      description: "Access to continuous learning and development programs to enhance your skills."
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Impactful Work",
      description: "Contribute to meaningful projects that make a difference in the industries we serve."
    },
    {
      icon: <Coffee className="h-8 w-8" />,
      title: "Employee Well-being",
      description: "We prioritize work-life balance and offer benefits that support your overall well-being."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Workist For IT
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            At Workist For IT, we believe in creating a workplace where talent thrives. Here's why you should consider building your career with us:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="mb-4 text-primary group-hover:scale-110 transform transition-transform duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                {benefit.title}
              </h3>
              <p className="text-gray-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySection;
