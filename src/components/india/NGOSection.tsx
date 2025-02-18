
import { Button } from "@/components/ui/button";
import { GraduationCap, Heart, Leaf, Users } from "lucide-react";

const NGOSection = () => {
  const initiatives = [
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "Skill Development Programs",
      description: "Training underprivileged youth for employment in various industries."
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Healthcare Initiatives",
      description: "Supporting healthcare access in rural areas."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Education for All",
      description: "Providing resources and mentorship to students in need."
    },
    {
      icon: <Leaf className="h-6 w-6" />,
      title: "Environmental Sustainability",
      description: "Promoting eco-friendly practices and awareness."
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-br from-[#FF9933]/5 to-[#138808]/5">
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Making a Difference: Collaborations with NGOs
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mb-12">
          At Workist For IT, we believe in giving back to society. We have partnered with several NGOs to drive positive change in communities across India.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {initiatives.map((initiative, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="bg-[#138808]/10 p-3 rounded-lg w-fit mb-4">
                <div className="text-[#138808]">{initiative.icon}</div>
              </div>
              <h3 className="font-semibold text-xl mb-3 text-gray-900">{initiative.title}</h3>
              <p className="text-gray-700">{initiative.description}</p>
            </div>
          ))}
        </div>

        <Button 
          size="lg"
          className="bg-[#138808] hover:bg-[#138808]/90 text-white shadow-lg"
        >
          Learn About Our Social Initiatives
        </Button>
      </div>
    </section>
  );
};

export default NGOSection;
