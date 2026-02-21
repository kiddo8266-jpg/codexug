import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BLOG_POSTS } from "@/lib/data";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog & Insights",
  description:
    "Read the latest insights, tips, and news on cybersecurity, cloud computing, IT strategy, and technology trends from the CodexUg team.",
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-UG", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  const [featured, ...rest] = BLOG_POSTS;

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-[#060E1A] to-[#0A1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-cyan-400 text-sm font-semibold uppercase tracking-wider">Insights</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
            Blog & IT Insights
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Stay ahead with the latest insights on cybersecurity, cloud computing,
            digital transformation, and IT best practices from our team of experts.
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Post */}
          {featured && (
            <div className="mb-12">
              <h2 className="text-white font-semibold text-lg mb-6">Featured Article</h2>
              <div className="bg-[#0F1E35] border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-500/30 transition-colors duration-300 group">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative h-64 lg:h-auto">
                    <Image
                      src={featured.image}
                      alt={featured.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0F1E35]/60 to-transparent lg:block hidden" />
                  </div>
                  <div className="p-8 lg:p-10 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-cyan-500/10 text-cyan-400 text-xs font-semibold px-3 py-1 rounded-full">
                        {featured.category}
                      </span>
                      <span className="text-gray-500 text-xs flex items-center gap-1">
                        <Clock size={12} />
                        {featured.readTime}
                      </span>
                    </div>
                    <h3 className="text-white font-bold text-2xl mb-3 group-hover:text-cyan-400 transition-colors duration-200">
                      {featured.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">{featured.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 text-xs flex items-center gap-1">
                        <Calendar size={12} />
                        {formatDate(featured.date)}
                      </span>
                      <Link
                        href={`/blog/${featured.slug}`}
                        className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 text-sm font-semibold transition-colors duration-200"
                      >
                        Read More <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <article
                key={post.id}
                className="bg-[#0F1E35] border border-white/10 rounded-xl overflow-hidden hover:border-cyan-500/30 transition-colors duration-300 group"
              >
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F1E35] to-transparent" />
                  <span className="absolute top-3 left-3 bg-cyan-500/90 text-white text-xs font-medium px-2 py-1 rounded-full flex items-center gap-1">
                    <Tag size={10} />
                    {post.category}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-white font-semibold mb-2 group-hover:text-cyan-400 transition-colors duration-200 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-gray-500 text-xs">
                      <span className="flex items-center gap-1">
                        <Calendar size={11} />
                        {formatDate(post.date)}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={11} />
                        {post.readTime}
                      </span>
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-cyan-400 hover:text-cyan-300 text-xs font-semibold flex items-center gap-1 transition-colors duration-200"
                    >
                      Read More <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
