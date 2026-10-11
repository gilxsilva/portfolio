// Songs on repeat. Shown as a row on the homepage and in full on /now.
// `art` is optional: a local file under /public/music/ (recommended) or an
// i.scdn.co / mzstatic.com URL. Without it, a generated sleeve is shown.

export interface Song {
  title: string;
  artist: string;
  url: string;
  art?: string;
}

// TODO: replace these placeholders with your own 3 to 5 songs.
export const onRepeat: Song[] = [
  { title: "Song title", artist: "Artist", url: "https://open.spotify.com/" },
  { title: "Song title", artist: "Artist", url: "https://open.spotify.com/" },
  { title: "Song title", artist: "Artist", url: "https://open.spotify.com/" },
];
