import { MetadataRoute } from 'next';
import { COMPANY } from '@/lib/data/company';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: COMPANY.name,
    short_name: 'AC Champ',
    description: COMPANY.shortDescription,
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#ea580c',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/air_conditioning_champ_logo.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/air_conditioning_champ_logo.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
