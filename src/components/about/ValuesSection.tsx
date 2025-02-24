
import { Lightbulb, Shield, Users, Target, Award } from "lucide-react";

const values = [
  {
    icon: <Lightbulb className="h-6 w-6 text-accent" />,
    title: "Innovation",
    description: "We embrace creativity and technology to deliver cutting-edge solutions."
  },
  {
    icon: <Shield className="h-6 w-6 text-accent" />,
    title: "Integrity",
    description: "We operate with honesty, transparency, and ethical practices."
  },
  {
    icon: <Users className="h-6 w-6 text-accent" />,
    title: "Collaboration",
    description: "We believe in the power of teamwork and partnerships to achieve success."
  },
  {
    icon: <Target className="h-6 w-6 text-accent" />,
    title: "Customer Focus",
    description: "We prioritize the needs and goals of our clients in every decision we make."
  },
  {
    icon: <Award className="h-6 w-6 text-accent" />,
    title: "Excellence",
    description: "We strive for the highest standards of quality and performance in all our services."
  }
];

const ValuesSection = () => {
  return (
    <section className="py-20 px-4 bg-[#F1F0FB]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-[#1A1F2C] mb-16">
          Our Values
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="bg-primary/5 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#222222]">
                {value.title}
              </h3>
              <p className="text-[#403E43]">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
            alt="Team collaboration"
            className="rounded-2xl shadow-xl w-full object-cover h-[400px]"
          />
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
