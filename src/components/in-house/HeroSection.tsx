
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Search } from "lucide-react";
import { useState } from "react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Check } from "lucide-react";

const HeroSection = () => {
  const [openLocation, setOpenLocation] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  // Combined list of major cities from India and USA
  const locations = [
    // India
    { city: "Mumbai", country: "India", state: "Maharashtra" },
    { city: "Delhi", country: "India", state: "Delhi" },
    { city: "Bangalore", country: "India", state: "Karnataka" },
    { city: "Hyderabad", country: "India", state: "Telangana" },
    { city: "Chennai", country: "India", state: "Tamil Nadu" },
    { city: "Kolkata", country: "India", state: "West Bengal" },
    { city: "Pune", country: "India", state: "Maharashtra" },
    // USA
    { city: "New York", country: "USA", state: "New York" },
    { city: "Los Angeles", country: "USA", state: "California" },
    { city: "Chicago", country: "USA", state: "Illinois" },
    { city: "Houston", country: "USA", state: "Texas" },
    { city: "Phoenix", country: "USA", state: "Arizona" },
    { city: "Philadelphia", country: "USA", state: "Pennsylvania" },
    { city: "San Antonio", country: "USA", state: "Texas" },
    { city: "San Diego", country: "USA", state: "California" },
    { city: "Dallas", country: "USA", state: "Texas" },
    { city: "San Jose", country: "USA", state: "California" }
  ];

  // Filter locations only when there's a search query
  const filteredLocations = searchQuery
    ? locations.filter(location => 
        location.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
        location.state.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <div className="relative min-h-[600px] pt-[15vh] pb-20 px-4 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center animate-fade-in"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80")',
        }}
      />
      <div className="absolute inset-0 bg-primary/80" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Workist For IT Internal Careers
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in delay-100">
            Join the Workist For IT family and be part of a team that drives innovation, 
            excellence, and growth. Explore exciting career opportunities within our 
            organization and take the next step in your professional journey.
          </p>
        </div>

        {/* Job Search Form */}
        <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 animate-fade-in delay-200">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label className="text-white">Job Title/Keyword</Label>
              <Input 
                type="text" 
                placeholder="Enter job title or keyword"
                className="bg-white/20 border-white/20 text-white placeholder:text-white/60"
              />
            </div>
            
            <div className="space-y-2">
              <Label className="text-white">Location</Label>
              <Popover open={openLocation} onOpenChange={setOpenLocation}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={openLocation}
                    className="w-full justify-between bg-white/20 border-white/20 text-white hover:bg-white/30 hover:text-white"
                  >
                    {selectedLocation || "Enter location..."}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[300px] p-0" align="start">
                  <Command>
                    <CommandInput 
                      placeholder="Type to search locations..." 
                      value={searchQuery}
                      onValueChange={setSearchQuery}
                    />
                    <CommandList>
                      <CommandEmpty>No location found.</CommandEmpty>
                      {searchQuery && (
                        <CommandGroup>
                          {filteredLocations.map((location) => (
                            <CommandItem
                              key={`${location.city}-${location.state}`}
                              value={`${location.city}, ${location.state}`}
                              onSelect={(currentValue) => {
                                setSelectedLocation(currentValue);
                                setOpenLocation(false);
                                setSearchQuery("");
                              }}
                            >
                              <Check
                                className={`mr-2 h-4 w-4 ${
                                  selectedLocation === `${location.city}, ${location.state}` ? "opacity-100" : "opacity-0"
                                }`}
                              />
                              {location.city}, {location.state}, {location.country}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      )}
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>

            <div className="flex items-end">
              <Button 
                size="lg" 
                className="w-full bg-[#F97316] hover:bg-[#F97316]/90 text-white group"
              >
                <Search className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Search Jobs
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
