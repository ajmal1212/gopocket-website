export interface Link {
  title: string;
  url: string;
  target?: string;
}

export interface NavLink {
  title: string;
  url: string;
  icon?: any;
  description?: string;
}

export interface NavDropdown {
  title: string;
  icon?: any;
  columns?: 2 | 3;
  children: NavEntry[];
}

export type NavEntry = NavLink | NavDropdown;

export interface Image {
  width?: string | number;
  height?: string | number;
  src: string;
  alt: string;
}
