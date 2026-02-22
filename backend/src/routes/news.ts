import { Router, Request, Response } from 'express';

const router = Router();

const MOCK_ARTICLES = [
  {
    title: 'Top Technology Trends Shaping Businesses in 2024',
    description:
      'Discover the key technology trends that are transforming how businesses operate and compete in the digital era.',
    url: 'https://techcrunch.com',
    image: null,
    publishedAt: new Date().toISOString(),
    source: 'TechCrunch',
  },
  {
    title: 'How Digital Transformation Is Driving Business Growth',
    description:
      'Organizations embracing digital transformation are seeing measurable improvements in efficiency, customer satisfaction, and revenue.',
    url: 'https://forbes.com/technology',
    image: null,
    publishedAt: new Date().toISOString(),
    source: 'Forbes',
  },
  {
    title: 'Cloud Adoption Continues to Surge Across African Markets',
    description:
      'Businesses in Africa are rapidly moving workloads to the cloud, unlocking new capabilities and cost savings.',
    url: 'https://venturebeat.com',
    image: null,
    publishedAt: new Date().toISOString(),
    source: 'VentureBeat',
  },
  {
    title: 'Cybersecurity Best Practices Every Organization Should Follow',
    description:
      'As threats grow more sophisticated, maintaining a strong security posture requires both technology and culture.',
    url: 'https://wired.com/security',
    image: null,
    publishedAt: new Date().toISOString(),
    source: 'Wired',
  },
];

router.get('/', async (req: Request, res: Response): Promise<void> => {
  const { topic, category } = req.query as { topic?: string; category?: string };
  const apiKey = process.env.GNEWS_API_KEY;

  if (!apiKey) {
    res.json({ articles: MOCK_ARTICLES });
    return;
  }

  try {
    const query = encodeURIComponent(
      [topic, category].filter(Boolean).join(' ')
    );
    const url = `https://gnews.io/api/v4/search?q=${query}&lang=en&max=6&apikey=${apiKey}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`GNews API responded with status ${response.status}`);
    }

    const data = await response.json() as {
      articles: Array<{
        title: string;
        description: string;
        url: string;
        image: string | null;
        publishedAt: string;
        source: { name: string };
      }>;
    };

    const articles = (data.articles ?? []).map((a) => ({
      title: a.title,
      description: a.description,
      url: a.url,
      image: a.image,
      publishedAt: a.publishedAt,
      source: a.source?.name ?? 'Unknown',
    }));

    res.json({ articles });
  } catch (err) {
    console.error('News fetch error:', err);
    res.status(500).json({ error: 'Failed to fetch news articles' });
  }
});

export default router;
