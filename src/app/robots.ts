import { MetadataRoute } from 'next';
import { COMPANY } from '@/lib/data/company';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'],
    },
    sitemap: `${COMPANY.url}/sitemap.xml`,
  };
}
