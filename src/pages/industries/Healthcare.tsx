import HeroSection from "@/components/healthcare/HeroSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Healthcare = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Addressing the Challenges of Modern Healthcare
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
              The healthcare sector faces unique challenges, including:
            </p>
            <ul className="list-disc list-inside text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
              <li>Staffing Shortages: Finding and retaining qualified healthcare professionals in a competitive market.</li>
              <li>Patient Care Demands: Delivering high-quality care while managing increasing patient volumes.</li>
              <li>Regulatory Compliance: Navigating complex healthcare laws and regulations.</li>
              <li>Technology Integration: Adopting electronic health records (EHRs), telemedicine, and other digital tools.</li>
            </ul>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
              At Workist For IT, we understand these challenges and provide workforce solutions that address them effectively.
            </p>
            <Button 
              size="lg"
              className="bg-[#F97316] hover:bg-[#F97316]/90 text-white text-lg px-8 py-6 h-auto"
            >
              Learn How We Can Help
            </Button>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Tailored Workforce Solutions for Healthcare
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
              We offer a wide range of staffing and workforce solutions to meet the needs of the healthcare industry:
            </p>
            <ul className="list-disc list-inside text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
              <li>Clinical Staff: Doctors, nurses, and allied health professionals to deliver exceptional patient care.</li>
              <li>Administrative Support: Skilled staff for medical billing, scheduling, and office management.</li>
              <li>Healthcare IT Specialists: Experts in EHR systems, telemedicine, and healthcare software.</li>
              <li>Compliance and Regulatory Experts: Professionals to ensure adherence to healthcare laws and standards.</li>
              <li>Leadership Talent: Executives and managers to oversee operations and drive strategic growth.</li>
            </ul>
            <Button 
              size="lg"
              className="bg-[#F97316] hover:bg-[#F97316]/90 text-white text-lg px-8 py-6 h-auto"
            >
              Discover Our Workforce Solutions
            </Button>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Our Proven Approach to Healthcare Staffing
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
              At Workist For IT, we take a strategic and customized approach to meet the unique needs of the healthcare sector:
            </p>
            <ul className="list-disc list-inside text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
              <li>Industry Expertise: We understand the complexities of healthcare and provide solutions tailored to your organization.</li>
              <li>Talent Sourcing: Our extensive network ensures access to highly skilled professionals.</li>
              <li>Rigorous Screening: We conduct thorough assessments to ensure candidates meet your technical and cultural requirements.</li>
              <li>Scalable Solutions: Whether you need temporary staff for a project or permanent hires for long-term growth, we’ve got you covered.</li>
              <li>Ongoing Support: We provide continuous support to ensure your workforce performs at its best.</li>
            </ul>
            <Button 
              size="lg"
              className="bg-[#F97316] hover:bg-[#F97316]/90 text-white text-lg px-8 py-6 h-auto"
            >
              See How We Work
            </Button>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Success Stories: Driving Excellence in Healthcare
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
              Our solutions have helped healthcare organizations achieve remarkable results:
            </p>
            <ul className="list-disc list-inside text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
              <li>Case Study 1: Provided a hospital with a team of nurses, reducing patient wait times by 30%.</li>
              <li>Case Study 2: Recruited healthcare IT specialists for a clinic, improving EHR system efficiency by 25%.</li>
              <li>Case Study 3: Staffed a compliance team for a healthcare provider, ensuring adherence to regulatory standards and reducing penalties by 20%.</li>
            </ul>
            <Button 
              size="lg"
              className="bg-[#F97316] hover:bg-[#F97316]/90 text-white text-lg px-8 py-6 h-auto"
            >
              Read More Success Stories
            </Button>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Ready to Transform Your Healthcare Workforce?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
              At Workist For IT, we’re committed to helping healthcare organizations build a workforce that drives efficiency and growth. 
              Let’s work together to find the talent and solutions that meet your unique needs. Contact us today to get started.
            </p>
            <Button 
              size="lg"
              className="bg-[#F97316] hover:bg-[#F97316]/90 text-white text-lg px-8 py-6 h-auto"
            >
              Contact Us Today
            </Button>
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 h-auto"
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
