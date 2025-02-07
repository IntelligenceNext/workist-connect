
import { Button } from "@/components/ui/button";
import { Person, Clock, Trophy } from "lucide-react";

const ResultsSection = () => {
  return (
    <div className="bg-[#040842] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            How We Achieve RPO Results For Our Clients
          </h2>
        </div>

        {/* Metrics Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* FTE Hires */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-white/10 rounded-full">
                <Person className="h-8 w-8 text-white" />
              </div>
            </div>
            <div className="text-4xl font-bold text-white mb-2">59</div>
            <div className="text-white/80">FTE Hires</div>
          </div>

          {/* Average Fill Time */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-white/10 rounded-full">
                <Clock className="h-8 w-8 text-white" />
              </div>
            </div>
            <div className="text-4xl font-bold text-white mb-2">30</div>
            <div className="text-white/80">Day Average Fill Time</div>
          </div>

          {/* Retention Rate */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-white/10 rounded-full">
                <Trophy className="h-8 w-8 text-white" />
              </div>
            </div>
            <div className="text-4xl font-bold text-white mb-2">91%</div>
            <div className="text-white/80">Retention Rate</div>
          </div>
        </div>

        {/* Case Study */}
        <div className="bg-white/5 rounded-lg p-8 backdrop-blur-sm">
          <h3 className="text-2xl font-bold text-white mb-6">
            Case Study: Securing The Tech Talent That Sped A Retailer's Digital Transformation
          </h3>
          
          <div className="space-y-6 text-white/80 mb-8">
            <p>
              Our client is the largest department store by retail sales in the U.S. with 700 
              stores nationwide. They were closing brick-and-mortar locations and needed to 
              create a more efficient and effective online presence. This shift required 
              finding a significant number of skilled tech experts they did not have access to.
            </p>
            
            <p>
              We managed end-to-end recruiting for the tech teams. Our effectiveness and 
              speed surpassed other providers, uncovering opportunities for improving 
              processes as well as expanding the company's local key candidate pool. We 
              scaled the hiring quickly but without sacrificing expertise or seeing high 
              attrition.
            </p>
          </div>
          
          <div className="text-center">
            <Button 
              variant="outline" 
              className="bg-transparent border-white text-white hover:bg-white hover:text-[#040842] transition-colors"
            >
              See More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsSection;
