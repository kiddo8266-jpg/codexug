import { getContent } from "@/lib/content";
import StatsEditor from "@/components/admin/editors/StatsEditor";

export default function StatsPage() {
  const content = getContent();
  return <StatsEditor initialData={content.stats} fullContent={content} />;
}
