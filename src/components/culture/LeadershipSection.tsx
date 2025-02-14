
const LeadershipSection = () => {
  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              Lead Yourself First
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#1EAEDB] to-[#F97316] rounded-full" />
            <p className="text-gray-600 leading-relaxed">
              Great organizational culture starts with self-aware leaders who understand their impact 
              and lead by example. Develop the mindset and skills needed to inspire and guide your team.
            </p>
          </div>

          <div className="relative rounded-lg overflow-hidden h-[400px]">
            <img 
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              alt="Leadership development"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadershipSection;
