import { albumOgImage, ogSize } from '@/lib/og';

export const alt = 'On repeat: what Gil Silva is listening to, building, reading, and learning';
export const size = ogSize;
export const contentType = 'image/png';

export default function Image() {
  return albumOgImage({
    eyebrow: 'Now',
    title: 'On repeat',
    subtitle: 'What Gil Silva is listening to, building, reading, and learning right now.',
  });
}
