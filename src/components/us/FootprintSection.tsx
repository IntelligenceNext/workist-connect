
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

const FootprintSection = () => {
  const locations = [
    { region: "Tech Hubs", cities: ["Silicon Valley", "Austin", "Seattle", "Boston"] },
    { region: "Financial Centers", cities: ["New York", "Chicago", "Charlotte"] },
    { region: "Manufacturing Powerhouses", cities: ["Detroit", "Houston", "Atlanta"] },
    { region: "Healthcare and Logistics Hubs", cities: ["Dallas", "Los Angeles", "Miami"] }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
          Our Nationwide Presence
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mb-12">
          Workist For IT has established a robust network across the United States, enabling us to serve clients in every corner of the country. Our offices and teams are strategically located in:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {locations.map((location, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-lg">{location.region}</h3>
              </div>
              <ul className="space-y-2">
                {location.cities.map((city, cityIndex) => (
                  <li key={cityIndex} className="text-muted-foreground">{city}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Button 
          size="lg"
          className="bg-primary hover:bg-primary/90 text-white"
        >
          Find Us Near You
        </Button>
      </div>
    </section>
  );
};

export default FootprintSection;
