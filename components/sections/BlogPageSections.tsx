import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { BlogPost } from "@/constants/blog-content";
import { cn } from "@/lib/utils";

interface BlogPageSectionsProps {
  posts: BlogPost[];
}

const POSTS_PER_PAGE = 6;

export default function BlogPageSections({ posts }: BlogPageSectionsProps) {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const publishedPosts = useMemo(() => posts.filter((post) => post.published), [posts]);

  const filters = useMemo(
    () =>
      Array.from(
        new Set([
          "All",
          ...publishedPosts.flatMap((post) =>
            post.category
              .split(",")
              .map((category) => category.trim())
              .filter(Boolean)
          ),
        ])
      ),
    [publishedPosts]
  );

  const filteredPosts = useMemo(() => {
    const normalizedSearch = searchQuery.trim().toLowerCase();

    return publishedPosts.filter((post) => {
      const categories = post.category
        .split(",")
        .map((category) => category.trim())
        .filter(Boolean);
      const matchesFilter = activeFilter === "All" || categories.includes(activeFilter);
      const matchesSearch =
        normalizedSearch.length === 0 ||
        [post.title, post.excerpt, post.category, post.date]
          .join(" ")
          .toLowerCase()
          .includes(normalizedSearch);

      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, publishedPosts, searchQuery]);

  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / POSTS_PER_PAGE));
  const safeCurrentPage = Math.min(currentPage, totalPages);

  const visiblePosts = useMemo(
    () => filteredPosts.slice((safeCurrentPage - 1) * POSTS_PER_PAGE, safeCurrentPage * POSTS_PER_PAGE),
    [filteredPosts, safeCurrentPage]
  );

  const emptyMessage = useMemo(() => {
    if (searchQuery.trim()) {
      return `No blog posts match "${searchQuery.trim()}".`;
    }

    return activeFilter === "All" ? "No blog posts are available." : `No blog posts are available in ${activeFilter}.`;
  }, [activeFilter, searchQuery]);

  const goToPage = (page: number) => {
    setCurrentPage(Math.min(Math.max(page, 1), totalPages));
  };

  const updateActiveFilter = (filter: string) => {
    setActiveFilter(filter);
    setCurrentPage(1);
  };

  const updateSearchQuery = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

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
          <div className="flex w-full flex-col items-center gap-4">
            <label htmlFor="blog-search" className="sr-only">
              Search blogs
            </label>
            <input
              id="blog-search"
              type="search"
              value={searchQuery}
              onChange={(event) => updateSearchQuery(event.target.value)}
              placeholder="Search blogs"
              className="h-12 w-full max-w-[520px] rounded-[40px] border border-[#D9D9D9] bg-white px-5 text-[16px] font-normal leading-6 text-[#262D30] outline-none transition-colors placeholder:text-[#888] focus:border-[#262D30]"
            />
            <div className="flex w-full flex-wrap items-center justify-center gap-2 min-[810px]:flex-nowrap">
              {filters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => updateActiveFilter(filter)}
                  className={cn(
                    "h-[35px] rounded-[40px] border border-transparent px-[22px] text-[18px] font-normal leading-[27px] transition-colors",
                    activeFilter === filter ? "bg-[#262D30] text-white" : "bg-[#F2F4F7] text-[#262D30]"
                  )}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="flex w-full flex-col gap-5">
            {filteredPosts.length === 0 ? (
              <p className="m-0 py-16 text-center text-[16px] font-normal leading-[25.6px] text-[#242424b3]">
                {emptyMessage}
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
                      className="h-[195px] w-full rounded-[10px] border border-[#D9D9D9] object-cover min-[810px]:w-[289px]"
                      unoptimized
                    />
                    <div className="flex min-h-[195px] flex-1 flex-col gap-[10px]">
                      <div>
                        <h2 className="m-0 overflow-hidden text-[24px] font-semibold leading-[31.2px] text-[#262D30] [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2] min-[810px]:text-[32px] min-[810px]:leading-[41.6px]">
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

          {filteredPosts.length > POSTS_PER_PAGE ? (
            <nav className="flex flex-wrap items-center justify-center gap-2" aria-label="Blog pagination">
              <button
                type="button"
                onClick={() => goToPage(safeCurrentPage - 1)}
                disabled={safeCurrentPage === 1}
                className="h-[35px] rounded-[40px] border border-[#D9D9D9] px-4 text-[16px] font-normal leading-6 text-[#262D30] transition-colors disabled:cursor-not-allowed disabled:opacity-40"
              >
                Previous
              </button>
              {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                <button
                  key={page}
                  type="button"
                  onClick={() => goToPage(page)}
                  aria-current={safeCurrentPage === page ? "page" : undefined}
                  className={cn(
                    "h-[35px] min-w-[35px] rounded-full border px-3 text-[16px] font-normal leading-6 transition-colors",
                    safeCurrentPage === page
                      ? "border-[#262D30] bg-[#262D30] text-white"
                      : "border-[#D9D9D9] bg-white text-[#262D30]"
                  )}
                >
                  {page}
                </button>
              ))}
              <button
                type="button"
                onClick={() => goToPage(safeCurrentPage + 1)}
                disabled={safeCurrentPage === totalPages}
                className="h-[35px] rounded-[40px] border border-[#D9D9D9] px-4 text-[16px] font-normal leading-6 text-[#262D30] transition-colors disabled:cursor-not-allowed disabled:opacity-40"
              >
                Next
              </button>
            </nav>
          ) : null}
        </div>
      </div>
    </section>
  );
}
