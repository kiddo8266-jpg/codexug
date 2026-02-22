import { getContent } from "@/lib/content";
import FAQsEditor from "@/components/admin/editors/FAQsEditor";

export default function FAQsPage() {
  const content = getContent();
  return <FAQsEditor initialData={content.faqs} fullContent={content} />;
}
