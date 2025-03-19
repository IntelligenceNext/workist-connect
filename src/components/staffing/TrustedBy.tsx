
const TrustedBy = () => {
  return (
    <div className="py-20 bg-[#18003c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-300 text-sm uppercase tracking-wider mb-8">
          Trusted By
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          <img
            src="/lovable-uploads/064f73f6-b38c-4a7d-8bab-da968df08efc.png"
            alt="CodeCraft"
            className="h-12 object-contain opacity-70 hover:opacity-100 transition-opacity"
          />
          <img
            src="/lovable-uploads/ae617571-885e-4d27-ae00-fd4e7624b3f3.png"
            alt="Sonata Software"
            className="h-12 object-contain opacity-70 hover:opacity-100 transition-opacity"
          />
          <img
            src="/lovable-uploads/04a29885-37bc-460e-b36d-fbc362035172.png"
            alt="Persistent"
            className="h-12 object-contain opacity-70 hover:opacity-100 transition-opacity"
          />
          <img
            src="/lovable-uploads/6ca7a04e-19e6-40bf-a5d6-61d3977ba1f0.png"
            alt="ValueLabs"
            className="h-12 object-contain opacity-70 hover:opacity-100 transition-opacity"
          />
        </div>
      </div>
    </div>
  );
};

export default TrustedBy;
