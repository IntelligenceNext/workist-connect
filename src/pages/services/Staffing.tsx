import { Button } from "@/components/ui/button";
import { ArrowRight, Briefcase, Users, Heart, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const StaffingServices = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: "Temporary Staffing",
      description: "Find qualified temporary staff to meet your immediate business needs.",
      icon: Users,
    },
    {
      title: "Permanent Placement",
      description: "Connect with top talent for long-term positions in your organization.",
      icon: Briefcase,
    },
    {
      title: "Contract-to-Hire",
      description: "Evaluate potential employees through temporary assignments before making permanent offers.",
      icon: Heart,
    },
    {
      title: "Executive Search",
      description: "Identify and recruit top-level executives for leadership positions.",
      icon: Search,
    },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="bg-[#040842] text-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Staffing Services
              </h1>
              <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-300">
                Connect with top talent and build your dream team with our comprehensive staffing solutions.
              </p>
              <div className="mt-10">
                <Button 
                  onClick={() => navigate("/contact")}
                  className="bg-accent hover:bg-accent/90 text-white"
                >
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Our Staffing Solutions
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                Comprehensive staffing services tailored to your business needs
              </p>
            </div>

            <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => (
                <div key={service.title} className="pt-6">
                  <div className="flow-root bg-white rounded-lg px-6 pb-8 h-full hover:shadow-lg transition-shadow duration-300">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center p-3 bg-[#040842] rounded-md shadow-lg">
                          <service.icon className="h-6 w-6 text-white" aria-hidden="true" />
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

        {/* CTA Section */}
        <div className="bg-[#040842] text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Ready to Build Your Team?
              </h2>
              <p className="mt-4 text-xl text-gray-300">
                Let's discuss how we can help you find the perfect candidates.
              </p>
              <div className="mt-8">
                <Button 
                  onClick={() => navigate("/contact")}
                  className="bg-accent hover:bg-accent/90 text-white"
                >
                  Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default StaffingServices;