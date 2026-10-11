// Content for /now. Update `updated` whenever you edit the lists.

export interface NowItem {
  text: string;
  /** Small line under the title, e.g. the author. */
  detail?: string;
  href?: string;
  /** Path under /public, e.g. a book cover in /public/now/. */
  image?: string;
}

export interface NowList {
  title: string;
  /** Album-style label shown above the item, e.g. "On the nightstand". */
  kicker: string;
  /** Picture shown when the item has no image. */
  visual: 'vinyl' | 'book' | 'music' | 'code';
  /** Panel color behind the picture. */
  color: string;
  items: NowItem[];
}

export const now = {
  updated: "2026-10-11",
  intro: "What's on repeat right now: the songs, the builds, the books, and the things I'm learning.",
  lists: [
    {
      title: "Building",
      kicker: "In the studio",
      visual: "vinyl",
      color: "#D4561F",
      items: [{ text: "Ingeniero y Diseñador, Vol. 1", detail: "This site, pressed in Next.js", href: "/" }],
    },
    {
      title: "Reading",
      kicker: "On the nightstand",
      visual: "book",
      color: "#E8E1D5",
      items: [{ text: "Solito", detail: "Javier Zamora", image: "/now/solito.jpg" }],
    },
    {
      title: "Learning",
      kicker: "In practice",
      visual: "music",
      color: "#1F7A52",
      items: [{ text: "The harmonica", detail: "Teaching myself to play" }],
    },
  ] as NowList[],
};
