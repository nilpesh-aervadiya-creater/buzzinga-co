import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { readBlogPosts } from "@/lib/blog-store";
import type { BlogPost } from "@/constants/blog-content";
import type { GetServerSideProps } from "next";

interface BlogPostPageProps {
  post: BlogPost;
  nextPost: BlogPost | null;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function formatDescriptionHtml(value: string) {
  const description = value.trim();

  if (/<[a-z][\s\S]*>/i.test(description)) {
    return description.replace(/<p>\s*<br\s*\/?>\s*<\/p>/gi, "");
  }

  return description
    .split(/\n{2,}/)
    .map((paragraph) => `<p>${escapeHtml(paragraph).replace(/\n/g, "<br />")}</p>`)
    .join("");
}

export const getServerSideProps = (async ({ params }) => {
  const idParam = params?.id;
  const id = Array.isArray(idParam) ? idParam[0] : idParam;

  if (!id) {
    return { notFound: true };
  }

  const posts = await readBlogPosts();
  const publishedPosts = posts.filter((currentPost) => currentPost.published);
  const postIndex = publishedPosts.findIndex((currentPost) => currentPost.id === id);
  const post = postIndex >= 0 ? publishedPosts[postIndex] : null;

  if (!post) {
    return { notFound: true };
  }

  const nextPost =
    publishedPosts.length > 1 ? publishedPosts[(postIndex + 1) % publishedPosts.length] : null;

  return {
    props: {
      post,
      nextPost,
    },
  };
}) satisfies GetServerSideProps<BlogPostPageProps>;

export default function BlogPostPage({ post, nextPost }: BlogPostPageProps) {
  const contentBlocks = post.contentBlocks && post.contentBlocks.length > 0
    ? post.contentBlocks
    : [
        { id: "image-default", type: "image" as const, value: post.image, imageAlt: post.imageAlt },
        { id: "description-default", type: "description" as const, value: post.description || post.excerpt },
      ];

  return (
    <>
      <Header />
      <main>
        <article className="flex w-full flex-col items-center bg-white px-4 pt-[120px] pb-16 min-[810px]:pt-[120px] min-[1280px]:px-10 min-[1280px]:pt-[162px] min-[1280px]:pb-[100px]">
          <div className="flex w-full max-w-[1200px] flex-col items-center">
            <div
              className="flex items-center justify-center gap-4 text-center text-[16px] font-normal leading-[25.6px] text-[#888]"
              style={{ fontFeatureSettings: "'zero' 1, 'cv11' 1, 'ss01' 1" }}
            >
              <span>{post.date}</span>
              <span>/</span>
              <div className="flex items-center gap-[6px]">
                <span>{post.readTime}</span>
                <span>min read</span>
              </div>
            </div>

            <h1 className="mt-4 mb-0 w-full text-center text-[28px] font-semibold leading-[33.6px] text-[#262D30] min-[1280px]:mt-4 min-[1280px]:text-[56px] min-[1280px]:leading-[61.6px]">
              {post.title}
            </h1>

            <p className="mt-4 mb-0 w-full max-w-[700px] text-left text-[16px] font-normal leading-6 text-[rgba(36,36,36,0.7)] min-[810px]:text-center min-[1280px]:text-[20px] min-[1280px]:leading-8">
              {post.excerpt}
            </p>

            <div className="mt-6 flex w-full flex-col items-center gap-16 min-[1280px]:mt-16">
              {contentBlocks.map((block, index) => {
                if (block.type === "image") {
                  const imagePosition = contentBlocks.slice(0, index + 1).filter((contentBlock) => contentBlock.type === "image").length;
                  const isFirstImage = imagePosition === 1;

                  return (
                    <div
                      key={block.id}
                      className={`${isFirstImage ? "w-full" : "w-full max-w-[600px]"} rounded-[28px] border-[8px] border-[#F1F1F1] bg-white p-[7px] shadow-[0_18px_48px_rgba(0,0,0,0.14)] min-[1280px]:rounded-[40px]`}
                    >
                      <div className={`${isFirstImage ? "h-[677px]" : "aspect-[1200/677]"} relative w-full overflow-hidden rounded-[18px] border border-[#D0D0D0] bg-[#C9C9C9] min-[1280px]:rounded-[28px]`}>
                        <Image
                          src={block.value}
                          alt={block.imageAlt || post.title}
                          fill
                          sizes={isFirstImage ? "(min-width: 1280px) 1200px, calc(100vw - 62px)" : "(min-width: 1280px) 600px, calc(100vw - 62px)"}
                          className="object-cover"
                          unoptimized
                          priority={isFirstImage}
                        />
                      </div>
                    </div>
                  );
                }

                return (
                  <div
                    key={block.id}
                    className="ql-editor ql-editor-output blog-rich-text w-full max-w-[600px] text-[#262D30] [&_a]:text-[#262D30] [&_a]:underline [&_code]:rounded-[4px] [&_code]:bg-[#F2F4F7] [&_code]:px-1 [&_li]:ml-5 [&_ul]:my-4 [&_ul]:list-disc"
                    dangerouslySetInnerHTML={{ __html: formatDescriptionHtml(block.value) }}
                  />
                );
              })}
            </div>

            {nextPost ? (
              <>
                <div className="mt-16 h-px w-full max-w-[600px] bg-[#EBEBEB]" />
                <Link
                  href={`/blog/${encodeURIComponent(nextPost.id)}`}
                  className="mt-16 flex w-full max-w-[600px] items-start justify-start gap-2 rounded-[16px] bg-[#F2F4F7] p-6 text-[#262D30]"
                  aria-label={`Next Read: ${nextPost.title}`}
                >
                  <div className="flex flex-1 flex-col gap-[10px]">
                    <p className="m-0 text-[16px] font-normal leading-6 text-[rgba(36,36,36,0.7)] min-[1280px]:text-[20px] min-[1280px]:leading-8">
                      Next Read
                    </p>
                    <p className="m-0 text-[24px] font-semibold leading-[33.6px] text-[#262D30]">
                      {nextPost.title}
                    </p>
                  </div>
                  <span className="text-[16px] font-normal leading-6 text-[rgba(36,36,36,0.7)] min-[1280px]:text-[20px] min-[1280px]:leading-8">
                    -&gt;
                  </span>
                </Link>
              </>
            ) : null}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
