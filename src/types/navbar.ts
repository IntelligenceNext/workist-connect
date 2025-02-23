
export interface Service {
  name: string;
  href: string;
  icon: string;
  description: string;
}

export interface Industry {
  name: string;
  href: string;
}

export interface Location {
  name: string;
  flag: string;
  href: string;
}

export interface NavItem {
  name: string;
  href: string;
  hasSubmenu?: boolean;
}

export interface JobLink {
  name: string;
  href: string;
  icon: string;
  description: string;
}

export interface ResourceLink {
  name: string;
  href: string;
  icon: string;
  description: string;
}
