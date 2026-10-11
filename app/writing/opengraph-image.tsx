import { albumOgImage, ogSize } from '@/lib/og';

export const alt = 'B-sides & demos: writing by Gil Silva';
export const size = ogSize;
export const contentType = 'image/png';

export default function Image() {
  return albumOgImage({
    eyebrow: 'B-sides & demos',
    title: 'Writing',
    subtitle: 'Notes on engineering, design, and building with people, by Gil Silva.',
  });
}
