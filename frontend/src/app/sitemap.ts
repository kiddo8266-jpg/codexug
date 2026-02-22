import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://codexug.com';
  const routes = ['', '/about', '/services', '/products', '/contact', '/faq', '/blog'];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '/blog' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}
