import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  const navItems = [
    {
      name: "For Business",
      href: "/business",
      hasSubmenu: true,
      submenu: [
        {
          title: "Services",
          items: [
            { name: "Staffing Services", href: "/services/staffing" },
            { name: "Professional Services", href: "/services/professional" },
            { name: "Culture Consulting", href: "/services/culture-consulting" },
            { name: "Recruitment Process Outsourcing", href: "/services/rpo" },
            { name: "Diversity & Inclusion", href: "/services/dei" },
            { name: "Executive Search", href: "/services/executive-search" }
          ]
        }
      ]
    },
    { name: "For Job Seekers", href: "/jobs" },
    { name: "Resources", href: "/resources" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const locations = [
    {
      name: "United States",
      flag: "🇺🇸",
      href: "/locations/us"
    },
    {
      name: "India",
      flag: "🇮🇳",
      href: "/locations/india"
    }
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
                  <div className="absolute left-0 mt-2 w-96 bg-white rounded-md shadow-lg py-2 z-50">
                    {item.submenu.map((section) => (
                      <div key={section.title} className="px-4 py-2">
                        <h3 className="text-sm font-semibold text-gray-900 mb-2">{section.title}</h3>
                        <div className="grid grid-cols-1 gap-2">
                          {section.items.map((subItem) => (
                            <a
                              key={subItem.name}
                              href={subItem.href}
                              className="text-sm text-gray-700 hover:text-primary hover:bg-gray-50 px-3 py-2 rounded-md transition-colors"
                            >
                              {subItem.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    ))}
                    <div className="border-t mt-2 pt-2 px-4">
                      <a href="/services" className="text-sm text-primary hover:text-primary-dark">
                        View all services
                      </a>
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
                    {item.submenu.map((section) => (
                      <div key={section.title} className="mb-2">
                        <h3 className="text-sm font-semibold text-white mb-2">{section.title}</h3>
                        {section.items.map((subItem) => (
                          <a
                            key={subItem.name}
                            href={subItem.href}
                            className="text-gray-300 hover:text-white block px-3 py-2 text-sm"
                          >
                            {subItem.name}
                          </a>
                        ))}
                      </div>
                    ))}
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