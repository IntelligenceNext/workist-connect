
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import BusinessSubmenu from "./navbar/BusinessSubmenu";
import JobSeekersSubmenu from "./navbar/JobSeekersSubmenu";
import ResourcesSubmenu from "./navbar/ResourcesSubmenu";
import MobileMenu from "./navbar/MobileMenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

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
      icon: "🌲",
      description: "Comprehensive professional solutions"
    },
    { 
      name: "Culture Consulting", 
      href: "/services/culture-consulting", 
      icon: "🧭",
      description: "Transform your organizational culture"
    },
    { 
      name: "Recruitment Process Outsourcing", 
      href: "/services/rpo", 
      icon: "👥",
      description: "Streamline your hiring process"
    },
    { 
      name: "Diversity, Equity, Inclusion, & Belonging", 
      href: "/services/deib", 
      icon: "❤️",
      description: "Build an inclusive workplace"
    },
    { 
      name: "Executive Recruiting", 
      href: "/services/executive", 
      icon: "🏆",
      description: "Find top-level talent"
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
      href: "#",
      hasSubmenu: true,
    },
    { 
      name: "For Job Seekers", 
      href: "#",
      hasSubmenu: true 
    },
    { 
      name: "Resources", 
      href: "#",
      hasSubmenu: true 
    },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const toggleSubmenu = (name: string, e: React.MouseEvent) => {
    e.preventDefault();
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

          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <a
                  href={item.href}
                  onClick={(e) => item.hasSubmenu && toggleSubmenu(item.name, e)}
                  className="text-white hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
                >
                  {item.name}
                </a>

                {item.hasSubmenu && activeSubmenu === item.name && (
                  <div className="absolute left-0 mt-2 w-screen max-w-none transform -translate-x-1/2 left-1/2">
                    <div className="max-w-7xl mx-auto">
                      {item.name === "For Business" && (
                        <BusinessSubmenu 
                          services={services}
                          industries={industries}
                          locations={locations}
                        />
                      )}
                      {item.name === "For Job Seekers" && (
                        <JobSeekersSubmenu jobSeekerLinks={jobSeekerLinks} />
                      )}
                      {item.name === "Resources" && (
                        <ResourcesSubmenu resourceLinks={resourceLinks} />
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Action Buttons */}
            <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
              Find a Job
            </Button>
            <Button className="bg-[#F97316] hover:bg-[#F97316]/90">
              Hire Talent
            </Button>
          </div>

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

      <MobileMenu 
        isOpen={isOpen}
        navItems={navItems}
        activeSubmenu={activeSubmenu}
        toggleSubmenu={toggleSubmenu}
        resourceLinks={resourceLinks}
        services={services}
        industries={industries}
        locations={locations}
        jobSeekerLinks={jobSeekerLinks}
      />
    </nav>
  );
};

export default Navbar;
