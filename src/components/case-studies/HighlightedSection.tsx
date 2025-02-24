
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Heart, Rocket } from "lucide-react";

const HighlightedSection = () => {
  const caseStudies = [
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "Digital Transformation Success",
      company: "Tech Company",
      improvement: "25% Increase",
      description: "Implemented digital transformation strategies, increasing operational efficiency significantly."
    },
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "Healthcare Optimization",
      company: "Healthcare Provider",
      improvement: "30% Improvement",
      description: "Improved patient care efficiency through workforce optimization solutions."
    },
    {
      icon: <Rocket className="h-8 w-8 text-primary" />,
      title: "Manufacturing Innovation",
      company: "Manufacturing Firm",
      improvement: "20% Reduction",
      description: "Reduced production costs by adopting automation solutions."
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
          Highlighted Case Studies
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-primary/5 p-3 rounded-full">
                    {study.icon}
                  </div>
                  <Badge variant="secondary" className="text-primary">
                    {study.improvement}
                  </Badge>
                </div>
                <CardTitle className="text-xl mb-2">{study.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{study.company}</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {study.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightedSection;
