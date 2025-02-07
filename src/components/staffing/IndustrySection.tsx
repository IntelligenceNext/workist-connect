import { ArrowRight, Briefcase, Users, Heart, Search, Calendar, MessageSquare } from "lucide-react";

const IndustrySection = () => {
  const industries = [
    { name: "Administrative", href: "/industries/administrative", icon: Calendar },
    { name: "Automotive", href: "/industries/automotive", icon: Briefcase },
    { name: "Clerical", href: "/industries/clerical", icon: Users },
    { name: "Construction", href: "/industries/construction", icon: Briefcase },
    { name: "Creative", href: "/industries/creative", icon: Heart },
    { name: "Customer Service", href: "/industries/customer-service", icon: MessageSquare },
    { name: "Education", href: "/industries/education", icon: Users },
    { name: "Energy", href: "/industries/energy", icon: Briefcase },
    { name: "Engineering", href: "/industries/engineering", icon: Search },
    { name: "Financial Services", href: "/industries/financial-services", icon: Briefcase },
    { name: "Government", href: "/industries/government", icon: Briefcase },
    { name: "Healthcare", href: "/industries/healthcare", icon: Heart },
    { name: "Hospitality", href: "/industries/hospitality", icon: Users },
    { name: "Human Resources (HR)", href: "/industries/human-resources", icon: Users },
    { name: "Industrial", href: "/industries/industrial", icon: Briefcase },
    { name: "Information Technology (IT)", href: "/industries/it", icon: Search },
    { name: "Insurance", href: "/industries/insurance", icon: Briefcase },
    { name: "Legal", href: "/industries/legal", icon: Briefcase },
    { name: "Life Sciences", href: "/industries/life-sciences", icon: Search },
    { name: "Logistics", href: "/industries/logistics", icon: Briefcase },
    { name: "Manufacturing", href: "/industries/manufacturing", icon: Briefcase },
    { name: "Marketing", href: "/industries/marketing", icon: MessageSquare },
    { name: "Media & Entertainment", href: "/industries/media-entertainment", icon: Heart },
    { name: "Nonprofit", href: "/industries/nonprofit", icon: Heart },
    { name: "Real Estate", href: "/industries/real-estate", icon: Briefcase },
    { name: "Retail", href: "/industries/retail", icon: Briefcase },
    { name: "Sales", href: "/industries/sales", icon: Briefcase },
    { name: "Semiconductor", href: "/industries/semiconductor", icon: Search },
    { name: "Telecom", href: "/industries/telecom", icon: Briefcase }
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12" id="h-staffing-all-industries-amp-functions">
          Staffing All Industries &amp; Functions
        </h2>
        <p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          While we take pride in finding qualified candidates for each and every open position, these are some of the{" "}
          <strong>
            <a href="/industries" className="text-primary hover:text-primary/80 transition-colors">
              industries and functions
            </a>
          </strong>{" "}
          where our staffing agency really knows the ropes.
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry) => (
            <li key={industry.name} className="group">
              <a href={industry.href} className="flex items-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-2">
                    <industry.icon className="h-6 w-6 text-primary" />
                    <h4 className="text-lg font-semibold">{industry.name}</h4>
                  </div>
                </div>
                <ArrowRight className="h-5 w-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default IndustrySection;
