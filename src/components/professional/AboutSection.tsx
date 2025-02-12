
const AboutSection = () => {
  return (
    <div className="relative bg-primary py-24 overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 -top-20 w-96 h-96 rounded-full bg-[#1EAEDB]/20 blur-3xl" />
        <div className="absolute right-0 top-1/2 w-80 h-80 rounded-full bg-[#F97316]/20 blur-3xl" />
        <div className="absolute left-1/2 bottom-0 w-72 h-72 rounded-full bg-[#9b87f5]/20 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">About</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#1EAEDB] to-[#F97316] rounded-full" />
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Heading */}
          <div>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Empowering Businesses with Talent & Technology
            </h3>
          </div>

          {/* Right Column - Paragraph */}
          <div>
            <p className="text-lg text-white/80 leading-relaxed">
              <span className="font-bold text-white">Workist For IT</span> is a global leader in{' '}
              <span className="text-[#1EAEDB]">IT staffing and business solutions</span>, helping enterprises 
              scale with the right talent and cutting-edge technology. Specializing in sourcing{' '}
              <span className="text-[#1EAEDB]">IT, cloud, and data professionals</span>, we serve Fortune 1000 
              clients worldwide. With a strong presence across multiple countries and{' '}
              <span className="text-[#1EAEDB]">state-of-the-art delivery centers</span> in India, we provide 
              world-class technology, consulting, and recruitment services that drive business success.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
