
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

const FootprintSection = () => {
  const locations = [
    { 
      region: "Tech Hubs", 
      cities: ["Bengaluru", "Hyderabad", "Pune", "Chennai"] 
    },
    { 
      region: "Financial Centers", 
      cities: ["Mumbai", "Delhi", "Kolkata"] 
    },
    { 
      region: "Manufacturing Powerhouses", 
      cities: ["Ahmedabad", "Gurgaon", "Coimbatore"] 
    },
    { 
      region: "Healthcare and Logistics Hubs", 
      cities: ["Jaipur", "Kochi", "Chandigarh"] 
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#FF9933]/5 to-[#138808]/5" />
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-5"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1508433957232-3107f5fd5995?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80")',
        }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Our Pan-India Presence
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mb-12">
          Workist For IT has established a robust network across India, enabling us to serve 
          clients in every corner of the country. Our offices and teams are strategically 
          located in key cities and regions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {locations.map((location, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-[#FF9933]/10 rounded-lg">
                  <MapPin className="h-5 w-5 text-[#FF9933]" />
                </div>
                <h3 className="font-semibold text-lg text-gray-900">{location.region}</h3>
              </div>
              <ul className="space-y-2">
                {location.cities.map((city, cityIndex) => (
                  <li key={cityIndex} className="text-gray-700">{city}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Button 
          size="lg"
          className="bg-[#138808] hover:bg-[#138808]/90 text-white shadow-lg"
        >
          <MapPin className="mr-2 h-5 w-5" />
          Find Us Near You
        </Button>
      </div>
    </section>
  );
};

export default FootprintSection;
