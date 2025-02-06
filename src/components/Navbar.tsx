import { useState } from "react";
import { Menu, X, ChevronDown, BookOpen, FileText, TrendingUp, FileCheck, BookText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("services");

  const services = [
    { 
      name: "Staffing Services", 
      href: "/services/staffing", 
      icon: "👥",
      description: "Connect with top talent for your positions"
    },
    { 
      name: "Professional Services", 
      href: "/services/professional", 
      icon: "💼",
      description: "Comprehensive professional solutions"
    },
    { 
      name: "Culture Consulting", 
      href: "/services/culture-consulting", 
      icon: "🎯",
      description: "Transform your organizational culture"
    },
    { 
      name: "Recruitment Process Outsourcing", 
      href: "/services/rpo", 
      icon: "🔄",
      description: "Streamline your hiring process"
    }
  ];

  const industries = [
    { name: "Consumer & Industrial Products", href: "/industries/consumer-industrial" },
    { name: "Distribution & Logistics", href: "/industries/logistics" },
    { name: "Government Services", href: "/industries/government" },
    { name: "Life Sciences", href: "/industries/life-sciences" },
    { name: "Construction & Energy", href: "/industries/construction-energy" },
    { name: "Healthcare", href: "/industries/healthcare" },
    { name: "Automotive", href: "/industries/automotive" },
    { name: "Aviation & Airport Operations", href: "/industries/aviation" }
  ];

  const locations = [
    { name: "United States", flag: "🇺🇸", href: "/locations/us" },
    { name: "India", flag: "🇮🇳", href: "/locations/india" }
  ];

  const jobSeekerLinks = [
    {
      name: "Search Jobs",
      href: "/jobs/search",
      icon: "🔍",
      description: "Browse through thousands of job opportunities across various industries"
    },
    {
      name: "In-House Team",
      href: "/jobs/in-house",
      icon: "🏢",
      description: "Join our internal team and help shape the future of recruitment"
    },
    {
      name: "Consultants",
      href: "/jobs/consultants",
      icon: "💼",
      description: "Explore consulting opportunities with leading organizations"
    },
    {
      name: "Be The Light Tour",
      href: "/jobs/be-the-light",
      icon: "✨",
      description: "Join our mission to illuminate career paths and inspire change"
    }
  ];

  const resourceLinks = [
    {
      name: "Workplace Management",
      href: "/resources/workplace-management",
      icon: "📊",
      description: "Best practices for managing modern workplaces effectively"
    },
    {
      name: "How to Hire",
      href: "/resources/how-to-hire",
      icon: "🎯",
      description: "Comprehensive guides on recruitment and hiring processes"
    },
    {
      name: "Market Trends",
      href: "/resources/market-trends",
      icon: "📈",
      description: "Latest insights and analysis of industry trends"
    },
    {
      name: "White Papers",
      href: "/resources/white-papers",
      icon: "📄",
      description: "In-depth research and industry insights"
    },
    {
      name: "Case Studies",
      href: "/resources/case-studies",
      icon: "📚",
      description: "Real success stories and implementation examples"
    }
  ];

  const navItems = [
    {
      name: "For Business",
      href: "/business",
      hasSubmenu: true,
    },
    { 
      name: "For Job Seekers", 
      href: "/jobs",
      hasSubmenu: true 
    },
    { 
      name: "Resources", 
      href: "/resources",
      hasSubmenu: true 
    },
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
                  <div className="absolute left-0 mt-2 w-screen -ml-[50vw] left-1/2 bg-[#040842] shadow-lg">
                    <div className="max-w-7xl mx-auto">
                      {item.name === "For Business" ? (
                        <div className="p-6">
                          <Tabs defaultValue="services" className="w-full">
                            <TabsList className="bg-[#030631] text-white mb-6">
                              <TabsTrigger 
                                value="services"
                                className="text-white data-[state=active]:bg-[#040842] data-[state=active]:text-white"
                              >
                                Services
                              </TabsTrigger>
                              <TabsTrigger 
                                value="industries"
                                className="text-white data-[state=active]:bg-[#040842] data-[state=active]:text-white"
                              >
                                Industries
                              </TabsTrigger>
                              <TabsTrigger 
                                value="locations"
                                className="text-white data-[state=active]:bg-[#040842] data-[state=active]:text-white"
                              >
                                Locations
                              </TabsTrigger>
                            </TabsList>
                            
                            <TabsContent value="services" className="mt-0">
                              <div className="grid grid-cols-2 gap-4">
                                {services.map((service) => (
                                  <a
                                    key={service.name}
                                    href={service.href}
                                    className="flex items-start p-4 rounded-lg hover:bg-[#030631] transition-colors group"
                                  >
                                    <span className="text-2xl mr-4">{service.icon}</span>
                                    <div>
                                      <h3 className="text-white font-medium group-hover:text-accent transition-colors">
                                        {service.name}
                                      </h3>
                                      <p className="text-gray-300 text-sm mt-1 group-hover:text-white transition-colors">
                                        {service.description}
                                      </p>
                                    </div>
                                  </a>
                                ))}
                              </div>
                            </TabsContent>

                            <TabsContent value="industries" className="mt-0">
                              <div className="grid grid-cols-2 gap-4">
                                {industries.map((industry) => (
                                  <a
                                    key={industry.name}
                                    href={industry.href}
                                    className="p-4 rounded-lg hover:bg-[#030631] transition-colors group"
                                  >
                                    <h3 className="text-white font-medium group-hover:text-accent transition-colors">
                                      {industry.name}
                                    </h3>
                                  </a>
                                ))}
                              </div>
                            </TabsContent>

                            <TabsContent value="locations" className="mt-0">
                              <div className="grid grid-cols-2 gap-4">
                                {locations.map((location) => (
                                  <a
                                    key={location.name}
                                    href={location.href}
                                    className="p-4 rounded-lg hover:bg-[#030631] transition-colors group"
                                  >
                                    <h3 className="text-white font-medium group-hover:text-accent transition-colors">
                                      <span className="mr-2">{location.flag}</span>
                                      {location.name}
                                    </h3>
                                  </a>
                                ))}
                              </div>
                            </TabsContent>
                          </Tabs>
                        </div>
                      ) : item.name === "For Job Seekers" ? (
                        <div className="grid grid-cols-2 gap-4 p-6">
                          {jobSeekerLinks.map((link) => (
                            <a
                              key={link.name}
                              href={link.href}
                              className="flex items-start p-4 rounded-lg hover:bg-[#030631] transition-colors group"
                            >
                              <span className="text-2xl mr-4">{link.icon}</span>
                              <div>
                                <h3 className="text-white font-medium group-hover:text-accent transition-colors">
                                  {link.name}
                                </h3>
                                <p className="text-gray-300 text-sm mt-1 group-hover:text-white transition-colors">
                                  {link.description}
                                </p>
                              </div>
                            </a>
                          ))}
                        </div>
                      ) : item.name === "Resources" ? (
                        <div className="grid grid-cols-2 gap-4 p-6">
                          {resourceLinks.map((link) => (
                            <a
                              key={link.name}
                              href={link.href}
                              className="flex items-start p-4 rounded-lg hover:bg-[#030631] transition-colors group"
                            >
                              <span className="text-2xl mr-4">{link.icon}</span>
                              <div>
                                <h3 className="text-white font-medium group-hover:text-accent transition-colors">
                                  {link.name}
                                </h3>
                                <p className="text-gray-300 text-sm mt-1 group-hover:text-white transition-colors">
                                  {link.description}
                                </p>
                              </div>
                            </a>
                          ))}
                        </div>
                      ) : null}
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
                  className="text-white hover:text-primary block px-3 py-2 rounded-md text-base font-medium w-full text-left flex items-center"
                >
                  {item.name}
                  {item.hasSubmenu && (
                    <ChevronDown className="ml-1 h-4 w-4" />
                  )}
                </button>

                {item.hasSubmenu && activeSubmenu === item.name && (
                  <div className="pl-4 py-2">
                    <div className="space-y-2">
                      {item.name === "Resources" && (
                        <div>
                          <h3 className="text-sm font-semibold text-white mb-2">Resource Links</h3>
                          {resourceLinks.map((link) => (
                            <a
                              key={link.name}
                              href={link.href}
                              className="block px-3 py-2 text-gray-300 hover:text-white text-sm"
                            >
                              {link.icon} {link.name}
                            </a>
                          ))}
                        </div>
                      )}
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
