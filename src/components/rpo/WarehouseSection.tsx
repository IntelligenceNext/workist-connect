
const WarehouseSection = () => {
  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-primary">
              Building Strong Teams Across Industries
            </h2>
            
            <p className="text-lg text-primary/80">
              At Workist For IT, we understand the unique challenges of staffing in 
              industrial and manufacturing environments. Our RPO solutions are tailored 
              to meet the specific needs of warehouse operations, ensuring you have 
              access to qualified professionals who understand safety protocols and 
              operational excellence. From skilled laborers to supervisory roles, we 
              help you build teams that drive productivity and maintain the highest 
              safety standards.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                <p className="text-primary/80">
                  Comprehensive screening for safety-conscious professionals
                </p>
              </div>
              
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                <p className="text-primary/80">
                  Focus on technical skills and safety certifications
                </p>
              </div>
              
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                <p className="text-primary/80">
                  Rapid deployment capabilities for seasonal demands
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1540126034813-121bf29033d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              alt="Diverse warehouse workers in safety gear"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WarehouseSection;

