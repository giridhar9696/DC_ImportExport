import { ServiceDetail } from "../services-ui";
import { services } from "../service-data";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Import Services",
  description:
    "Illustrative import service content for inbound trade coordination and document-aware planning.",
  path: "/services/import"
});

export default function ImportServicePage() {
  return <ServiceDetail service={services.find((service) => service.slug === "import") ?? services[0]} />;
}
