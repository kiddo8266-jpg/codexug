import { getContent } from "@/lib/content";
import FounderEditor from "@/components/admin/editors/FounderEditor";

export default function FounderPage() {
  const content = getContent();
  return <FounderEditor initialData={content.founder} fullContent={content} />;
}
