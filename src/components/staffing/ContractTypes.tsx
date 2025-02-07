
const ContractTypes = () => {
  const contractTypes = [
    {
      title: "Short-Term Contracts",
      description: "At Workist For IT, we understand that short-term contracts aren't just about matching skills on paper. Even for brief engagements, we go beyond the resume to ensure the right fit—someone who seamlessly integrates and adds value from day one"
    },
    {
      title: "Long-Term Contracts",
      description: "Building a strong team requires more than just technical expertise. At Workist For IT, we focus on finding professionals who not only have the skills and work ethic to deliver but also align with your company's culture for long-term success."
    },
    {
      title: "Direct Placement",
      description: "At Workist For IT, we specialize in connecting top talent with the right organizations. Whether it's an executive role or an entry-level position, we take pride in finding the perfect match—someone who truly fits your team's needs and vision."
    }
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-primary mb-4">
          Your Needs, Our Priority – Always Ready for You!
        </h2>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {contractTypes.map((type, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-primary mb-4 text-center">
                {type.title}
              </h3>
              <p className="text-gray-600 text-center">
                {type.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContractTypes;
