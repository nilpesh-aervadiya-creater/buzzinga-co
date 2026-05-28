import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BlogPageSections from "@/components/sections/BlogPageSections";
import { readBlogPosts } from "@/lib/blog-store";
import type { BlogPost } from "@/constants/blog-content";
import type { GetServerSideProps } from "next";

interface BlogProps {
  posts: BlogPost[];
}

export const getServerSideProps = (async () => {
  const posts = await readBlogPosts();

  return {
    props: {
      posts,
    },
  };
}) satisfies GetServerSideProps<BlogProps>;

export default function Blog({ posts }: BlogProps) {
  return (
    <>
      <Header />
      <main>
        <BlogPageSections posts={posts} />
      </main>
      <Footer />
    </>
  );
}
