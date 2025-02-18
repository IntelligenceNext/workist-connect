
import { Button } from "@/components/ui/button";
import { Handshake } from "lucide-react";

const GetStartedSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1EAEDB]/10 to-[#F97316]/10" />
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-5"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80")',
        }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Ready to Transform Your Workforce in the U.S.?
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
          At Workist For IT, we're committed to helping businesses across the United States 
          build a workforce that drives efficiency and growth. Let's work together to find 
          the talent and solutions that meet your unique needs.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Button 
            size="lg"
            className="bg-[#F97316] hover:bg-[#F97316]/90 text-white shadow-lg"
          >
            <Handshake className="mr-2 h-5 w-5" />
            Contact Us Today
          </Button>
          <Button 
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10 shadow-lg"
          >
            Schedule a Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GetStartedSection;
