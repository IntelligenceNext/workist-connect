
import { Card, CardContent } from "@/components/ui/card";
import { Heart } from "lucide-react";

const LoveSection = () => {
  const testimonials = [
    {
      quote: "Finding Workist For IT was a turning point in my career. Their support and guidance helped me land my dream role.",
      author: "Sarah Chen",
      role: "Senior Software Engineer"
    },
    {
      quote: "The mentorship and training programs have been invaluable. I've grown more in my time here than in years at previous companies.",
      author: "Michael Rodriguez",
      role: "Cloud Solutions Architect"
    },
    {
      quote: "They truly care about their consultants. The team goes above and beyond to ensure we have everything we need to succeed.",
      author: "Priya Sharma",
      role: "Data Analytics Consultant"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block p-3 bg-accent/10 rounded-full mb-6">
            <Heart className="h-8 w-8 text-accent" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Nothing but Love
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We take pride in the journeys we've shaped. Our consultants have found 
            opportunities at leading organizations and built rewarding careers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow border border-gray-100">
              <CardContent className="pt-6">
                <blockquote className="text-lg text-gray-600 mb-6">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <p className="font-semibold text-primary">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoveSection;
