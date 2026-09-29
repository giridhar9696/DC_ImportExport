export type NavItem = {
  label: string;
  href?: string;
  children?: NavItem[];
};

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/about",
    children: [
      { label: "About Us", href: "/about" },
      { label: "About Us Overview", href: "/about/about-us" },
      { label: "Our History", href: "/about/history" },
      { label: "History", href: "/about/our-history" },
      { label: "Vision & Mission", href: "/about/vision-mission" },
      { label: "Leadership", href: "/about/leadership" },
      { label: "Founder", href: "/about/leadership/founder" },
      { label: "Management", href: "/about/leadership/management" }
    ]
  },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Our Services", href: "/services" },
      { label: "Import", href: "/services/import" },
      { label: "Export", href: "/services/export" },
      { label: "Logistics", href: "/services/logistics" },
      { label: "Sourcing", href: "/services/sourcing" },
      { label: "Documentation", href: "/services/documentation" },
      { label: "Tariff", href: "/services/tariff" }
    ]
  },
  { label: "Facility", href: "/facility" },
  { label: "Careers", href: "/careers" },
  {
    label: "Media",
    href: "/media",
    children: [
      { label: "Media", href: "/media" },
      { label: "Photos", href: "/media/photos" },
      { label: "Videos", href: "/media/videos" },
      { label: "Press", href: "/media/press" },
      { label: "Brochure", href: "/media/brochure" },
      { label: "Certificates", href: "/media/certificates" }
    ]
  },
  { label: "Contact Us", href: "/contact-us" }
];
