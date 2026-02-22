import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://codexug.com';
  const routes = ['', '/about', '/services', '/products', '/contact', '/faq', '/blog', '/privacy', '/terms'];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: ['/privacy', '/terms'].includes(route) ? 'yearly' : route === '/blog' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : ['/privacy', '/terms'].includes(route) ? 0.3 : 0.8,
  }));
}
