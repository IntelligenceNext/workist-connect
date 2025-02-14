
import { Button } from "@/components/ui/button";
import { Mail, Calendar } from "lucide-react";

const GetStartedSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-6">
            Ready to Transform Your Workforce?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            Whether you're in the consumer or industrial sector, Workist For IT is here 
            to help you build a workforce that drives success. Let's work together to 
            find the talent and solutions that meet your unique needs.
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
    </section>
  );
};

export default GetStartedSection;
