
import { Service, Industry, Location, NavItem, JobLink, ResourceLink } from "@/types/navbar";

export const services: Service[] = [
  { 
    name: "Staffing Services", 
    href: "/services/staffing", 
    icon: "👥",
    description: "Connect with top talent for your positions"
  },
  { 
    name: "Professional Services", 
    href: "/services/professional", 
    icon: "🌲",
    description: "Comprehensive professional solutions"
  },
  { 
    name: "Culture Consulting", 
    href: "/services/culture-consulting", 
    icon: "🧭",
    description: "Transform your organizational culture"
  },
  { 
    name: "Recruitment Process Outsourcing", 
    href: "/services/rpo", 
    icon: "👥",
    description: "Streamline your hiring process"
  },
  { 
    name: "Diversity, Equity, Inclusion, & Belonging", 
    href: "/services/deib", 
    icon: "❤️",
    description: "Build an inclusive workplace"
  },
  { 
    name: "Executive Recruiting", 
    href: "/services/executive", 
    icon: "🏆",
    description: "Find top-level talent"
  }
];

export const industries: Industry[] = [
  { name: "Consumer & Industrial Products", href: "/industries/consumer-industrial" },
  { name: "Distribution & Logistics", href: "/industries/logistics" },
  { name: "Government Services", href: "/industries/government" },
  { name: "Life Sciences", href: "/industries/life-sciences" },
  { name: "Construction & Energy", href: "/industries/construction-energy" },
  { name: "Healthcare", href: "/industries/healthcare" },
  { name: "Automotive", href: "/industries/automotive" },
  { name: "Aviation & Airport Operations", href: "/industries/aviation" }
];

export const locations: Location[] = [
  { name: "United States", flag: "🇺🇸", href: "/locations/us" },
  { name: "India", flag: "🇮🇳", href: "/locations/india" }
];

export const jobSeekerLinks: JobLink[] = [
  {
    name: "Search Jobs",
    href: "/jobs/search",
    icon: "🔍",
    description: "Browse through thousands of job opportunities across various industries"
  },
  {
    name: "In-House Team",
    href: "/jobs/in-house",
    icon: "🏢",
    description: "Join our internal team and help shape the future of recruitment"
  },
  {
    name: "Consultants",
    href: "/jobs/consultants",
    icon: "💼",
    description: "Explore consulting opportunities with leading organizations"
  },
  {
    name: "Be The Light Tour",
    href: "/jobs/be-the-light",
    icon: "✨",
    description: "Join our mission to illuminate career paths and inspire change"
  }
];

export const resourceLinks: ResourceLink[] = [
  {
    name: "Workplace Management",
    href: "/resources/workplace-management",
    icon: "📊",
    description: "Best practices for managing modern workplaces effectively"
  },
  {
    name: "How to Hire",
    href: "/resources/how-to-hire",
    icon: "🎯",
    description: "Comprehensive guides on recruitment and hiring processes"
  },
  {
    name: "Market Trends",
    href: "/resources/market-trends",
    icon: "📈",
    description: "Latest insights and analysis of industry trends"
  },
  {
    name: "White Papers",
    href: "/resources/white-papers",
    icon: "📄",
    description: "In-depth research and industry insights"
  },
  {
    name: "Case Studies",
    href: "/resources/case-studies",
    icon: "📚",
    description: "Real success stories and implementation examples"
  }
];

export const navItems: NavItem[] = [
  {
    name: "For Business",
    href: "#",
    hasSubmenu: true,
  },
  { 
    name: "For Job Seekers", 
    href: "#",
    hasSubmenu: true 
  },
  { 
    name: "Resources", 
    href: "#",
    hasSubmenu: true 
  },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];
