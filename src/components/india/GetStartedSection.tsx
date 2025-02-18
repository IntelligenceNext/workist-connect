
import { Button } from "@/components/ui/button";
import { Calendar, MessageSquare } from "lucide-react";

const GetStartedSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#FF9933]/10 to-[#138808]/10" />
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-5"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80")',
        }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Ready to Transform Your Workforce in India?
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
          At Workist For IT, we're committed to helping businesses across India 
          build a workforce that drives efficiency and growth. Let's work together 
          to find the talent and solutions that meet your unique needs.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Button 
            size="lg"
            className="bg-[#FF9933] hover:bg-[#FF9933]/90 text-white shadow-lg"
          >
            <MessageSquare className="mr-2 h-5 w-5" />
            Contact Us Today
          </Button>
          <Button 
            size="lg"
            variant="outline"
            className="border-[#138808] text-[#138808] hover:bg-[#138808]/10 shadow-lg"
          >
            <Calendar className="mr-2 h-5 w-5" />
            Schedule a Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GetStartedSection;
