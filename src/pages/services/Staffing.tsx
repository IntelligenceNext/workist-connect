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

        {/* Industry Section */}
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
              {[
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
              ].map((industry) => (
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

        {/* Our Process Section */}
        <div className="py-20 bg-primary bg-cover bg-center" style={{
          backgroundImage: 'url("https://workistforit.in/images/ProcessGradient.webp")',
        }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              Our Process
            </h2>

            <div className="relative">
              {/* Vertical line connecting steps */}
              <div className="absolute left-[39px] top-0 w-0.5 h-full bg-white/30 md:left-1/2 md:-ml-0.5" />

              <div className="space-y-16">
                {[
                  {
                    step: 1,
                    title: "Reach Out",
                    description: "Submit a staffing request & tell us what you're looking for"
                  },
                  {
                    step: 2,
                    title: "Connect",
                    description: "Your dedicated Hiring Partner reaches out to discuss your unique needs"
                  },
                  {
                    step: 3,
                    title: "Review Candidates",
                    description: "We search, screen, & share a curated list of the most qualified candidates"
                  },
                  {
                    step: 4,
                    title: "Interview & Offer",
                    description: "We'll schedule or conduct interviews, & help you extend an offer"
                  },
                  {
                    step: 5,
                    title: "Hire & Onboard",
                    description: "Hire your perfect candidate, & let us take care of the onboarding"
                  }
                ].map((item, index) => (
                  <div key={item.step} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    <div className="flex-1 md:w-1/2">
                      <div className={`p-6 ${index % 2 === 0 ? 'md:ml-auto md:pr-16' : 'md:mr-auto md:pl-16'}`}>
                        <h3 className="text-xl font-semibold text-white mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-200">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    <div className="absolute left-0 md:left-1/2 md:-ml-8">
                      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white">
                        <span className="text-primary font-bold text-xl">
                          {item.step}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
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
