
import { Card, CardContent } from "@/components/ui/card";

const SuccessSection = () => {
  const successes = [
    {
      metric: "95%",
      title: "Placement Success Rate",
      description: "Successfully placed professionals who exceed client expectations"
    },
    {
      metric: "2,500+",
      title: "Professionals Placed",
      description: "Experienced professionals placed in construction and energy roles"
    },
    {
      metric: "48hrs",
      title: "Average Response Time",
      description: "Quick turnaround time for urgent staffing requirements"
    }
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Success Stories: Driving Excellence in Construction & Energy
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our track record speaks for itself. We've helped numerous organizations 
            build strong teams and achieve their project goals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {successes.map((success, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <p className="text-4xl font-bold text-accent mb-4">
                    {success.metric}
                  </p>
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    {success.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {success.description}
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

export default SuccessSection;
