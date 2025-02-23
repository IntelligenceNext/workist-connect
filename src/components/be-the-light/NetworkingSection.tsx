
import { Button } from "@/components/ui/button";
import { Building2, Users, Briefcase } from "lucide-react";

const NetworkingSection = () => {
  const networkingOpportunities = [
    {
      icon: <Building2 className="h-8 w-8 text-white" />,
      title: "Industry Professionals",
      description: "Gain insights and advice from experienced professionals"
    },
    {
      icon: <Users className="h-8 w-8 text-white" />,
      title: "Peers",
      description: "Build relationships with like-minded individuals who share your career aspirations"
    },
    {
      icon: <Briefcase className="h-8 w-8 text-white" />,
      title: "Employers",
      description: "Meet potential employers and explore job opportunities"
    }
  ];

  return (
    <section className="py-20 bg-primary relative">
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Career Networking
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#1EAEDB] to-[#F97316] rounded-full mx-auto mb-8" />
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Networking is a key component of career success. At the Be The Light Tour, 
            you'll have the opportunity to connect with professionals, peers, and 
            potential employers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {networkingOpportunities.map((opportunity, index) => (
            <div 
              key={opportunity.title}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-lg hover:bg-white/20 transition-colors animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="p-4 bg-white/10 rounded-full w-fit mb-6">
                {opportunity.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                {opportunity.title}
              </h3>
              <p className="text-white/80">
                {opportunity.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-white text-primary hover:bg-white/90"
          >
            Join Our Network
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NetworkingSection;
