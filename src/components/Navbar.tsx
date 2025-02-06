import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("services");

  const services = [
    { name: "Staffing Services", href: "/services/staffing", icon: "👥" },
    { name: "Professional Services", href: "/services/professional", icon: "💼" },
    { name: "Culture Consulting", href: "/services/culture-consulting", icon: "🎯" },
    { name: "Recruitment Process Outsourcing", href: "/services/rpo", icon: "🔄" },
  ];

  const industries = [
    { name: "Consumer & Industrial Products", href: "/industries/consumer-industrial" },
    { name: "Distribution & Logistics", href: "/industries/logistics" },
    { name: "Government Services", href: "/industries/government" },
    { name: "Life Sciences", href: "/industries/life-sciences" },
    { name: "Construction & Energy", href: "/industries/construction-energy" },
    { name: "Healthcare", href: "/industries/healthcare" },
    { name: "Automotive", href: "/industries/automotive" },
    { name: "Aviation & Airport Operations", href: "/industries/aviation" },
  ];

  const locations = [
    { name: "United States", flag: "🇺🇸", href: "/locations/us" },
    { name: "India", flag: "🇮🇳", href: "/locations/india" },
  ];

  const navItems = [
    {
      name: "For Business",
      href: "/business",
      hasSubmenu: true,
    },
    { name: "For Job Seekers", href: "/jobs" },
    { name: "Resources", href: "/resources" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const toggleSubmenu = (name: string) => {
    setActiveSubmenu(activeSubmenu === name ? null : name);
  };

  return (
    <nav className="bg-[#040842] shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex-shrink-0 flex items-center">
              <img 
                src="https://workistforit.in/images/logo.png" 
                alt="Workist Logo" 
                className="h-8 w-auto"
              />
            </a>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <button
                  onClick={() => item.hasSubmenu && toggleSubmenu(item.name)}
                  className="text-white hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
                >
                  {item.name}
                  {item.hasSubmenu && (
                    <ChevronDown className="ml-1 h-4 w-4" />
                  )}
                </button>

                {item.hasSubmenu && activeSubmenu === item.name && (
                  <div className="absolute left-0 mt-2 w-[800px] bg-white rounded-md shadow-lg py-4 z-50">
                    <div className="flex">
                      {/* Tab buttons */}
                      <div className="w-48 border-r border-gray-200">
                        <button
                          onClick={() => setActiveTab("services")}
                          className={`w-full text-left px-4 py-2 ${activeTab === "services" ? "bg-gray-100" : ""}`}
                        >
                          Services
                        </button>
                        <button
                          onClick={() => setActiveTab("industries")}
                          className={`w-full text-left px-4 py-2 ${activeTab === "industries" ? "bg-gray-100" : ""}`}
                        >
                          Industries
                        </button>
                        <button
                          onClick={() => setActiveTab("locations")}
                          className={`w-full text-left px-4 py-2 ${activeTab === "locations" ? "bg-gray-100" : ""}`}
                        >
                          Locations
                        </button>
                      </div>

                      {/* Tab content */}
                      <div className="flex-1 p-4">
                        {activeTab === "services" && (
                          <div className="grid grid-cols-2 gap-4">
                            {services.map((service) => (
                              <a
                                key={service.name}
                                href={service.href}
                                className="flex items-center p-3 rounded-lg hover:bg-gray-50"
                              >
                                <span className="text-2xl mr-3">{service.icon}</span>
                                <span className="text-gray-700">{service.name}</span>
                              </a>
                            ))}
                            <a href="/services" className="col-span-2 text-primary hover:text-primary-dark mt-4">
                              View all services →
                            </a>
                          </div>
                        )}

                        {activeTab === "industries" && (
                          <div className="grid grid-cols-2 gap-2">
                            {industries.map((industry) => (
                              <a
                                key={industry.name}
                                href={industry.href}
                                className="p-2 hover:bg-gray-50 rounded text-gray-700"
                              >
                                {industry.name}
                              </a>
                            ))}
                          </div>
                        )}

                        {activeTab === "locations" && (
                          <div className="grid grid-cols-2 gap-4">
                            {locations.map((location) => (
                              <a
                                key={location.name}
                                href={location.href}
                                className="flex items-center p-3 rounded-lg hover:bg-gray-50"
                              >
                                <span className="text-2xl mr-3">{location.flag}</span>
                                <span className="text-gray-700">{location.name}</span>
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-primary focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden animate-fadeIn">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <div key={item.name}>
                <button
                  onClick={() => item.hasSubmenu && toggleSubmenu(item.name)}
                  className="text-white hover:text-primary block px-3 py-2 rounded-md text-base font-medium w-full text-left flex items-center justify-between"
                >
                  {item.name}
                  {item.hasSubmenu && (
                    <ChevronDown className="ml-1 h-4 w-4" />
                  )}
                </button>

                {item.hasSubmenu && activeSubmenu === item.name && (
                  <div className="pl-4 py-2">
                    <div className="space-y-2">
                      <div>
                        <h3 className="text-sm font-semibold text-white mb-2">Services</h3>
                        {services.map((service) => (
                          <a
                            key={service.name}
                            href={service.href}
                            className="block px-3 py-2 text-gray-300 hover:text-white text-sm"
                          >
                            {service.name}
                          </a>
                        ))}
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-white mb-2">Industries</h3>
                        {industries.map((industry) => (
                          <a
                            key={industry.name}
                            href={industry.href}
                            className="block px-3 py-2 text-gray-300 hover:text-white text-sm"
                          >
                            {industry.name}
                          </a>
                        ))}
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-white mb-2">Locations</h3>
                        {locations.map((location) => (
                          <a
                            key={location.name}
                            href={location.href}
                            className="block px-3 py-2 text-gray-300 hover:text-white text-sm"
                          >
                            {location.flag} {location.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;