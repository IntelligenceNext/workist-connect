
import { FileText, Database, Target, Award, Globe } from "lucide-react";

const ExpertiseSection = () => {
  const expertiseAreas = [
    {
      icon: <FileText className="h-8 w-8 text-primary" />,
      title: "Comprehensive Research",
      description: "In-depth analysis of industry trends and challenges."
    },
    {
      icon: <Database className="h-8 w-8 text-primary" />,
      title: "Data-Driven Insights",
      description: "Actionable recommendations based on robust data."
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Industry-Specific Focus",
      description: "Tailored content to address the unique needs of various sectors."
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Thought Leadership",
      description: "Establishing your organization as a leader in your field."
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Global Perspective",
      description: "Insights from a global network of industry experts."
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-primary">
          Our Expertise in White Papers
        </h2>
        <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12">
          With collaborations with over 100 top multinational companies (MNCs), 
          Workist For IT has a proven track record in delivering high-quality white papers.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseAreas.map((area, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="mb-6 bg-primary/5 p-4 rounded-full w-fit">
                {area.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-primary">
                {area.title}
              </h3>
              <p className="text-muted-foreground">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
