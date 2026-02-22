import { getContent } from "@/lib/content";
import ProductsEditor from "@/components/admin/editors/ProductsEditor";

export default function ProductsPage() {
  const content = getContent();
  return <ProductsEditor initialData={content.products} fullContent={content} />;
}
