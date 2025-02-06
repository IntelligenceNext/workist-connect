import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
    <div className="py-8 px-4 bg-[#001B3D] w-full">
      <div className="max-w-7xl mx-auto">
        <Tabs defaultValue="services" className="w-full">
          <div className="grid grid-cols-12 gap-8">
            <TabsList className="flex flex-col h-auto space-y-2 col-span-3">
              <TabsTrigger
                value="services"
                className="w-full justify-start px-6 py-3 text-left data-[state=active]:bg-white data-[state=active]:text-[#001B3D] text-white hover:bg-white/10"
              >
                Services
              </TabsTrigger>
              <TabsTrigger
                value="industries"
                className="w-full justify-start px-6 py-3 text-left data-[state=active]:bg-white data-[state=active]:text-[#001B3D] text-white hover:bg-white/10"
              >
                Industries
              </TabsTrigger>
              <TabsTrigger
                value="locations"
                className="w-full justify-start px-6 py-3 text-left data-[state=active]:bg-white data-[state=active]:text-[#001B3D] text-white hover:bg-white/10"
              >
                Locations
              </TabsTrigger>
            </TabsList>

            <div className="col-span-9">
              <TabsContent value="services" className="mt-0">
                <div className="grid grid-cols-3 gap-4">
                  {services.map((service) => (
                    <a
                      key={service.name}
                      href={service.href}
                      className="bg-white rounded-lg p-6 flex items-start space-x-4 group hover:shadow-lg transition-shadow"
                    >
                      <div className="text-2xl">{service.icon}</div>
                      <div className="space-y-1 overflow-hidden">
                        <h3 className="font-semibold text-[#001B3D] group-hover:text-[#040842] transition-colors">
                          {service.name}
                        </h3>
                        <p className="text-sm text-gray-600 line-clamp-2">
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
                      className="bg-white rounded-lg p-6 hover:bg-gray-50 transition-colors"
                    >
                      <h3 className="font-semibold text-[#001B3D]">{industry.name}</h3>
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
                      className="bg-white rounded-lg p-6 hover:bg-gray-50 transition-colors flex items-center space-x-2"
                    >
                      <span className="text-2xl">{location.flag}</span>
                      <h3 className="font-semibold text-[#001B3D]">{location.name}</h3>
                    </a>
                  ))}
                </div>
              </TabsContent>
            </div>
          </div>
        </Tabs>

        <div className="mt-6">
          <a
            href="/services"
            className="inline-flex items-center text-[#00E6CA] hover:text-[#00E6CA]/90 font-medium"
          >
            View all services <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default BusinessSubmenu;