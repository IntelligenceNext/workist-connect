import { Briefcase, Users, Heart, Search } from "lucide-react";

const services = [
  {
    title: "IT Staffing",
    description:
      "Connect with top IT talent for your temporary and permanent positions.",
    icon: Briefcase,
  },
  {
    title: "Recruitment Solutions",
    description:
      "Comprehensive recruitment services tailored to your company's needs.",
    icon: Users,
  },
  {
    title: "Client Success",
    description:
      "Dedicated support to ensure long-term success and satisfaction.",
    icon: Heart,
  },
  {
    title: "Talent Search",
    description:
      "Advanced candidate search and matching for perfect placement.",
    icon: Search,
  },
];

const Services = () => {
  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Comprehensive staffing solutions for your business needs
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="pt-6 h-full"
            >
              <div className="flow-root bg-white rounded-lg px-6 pb-8 h-full hover:shadow-lg transition-shadow duration-300">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-[#040842] rounded-md shadow-lg">
                      <service.icon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="mt-5 text-base text-gray-500">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;