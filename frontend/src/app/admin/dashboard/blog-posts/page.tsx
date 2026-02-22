import { getContent } from "@/lib/content";
import BlogPostsEditor from "@/components/admin/editors/BlogPostsEditor";

export default function BlogPostsPage() {
  const content = getContent();
  return <BlogPostsEditor initialData={content.blogPosts} fullContent={content} />;
}
