
import { TrendingUp, Smile, DollarSign, Handshake, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <TrendingUp className="h-12 w-12 text-accent" />,
      title: "Increased Productivity",
      description: "Optimize workflows and create an environment that enhances employee performance"
    },
    {
      icon: <Smile className="h-12 w-12 text-accent" />,
      title: "Enhanced Satisfaction",
      description: "Foster a positive workplace culture that boosts employee morale and retention"
    },
    {
      icon: <DollarSign className="h-12 w-12 text-accent" />,
      title: "Cost Savings",
      description: "Implement efficient resource management strategies to reduce operational costs"
    },
    {
      icon: <Handshake className="h-12 w-12 text-accent" />,
      title: "Improved Collaboration",
      description: "Create spaces that encourage teamwork and knowledge sharing"
    },
    {
      icon: <ShieldCheck className="h-12 w-12 text-accent" />,
      title: "Regulatory Compliance",
      description: "Ensure adherence to workplace safety and regulatory requirements"
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-6">
            Benefits of Effective Workplace Management
          </h2>
          <div className="w-32 h-1 bg-accent mx-auto mb-8" />
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            Experience transformative outcomes through our comprehensive workplace management solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="p-6 bg-gray-50 rounded-xl hover:shadow-md transition-shadow text-center"
            >
              <div className="mb-6 flex justify-center">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">
                {benefit.title}
              </h3>
              <p className="text-gray-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg"
            className="bg-accent hover:bg-accent/90 text-white px-8"
          >
            Learn More About the Benefits
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
