
const ThreeLayout = () => {
  return (
    <div className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-primary mb-12">
          Whatever You Need… We've Got You
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Short-Term Contracts */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-6">
              <img
                src="/lovable-uploads/short-term.png"
                alt="Short-Term Contracts"
                className="w-[172px] h-[172px] object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold mb-4">Short-Term Contracts</h3>
            <p className="text-gray-600">
              Sure, it's about finding someone who fits on paper. But staffing firms like ours know it's much more than that. Even when it's a short engagement, we are committed to finding the right fit.
            </p>
          </div>

          {/* Long-Term Contracts */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-6">
              <img
                src="/lovable-uploads/long-term.png"
                alt="Long-Term Contracts"
                className="w-[172px] h-[172px] object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold mb-4">Long-Term Contracts</h3>
            <p className="text-gray-600">
              Long term contracts are about finding the right culture fit for your team, who's also got the chops & work ethic to deliver.
            </p>
          </div>

          {/* Direct Placement */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-6">
              <img
                src="/lovable-uploads/direct-placement.png"
                alt="Direct Placement"
                className="w-[172px] h-[172px] object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold mb-4">Direct Placement</h3>
            <p className="text-gray-600">
              As a leading staffing company, we know there's an art to finding the right person for an organization & team. We take great pride in finding 'the one' for any given role, from the C-suite to an entry level position.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreeLayout;
