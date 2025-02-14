
import { Button } from "@/components/ui/button";
import { Mail, Calendar } from "lucide-react";

const GetStarted = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-6">
            Ready to Find Your Next Executive Leader?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            At Workist For IT, we're committed to helping you find the leadership talent 
            that drives success. Whether you're looking for a permanent executive, an 
            interim leader, or a board member, we're here to guide you every step of the way.
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

export default GetStarted;
