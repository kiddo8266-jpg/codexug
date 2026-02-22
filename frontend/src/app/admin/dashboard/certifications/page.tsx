import { getContent } from "@/lib/content";
import CertificationsEditor from "@/components/admin/editors/CertificationsEditor";

export default function CertificationsPage() {
  const content = getContent();
  return <CertificationsEditor initialData={content.certifications} fullContent={content} />;
}
