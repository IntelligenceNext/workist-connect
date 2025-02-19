
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "What types of consulting opportunities do you offer?",
      answer: "We offer diverse consulting opportunities across IT sectors including software development, cloud computing, data analytics, cybersecurity, and project management. Our positions range from short-term projects to long-term engagements with leading organizations."
    },
    {
      question: "How does your placement process work?",
      answer: "Our placement process is comprehensive yet efficient. It begins with an initial assessment, followed by profile matching with suitable opportunities. We then facilitate interviews, handle negotiations, and support you through onboarding. Throughout the process, you'll have a dedicated consultant success manager."
    },
    {
      question: "What support do you provide for skill development?",
      answer: "We provide access to online learning platforms, technical workshops, certification programs, and mentorship opportunities. Our consultants can also participate in peer learning groups and receive guidance on emerging technologies and industry trends."
    },
    {
      question: "How do you handle contract terms and benefits?",
      answer: "We offer competitive compensation packages, comprehensive health benefits, paid time off, and professional development allowances. Contract terms are transparent and negotiated with your best interests in mind. We also provide regular reviews and opportunities for rate adjustments."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Navigating your career can come with many questions. We've compiled some of the 
            most common queries from our consultants to make things easier.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
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
