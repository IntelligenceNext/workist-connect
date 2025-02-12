
import { Code2, Settings2 } from "lucide-react";

const ServicesSection = () => {
  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-6">Services</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#1EAEDB] to-[#F97316] rounded-full mx-auto" />
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Tech Services Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-primary/10 rounded-full">
                <Code2 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary">Tech Services</h3>
            </div>
            <p className="text-lg text-[#8E9196] leading-relaxed">
              At Workist For IT, we don't just strategize and implement tech evolutions—we transform businesses. 
              As a leading staffing and services company, we bring cutting-edge tech strategies and solutions 
              to your business and provide the skilled talent to execute it all. Elevate, modernize, innovate. 
              Your vision, our fuel. Let's rewrite your digital future together.
            </p>
          </div>

          {/* Business Operations Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-primary/10 rounded-full">
                <Settings2 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary">Business Operations</h3>
            </div>
            <p className="text-lg text-[#8E9196] leading-relaxed">
              Our business operations services help your organization improve quality, retention, 
              and innovation—and we do it at scale. Whether we're transforming your customer experience 
              capabilities, handling project management across the business, or retooling various workflows, 
              we ensure your operations are efficient, effective, and future-ready.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
