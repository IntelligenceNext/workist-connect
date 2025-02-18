
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/automotive/HeroSection";

const Automotive = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <section className="relative py-20">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80")',
          }}
        />
        <div className="absolute inset-0 bg-primary/90" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Addressing the Challenges of Modern Automotive
              </h2>
              <div className="w-32 h-2 bg-[#F97316] rounded-full mb-8" />
              <ul className="space-y-4 text-lg">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-[#F97316]" />
                  <span>Technological Disruption: Adapting to electric vehicles, autonomous driving, and connected car technologies.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-[#F97316]" />
                  <span>Supply Chain Complexity: Managing global supply chains and ensuring timely delivery of components.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-[#F97316]" />
                  <span>Skilled Labor Shortages: Finding and retaining talent with expertise in advanced manufacturing and engineering.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-[#F97316]" />
                  <span>Sustainability Goals: Transitioning to eco-friendly production processes and materials.</span>
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
                At Workist For IT, we understand these challenges and provide workforce solutions that address them effectively. Our comprehensive approach ensures that automotive organizations can focus on innovation and growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1487754160835-cd5654e2fb4f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80")',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/80" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Tailored Workforce Solutions for the Automotive Sector
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Manufacturing Talent",
                description: "Skilled workers for assembly lines, quality control, and production management."
              },
              {
                title: "Engineering Experts",
                description: "Specialists in mechanical, electrical, and software engineering for vehicle design."
              },
              {
                title: "Emerging Technologies",
                description: "Professionals in EVs, autonomous driving, and connected car systems."
              },
              {
                title: "Supply Chain Experts",
                description: "Specialists to optimize production and distribution processes."
              },
              {
                title: "Leadership Talent",
                description: "Executives and managers to oversee operations and drive growth."
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
            backgroundImage: 'url("https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80")',
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
                    "Industry Expertise: Understanding automotive complexities",
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
                Our Proven Approach to Automotive Staffing
              </h2>
              <p className="text-lg mb-8">
                At Workist For IT, we take a strategic and customized approach to meet the unique needs of the automotive sector.
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
            backgroundImage: 'url("https://images.unsplash.com/photo-1519752594763-2631c9b55acc?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80")',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/95 to-primary/80" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Success Stories: Driving Excellence in Automotive
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                metric: "20%",
                title: "Faster Development",
                description: "Reduced vehicle development time for a major manufacturer"
              },
              {
                metric: "25%",
                title: "Improved Efficiency",
                description: "Enhanced production efficiency for an EV company"
              },
              {
                metric: "30%",
                title: "Reduced Defects",
                description: "Improved quality control for parts supplier"
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
            backgroundImage: 'url("https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80")',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/95 to-primary/80" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Accelerate Your Automotive Workforce?
          </h2>
          <p className="text-lg text-white max-w-3xl mx-auto mb-12">
            At Workist For IT, we're committed to helping automotive companies build a workforce that drives innovation and growth. 
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

export default Automotive;
