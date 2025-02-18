
import { Button } from "@/components/ui/button";

const GetStartedSection = () => {
  return (
    <section className="py-24 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Build Your Future Workforce?
        </h2>
        <p className="text-lg text-white/90 max-w-3xl mx-auto mb-12">
          At Workist For IT, we're committed to helping construction and energy companies 
          build a workforce that drives efficiency and growth. Let's work together to find 
          the talent and solutions that meet your unique needs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg"
            className="bg-accent hover:bg-accent/90 text-white px-8"
          >
            Contact Us Today
          </Button>
          <Button 
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white/10"
          >
            Schedule a Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GetStartedSection;
