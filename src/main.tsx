import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import Index from './pages/Index.tsx'
import NotFound from './pages/NotFound.tsx'
import About from './pages/About.tsx'
import Healthcare from './pages/industries/Healthcare.tsx'
import Automotive from './pages/industries/Automotive.tsx'
import ConsumerIndustrial from './pages/industries/ConsumerIndustrial.tsx'
import ConstructionEnergy from './pages/industries/ConstructionEnergy.tsx'
import Government from './pages/industries/Government.tsx'
import LifeSciences from './pages/industries/LifeSciences.tsx'
import Logistics from './pages/industries/Logistics.tsx'
import Aviation from './pages/industries/Aviation.tsx'
import Staffing from './pages/services/Staffing.tsx'
import Professional from './pages/services/Professional.tsx'
import CultureConsulting from './pages/services/CultureConsulting.tsx'
import RPO from './pages/services/RPO.tsx'
import DEIB from './pages/services/DEIB.tsx'
import Executive from './pages/services/Executive.tsx'
import US from './pages/locations/US.tsx'
import India from './pages/locations/India.tsx'
import InHouse from './pages/jobs/InHouse.tsx'
import Consultants from './pages/jobs/Consultants.tsx'
import BeTheLight from './pages/jobs/BeTheLight.tsx'
import WorkplaceManagement from './pages/resources/WorkplaceManagement.tsx'
import MarketTrends from './pages/resources/MarketTrends.tsx'
import HowToHire from './pages/resources/HowToHire.tsx'
import WhitePapers from './pages/resources/WhitePapers.tsx'
import CaseStudies from './pages/resources/CaseStudies.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Index />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "locations/india",
        element: <India />
      },
      {
        path: "locations/us",
        element: <US />
      },
      {
        path: "industries/healthcare",
        element: <Healthcare />
      },
      {
        path: "industries/automotive",
        element: <Automotive />
      },
      {
        path: "industries/consumer-industrial",
        element: <ConsumerIndustrial />
      },
      {
        path: "industries/construction-energy",
        element: <ConstructionEnergy />
      },
      {
        path: "industries/government",
        element: <Government />
      },
      {
        path: "industries/life-sciences",
        element: <LifeSciences />
      },
      {
        path: "industries/logistics",
        element: <Logistics />
      },
      {
        path: "industries/aviation",
        element: <Aviation />
      },
      {
        path: "services/staffing",
        element: <Staffing />
      },
      {
        path: "services/professional",
        element: <Professional />
      },
      {
        path: "services/culture-consulting",
        element: <CultureConsulting />
      },
      {
        path: "services/rpo",
        element: <RPO />
      },
      {
        path: "services/deib",
        element: <DEIB />
      },
      {
        path: "services/executive",
        element: <Executive />
      },
      {
        path: "jobs/in-house",
        element: <InHouse />
      },
      {
        path: "jobs/consultants",
        element: <Consultants />
      },
      {
        path: "jobs/be-the-light",
        element: <BeTheLight />
      },
      {
        path: "resources/workplace-management",
        element: <WorkplaceManagement />
      },
      {
        path: "resources/market-trends",
        element: <MarketTrends />
      },
      {
        path: "resources/how-to-hire",
        element: <HowToHire />
      },
      {
        path: "resources/white-papers",
        element: <WhitePapers />
      },
      {
        path: "resources/case-studies",
        element: <CaseStudies />
      }
    ]
  }
])

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
)
