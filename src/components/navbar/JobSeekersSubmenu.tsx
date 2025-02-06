interface JobLink {
  name: string;
  href: string;
  icon: string;
  description: string;
}

interface JobSeekersSubmenuProps {
  jobSeekerLinks: JobLink[];
}

const JobSeekersSubmenu = ({ jobSeekerLinks }: JobSeekersSubmenuProps) => {
  return (
    <div className="bg-[#001B3D] grid grid-cols-2 gap-4 p-6 pr-[5%]">
      {jobSeekerLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          className="flex items-start p-4 rounded-lg hover:bg-[#030631] transition-colors group"
        >
          <span className="text-2xl mr-4">{link.icon}</span>
          <div>
            <h3 className="text-white font-medium group-hover:text-accent transition-colors">
              {link.name}
            </h3>
            <p className="text-gray-300 text-sm mt-1 group-hover:text-white transition-colors">
              {link.description}
            </p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default JobSeekersSubmenu;