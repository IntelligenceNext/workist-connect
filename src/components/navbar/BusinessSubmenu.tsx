
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

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
  const isMobile = useIsMobile();

  return (
    <div className={`${isMobile ? 'py-4' : 'py-8'} px-4 bg-[#001B3D]`}>
      <div className={`${isMobile ? '' : 'max-w-7xl mx-auto'} flex ${isMobile ? 'flex-col' : 'space-x-8'} ${isMobile ? 'pr-0' : 'pr-[5%]'}`}>
        {/* Tabs */}
        <div className={`flex ${isMobile ? 'mb-4 overflow-x-auto' : 'flex-col'} space-x-2 md:space-x-0 md:space-y-2 ${isMobile ? 'min-w-0' : 'min-w-[200px]'}`}>
          <button
            onClick={() => setActiveTab('services')}
            className={`px-4 py-2 text-sm md:px-6 md:py-3 text-left rounded-lg font-medium transition-colors whitespace-nowrap ${
              activeTab === 'services' 
                ? 'bg-white text-[#001B3D]' 
                : 'text-white hover:bg-white/10'
            }`}
          >
            Services
          </button>
          <button
            onClick={() => setActiveTab('industries')}
            className={`px-4 py-2 text-sm md:px-6 md:py-3 text-left rounded-lg font-medium transition-colors whitespace-nowrap ${
              activeTab === 'industries' 
                ? 'bg-white text-[#001B3D]' 
                : 'text-white hover:bg-white/10'
            }`}
          >
            Industries
          </button>
          <button
            onClick={() => setActiveTab('locations')}
            className={`px-4 py-2 text-sm md:px-6 md:py-3 text-left rounded-lg font-medium transition-colors whitespace-nowrap ${
              activeTab === 'locations' 
                ? 'bg-white text-[#001B3D]' 
                : 'text-white hover:bg-white/10'
            }`}
          >
            Locations
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-x-hidden">
          {activeTab === 'services' && (
            <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-3'} gap-4`}>
              {services.map((service) => (
                <a
                  key={service.name}
                  href={service.href}
                  className="bg-white rounded-lg p-4 md:p-6 flex items-start space-x-4 hover:shadow-lg transition-shadow"
                >
                  <span className="text-2xl">{service.icon}</span>
                  <div>
                    <h3 className="font-semibold text-[#001B3D] text-sm md:text-base">{service.name}</h3>
                    <p className="text-xs md:text-sm text-gray-600 mt-1">{service.description}</p>
                  </div>
                </a>
              ))}
            </div>
          )}

          {activeTab === 'industries' && (
            <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-2'} gap-4`}>
              {industries.map((industry) => (
                <a
                  key={industry.name}
                  href={industry.href}
                  className="bg-white rounded-lg p-4 md:p-6 hover:bg-gray-50 transition-colors"
                >
                  <h3 className="font-semibold text-[#001B3D] text-sm md:text-base">{industry.name}</h3>
                </a>
              ))}
            </div>
          )}

          {activeTab === 'locations' && (
            <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-2'} gap-4`}>
              {locations.map((location) => (
                <a
                  key={location.name}
                  href={location.href}
                  className="bg-white rounded-lg p-4 md:p-6 hover:bg-gray-50 transition-colors flex items-center space-x-2"
                >
                  <span className="text-2xl">{location.flag}</span>
                  <h3 className="font-semibold text-[#001B3D] text-sm md:text-base">{location.name}</h3>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BusinessSubmenu;
