import { NextRequest, NextResponse } from "next/server";

const MOCK_ARTICLES = [
  {
    title: "Top Technology Trends Shaping Businesses in 2024",
    description:
      "Discover the key technology trends that are transforming how businesses operate and compete in the digital era.",
    url: "https://techcrunch.com",
    image: null,
    publishedAt: new Date().toISOString(),
    source: "TechCrunch",
  },
  {
    title: "How Digital Transformation Is Driving Business Growth",
    description:
      "Organizations embracing digital transformation are seeing measurable improvements in efficiency, customer satisfaction, and revenue.",
    url: "https://forbes.com/technology",
    image: null,
    publishedAt: new Date().toISOString(),
    source: "Forbes",
  },
  {
    title: "Cloud Adoption Continues to Surge Across African Markets",
    description:
      "Businesses in Africa are rapidly moving workloads to the cloud, unlocking new capabilities and cost savings.",
    url: "https://venturebeat.com",
    image: null,
    publishedAt: new Date().toISOString(),
    source: "VentureBeat",
  },
  {
    title: "Cybersecurity Best Practices Every Organization Should Follow",
    description:
      "As threats grow more sophisticated, maintaining a strong security posture requires both technology and culture.",
    url: "https://wired.com/security",
    image: null,
    publishedAt: new Date().toISOString(),
    source: "Wired",
  },
];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const topic = searchParams.get("topic") ?? "";
  const category = searchParams.get("category") ?? "";

  const apiKey = process.env.GNEWS_API_KEY;

  try {
    if (apiKey) {
      const query = encodeURIComponent(`${topic} ${category}`.trim());
      const res = await fetch(
        `https://gnews.io/api/v4/search?q=${query}&lang=en&max=6&apikey=${apiKey}`
      );
      if (!res.ok) throw new Error("GNews API error");
      const data = await res.json();
      const articles = (data.articles ?? []).map(
        (article: {
          title: string;
          description: string;
          url: string;
          image: string | null;
          publishedAt: string;
          source: { name: string };
        }) => ({
          title: article.title,
          description: article.description,
          url: article.url,
          image: article.image,
          publishedAt: article.publishedAt,
          source: article.source.name,
        })
      );
      return NextResponse.json({ articles });
    }

    return NextResponse.json({ articles: MOCK_ARTICLES });
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch news articles" },
      { status: 500 }
    );
  }
}
