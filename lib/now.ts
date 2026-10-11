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
  updated: "2026-10-10",
  intro: "What's on repeat right now: the songs, the builds, the books, and the things I'm learning.",
  // TODO: replace the placeholder items with your own.
  lists: [
    {
      title: "Building",
      items: [{ text: "This site: Ingeniero y Diseñador, Vol. 1" }],
    },
    {
      title: "Reading",
      items: [{ text: "Placeholder: add a book in lib/now.ts" }],
    },
    {
      title: "Learning",
      items: [{ text: "Placeholder: add what you're learning in lib/now.ts" }],
    },
  ] as NowList[],
};
