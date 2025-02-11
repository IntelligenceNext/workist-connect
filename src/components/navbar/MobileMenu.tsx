
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import BusinessSubmenu from "./BusinessSubmenu";
import JobSeekersSubmenu from "./JobSeekersSubmenu";

interface NavItem {
  name: string;
  href: string;
  hasSubmenu?: boolean;
}

interface MobileMenuProps {
  isOpen: boolean;
  navItems: NavItem[];
  activeSubmenu: string | null;
  toggleSubmenu: (name: string, e: React.MouseEvent) => void;
  resourceLinks: Array<{
    name: string;
    href: string;
    icon: string;
    description: string;
  }>;
  services: any[];
  industries: any[];
  locations: any[];
  jobSeekerLinks: any[];
}

const MobileMenu = ({ 
  isOpen, 
  navItems, 
  activeSubmenu, 
  toggleSubmenu, 
  resourceLinks,
  services,
  industries,
  locations,
  jobSeekerLinks
}: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden bg-[#040842] animate-fadeIn">
      <div className="px-4 pt-2 pb-3 space-y-1">
        {/* Action Buttons */}
        <div className="flex flex-col gap-2 py-4">
          <Button variant="outline" className="w-full bg-transparent text-white border-white hover:bg-white/10">
            Find a Job
          </Button>
          <Button className="w-full bg-[#F97316] hover:bg-[#F97316]/90">
            Hire Talent
          </Button>
        </div>

        {/* Navigation Items */}
        {navItems.map((item) => (
          <div key={item.name} className="border-b border-white/10 last:border-0">
            <button
              onClick={(e) => item.hasSubmenu && toggleSubmenu(item.name, e)}
              className="text-white hover:text-primary block px-3 py-4 rounded-md text-base font-medium w-full text-left flex items-center justify-between"
            >
              {item.name}
              {item.hasSubmenu && (
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${activeSubmenu === item.name ? 'rotate-180' : ''}`} />
              )}
            </button>

            {item.hasSubmenu && activeSubmenu === item.name && (
              <div className="bg-[#001B3D]/50 px-2 py-4">
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
                  <div className="space-y-2">
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
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;
