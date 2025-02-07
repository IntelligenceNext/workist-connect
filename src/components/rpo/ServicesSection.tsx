
import { Button } from "@/components/ui/button";
import { Building, GitBranch, Layers } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ServicesSection = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white py-16">
      {/* Our RPO Services Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h2 className="text-4xl font-bold text-primary mb-4">
          Our RPO Services
        </h2>
        <p className="text-xl text-muted mb-8">
          Transforming Your Recruitment Process with Expertise and Efficiency
        </p>
        <Button 
          onClick={() => navigate("/contact")}
          size="lg"
          className="bg-accent hover:bg-accent/90 text-white"
        >
          Get Started Now
        </Button>
      </div>

      {/* Introduction Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20">
        <h3 className="text-2xl font-bold text-primary mb-6">
          How We Help You Hire the Right Talent
        </h3>
        <p className="text-lg text-muted-foreground">
          At Workist For IT, our talent services experts leverage decades of expertise 
          and access to a vast network of professionals to transform your recruitment 
          process. We'll put our talent engine in motion immediately and effectively 
          to recruit the right employees for your business.
        </p>
      </div>

      {/* RPO Service Offerings */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Enterprise RPO */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-primary/10 rounded-full">
                <Building className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h4 className="text-xl font-bold text-primary mb-4 text-center">
              Enterprise RPO
            </h4>
            <p className="text-muted-foreground text-center">
              Outsource your entire recruitment process. We partner with you to meet 
              your long-term hiring goals and own the entire process, from strategy 
              to screening and onboarding.
            </p>
          </div>

          {/* Project-Based RPO */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-primary/10 rounded-full">
                <GitBranch className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h4 className="text-xl font-bold text-primary mb-4 text-center">
              Project-Based RPO
            </h4>
            <p className="text-muted-foreground text-center">
              When you've got a big project or initiative coming up, we partner with 
              you to outsource specific pieces of your recruiting process, providing 
              support where you need it most.
            </p>
          </div>

          {/* Hybrid RPO */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-primary/10 rounded-full">
                <Layers className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h4 className="text-xl font-bold text-primary mb-4 text-center">
              Hybrid RPO
            </h4>
            <p className="text-muted-foreground text-center">
              Ideal for businesses with a mix of long-term hiring targets and large 
              initiatives. We build a custom RPO program that delivers the candidates 
              you need with flexibility where you need it.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
