
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/aviation/HeroSection";

const Aviation = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Addressing the Challenges of Modern Aviation
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
            The aviation sector faces unique challenges, including:
          </p>
          <ul className="list-disc list-inside mb-12">
            <li>Skilled Workforce Shortages: Finding and retaining qualified pilots, engineers, and technicians.</li>
            <li>Operational Efficiency: Managing complex air operations and ensuring on-time performance.</li>
            <li>Safety and Compliance: Adhering to strict aviation regulations and safety standards.</li>
            <li>Technological Advancements: Integrating new technologies like drones, AI, and sustainable aviation fuels.</li>
          </ul>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
            At Workist For IT, we understand these challenges and provide workforce solutions that address them effectively.
          </p>
          <Button 
            size="lg"
            className="bg-accent hover:bg-accent/90 text-white px-8"
          >
            Learn How We Can Help
          </Button>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Tailored Workforce Solutions for Aviation & Air Operations
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
            We offer a wide range of staffing and workforce solutions to meet the needs of the aviation industry:
          </p>
          <ul className="list-disc list-inside mb-12">
            <li>Pilots and Flight Crew: Highly trained professionals for commercial and private aviation.</li>
            <li>Aircraft Maintenance Technicians: Skilled workers to ensure aircraft safety and performance.</li>
            <li>Air Traffic Controllers: Experts to manage airspace and ensure smooth operations.</li>
            <li>Aviation Engineers: Specialists in aircraft design, manufacturing, and innovation.</li>
            <li>Customer Service and Ground Staff: Professionals to enhance passenger experience and ground operations.</li>
          </ul>
          <Button 
            size="lg"
            className="bg-accent hover:bg-accent/90 text-white px-8"
          >
            Discover Our Workforce Solutions
          </Button>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Our Proven Approach to Aviation Staffing
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
            At Workist For IT, we take a strategic and customized approach to meet the unique needs of the aviation sector:
          </p>
          <ul className="list-disc list-inside mb-12">
            <li>Industry Expertise: We understand the complexities of aviation and provide solutions tailored to your operations.</li>
            <li>Talent Sourcing: Our extensive network ensures access to highly skilled professionals.</li>
            <li>Rigorous Screening: We conduct thorough assessments to ensure candidates meet your technical and cultural requirements.</li>
            <li>Scalable Solutions: Whether you need temporary staff for a project or permanent hires for long-term growth, we've got you covered.</li>
            <li>Ongoing Support: We provide continuous support to ensure your workforce performs at its best.</li>
          </ul>
          <Button 
            size="lg"
            className="bg-accent hover:bg-accent/90 text-white px-8"
          >
            See How We Work
          </Button>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Success Stories: Driving Excellence in Aviation
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
            Our solutions have helped aviation companies achieve remarkable results:
          </p>
          <ul className="list-disc list-inside mb-12">
            <li>Case Study 1: Provided an airline with a team of maintenance technicians, reducing aircraft downtime by 20%.</li>
            <li>Case Study 2: Recruited air traffic controllers for an airport, improving on-time performance by 25%.</li>
            <li>Case Study 3: Staffed a customer service team for a regional airline, increasing passenger satisfaction by 30%.</li>
          </ul>
          <Button 
            size="lg"
            className="bg-accent hover:bg-accent/90 text-white px-8"
          >
            Read More Success Stories
          </Button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Aviation;
