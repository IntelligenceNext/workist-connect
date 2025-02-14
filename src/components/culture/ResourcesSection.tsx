
const ResourcesSection = () => {
  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Workplace Culture Resources
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#1EAEDB] to-[#F97316] rounded-full mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Culture Assessment Tools",
              description: "Evaluate and measure your current organizational culture."
            },
            {
              title: "Leadership Guides",
              description: "Practical resources for developing cultural leadership."
            },
            {
              title: "Best Practices Library",
              description: "Access proven strategies and implementation frameworks."
            }
          ].map((resource, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-lg bg-white p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-[#F97316] opacity-0 group-hover:opacity-10 transition-opacity" />
              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-primary mb-4">{resource.title}</h3>
                <p className="text-gray-600">{resource.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResourcesSection;
