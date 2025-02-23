
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "What is the Be The Light Tour?",
      answer: "A career support initiative designed to help individuals achieve their career goals through workshops, consultations, and networking."
    },
    {
      question: "Who can attend?",
      answer: "The tour is open to students, job seekers, and professionals at all career stages."
    },
    {
      question: "Is there a cost to attend?",
      answer: "No, the Be The Light Tour is completely free for all participants."
    },
    {
      question: "How can I register?",
      answer: "Stay tuned for updates on registration details and event dates."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            FAQs
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#1EAEDB] to-[#F97316] rounded-full mx-auto" />
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-primary hover:text-primary/90">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
