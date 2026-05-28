import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { BLOG_FILTERS, type BlogPost } from "@/constants/blog-content";
import { cn } from "@/lib/utils";

interface BlogPageSectionsProps {
  posts: BlogPost[];
}

export default function BlogPageSections({ posts }: BlogPageSectionsProps) {
  const [activeFilter, setActiveFilter] = useState("All");
  const filters = useMemo(
    () =>
      Array.from(
        new Set([
          ...BLOG_FILTERS,
          ...posts.flatMap((post) =>
            post.category
              .split(",")
              .map((category) => category.trim())
              .filter(Boolean)
          ),
        ])
      ),
    [posts]
  );

  const visiblePosts = useMemo(
    () =>
      posts.filter((post) => {
        const categories = post.category
          .split(",")
          .map((category) => category.trim())
          .filter(Boolean);

        return post.published && (activeFilter === "All" || categories.includes(activeFilter));
      }),
    [activeFilter, posts]
  );

  return (
    <section className="flex w-full flex-col items-center bg-white px-4 pt-[128px] pb-16 min-[810px]:px-0 min-[810px]:pt-[162px] min-[810px]:pb-[100px]">
      <div className="flex w-full max-w-[700px] flex-col items-center gap-5">
        <div className="flex w-full max-w-[600px] flex-col items-center gap-5 text-center">
          <h1 className="m-0 w-full text-[28px] font-semibold leading-[33.6px] text-[#262D30] min-[810px]:text-[56px] min-[810px]:leading-[61.6px]">
            Blog
          </h1>
          <p className="m-0 w-full text-[16px] font-normal leading-6 text-[#262D30] min-[810px]:text-[20px] min-[810px]:leading-8">
            Ideas, perspectives, and notes from our journey.
          </p>
        </div>

        <div className="flex w-full flex-col items-center gap-[68px] min-[810px]:gap-[72px]">
          <div className="flex w-full flex-wrap items-center justify-center gap-2 min-[810px]:flex-nowrap">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={cn(
                  "h-[35px] rounded-[40px] border border-transparent px-[22px] text-[18px] font-normal leading-[27px] transition-colors",
                  activeFilter === filter ? "bg-[#262D30] text-white" : "bg-[#F2F4F7] text-[#262D30]"
                )}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="flex w-full flex-col gap-5">
            {visiblePosts.length === 0 ? (
              <p className="m-0 text-center text-[16px] font-normal leading-[25.6px] text-[#242424b3]">
                {activeFilter === "All" ? "No blog posts are available." : `No blog posts are available in ${activeFilter}.`}
              </p>
            ) : (
              visiblePosts.map((post) => (
                <article key={post.id}>
                  <Link
                    href={`/blog/${encodeURIComponent(post.id)}`}
                    className="flex w-full flex-col gap-5 text-[#262D30] min-[810px]:h-[195px] min-[810px]:flex-row min-[810px]:items-start min-[810px]:gap-[30px]"
                    aria-label={post.title}
                  >
                    <Image
                      src={post.image}
                      alt={post.imageAlt}
                      width={289}
                      height={195}
                      className="h-[195px] w-full rounded-[10px] object-cover min-[810px]:w-[289px]"
                      unoptimized
                    />
                    <div className="flex min-h-[195px] flex-1 flex-col gap-[10px]">
                      <div>
                        <h2 className="m-0 text-[24px] font-semibold leading-[31.2px] text-[#262D30] min-[810px]:text-[32px] min-[810px]:leading-[41.6px]">
                          {post.title}
                        </h2>
                        <p className="mt-2 mb-0 overflow-hidden text-[16px] font-normal leading-[25.6px] text-[#262D30] [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">
                          {post.excerpt}
                        </p>
                      </div>
                      <div className="mt-5 flex flex-wrap items-center gap-2 text-[16px] font-normal leading-[25.6px] text-[#242424b3] min-[810px]:mt-0">
                        {post.category
                          .split(",")
                          .map((category) => category.trim())
                          .filter(Boolean)
                          .map((category) => (
                            <span key={category} className="rounded-[40px] bg-[#F2F4F7] px-4 py-0.5">
                              {category}
                            </span>
                          ))}
                        <div
                          className="flex flex-wrap items-center gap-2 text-[#888]"
                          style={{ fontFeatureSettings: "'zero' 1, 'cv11' 1, 'ss01' 1" }}
                        >
                          <span>{post.date}</span>
                          <span>/</span>
                          <span>{post.readTime} min read</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </article>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
