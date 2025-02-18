
import { Button } from "@/components/ui/button";
import { Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Workist For IT helped us find the perfect talent for our tech team. Their expertise and dedication are unmatched.",
      author: "Tech Company CEO"
    },
    {
      quote: "The healthcare professionals provided by Workist For IT have been instrumental in improving our patient care services.",
      author: "Hospital Administrator"
    },
    {
      quote: "Their logistics solutions have transformed our supply chain operations. Highly recommend!",
      author: "Manufacturing Company Director"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
          What Our Clients Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <Quote className="h-8 w-8 text-[#FF9933] mb-4" />
              <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
              <p className="text-gray-900 font-semibold">- {testimonial.author}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg"
            className="bg-[#FF9933] hover:bg-[#FF9933]/90 text-white shadow-lg"
          >
            Read More Testimonials
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
