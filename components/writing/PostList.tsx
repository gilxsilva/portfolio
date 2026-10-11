import { formatPostDate, type Post } from '@/lib/substack';

export function PostList({ posts, compact = false }: { posts: Post[]; compact?: boolean }) {
  return (
    <ol>
      {posts.map((post, i) => (
        <li key={post.url} className="border-b border-line">
          <a
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group -mx-3 grid grid-cols-[2rem_1fr_auto] items-baseline gap-x-3 rounded-xl px-3 py-5 transition-colors hover:bg-paper-deep sm:grid-cols-[2.75rem_1fr_auto] sm:gap-x-4"
          >
            <span className="font-display tabular-nums text-muted">{String(i + 1).padStart(2, '0')}</span>
            <span className="min-w-0">
              <span className="font-display text-lg font-bold leading-snug group-hover:text-label-ink">{post.title}</span>
              {!compact && post.excerpt && (
                <span className="mt-1 block text-sm leading-relaxed text-muted">{post.excerpt}</span>
              )}
              <span className="sr-only"> (opens Substack in a new tab)</span>
            </span>
            {post.date && (
              <time dateTime={post.date} className="whitespace-nowrap text-xs tabular-nums text-muted sm:text-sm">
                {formatPostDate(post.date)}
              </time>
            )}
          </a>
        </li>
      ))}
    </ol>
  );
}
