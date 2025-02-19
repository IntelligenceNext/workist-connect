
import { Globe2, Users2, HeartHandshake, Lightbulb } from "lucide-react";

const PeopleSection = () => {
  const values = [
    {
      icon: <Globe2 className="h-8 w-8" />,
      title: "Diversity and Inclusion",
      description: "We celebrate diversity and foster an inclusive environment where everyone feels valued."
    },
    {
      icon: <Users2 className="h-8 w-8" />,
      title: "Collaboration",
      description: "Our team members collaborate across functions and geographies to achieve common goals."
    },
    {
      icon: <HeartHandshake className="h-8 w-8" />,
      title: "Passion and Commitment",
      description: "Our employees are passionate about their work and committed to delivering excellence."
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Innovation",
      description: "We encourage creativity and innovation, empowering our team to think outside the box."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary to-primary/90 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Our People
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Our people are the heart of Workist For IT. We take pride in our diverse and 
            talented team that drives our success. Here's what makes our team unique:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-colors duration-300"
            >
              <div className="mb-4 text-accent">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {value.title}
              </h3>
              <p className="text-white/80">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PeopleSection;
