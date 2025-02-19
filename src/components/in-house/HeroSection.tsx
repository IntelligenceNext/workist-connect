
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";

const HeroSection = () => {
  const locations = [
    "Bangalore",
    "Mumbai",
    "Delhi NCR",
    "Hyderabad",
    "Chennai",
    "Pune",
    "Kolkata",
  ];

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
              <Select>
                <SelectTrigger className="bg-white/20 border-white/20 text-white">
                  <SelectValue placeholder="Select location" />
                </SelectTrigger>
                <SelectContent>
                  {locations.map((location) => (
                    <SelectItem key={location} value={location.toLowerCase()}>
                      {location}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
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
