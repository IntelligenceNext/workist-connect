
import { BarChart3, Target, TrendingUp } from "lucide-react";

const ExpertsSection = () => {
  return (
    <div className="bg-[#1A1F2C] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          What Recruiting Experts Are Saying
        </h2>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Statistics */}
          <div className="space-y-12">
            {/* Statistic 1 */}
            <div className="flex items-center space-x-6">
              <div className="p-4 bg-white/5 rounded-full">
                <BarChart3 className="h-8 w-8 text-[#F97316]" />
              </div>
              <div>
                <div className="text-4xl font-bold text-[#F97316] mb-2">87%</div>
                <p className="text-white">
                  Say talent acquisition must be more strategic this year
                </p>
              </div>
            </div>

            {/* Statistic 2 */}
            <div className="flex items-center space-x-6">
              <div className="p-4 bg-white/5 rounded-full">
                <Target className="h-8 w-8 text-[#F97316]" />
              </div>
              <div>
                <div className="text-4xl font-bold text-[#F97316] mb-2">75%</div>
                <p className="text-white">
                  Predict skills-first hiring will be a priority in the next 18 months
                </p>
              </div>
            </div>

            {/* Statistic 3 */}
            <div className="flex items-center space-x-6">
              <div className="p-4 bg-white/5 rounded-full">
                <TrendingUp className="h-8 w-8 text-[#F97316]" />
              </div>
              <div>
                <div className="text-4xl font-bold text-[#F97316] mb-2">26%</div>
                <p className="text-white">
                  Increase in the number of job posts for contractor roles from 2022 to 2023
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-white">
              We Build Great Teams And Make Them Successful
            </h3>
            
            <p className="text-lg text-white/90">
              As a leading professional services and staffing agency, Workist For IT transforms 
              your hiring process. How? Access to talent. It's just that simple. Our talent 
              engine is put in motion immediately to find the right employees for your business 
              needs and culture. Delivered through our RPO services, we can transform your 
              business at scale.
            </p>

            {/* Key Points */}
            <div className="space-y-4 mt-8">
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-[#F97316] rounded-full mt-2 flex-shrink-0" />
                <p className="text-white/90">
                  Whether you need long-term or surge hiring, we handle the entire recruitment 
                  process or just a portion of it.
                </p>
              </div>
              
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-[#F97316] rounded-full mt-2 flex-shrink-0" />
                <p className="text-white/90">
                  We interview, hire, and onboard candidates through our RPO services.
                </p>
              </div>
              
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-[#F97316] rounded-full mt-2 flex-shrink-0" />
                <p className="text-white/90">
                  We consult clients on their strategies and processes, ensuring transparency 
                  and compliance with legal requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertsSection;
