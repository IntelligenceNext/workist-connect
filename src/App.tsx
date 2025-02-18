
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import India from "./pages/locations/India";
import NotFound from "./pages/NotFound";
import Healthcare from "./pages/industries/Healthcare";
import Automotive from "./pages/industries/Automotive";
import ConsumerIndustrial from "./pages/industries/ConsumerIndustrial";
import ConstructionEnergy from "./pages/industries/ConstructionEnergy";
import Government from "./pages/industries/Government";
import LifeSciences from "./pages/industries/LifeSciences";
import Logistics from "./pages/industries/Logistics";
import Aviation from "./pages/industries/Aviation";
import Staffing from "./pages/services/Staffing";
import Professional from "./pages/services/Professional";
import CultureConsulting from "./pages/services/CultureConsulting";
import RPO from "./pages/services/RPO";
import DEIB from "./pages/services/DEIB";
import Executive from "./pages/services/Executive";
import US from "./pages/locations/US";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/locations/india" element={<India />} />
          <Route path="/locations/us" element={<US />} />
          <Route path="/industries/healthcare" element={<Healthcare />} />
          <Route path="/industries/automotive" element={<Automotive />} />
          <Route path="/industries/consumer-industrial" element={<ConsumerIndustrial />} />
          <Route path="/industries/construction-energy" element={<ConstructionEnergy />} />
          <Route path="/industries/government" element={<Government />} />
          <Route path="/industries/life-sciences" element={<LifeSciences />} />
          <Route path="/industries/logistics" element={<Logistics />} />
          <Route path="/industries/aviation" element={<Aviation />} />
          <Route path="/services/staffing" element={<Staffing />} />
          <Route path="/services/professional" element={<Professional />} />
          <Route path="/services/culture-consulting" element={<CultureConsulting />} />
          <Route path="/services/rpo" element={<RPO />} />
          <Route path="/services/deib" element={<DEIB />} />
          <Route path="/services/executive" element={<Executive />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <Toaster />
      <Sonner />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
