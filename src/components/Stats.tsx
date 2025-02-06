const stats = [
  { label: "Years of Experience", value: "10+" },
  { label: "Successful Placements", value: "5000+" },
  { label: "Client Companies", value: "200+" },
  { label: "Industry Sectors", value: "5" },
];

const Stats = () => {
  return (
    <div className="bg-[#040842] py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center"
            >
              <p className="text-3xl font-bold text-white sm:text-4xl">
                {stat.value}
              </p>
              <p className="text-sm font-medium text-primary-foreground sm:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;