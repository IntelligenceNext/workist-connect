
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import StaffingServices from "./pages/services/Staffing";
import RPOServices from "./pages/services/RPO";
import DEIBServices from "./pages/services/DEIB";
import Professional from "./pages/services/Professional";
import CultureConsulting from "./pages/services/CultureConsulting";
import Executive from "./pages/services/Executive";
import ConsumerIndustrial from "./pages/industries/ConsumerIndustrial";
import Logistics from "./pages/industries/Logistics";
import Government from "./pages/industries/Government";
import LifeSciences from "./pages/industries/LifeSciences";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services/staffing" element={<StaffingServices />} />
          <Route path="/services/rpo" element={<RPOServices />} />
          <Route path="/services/deib" element={<DEIBServices />} />
          <Route path="/services/professional" element={<Professional />} />
          <Route path="/services/culture-consulting" element={<CultureConsulting />} />
          <Route path="/services/executive" element={<Executive />} />
          <Route path="/industries/consumer-industrial" element={<ConsumerIndustrial />} />
          <Route path="/industries/logistics" element={<Logistics />} />
          <Route path="/industries/government" element={<Government />} />
          <Route path="/industries/life-sciences" element={<LifeSciences />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
