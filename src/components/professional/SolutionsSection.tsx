
const SolutionsSection = () => {
  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              alt="Team collaborating on solutions"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight">
              Custom-Tailored Solutions
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#1EAEDB] to-[#F97316] rounded-full" />
            <p className="text-lg text-[#8E9196] leading-relaxed mt-8">
              Who wants an expert that comes in with a one-size-fits-none answer to the problem? 
              Or one who tells you how to run your business without considering your insights? 
              We don't, and neither should you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionsSection;
