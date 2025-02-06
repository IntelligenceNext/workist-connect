import { Button } from "@/components/ui/button";
import { ArrowRight, Briefcase, Users, Heart, Search, Calendar, MessageSquare } from "lucide-react";
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
        {/* Hero Section with Gradient Background */}
        <div className="relative pt-[10%] bg-cover bg-center" style={{
          backgroundImage: 'url("https://workistforit.in/images/SemicircleGradient.png")',
        }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Title Column */}
              <div className="text-white">
                <h1 className="text-4xl font-bold mb-6">
                  Staffing Agency Services
                </h1>
                <div className="w-32 h-2 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full" />
              </div>

              {/* Schedule Meeting Column */}
              <div className="text-white text-center">
                <Calendar className="w-[43px] h-[50px] mx-auto text-white" />
                <h3 className="text-xl font-semibold mt-4 mb-2">Schedule a meeting</h3>
                <p className="mb-0">
                  Meet with our talent experts to
                </p>
                <p className="mb-4">
                  discuss your staffing needs.
                </p>
                <Button 
                  onClick={() => navigate("/contact")}
                  className="bg-[#e1691A] hover:bg-[#e1691A]/90 text-white"
                >
                  Let's Connect
                </Button>
              </div>

              {/* Submit Request Column */}
              <div className="text-white text-center">
                <MessageSquare className="w-[63px] h-[50px] mx-auto text-white" />
                <h3 className="text-xl font-semibold mt-4 mb-2">Submit Staffing Request</h3>
                <p className="mb-0">
                  Provide your information and
                </p>
                <p className="mb-4">
                  we'll be in touch shortly!
                </p>
                <Button 
                  onClick={() => navigate("/contact")}
                  className="bg-[#e1691A] hover:bg-[#e1691A]/90 text-white"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Trusted By Section */}
        <div className="py-20 bg-[#18003c]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-gray-300 text-sm uppercase tracking-wider mb-8">
              Trusted By
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg"
                alt="IBM"
                className="h-12 object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg"
                alt="Accenture"
                className="h-12 object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/2/2c/Tata_Consultancy_Services_Logo.svg"
                alt="TCS"
                className="h-12 object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg"
                alt="Wipro"
                className="h-12 object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        </div>

        {/* Job Seeker Section */}
        <div className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-primary text-center mb-6">
              Job seeker?
            </h2>
            <p className="text-center text-lg mb-8">
              We have resources, opportunities, and the expertise to get you started.
            </p>
            <div className="flex justify-center">
              <Button 
                onClick={() => navigate("/find-a-job")}
                className="bg-primary hover:bg-primary/90"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>

        {/* Book a Demo Section */}
        <div className="py-20 bg-cover bg-center" style={{
          backgroundImage: 'url("https://workistforit.in/images/PinkGradient.webp")'
        }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <h2 className="text-4xl font-bold mb-8">
                  <strong>Book a free demo</strong> to see how we find and place talent
                </h2>
                
                <ul className="space-y-6 text-lg">
                  <li className="pb-6">
                    Set up a time with a Hiring Partner to walk through an overview of how we source great talent
                  </li>
                  <li className="py-4">
                    Discover how we make your hire even more productive once they start
                  </li>
                  <li className="py-4">
                    Understand pricing, timing, and how we partner with you every step of the way
                  </li>
                </ul>

                <div className="mt-12 mb-24">
                  <Button 
                    onClick={() => navigate("/book-demo")}
                    className="bg-accent hover:bg-accent/90 text-white"
                  >
                    Book a Demo
                  </Button>
                </div>
              </div>

              <div>
                <img
                  src="/lovable-uploads/a873c66a-932f-4901-811b-8a9a4d734fcf.png"
                  alt="Advanced candidate selection interface showing multiple profiles"
                  className="w-full h-auto rounded-lg shadow-xl"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Our Staffing Solutions Section */}
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
