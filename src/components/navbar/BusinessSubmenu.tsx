import { ArrowRight } from "lucide-react";

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

const BusinessSubmenu = ({ services }: BusinessSubmenuProps) => {
  return (
    <div className="py-8 px-4">
      <div className="flex space-x-4">
        <div className="flex flex-col space-y-4 w-48">
          <button className="px-6 py-2 bg-white text-primary rounded-full font-medium">
            Services
          </button>
          <button className="px-6 py-2 text-white hover:bg-white/10 rounded-full font-medium">
            Industries
          </button>
          <button className="px-6 py-2 text-white hover:bg-white/10 rounded-full font-medium">
            Locations
          </button>
        </div>

        <div className="flex-1 grid grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-6 flex items-start space-x-4">
            <div className="text-accent text-2xl">👥</div>
            <div>
              <h3 className="font-semibold text-primary">Staffing Services</h3>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 flex items-start space-x-4">
            <div className="text-accent text-2xl">🌲</div>
            <div>
              <h3 className="font-semibold text-primary">
                Evergreen Professional Services
              </h3>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 flex items-start space-x-4">
            <div className="text-accent text-2xl">🧭</div>
            <div>
              <h3 className="font-semibold text-primary">
                Compass Culture Consulting
              </h3>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 flex items-start space-x-4">
            <div className="text-accent text-2xl">👥</div>
            <div>
              <h3 className="font-semibold text-primary">
                Recruitment Process Outsourcing (RPO)
              </h3>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 flex items-start space-x-4">
            <div className="text-accent text-2xl">❤️</div>
            <div>
              <h3 className="font-semibold text-primary">
                Diversity, Equity, Inclusion, & Belonging
              </h3>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 flex items-start space-x-4">
            <div className="text-accent text-2xl">🏆</div>
            <div>
              <h3 className="font-semibold text-primary">
                Executive Recruiting
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <a
          href="/services"
          className="inline-flex items-center text-[#00E6CA] hover:text-[#00E6CA]/90 font-medium"
        >
          View all services <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </div>
    </div>
  );
};

export default BusinessSubmenu;