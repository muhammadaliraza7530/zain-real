import { AutoScroller } from "@/components/AutoScroller";
import { posts } from "@/lib/site-data";

/**
 * Branded social posts. Shown in one fast-moving horizontal rail so all
 * images keep a consistent public path and scroll continuously.
 */
export function PostsRail() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
      <AutoScroller speed={260} className="pb-2">
        {posts.concat(posts).map((p, i) => (
          <article
            key={`${p.image}-${i}`}
            className="lit-panel flex h-full w-[260px] shrink-0 flex-col overflow-hidden bg-card sm:w-[300px]"
          >
            <div className="flex aspect-[4/5] w-full items-center justify-center overflow-hidden bg-black/60">
              <img
                src={p.image}
                alt={`${p.title}, ${p.location}`}
                loading="lazy"
                draggable={false}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col p-4 sm:p-5">
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-primary">{p.tag}</span>
              <h3 className="mt-2 text-sm font-bold sm:text-base">{p.title}</h3>
              <p className="mt-1 text-xs text-muted-foreground sm:text-sm">{p.location}</p>
            </div>
          </article>
        ))}
      </AutoScroller>
    </div>
  );
}
