import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [bubbles] = useState([
    { id: 1, size: 100 },
    { id: 2, size: 80 },
    { id: 3, size: 120 },
    { id: 4, size: 90 },
  ]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-[600px] w-full bg-[#293a4c] py-28 px-4 overflow-hidden">
      {/* Bubble Navigation */}
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="absolute rounded-full bg-primary/20 backdrop-blur-sm transition-all duration-700 ease-out hover:bg-primary/30 animate-float pointer-events-none"
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            transform: `translate(${
              (mousePosition.x / window.innerWidth) * 50 - 25
            }px, ${
              (mousePosition.y / window.innerHeight) * 50 - 25
            }px) scale(${1 + Math.sin(Date.now() / 1000) * 0.1})`,
            left: `${(bubble.id * 25) - 10}%`,
            top: `${((bubble.id % 2) * 40) + 20}%`,
            animation: `float-${bubble.id} ${3 + bubble.id}s ease-in-out infinite`,
          }}
        />
      ))}

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
              <img
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=200&h=100&fit=crop&auto=format"
                alt="Client 1"
                className="h-12 object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
              />
              <img
                src="https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=200&h=100&fit=crop&auto=format"
                alt="Client 2"
                className="h-12 object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
              />
              <img
                src="https://images.unsplash.com/photo-1431576901776-e539bd916ba2?w=200&h=100&fit=crop&auto=format"
                alt="Client 3"
                className="h-12 object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
              />
              <img
                src="https://images.unsplash.com/photo-1486718448742-163732cd1544?w=200&h=100&fit=crop&auto=format"
                alt="Client 4"
                className="h-12 object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
              />
              <img
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=200&h=100&fit=crop&auto=format"
                alt="Client 5"
                className="h-12 object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;