import { ClipboardList, FileText, Globe2, PackageCheck, Ship, Truck } from "lucide-react";
import { assetPath } from "@/lib/assets";

export const services = [
  {
    slug: "import",
    title: "Import",
    eyebrow: "Import Service",
    image:
      assetPath("/assets/dc ie/stitch_dc_imports_brand_photography/industrial_commercial_photography_inside_a_bustling_modern_indian_export/screen.png"),
    icon: PackageCheck,
    intro:
      "Illustrative demo content for coordinating inbound trade activity with clear communication, document readiness, and practical shipment planning.",
    overview:
      "This import page explains how an import service could be presented on the website once verified operating details are supplied. The copy is intentionally neutral and avoids claims about volume, reach, approvals, or regulatory outcomes.",
    steps: [
      {
        title: "Requirement Review",
        text: "Demo step for understanding product category, shipment context, documentation needs, and the information required before movement planning."
      },
      {
        title: "Supplier Coordination",
        text: "Demo step for organizing communication points, expected documents, and practical handoffs between parties."
      },
      {
        title: "Movement Readiness",
        text: "Demo step for preparing a structured checklist before shipment updates, receipt planning, or next-stage coordination."
      }
    ],
    principles: [
      "Structured inbound communication",
      "Document-aware planning",
      "Clear status checkpoints"
    ]
  },
  {
    slug: "export",
    title: "Export",
    eyebrow: "Export Service",
    image:
      assetPath("/assets/dc ie/stitch_dc_imports_brand_photography/commercial_editorial_photography_a_massive_modern_container_ship_stacked_with/screen.png"),
    icon: Ship,
    intro:
      "Illustrative demo content for presenting outbound trade support with a focus on communication, preparation, and shipment-facing workflows.",
    overview:
      "This export page is written as a polished content framework only. It does not claim destinations served, customers handled, shipping capacity, or guaranteed export outcomes.",
    steps: [
      {
        title: "Export Scope",
        text: "Demo step for clarifying product information, buyer requirements, timelines, and documents needed for an export conversation."
      },
      {
        title: "Documentation Flow",
        text: "Demo step for arranging paperwork checkpoints and reducing ambiguity before goods move through the process."
      },
      {
        title: "Dispatch Coordination",
        text: "Demo step for aligning shipment communication, handoffs, and update rhythms for involved stakeholders."
      }
    ],
    principles: [
      "Prepared export communication",
      "Orderly document flow",
      "Practical shipment coordination"
    ]
  },
  {
    slug: "logistics",
    title: "Logistics",
    eyebrow: "Logistics Service",
    image:
      assetPath("/assets/dc ie/stitch_dc_imports_brand_photography/commercial_transportation_a_modern_logistics_fleet_of_container_transport/screen.png"),
    icon: Truck,
    intro:
      "Illustrative demo content for logistics coordination across transport, warehouse, and shipment communication touchpoints.",
    overview:
      "This logistics page describes a content direction for planning and coordination. It does not assert fleet ownership, warehouse capacity, transit times, or coverage areas.",
    steps: [
      {
        title: "Movement Planning",
        text: "Demo step for mapping the shipment context, handling needs, timing expectations, and coordination responsibilities."
      },
      {
        title: "Handoff Alignment",
        text: "Demo step for keeping transport, facility, and documentation conversations organized around clear checkpoints."
      },
      {
        title: "Progress Updates",
        text: "Demo step for presenting status communication in a way that helps stakeholders follow the movement."
      }
    ],
    principles: [
      "Clear movement planning",
      "Coordinated handoffs",
      "Readable shipment updates"
    ]
  },
  {
    slug: "sourcing",
    title: "Sourcing",
    eyebrow: "Sourcing Service",
    image:
      assetPath("/assets/dc ie/stitch_dc_imports_brand_photography/corporate_lifestyle_photography_two_trade_specialists_and_sourcing_managers/screen.png"),
    icon: Globe2,
    intro:
      "Illustrative demo content for sourcing conversations, vendor discovery workflows, and practical procurement communication.",
    overview:
      "This sourcing page is a neutral framework for future approved copy. It does not claim supplier networks, exclusive relationships, pricing advantages, or verified market access.",
    steps: [
      {
        title: "Requirement Definition",
        text: "Demo step for organizing product specifications, target quantities, quality expectations, and decision criteria."
      },
      {
        title: "Supplier Conversation",
        text: "Demo step for structuring enquiries, comparing available information, and keeping communication traceable."
      },
      {
        title: "Selection Support",
        text: "Demo step for preparing decision-ready summaries without making claims about final commercial outcomes."
      }
    ],
    principles: [
      "Clear sourcing briefs",
      "Traceable vendor communication",
      "Decision-ready summaries"
    ]
  },
  {
    slug: "documentation",
    title: "Documentation",
    eyebrow: "Documentation Service",
    image:
      assetPath("/assets/dc ie/stitch_dc_imports_brand_photography/professional_corporate_document_photography_an_international_trade/screen.png"),
    icon: FileText,
    intro:
      "Illustrative demo content for trade documentation readiness, paperwork coordination, and document-focused communication.",
    overview:
      "This documentation page presents a careful content model only. It does not provide legal, customs, tax, regulatory, or compliance advice.",
    steps: [
      {
        title: "Document Checklist",
        text: "Demo step for identifying the paperwork categories that may need to be discussed for a trade movement."
      },
      {
        title: "Review Coordination",
        text: "Demo step for organizing document versions, required inputs, and internal checkpoints before submission or sharing."
      },
      {
        title: "Record Readiness",
        text: "Demo step for keeping communication and document references easy to follow for future review."
      }
    ],
    principles: [
      "Organized document flow",
      "Version-aware communication",
      "Readable record structure"
    ]
  }
];

export const serviceHeroImage =
  assetPath("/assets/dc ie/stitch_dc_imports_brand_photography/commercial_logistics_photography_a_colossal_container_vessel_docked_at_a_state/screen.png");

export const tariffImage =
  assetPath("/assets/dc ie/stitch_dc_imports_brand_photography/professional_detail_still_life_photography_close_up_top_angle_view_of_an/screen.png");

export const tariffCategories = [
  {
    category: "Import Documentation Review",
    basis: "Example category only",
    note: "No price, duty, tax, or official fee is stated."
  },
  {
    category: "Export Coordination Support",
    basis: "Example category only",
    note: "Prepared for future approved tariff or enquiry-based wording."
  },
  {
    category: "Logistics Planning Support",
    basis: "Example category only",
    note: "Does not represent a quotation, schedule, or binding offer."
  },
  {
    category: "Sourcing Communication Support",
    basis: "Example category only",
    note: "Illustrative structure for content presentation only."
  },
  {
    category: "Trade Document Organization",
    basis: "Example category only",
    note: "Not legal, tax, customs, or regulatory advice."
  }
];

export const processIcon = ClipboardList;
