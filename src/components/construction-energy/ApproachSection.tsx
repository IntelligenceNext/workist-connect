
import { Card, CardContent } from "@/components/ui/card";
import { HardHat, Users, Shield, BrainCircuit, Clock } from "lucide-react";

const ApproachSection = () => {
  const approaches = [
    {
      icon: <HardHat className="h-8 w-8 text-accent" />,
      title: "Industry Expertise",
      description: "Deep understanding of construction and energy sector requirements"
    },
    {
      icon: <Users className="h-8 w-8 text-accent" />,
      title: "Talent Assessment",
      description: "Rigorous screening and evaluation of professional capabilities"
    },
    {
      icon: <Shield className="h-8 w-8 text-accent" />,
      title: "Compliance Focus",
      description: "Ensuring all placements meet industry regulations and standards"
    },
    {
      icon: <Clock className="h-8 w-8 text-accent" />,
      title: "Quick Deployment",
      description: "Rapid mobilization of qualified professionals for your projects"
    },
    {
      icon: <BrainCircuit className="h-8 w-8 text-accent" />,
      title: "Strategic Planning",
      description: "Long-term workforce planning and development solutions"
    }
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Our Proven Approach to Construction & Energy Staffing
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We combine industry expertise with innovative recruitment strategies to 
            deliver exceptional talent for construction and energy projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {approaches.map((approach, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 bg-accent/10 rounded-lg mb-4">
                    {approach.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    {approach.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {approach.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ApproachSection;
