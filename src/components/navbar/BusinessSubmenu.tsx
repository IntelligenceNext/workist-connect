
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";

interface BusinessSubmenuProps {
  services?: Array<{
    name: string;
    href: string;
    icon: string;
    description: string;
  }>;
  industries?: Array<{
    name: string;
    href: string;
  }>;
  locations?: Array<{
    name: string;
    flag: string;
    href: string;
  }>;
}

const BusinessSubmenu = ({}: BusinessSubmenuProps) => {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger>Business</NavigationMenuTrigger>
      <NavigationMenuContent>
        <div className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
          <div className="grid gap-6">
            <Link to="/industries/consumer-industrial" className="group grid h-fit w-full items-center justify-start gap-1">
              <div className="text-sm font-medium leading-none group-hover:underline">
                Consumer & Industrial
              </div>
              <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                Manufacturing & Consumer Goods
              </div>
            </Link>
            <Link to="/industries/construction-energy" className="group grid h-fit w-full items-center justify-start gap-1">
              <div className="text-sm font-medium leading-none group-hover:underline">
                Construction & Energy
              </div>
              <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                Building & Powering the Future
              </div>
            </Link>
            <Link to="/industries/logistics" className="group grid h-fit w-full items-center justify-start gap-1">
              <div className="text-sm font-medium leading-none group-hover:underline">
                Logistics & Distribution
              </div>
              <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                Supply Chain & Transportation
              </div>
            </Link>
          </div>
          <div className="grid gap-6">
            <Link to="/industries/life-sciences" className="group grid h-fit w-full items-center justify-start gap-1">
              <div className="text-sm font-medium leading-none group-hover:underline">
                Life Sciences
              </div>
              <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                Healthcare & Pharmaceuticals
              </div>
            </Link>
            <Link to="/industries/government" className="group grid h-fit w-full items-center justify-start gap-1">
              <div className="text-sm font-medium leading-none group-hover:underline">
                Government
              </div>
              <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                Public Sector Solutions
              </div>
            </Link>
          </div>
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};

export default BusinessSubmenu;
