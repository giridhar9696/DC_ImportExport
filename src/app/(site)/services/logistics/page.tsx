import { ServiceDetail } from "../services-ui";
import { services } from "../service-data";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Logistics Services",
  description:
    "Illustrative logistics service content for movement planning, handoffs, and shipment communication.",
  path: "/services/logistics"
});

export default function LogisticsServicePage() {
  return <ServiceDetail service={services.find((service) => service.slug === "logistics") ?? services[2]} />;
}
