import { getContent } from "@/lib/content";
import TestimonialsEditor from "@/components/admin/editors/TestimonialsEditor";

export default function TestimonialsPage() {
  const content = getContent();
  return <TestimonialsEditor initialData={content.testimonials} fullContent={content} />;
}
