import { getContent } from "@/lib/content";
import CompanyInfoEditor from "@/components/admin/editors/CompanyInfoEditor";

export default function DashboardPage() {
  const content = getContent();
  return <CompanyInfoEditor initialData={content.companyInfo} fullContent={content} />;
}
