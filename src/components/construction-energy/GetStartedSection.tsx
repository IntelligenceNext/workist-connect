
import { Button } from "@/components/ui/button";
import { Mail, Calendar } from "lucide-react";

const GetStartedSection = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-6">
            Ready to Build Your Future Workforce?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
            Let's discuss how we can help you find the right talent for your 
            construction and energy projects. Our team is ready to support your 
            staffing needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-8"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Us Today
            </Button>
            <Button 
              size="lg"
              className="bg-[#F97316] hover:bg-[#F97316]/90 text-white px-8"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStartedSection;
