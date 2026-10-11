import { ImageResponse } from 'next/og';

export const ogSize = { width: 1200, height: 630 };

const PAPER = '#F1ECE3';
const INK = '#17120E';
const LABEL = '#D4561F';

async function loadGoogleFont(family: string) {
  try {
    const css = await fetch(`https://fonts.googleapis.com/css2?family=${family}`).then((res) => res.text());
    const url = css.match(/src: url\((.+?)\) format\('(?:opentype|truetype)'\)/)?.[1];
    return url ? await fetch(url).then((res) => res.arrayBuffer()) : null;
  } catch {
    return null;
  }
}

/** OpenGraph card styled as the album cover with the record sliding out. */
export async function albumOgImage({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle: string }) {
  const [fraunces, jakarta] = await Promise.all([
    loadGoogleFont('Fraunces:wght@700'),
    loadGoogleFont('Plus+Jakarta+Sans:wght@600'),
  ]);
  const fonts = [
    fraunces && { name: 'Fraunces', data: fraunces, weight: 700 as const, style: 'normal' as const },
    jakarta && { name: 'Jakarta', data: jakarta, weight: 600 as const, style: 'normal' as const },
  ].filter((font) => font !== null);
  const display = fraunces ? 'Fraunces' : 'serif';

  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', background: PAPER, padding: 70, fontFamily: 'Jakarta' }}>
        <div style={{ position: 'relative', display: 'flex', width: 440, height: 440 }}>
          <div
            style={{
              position: 'absolute',
              left: 230,
              top: 10,
              width: 420,
              height: 420,
              borderRadius: 9999,
              background: '#121110',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div style={{ width: 150, height: 150, borderRadius: 9999, background: LABEL, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ width: 16, height: 16, borderRadius: 9999, background: PAPER }} />
            </div>
          </div>
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: 440,
              height: 440,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              background: LABEL,
              color: PAPER,
              padding: 36,
              boxShadow: '0 30px 60px rgba(23,18,14,0.35)',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 20, letterSpacing: 5, fontWeight: 600 }}>
              <span>GIL SILVA</span>
              <span>VOL. 1</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', fontFamily: display, fontSize: 64, lineHeight: 0.95, fontWeight: 700, whiteSpace: 'nowrap' }}>
              <span>Ingeniero</span>
              <span>y Diseñador</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', fontSize: 20, letterSpacing: 5, fontWeight: 600 }}>2027</div>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: 250, color: INK, flex: 1 }}>
          <div style={{ fontSize: 22, letterSpacing: 4, fontWeight: 600, color: '#A93F14', textTransform: 'uppercase' }}>{eyebrow}</div>
          <div style={{ fontFamily: display, fontSize: 72, fontWeight: 700, lineHeight: 1, marginTop: 14 }}>{title}</div>
          <div style={{ fontSize: 25, lineHeight: 1.4, marginTop: 22, color: '#5C534A' }}>{subtitle}</div>
        </div>
      </div>
    ),
    {
      ...ogSize,
      fonts,
    },
  );
}
