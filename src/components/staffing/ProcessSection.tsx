
const ProcessSection = () => {
  const steps = [
    {
      step: 1,
      title: "Reach Out",
      description: "Submit a staffing request & tell us what you're looking for"
    },
    {
      step: 2,
      title: "Connect",
      description: "Your dedicated Hiring Partner reaches out to discuss your unique needs"
    },
    {
      step: 3,
      title: "Review Candidates",
      description: "We search, screen, & share a curated list of the most qualified candidates"
    },
    {
      step: 4,
      title: "Interview & Offer",
      description: "We'll schedule or conduct interviews, & help you extend an offer"
    },
    {
      step: 5,
      title: "Hire & Onboard",
      description: "Hire your perfect candidate, & let us take care of the onboarding"
    }
  ];

  return (
    <div className="py-20 bg-primary bg-cover bg-center" style={{
      backgroundImage: 'url("https://workistforit.in/images/ProcessGradient.webp")',
    }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          Our Process
        </h2>

        <div className="relative">
          <div className="hidden md:block absolute top-[60px] left-0 w-full h-0.5 bg-white/30" />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {steps.map((item) => (
              <div key={item.step} className="relative flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center z-10">
                  <span className="text-primary font-bold text-xl">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mt-6 mb-2 text-center">
                  {item.title}
                </h3>
                <p className="text-gray-200 text-center text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessSection;
