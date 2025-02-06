const Industries = () => {
  const industries = [
    { name: "Administrative", href: "/industries/administrative" },
    { name: "Automotive", href: "/industries/automotive" },
    { name: "Clerical", href: "/industries/clerical" },
    { name: "Construction", href: "/industries/construction" },
    { name: "Creative", href: "/industries/creative" },
    { name: "Customer Service", href: "/industries/customer-service" },
    { name: "Education", href: "/industries/education" },
    { name: "Energy", href: "/industries/energy" },
    { name: "Engineering", href: "/industries/engineering" },
    { name: "Financial Services", href: "/industries/financial-services" },
    { name: "Government", href: "/industries/government" },
    { name: "Healthcare", href: "/industries/healthcare" },
    { name: "Hospitality", href: "/industries/hospitality" },
    { name: "Human Resources (HR)", href: "/industries/human-resources" },
    { name: "Industrial", href: "/industries/industrial" },
    { name: "Information Technology (IT)", href: "/industries/it" },
    { name: "Insurance", href: "/industries/insurance" },
    { name: "Legal", href: "/industries/legal" },
    { name: "Life Sciences", href: "/industries/life-sciences" },
    { name: "Logistics", href: "/industries/logistics" },
    { name: "Manufacturing", href: "/industries/manufacturing" },
    { name: "Marketing", href: "/industries/marketing" },
    { name: "Media & Entertainment", href: "/industries/media-entertainment" },
    { name: "Nonprofit", href: "/industries/nonprofit" },
    { name: "Real Estate", href: "/industries/real-estate" },
    { name: "Retail", href: "/industries/retail" },
    { name: "Sales", href: "/industries/sales" },
    { name: "Semiconductor", href: "/industries/semiconductor" },
    { name: "Telecom", href: "/industries/telecom" }
  ];

  return (
    <section className="py-28 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Serving All Industries and Functions
        </h2>
        
        <div className="text-center">
          {industries.map((industry, index) => (
            <span key={industry.name}>
              <a
                href={industry.href}
                className="text-[#040842] hover:text-opacity-80 transition-colors"
              >
                {industry.name}
              </a>
              {index < industries.length - 1 && (
                <span className="mx-2 text-gray-400">|</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;