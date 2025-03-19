
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [bubbles] = useState([
    { id: 1, size: 100, opacity: 0.2 },
    { id: 2, size: 80, opacity: 0.15 },
    { id: 3, size: 120, opacity: 0.25 },
    { id: 4, size: 90, opacity: 0.2 },
    { id: 5, size: 150, opacity: 0.15 },
    { id: 6, size: 70, opacity: 0.2 },
  ]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-[600px] w-full bg-gradient-to-br from-primary via-primary/90 to-primary-dark py-28 px-4 overflow-hidden animate-gradient">
      {/* Animated Bubbles */}
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="absolute rounded-full bg-white/10 backdrop-blur-sm transition-all duration-700 ease-out animate-float"
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            opacity: bubble.opacity,
            transform: `translate(${
              (mousePosition.x / window.innerWidth) * 30 - 15
            }px, ${
              (mousePosition.y / window.innerHeight) * 30 - 15
            }px) scale(${1 + Math.sin(Date.now() / 1000 + bubble.id) * 0.1})`,
            left: `${(bubble.id * 15) % 85}%`,
            top: `${((bubble.id * 23) % 70) + 15}%`,
            animation: `float ${3 + bubble.id % 3}s ease-in-out infinite`,
            animationDelay: `${bubble.id * 0.5}s`,
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
            Connecting you to <span className="text-[#e1691A]">top talent</span> across all industries
          </h1>

          {/* Job Seekers and Businesses sections */}
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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
              <img
                src="/lovable-uploads/064f73f6-b38c-4a7d-8bab-da968df08efc.png"
                alt="CodeCraft"
                className="h-8 object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
              />
              <img
                src="/lovable-uploads/ae617571-885e-4d27-ae00-fd4e7624b3f3.png"
                alt="Sonata Software"
                className="h-8 object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
              />
              <img
                src="/lovable-uploads/04a29885-37bc-460e-b36d-fbc362035172.png"
                alt="Persistent"
                className="h-8 object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
              />
              <img
                src="/lovable-uploads/6ca7a04e-19e6-40bf-a5d6-61d3977ba1f0.png"
                alt="ValueLabs"
                className="h-8 object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
