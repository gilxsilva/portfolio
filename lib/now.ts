// Content for /now. Update `updated` whenever you edit the lists.

export interface NowItem {
  text: string;
  href?: string;
}

export interface NowList {
  title: string;
  items: NowItem[];
}

export const now = {
  updated: "2026-10-11",
  intro: "What's on repeat right now: the songs, the builds, the books, and the things I'm learning.",
  lists: [
    {
      title: "Building",
      items: [{ text: "This site: Ingeniero y Diseñador, Vol. 1" }],
    },
    {
      title: "Reading",
      items: [{ text: "Solito by Javier Zamora" }],
    },
    {
      title: "Learning",
      items: [{ text: "How to play the harmonica" }],
    },
  ] as NowList[],
};
