// Songs on repeat, newest first. The homepage shows the first 3; /now shows all.
// `art` is optional: album art or your own photo, as a file under /public/music/
// (recommended) or an i.scdn.co / mzstatic.com URL. Without it, a generated sleeve is shown.

export interface Song {
  title: string;
  artist: string;
  url: string;
  /** Where and when this song was on repeat, e.g. "Summer · Seattle". */
  chapter?: string;
  note?: string;
  art?: string;
  nowPlaying?: boolean;
}

const spotifySearch = (query: string) => `https://open.spotify.com/search/${encodeURIComponent(query)}`;

export const onRepeat: Song[] = [
  {
    title: "She's Electric",
    artist: "Oasis",
    chapter: "Senior year · Stanford",
    note: "Senior year at Stanford! Can't believe how fast it's gone. That intro gets me every time, and I know it's going to be my #1 on my Spotify Wrapped.",
    url: spotifySearch("She's Electric Oasis"),
    nowPlaying: true,
  },
  {
    title: "Champagne Supernova",
    artist: "Oasis",
    chapter: "Summer · Ireland",
    note: "Ended my summer in Ireland! Spent my nights at pubs listening to live music, and whenever local artists played this one, the whole place went crazy.",
    url: spotifySearch("Champagne Supernova Oasis"),
  },
  {
    title: "Me Va a Costar",
    artist: "Kevin Kaarl",
    chapter: "Summer · Seattle",
    note: "Spent 12 weeks in Seattle this summer and brought my guitar! Got back into songwriting and always started my sessions with this one. The lyrics are so sad but it's honestly my favorite song to play.",
    url: spotifySearch("Me Va a Costar Kevin Kaarl"),
  },
  {
    title: "Sarà perché ti amo",
    artist: "Ricchi e Poveri",
    chapter: "Study abroad · Italy",
    note: "Three months in Florence, and this song followed me everywhere. A street performer would start playing, a crowd would form, and suddenly I was dancing in a piazza with people I'd never met.",
    url: spotifySearch("Sarà perché ti amo Ricchi e Poveri"),
  },
];
