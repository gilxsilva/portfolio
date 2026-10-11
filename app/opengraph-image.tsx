import { albumOgImage, ogSize } from '@/lib/og';

export const alt = 'Gil Silva, Ingeniero y Diseñador, Vol. 1';
export const size = ogSize;
export const contentType = 'image/png';

export default function Image() {
  return albumOgImage({
    eyebrow: 'New release · Vol. 1',
    title: 'Gil Silva',
    subtitle: 'Software engineer + designer. Stanford Symbolic Systems + HCI. 3× Amazon SDE Intern.',
  });
}
