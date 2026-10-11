import { Hero } from '@/components/album/Hero';
import { SideA } from '@/components/album/SideA';
import { SideB } from '@/components/album/SideB';
import { LinerNotes } from '@/components/album/LinerNotes';
import { Extras } from '@/components/album/Extras';
import { Encore } from '@/components/album/Encore';
import { MiniPlayer } from '@/components/layout/MiniPlayer';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { getPosts } from '@/lib/substack';

export const revalidate = 3600;

export default async function Home() {
  const posts = await getPosts(3);
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <SideA />
        <SideB />
        <LinerNotes />
        <Extras posts={posts} />
      </main>
      <Encore />
      <MiniPlayer />
    </>
  );
}
