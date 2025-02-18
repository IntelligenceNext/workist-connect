
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/healthcare/HeroSection";

const Healthcare = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <section className="relative py-20">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80")',
          }}
        />
        <div className="absolute inset-0 bg-primary/90" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Addressing the Challenges of Modern Healthcare
              </h2>
              <div className="w-32 h-2 bg-[#F97316] rounded-full mb-8" />
              <ul className="space-y-4 text-lg">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-[#F97316]" />
                  <span>Staffing Shortages: Finding and retaining qualified healthcare professionals in a competitive market.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-[#F97316]" />
                  <span>Patient Care Demands: Delivering high-quality care while managing increasing patient volumes.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-[#F97316]" />
                  <span>Regulatory Compliance: Navigating complex healthcare laws and regulations.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-[#F97316]" />
                  <span>Technology Integration: Adopting electronic health records (EHRs), telemedicine, and other digital tools.</span>
                </li>
              </ul>
              <Button 
                size="lg"
                className="bg-[#F97316] hover:bg-[#F97316]/90 text-white text-lg px-8 py-6 h-auto mt-8"
              >
                Learn How We Can Help
              </Button>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <p className="text-white text-lg leading-relaxed">
                At Workist For IT, we understand these challenges and provide workforce solutions that address them effectively. Our comprehensive approach ensures that healthcare organizations can focus on what matters most: providing exceptional patient care.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80")',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/80" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Tailored Workforce Solutions for Healthcare
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Clinical Staff",
                description: "Doctors, nurses, and allied health professionals to deliver exceptional patient care."
              },
              {
                title: "Administrative Support",
                description: "Skilled staff for medical billing, scheduling, and office management."
              },
              {
                title: "Healthcare IT Specialists",
                description: "Experts in EHR systems, telemedicine, and healthcare software."
              },
              {
                title: "Compliance Experts",
                description: "Professionals to ensure adherence to healthcare laws and standards."
              },
              {
                title: "Leadership Talent",
                description: "Executives and managers to oversee operations and drive strategic growth."
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors"
              >
                <h3 className="text-xl font-semibold text-white mb-4">{item.title}</h3>
                <p className="text-white/90">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button 
              size="lg"
              className="bg-[#F97316] hover:bg-[#F97316]/90 text-white text-lg px-8 py-6 h-auto"
            >
              Discover Our Workforce Solutions
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1581056771107-24ca5f033842?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80")',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/95 via-primary/90 to-primary/80" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Our Strategic Approach</h3>
                <ul className="space-y-6">
                  {[
                    "Industry Expertise: Understanding healthcare complexities",
                    "Talent Sourcing: Extensive professional network",
                    "Rigorous Screening: Thorough candidate assessment",
                    "Scalable Solutions: Flexible staffing options",
                    "Ongoing Support: Continuous performance monitoring"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-4 text-white">
                      <span className="w-2 h-2 bg-[#F97316] rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="order-1 md:order-2 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Proven Approach to Healthcare Staffing
              </h2>
              <p className="text-lg mb-8">
                At Workist For IT, we take a strategic and customized approach to meet the unique needs of the healthcare sector.
              </p>
              <Button 
                size="lg"
                className="bg-[#F97316] hover:bg-[#F97316]/90 text-white text-lg px-8 py-6 h-auto"
              >
                See How We Work
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80")',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/95 to-primary/80" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Success Stories: Driving Excellence in Healthcare
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                metric: "30%",
                title: "Reduced Wait Times",
                description: "Provided a hospital with a team of nurses"
              },
              {
                metric: "25%",
                title: "Improved EHR Efficiency",
                description: "Recruited healthcare IT specialists for a clinic"
              },
              {
                metric: "20%",
                title: "Reduced Penalties",
                description: "Staffed a compliance team ensuring regulatory standards"
              }
            ].map((story, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center">
                <div className="text-4xl font-bold text-[#F97316] mb-4">{story.metric}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{story.title}</h3>
                <p className="text-white/90">{story.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button 
              size="lg"
              className="bg-[#F97316] hover:bg-[#F97316]/90 text-white text-lg px-8 py-6 h-auto"
            >
              Read More Success Stories
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1631217868264-e5b90bb4561c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80")',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/95 to-primary/80" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Healthcare Workforce?
          </h2>
          <p className="text-lg text-white max-w-3xl mx-auto mb-12">
            At Workist For IT, we're committed to helping healthcare organizations build a workforce that drives efficiency and growth. 
            Let's work together to find the talent and solutions that meet your unique needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-[#F97316] hover:bg-[#F97316]/90 text-white text-lg px-8 py-6 h-auto"
            >
              Contact Us Today
            </Button>
            <Button 
              size="lg"
              className="bg-white hover:bg-white/90 text-primary text-lg px-8 py-6 h-auto"
            >
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Healthcare;
