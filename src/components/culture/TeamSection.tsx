
const TeamSection = () => {
  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Anatomy of a Connected Team
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#1EAEDB] to-[#F97316] rounded-full mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Clear Communication",
              description: "Foster open dialogue and transparent information sharing across all levels."
            },
            {
              title: "Shared Purpose",
              description: "Align team members around common goals and organizational values."
            },
            {
              title: "Mutual Trust",
              description: "Build strong relationships based on reliability and respect."
            }
          ].map((item, index) => (
            <div 
              key={index}
              className="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold text-primary mb-4">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
