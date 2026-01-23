import { Metadata } from 'next';
import { COMPANY } from '@/lib/data/company';

interface GenerateMetadataOptions {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
}

export function generatePageMetadata({
  title,
  description,
  path,
  noIndex = false,
}: GenerateMetadataOptions): Metadata {
  const url = `${COMPANY.url}${path}`;

  return {
    title: `${title} | ${COMPANY.name}`,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${title} | ${COMPANY.name}`,
      description,
      url,
      siteName: COMPANY.name,
      locale: 'en_US',
      type: 'website',
      images: [
        {
          url: `${COMPANY.url}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: COMPANY.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${COMPANY.name}`,
      description,
      images: [`${COMPANY.url}/og-image.jpg`],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

export function generateServiceMetadata(
  serviceName: string,
  serviceSlug: string,
  metaDescription: string
): Metadata {
  return generatePageMetadata({
    title: `${serviceName} in West Valley AZ`,
    description: metaDescription,
    path: `/services/${serviceSlug}`,
  });
}

export function generateLocationMetadata(
  cityName: string,
  citySlug: string,
  metaDescription: string
): Metadata {
  return generatePageMetadata({
    title: `${cityName} AC Repair & HVAC Service`,
    description: metaDescription,
    path: `/locations/${citySlug}`,
  });
}
