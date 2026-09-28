import { ServiceDetail } from "../services-ui";
import { services } from "../service-data";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Sourcing Services",
  description:
    "Illustrative sourcing service content for product discovery, vendor conversations, and procurement support.",
  path: "/services/sourcing"
});

export default function SourcingServicePage() {
  return <ServiceDetail service={services.find((service) => service.slug === "sourcing") ?? services[3]} />;
}
