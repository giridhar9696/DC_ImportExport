import { ServiceDetail } from "../services-ui";
import { services } from "../service-data";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Export Services",
  description:
    "Illustrative export service content for outbound trade communication and coordination workflows.",
  path: "/services/export"
});

export default function ExportServicePage() {
  return <ServiceDetail service={services.find((service) => service.slug === "export") ?? services[1]} />;
}
