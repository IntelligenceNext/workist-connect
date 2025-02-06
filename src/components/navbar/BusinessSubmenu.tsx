import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

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
  return (
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
  );
};

export default BusinessSubmenu;