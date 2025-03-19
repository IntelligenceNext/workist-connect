
import HeroSection from "@/components/contact/HeroSection";
import USOfficeSection from "@/components/contact/USOfficeSection";
import IndiaOfficeSection from "@/components/contact/IndiaOfficeSection";
import ContactFormSection from "@/components/contact/ContactFormSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-16">
        <HeroSection />
        <USOfficeSection />
        <IndiaOfficeSection />
        <ContactFormSection />
      </div>
      <Footer />
    </>
  );
};

export default Contact;
