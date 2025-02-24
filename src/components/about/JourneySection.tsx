
import { Calendar, TrendingUp, Award, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const milestones = [
  {
    icon: <Calendar className="h-6 w-6 text-accent" />,
    year: "2017",
    title: "Founded",
    description: "Establishment of Workist For IT by Mylapaka Narsimha."
  },
  {
    icon: <TrendingUp className="h-6 w-6 text-white" />,
    year: "2019",
    title: "Growth",
    description: "Expanded operations globally and established key partnerships."
  },
  {
    icon: <Award className="h-6 w-6 text-white" />,
    year: "2021",
    title: "Recognition",
    description: "Achieved partnership with over 100 top multinational companies."
  },
  {
    icon: <Target className="h-6 w-6 text-white" />,
    year: "2023",
    title: "Innovation",
    description: "Launched new technology solutions and expanded service offerings."
  }
];

const JourneySection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary to-primary-dark">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          Our Journey
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {milestones.map((milestone, index) => (
            <Card 
              key={index}
              className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-colors"
            >
              <CardContent className="p-6">
                <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  {milestone.icon}
                </div>
                <div className="text-2xl font-bold mb-2 text-white">{milestone.year}</div>
                <h3 className="text-xl font-semibold mb-3 text-white/90">{milestone.title}</h3>
                <p className="text-white/80">
                  {milestone.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            Since our founding in 2017, Workist For IT has grown into a trusted name 
            in the IT and workforce solutions industry. Our journey continues as we 
            strive to innovate and deliver value to our clients as we grow and evolve.
          </p>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
