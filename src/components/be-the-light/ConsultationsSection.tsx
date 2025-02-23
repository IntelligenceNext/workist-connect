
import { Button } from "@/components/ui/button";
import { Calendar, Users } from "lucide-react";

const ConsultationsSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              One-on-One Consultations
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#1EAEDB] to-[#F97316] rounded-full mb-8" />
            
            <p className="text-lg text-gray-700 mb-8">
              Get personalized guidance from our career experts through One-on-One Consultations. 
              Whether you need help with career planning, job search strategies, or professional 
              development, our consultants are here to provide tailored advice to help you 
              achieve your goals.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <Calendar className="h-6 w-6 text-[#F97316]" />
                <span className="text-gray-700">Flexible scheduling options</span>
              </div>
              <div className="flex items-center gap-4">
                <Users className="h-6 w-6 text-[#F97316]" />
                <span className="text-gray-700">Expert career consultants</span>
              </div>
            </div>

            <Button 
              size="lg"
              className="bg-[#F97316] hover:bg-[#F97316]/90 text-white"
            >
              Schedule a Consultation
            </Button>
          </div>

          <div className="relative rounded-lg overflow-hidden h-[500px]">
            <img 
              src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              alt="One-on-one consultation"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationsSection;
