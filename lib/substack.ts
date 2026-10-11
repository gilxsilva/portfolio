export interface Post {
  title: string;
  url: string;
  date: string | null;
  excerpt: string;
}

/**
 * Reads the Substack RSS feed from SUBSTACK_FEED_URL, cached for an hour (ISR).
 * Returns null when the env var is missing or the feed can't be fetched, so
 * callers can show an empty state instead of failing the page.
 */
export async function getPosts(limit?: number): Promise<Post[] | null> {
  const feedUrl = process.env.SUBSTACK_FEED_URL;
  if (!feedUrl) return null;

  try {
    const res = await fetch(feedUrl, { next: { revalidate: 3600 } });
    if (!res.ok) return null;
    const xml = await res.text();

    const posts = [...xml.matchAll(/<item\b[^>]*>([\s\S]*?)<\/item>/g)]
      .map(([, item]) => {
        const date = new Date(toText(tag(item, 'pubDate')));
        return {
          title: toText(tag(item, 'title')),
          url: toText(tag(item, 'link')),
          date: Number.isNaN(date.getTime()) ? null : date.toISOString(),
          excerpt: truncate(toText(tag(item, 'description')), 220),
        };
      })
      .filter((post) => post.title && /^https?:\/\//.test(post.url));

    return limit ? posts.slice(0, limit) : posts;
  } catch {
    return null;
  }
}

export function formatPostDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  });
}

function tag(xml: string, name: string) {
  const match = xml.match(new RegExp(`<${name}\\b[^>]*>([\\s\\S]*?)</${name}>`));
  return match ? match[1] : '';
}

function toText(raw: string) {
  const unwrapped = raw.replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1');
  return decodeEntities(decodeEntities(unwrapped).replace(/<[^>]+>/g, ' '))
    .replace(/\s+/g, ' ')
    .trim();
}

function decodeEntities(s: string) {
  return s
    .replace(/&#x([0-9a-f]+);/gi, (_, hex) => String.fromCodePoint(parseInt(hex, 16)))
    .replace(/&#(\d+);/g, (_, dec) => String.fromCodePoint(Number(dec)))
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&');
}

function truncate(s: string, max: number) {
  if (s.length <= max) return s;
  return s.slice(0, s.lastIndexOf(' ', max)).replace(/[,.;:]$/, '') + '…';
}
