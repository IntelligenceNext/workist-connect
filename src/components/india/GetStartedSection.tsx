
import { Button } from "@/components/ui/button";
import { Calendar, MessageSquare } from "lucide-react";

const GetStartedSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A1F2C] to-[#1A1F2C]/95" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80')] bg-cover bg-center opacity-10" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center bg-white/5 backdrop-blur-md p-12 rounded-3xl border border-white/10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
            Ready to Transform Your Workforce?
          </h2>
          <p className="text-lg text-gray-300 mb-12 animate-fade-in delay-100">
            Let's work together to find the talent and solutions that meet your unique needs.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              size="lg"
              className="bg-[#FF9933] hover:bg-[#FF9933]/90 text-white shadow-lg group animate-bounce"
            >
              <MessageSquare className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              Contact Us Today
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 shadow-lg group animate-pulse"
            >
              <Calendar className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStartedSection;
