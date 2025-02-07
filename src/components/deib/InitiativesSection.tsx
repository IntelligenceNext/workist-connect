
import { Users, Target, Puzzle, HeartHandshake } from "lucide-react";

const InitiativesSection = () => {
  return (
    <div className="relative py-24 px-4 bg-gradient-to-br from-primary via-primary/95 to-primary-dark overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Icon Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { Icon: Users, label: "Diversity" },
            { Icon: Target, label: "Equity" },
            { Icon: Puzzle, label: "Inclusion" },
            { Icon: HeartHandshake, label: "Belonging" },
          ].map(({ Icon, label }) => (
            <div 
              key={label}
              className="flex flex-col items-center gap-2 p-4 bg-white/5 rounded-lg backdrop-blur-sm"
            >
              <div className="p-3 bg-white/10 rounded-full">
                <Icon className="h-6 w-6 text-[#F97316]" />
              </div>
              <span className="text-sm font-medium text-white/90">{label}</span>
            </div>
          ))}
        </div>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
          Apply Proven DEIB Initiatives That Separate You From The Pack
        </h2>
        
        {/* Decorative Line */}
        <div className="w-32 h-1 bg-gradient-to-r from-[#1EAEDB] to-[#F97316] rounded-full mx-auto mb-12" />

        {/* Content */}
        <div className="space-y-8 text-white/90">
          <p className="text-lg leading-relaxed">
            DEIB initiatives—when done right—work. That's a known fact. The challenge is that many 
            businesses today try to implement DEIB programs, but their strategies don't produce 
            culturally diverse workforces, equitable programs, inclusive environments, or a sense 
            of belonging because they're not given the attention or resources they need to be 
            successful. Or, as we've seen more recently, companies are neglecting equitable and 
            inclusive initiatives and only focusing on diversity.
          </p>

          <p className="text-xl font-semibold text-[#F97316]">
            Creating a diverse workforce isn't enough—it's the company culture that influences 
            whether employees stay and succeed.
          </p>

          <p className="text-lg leading-relaxed">
            That's where we come in. We partner with you to design and implement proven programs 
            that foster a more diverse, equitable, inclusive, and belonging culture within your 
            organization that results in high engagement and high growth. We'll work with you to 
            create a plan that's tailored to your business and help you see it through start to finish.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InitiativesSection;
