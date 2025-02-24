
import { Target, Eye } from "lucide-react";

const MissionSection = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-primary mb-16">
          Our Mission and Vision
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Mission */}
          <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 hover:shadow-lg transition-shadow">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Target className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold text-primary mb-4">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To deliver innovative and cost-effective IT solutions that help organizations 
              thrive in a competitive market. We strive to create value through technology 
              and expertise, enabling our clients to achieve their business objectives.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 hover:shadow-lg transition-shadow">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Eye className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold text-primary mb-4">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To be a global leader in providing technology-driven workforce solutions that 
              empower businesses and individuals to achieve their goals. We believe in the 
              power of technology to transform businesses and create opportunities for 
              growth and success.
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="mt-16">
          <img
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
            alt="Team brainstorming"
            className="rounded-2xl shadow-xl w-full object-cover h-[400px]"
          />
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
