import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BLOG_POSTS } from "@/lib/data";
import { Calendar, Clock, ArrowLeft, Tag } from "lucide-react";
import RelatedArticles from "@/components/RelatedArticles";

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-UG", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="pt-20 bg-[#060E1A] min-h-screen">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-b from-[#060E1A] to-[#0A1628]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-sm font-medium mb-8 transition-colors duration-200"
          >
            <ArrowLeft size={16} />
            Back to Blog
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="bg-cyan-500/10 text-cyan-400 text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
              <Tag size={11} />
              {post.category}
            </span>
            <span className="text-gray-500 text-xs flex items-center gap-1">
              <Clock size={12} />
              {post.readTime}
            </span>
            <span className="text-gray-500 text-xs flex items-center gap-1">
              <Calendar size={12} />
              {formatDate(post.date)}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">{post.excerpt}</p>
        </div>
      </section>

      {/* Post Image */}
      <section className="bg-[#0A1628]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden border border-white/10">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 896px"
            />
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-[#0A1628]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-8">
            Latest on this Topic
          </h2>
          <RelatedArticles topic={post.title} category={post.category} />
        </div>
      </section>
    </div>
  );
}
