import { ServiceDetail } from "../services-ui";
import { services } from "../service-data";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Documentation Services",
  description:
    "Illustrative documentation service content for trade paperwork readiness and document coordination.",
  path: "/services/documentation"
});

export default function DocumentationServicePage() {
  return <ServiceDetail service={services.find((service) => service.slug === "documentation") ?? services[4]} />;
}
