import { ChevronDown } from "lucide-react";

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
}

const MobileMenu = ({ isOpen, navItems, activeSubmenu, toggleSubmenu, resourceLinks }: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden animate-fadeIn">
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        {navItems.map((item) => (
          <div key={item.name}>
            <button
              onClick={(e) => item.hasSubmenu && toggleSubmenu(item.name, e)}
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
  );
};

export default MobileMenu;