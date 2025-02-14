
const CultureSection = () => {
  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            How to Build a Thriving Culture
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#1EAEDB] to-[#F97316] rounded-full mx-auto mb-8" />
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Learn the proven strategies and methodologies that successful organizations use to build 
            and maintain strong, positive workplace cultures.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-lg overflow-hidden h-[400px]">
            <img 
              src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              alt="Building culture"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
          </div>

          <div className="space-y-6">
            <p className="text-gray-600 leading-relaxed">
              A thriving workplace culture doesn't happen by accident. It requires intentional design, 
              consistent nurturing, and a clear understanding of what makes your organization unique.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We help you identify your cultural strengths, address challenges, and implement 
              sustainable practices that foster engagement, innovation, and growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CultureSection;
