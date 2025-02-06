import { ArrowRight } from "lucide-react";
import { useState } from "react";

interface Service {
  name: string;
  href: string;
  icon: string;
  description: string;
}

interface Industry {
  name: string;
  href: string;
}

interface Location {
  name: string;
  flag: string;
  href: string;
}

interface BusinessSubmenuProps {
  services: Service[];
  industries: Industry[];
  locations: Location[];
}

const BusinessSubmenu = ({ services, industries, locations }: BusinessSubmenuProps) => {
  const [activeTab, setActiveTab] = useState('services');

  return (
    <div className="py-8 px-4 bg-[#001B3D]">
      <div className="max-w-7xl mx-auto flex space-x-8">
        <div className="flex flex-col space-y-2 min-w-[200px]">
          <button
            onClick={() => setActiveTab('services')}
            className={`px-6 py-3 text-left rounded-lg font-medium transition-colors ${
              activeTab === 'services' 
                ? 'bg-white text-[#001B3D]' 
                : 'text-white hover:bg-white/10'
            }`}
          >
            Services
          </button>
          <button
            onClick={() => setActiveTab('industries')}
            className={`px-6 py-3 text-left rounded-lg font-medium transition-colors ${
              activeTab === 'industries' 
                ? 'bg-white text-[#001B3D]' 
                : 'text-white hover:bg-white/10'
            }`}
          >
            Industries
          </button>
          <button
            onClick={() => setActiveTab('locations')}
            className={`px-6 py-3 text-left rounded-lg font-medium transition-colors ${
              activeTab === 'locations' 
                ? 'bg-white text-[#001B3D]' 
                : 'text-white hover:bg-white/10'
            }`}
          >
            Locations
          </button>
        </div>

        <div className="flex-1">
          {activeTab === 'services' && (
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-6 flex items-start space-x-4">
                <div className="text-[#FF1493] text-2xl">👥</div>
                <div>
                  <h3 className="font-semibold text-[#001B3D]">Staffing Services</h3>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 flex items-start space-x-4">
                <div className="text-[#FF1493] text-2xl">🌲</div>
                <div>
                  <h3 className="font-semibold text-[#001B3D]">
                    Evergreen Professional Services
                  </h3>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 flex items-start space-x-4">
                <div className="text-[#FF1493] text-2xl">🧭</div>
                <div>
                  <h3 className="font-semibold text-[#001B3D]">
                    Compass Culture Consulting
                  </h3>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 flex items-start space-x-4">
                <div className="text-[#FF1493] text-2xl">👥</div>
                <div>
                  <h3 className="font-semibold text-[#001B3D]">
                    Recruitment Process Outsourcing (RPO)
                  </h3>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 flex items-start space-x-4">
                <div className="text-[#FF1493] text-2xl">❤️</div>
                <div>
                  <h3 className="font-semibold text-[#001B3D]">
                    Diversity, Equity, Inclusion, & Belonging
                  </h3>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 flex items-start space-x-4">
                <div className="text-[#FF1493] text-2xl">🏆</div>
                <div>
                  <h3 className="font-semibold text-[#001B3D]">
                    Executive Recruiting
                  </h3>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'industries' && (
            <div className="grid grid-cols-2 gap-4">
              {industries.map((industry) => (
                <a
                  key={industry.name}
                  href={industry.href}
                  className="bg-white rounded-lg p-6 hover:bg-gray-50 transition-colors"
                >
                  <h3 className="font-semibold text-[#001B3D]">{industry.name}</h3>
                </a>
              ))}
            </div>
          )}

          {activeTab === 'locations' && (
            <div className="grid grid-cols-2 gap-4">
              {locations.map((location) => (
                <a
                  key={location.name}
                  href={location.href}
                  className="bg-white rounded-lg p-6 hover:bg-gray-50 transition-colors flex items-center space-x-2"
                >
                  <span className="text-2xl">{location.flag}</span>
                  <h3 className="font-semibold text-[#001B3D]">{location.name}</h3>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-6">
        <a
          href="/services"
          className="inline-flex items-center text-[#00E6CA] hover:text-[#00E6CA]/90 font-medium"
        >
          View all services <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </div>
    </div>
  );
};

export default BusinessSubmenu;