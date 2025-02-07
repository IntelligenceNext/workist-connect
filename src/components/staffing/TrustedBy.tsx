
const TrustedBy = () => {
  return (
    <div className="py-20 bg-[#18003c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-300 text-sm uppercase tracking-wider mb-8">
          Trusted By
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg"
            alt="IBM"
            className="h-12 object-contain opacity-70 hover:opacity-100 transition-opacity"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg"
            alt="Accenture"
            className="h-12 object-contain opacity-70 hover:opacity-100 transition-opacity"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/2c/Tata_Consultancy_Services_Logo.svg"
            alt="TCS"
            className="h-12 object-contain opacity-70 hover:opacity-100 transition-opacity"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg"
            alt="Wipro"
            className="h-12 object-contain opacity-70 hover:opacity-100 transition-opacity"
          />
        </div>
      </div>
    </div>
  );
};

export default TrustedBy;
