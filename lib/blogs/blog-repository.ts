import type { BlogPost } from "@/constants/blog-content";
import { promises as fs } from "fs";
import path from "path";

const BLOG_DATA_PATH = path.join(process.cwd(), "data", "blog-posts.json");
const BLOG_API_URL = process.env.BUZZINGA_ADMIN_API_URL || "http://localhost:4000/api";

function getDateTime(value: string) {
  const parsed = new Date(value);

  return Number.isNaN(parsed.getTime()) ? 0 : parsed.getTime();
}

function normalizePost(post: BlogPost): BlogPost {
  const title = post.title.trim();
  const excerpt = post.excerpt.trim();

  return {
    ...post,
    id: post.id.trim(),
    title,
    excerpt,
    description: (post.description ?? excerpt).trim(),
    category: post.category.trim(),
    date: post.date.trim(),
    readTime: post.readTime.trim(),
    image: post.image.trim(),
    imageAlt: post.imageAlt.trim() || title,
    published: Boolean(post.published),
  };
}

function sortPosts(posts: BlogPost[]) {
  return [...posts].sort((firstPost, secondPost) => {
    const dateDifference = getDateTime(secondPost.date) - getDateTime(firstPost.date);

    return dateDifference === 0 ? firstPost.title.localeCompare(secondPost.title) : dateDifference;
  });
}

async function readLocalBlogPosts(): Promise<BlogPost[]> {
  try {
    const data = await fs.readFile(BLOG_DATA_PATH, "utf8");
    const posts = JSON.parse(data) as BlogPost[];

    return sortPosts(posts.map(normalizePost));
  } catch (error) {
    const code = (error as NodeJS.ErrnoException).code;

    if (code === "ENOENT") {
      return [];
    }

    throw error;
  }
}

export async function readBlogPosts(): Promise<BlogPost[]> {
  try {
    const response = await fetch(`${BLOG_API_URL}/blogs`, {
      headers: { Accept: "application/json" },
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      throw new Error(`Blog API responded with ${response.status}`);
    }

    const data = (await response.json()) as { posts?: BlogPost[] };
    return sortPosts((data.posts ?? []).map(normalizePost));
  } catch (error) {
    console.warn("Using local blog data fallback.", error);
    return readLocalBlogPosts();
  }
}
