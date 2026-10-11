import type { Metadata } from 'next';

export const siteName = 'Gil Silva';
export const siteDescription =
  'Software engineer and designer. Stanford Symbolic Systems + HCI. 3× Amazon SDE Intern.';

export function siteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  return 'http://localhost:3000';
}

/** Page metadata that keeps the shared OpenGraph fields (Next replaces, not merges, openGraph). */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} · ${siteName}`,
      description,
      url: path,
      siteName,
      type: 'website',
      locale: 'en_US',
    },
  };
}
