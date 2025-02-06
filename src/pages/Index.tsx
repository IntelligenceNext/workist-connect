import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Industries from "@/components/Industries";
import Family from "@/components/Family";
import News from "@/components/News";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      <Stats />
      <Industries />
      <Family />
      <News />
    </div>
  );
};

export default Index;