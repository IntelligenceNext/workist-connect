
import { PackageCheck, Trophy, UserCog } from "lucide-react";
import { Button } from "@/components/ui/button";

const DifferentSection = () => {
  return (
    <div className="relative py-24 px-4 bg-gradient-to-br from-white via-white to-gray-50 overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-7xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
          What Makes Us Different
        </h2>
        
        {/* Decorative Line */}
        <div className="w-32 h-1 bg-gradient-to-r from-[#1EAEDB] to-[#F97316] rounded-full mx-auto mb-12" />

        {/* Intro Paragraph */}
        <p className="text-lg leading-relaxed text-gray-700 max-w-4xl mx-auto mb-16">
          Our outlook on diversity, equity, and inclusion differs from other DEIB consulting firms 
          because we prioritize relationships and meaningful impact over everything else. We believe 
          that in order for DEIB to work in the workplace, there must be a focus on relationships 
          first. Our programs are designed with this philosophy in mind, and we take a hands-on 
          approach with you to ensure that the programs we design produce the results you desire.
        </p>

        {/* Key Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              Icon: PackageCheck,
              title: "Complete",
              description: "You get a complete, holistic approach to your DEIB efforts that focus on driving real change in all three areas."
            },
            {
              Icon: Trophy,
              title: "Proven",
              description: "We're confident in our ability to produce results because we've seen it happen for all our clients, no matter where they are in their DEIB journey."
            },
            {
              Icon: UserCog,
              title: "Personalized",
              description: "Your company is unique, so your DEIB efforts should be too. We partner with you to create a plan that's tailored to your business and needs."
            }
          ].map(({ Icon, title, description }) => (
            <div 
              key={title}
              className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-primary/5 rounded-full">
                <Icon className="h-8 w-8 text-[#F97316]" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">{title}</h3>
              <p className="text-gray-600 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <Button 
          size="lg"
          className="bg-[#F97316] hover:bg-[#F97316]/90 text-white text-lg px-8 py-6 h-auto"
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default DifferentSection;
