import { Award, BookOpen, Camera, FileText, Newspaper, PlaySquare } from "lucide-react";
import { assetPath } from "@/lib/assets";

const base = assetPath("/assets/dc ie/stitch_dc_imports_brand_photography");

export const mediaHeroImage = `${base}/editorial_documentary_photography_a_premium_international_trade_and_logistics/screen.png`;

export const mediaSections = [
  {
    title: "Photos",
    href: "/media#photos",
    icon: Camera,
    image: `${base}/commercial_logistics_photography_a_colossal_container_vessel_docked_at_a_state/screen.png`,
    description:
      "A curated visual gallery using supplied demo assets for maritime, logistics, workplace, and trade storytelling."
  },
  {
    title: "Videos",
    href: "/media#videos",
    icon: PlaySquare,
    image: `${base}/abstract_maritime_logistics_composition_neat_geometric_stacks_of_colorful_blue/screen.png`,
    description:
      "A professional video showcase layout prepared for future approved media files; no real videos were supplied."
  },
  {
    title: "Press",
    href: "/media#press",
    icon: Newspaper,
    image: `${base}/editorial_documentary_photography_an_executive_press_clipping_and_business_news/screen.png`,
    description:
      "Demo-safe press presentation for future verified announcements, with no invented outlets, dates, or coverage."
  },
  {
    title: "Brochure",
    href: "/media#brochure",
    icon: BookOpen,
    image: `${base}/editorial_documentary_still_life_a_prestigious_business_journal_publication/screen.png`,
    description:
      "A brochure preview area for an approved PDF when supplied; no downloadable brochure file exists in the ZIP."
  },
  {
    title: "Certificates",
    href: "/media#certificates",
    icon: Award,
    image: `${base}/professional_corporate_photography_global_supply_chain_quality_management_iso/screen.png`,
    description:
      "A certificate presentation framework that avoids claiming any real certification, standard, or compliance status."
  }
];

export const photoGallery = [
  {
    src: `${base}/commercial_logistics_photography_a_colossal_container_vessel_docked_at_a_state/screen.png`,
    title: "Port Logistics",
    caption: "Illustrative demo photo from supplied assets for maritime logistics storytelling.",
    alt: "Large container vessel docked at port"
  },
  {
    src: `${base}/industrial_port_photography_heavy_duty_container_gantry_cranes_towering_against/screen.png`,
    title: "Port Infrastructure",
    caption: "Illustrative demo photo from supplied assets for port and crane operations visuals.",
    alt: "Container gantry cranes at a port"
  },
  {
    src: `${base}/modern_logistics_warehousing_multi_tier_modern_logistics_distribution_center/screen.png`,
    title: "Logistics Facility",
    caption: "Illustrative demo photo from supplied assets for warehousing and distribution presentation.",
    alt: "Modern logistics distribution center"
  },
  {
    src: `${base}/commercial_transportation_a_modern_logistics_fleet_of_container_transport/screen.png`,
    title: "Transport Coordination",
    caption: "Illustrative demo photo from supplied assets for container transport coordination.",
    alt: "Container transport fleet"
  },
  {
    src: `${base}/corporate_interior_photography_small_international_business_team_having_an/screen.png`,
    title: "Team Discussion",
    caption: "Illustrative demo photo from supplied assets for workplace communication themes.",
    alt: "Business team having a discussion"
  },
  {
    src: `${base}/professional_corporate_document_photography_an_international_trade/screen.png`,
    title: "Trade Documentation",
    caption: "Illustrative demo photo from supplied assets for document-focused trade communication.",
    alt: "International trade documents"
  }
];

export const demoVideoCards = [
  {
    title: "Illustrative Demo Video: Trade Overview",
    text: "A future approved video could introduce the company and its trade communication approach. No video file was supplied."
  },
  {
    title: "Illustrative Demo Video: Logistics Workflow",
    text: "A future approved video could explain shipment coordination themes without making unverifiable performance claims."
  },
  {
    title: "Illustrative Demo Video: Documentation Readiness",
    text: "A future approved video could summarize document organization topics once actual media is available."
  }
];

export const demoPressItems = [
  {
    title: "Illustrative Demo Press Item: Company Profile Format",
    text: "A structured card reserved for future verified company news. No publication, outlet, date, or achievement is claimed."
  },
  {
    title: "Illustrative Demo Press Item: Service Update Format",
    text: "A demo-safe layout for future approved service news without inventing partnerships, awards, or announcements."
  },
  {
    title: "Illustrative Demo Press Item: Media Note Format",
    text: "A placeholder press format for reviewed copy once real media material is supplied."
  }
];

export const demoCertificateCards = [
  {
    title: "Illustrative Demo Certificate",
    text: "No genuine certificate file was found in the supplied ZIP. This card does not represent a real certification."
  },
  {
    title: "Document Preview Placeholder",
    text: "Reserved for an approved certificate asset with verified filename, issuer, and display permissions."
  }
];

export const documentIcon = FileText;
