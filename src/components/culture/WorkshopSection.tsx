
import { Button } from "@/components/ui/button";
import { Calendar, Users } from "lucide-react";

const WorkshopSection = () => {
  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Join a Free Virtual Workshop
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#1EAEDB] to-[#F97316] rounded-full mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <Calendar className="h-6 w-6 text-[#F97316]" />
              <h3 className="text-xl font-semibold">Flexible Scheduling</h3>
            </div>
            <p className="text-gray-600">
              Choose from multiple sessions that fit your team's schedule. Our virtual workshops 
              are designed to be interactive and engaging, regardless of your location.
            </p>
            <Button 
              size="lg" 
              className="w-full md:w-auto bg-primary hover:bg-primary/90"
            >
              View Available Dates
            </Button>
          </div>

          <div className="relative rounded-lg overflow-hidden h-[400px]">
            <img 
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              alt="Virtual workshop session"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkshopSection;
