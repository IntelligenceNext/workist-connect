
const TalentSection = () => {
  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              Attracting and Retaining Top Talent
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#1EAEDB] to-[#F97316] rounded-full" />
            <p className="text-gray-600 leading-relaxed">
              A strong culture is your best recruitment and retention tool. Learn how to create 
              an environment where top performers want to stay and contribute their best work.
            </p>
          </div>

          <div className="relative rounded-lg overflow-hidden h-[400px]">
            <img 
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              alt="Talent retention"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalentSection;
