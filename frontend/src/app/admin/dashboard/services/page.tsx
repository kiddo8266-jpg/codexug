import { getContent } from "@/lib/content";
import ServicesEditor from "@/components/admin/editors/ServicesEditor";

export default function ServicesPage() {
  const content = getContent();
  return <ServicesEditor initialData={content.services} fullContent={content} />;
}
