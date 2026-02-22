"use client";

import { useEffect, useState } from "react";
import { ExternalLink, Loader2, Newspaper } from "lucide-react";

interface Article {
  title: string;
  description: string;
  url: string;
  image: string | null;
  publishedAt: string;
  source: string;
}

interface Props {
  topic: string;
  category: string;
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-UG", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function RelatedArticles({ topic, category }: Props) {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const apiBase = process.env.NEXT_PUBLIC_API_URL ?? "";

    fetch(
      `${apiBase}/api/news?topic=${encodeURIComponent(topic)}&category=${encodeURIComponent(category)}`
    )
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch articles");
        return res.json();
      })
      .then((data) => {
        setArticles(data.articles ?? []);
        setLoading(false);
      })
      .catch(() => {
        setError("Could not load related articles.");
        setLoading(false);
      });
  }, [topic, category]);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="text-cyan-400 animate-spin" size={32} />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-gray-400 text-sm py-6 text-center">{error}</div>
    );
  }

  if (articles.length === 0) {
    return (
      <div className="flex flex-col items-center gap-3 py-10 text-gray-500">
        <Newspaper size={32} />
        <p className="text-sm">No related articles found at this time.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {articles.map((article) => (
        <a
          key={article.url}
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#0F1E35] border border-white/10 rounded-xl p-5 flex flex-col gap-3 hover:border-cyan-500/30 transition-colors duration-300 group"
        >
          <div className="flex items-start justify-between gap-2">
            <span className="text-cyan-400 text-xs font-semibold uppercase tracking-wide">
              {article.source}
            </span>
            <ExternalLink
              size={14}
              className="text-gray-500 group-hover:text-cyan-400 transition-colors duration-200 shrink-0 mt-0.5"
            />
          </div>
          <h3 className="text-white font-semibold text-sm leading-snug line-clamp-3 group-hover:text-cyan-400 transition-colors duration-200">
            {article.title}
          </h3>
          {article.description && (
            <p className="text-gray-400 text-xs leading-relaxed line-clamp-3">
              {article.description}
            </p>
          )}
          <p className="text-gray-600 text-xs mt-auto">
            {formatDate(article.publishedAt)}
          </p>
        </a>
      ))}
    </div>
  );
}
