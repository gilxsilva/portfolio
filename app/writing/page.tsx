import { SiteFooter, PageIntro } from '@/components/layout/SiteFooter';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { PostList } from '@/components/writing/PostList';
import { WritingEmpty } from '@/components/writing/WritingEmpty';
import { pageMetadata } from '@/lib/metadata';
import { getPosts } from '@/lib/substack';

export const revalidate = 3600;

export const metadata = pageMetadata({
  title: 'B-sides & demos',
  description: 'Writing by Gil Silva on engineering, design, and building with people. Published on Substack.',
  path: '/writing',
});

export default async function WritingPage() {
  const posts = await getPosts();
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-6 pt-36 pb-24">
        <PageIntro side="B-sides & demos" title="Writing">
          Notes on engineering, design, and building with people. Every post opens on Substack.
        </PageIntro>
        {posts?.length ? <PostList posts={posts} /> : <WritingEmpty />}
      </main>
      <SiteFooter />
    </>
  );
}
