
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import BusinessSubmenu from "./navbar/BusinessSubmenu";
import JobSeekersSubmenu from "./navbar/JobSeekersSubmenu";
import ResourcesSubmenu from "./navbar/ResourcesSubmenu";
import MobileMenu from "./navbar/MobileMenu";
import { useSubmenu } from "@/hooks/use-submenu";
import { navItems, services, industries, locations, jobSeekerLinks, resourceLinks } from "@/data/navigationData";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { activeSubmenu, toggleSubmenu } = useSubmenu();

  return (
    <nav className="bg-[#040842] shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex-shrink-0 flex items-center">
              <img 
                src="/lovable-uploads/5bb83aa3-6a22-4db1-b301-7b9b5b2084e5.png" 
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
