import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative min-h-[600px] w-full bg-[#293a4c] py-28 px-4">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-90"
        style={{
          backgroundImage: 'url("http://workistforit.in/images/Frame%201.jpg")',
          backgroundPosition: '17% 49%'
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Connecting you to <span className="text-primary">top talent</span> across all industries
          </h1>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {/* Job Seekers */}
            <div className="bg-black/20 p-8 rounded-lg backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-white mb-4">Job Seekers</h2>
              <p className="text-white/90 mb-6">
                Ready to take the next step in your career? We can help!
              </p>
              <Link to="/jobs">
                <Button className="bg-white hover:bg-gray-100 text-gray-900">
                  Find a Job
                </Button>
              </Link>
            </div>

            {/* Businesses */}
            <div className="bg-black/20 p-8 rounded-lg backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-white mb-4">Businesses</h2>
              <p className="text-white/90 mb-6">
                From staffing to professional services, we help grow your business with you.
              </p>
              <Link to="/hire">
                <Button className="bg-primary hover:bg-primary-dark text-white">
                  Find Talent
                </Button>
              </Link>
            </div>
          </div>

          {/* Trusted By Section */}
          <div className="mt-24 text-center">
            <p className="text-white/80 mb-8 text-sm uppercase tracking-wider">Trusted By</p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
              {/* Add company logos here */}
              {/* For now using placeholder divs */}
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="h-12 bg-white/10 rounded animate-pulse" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;