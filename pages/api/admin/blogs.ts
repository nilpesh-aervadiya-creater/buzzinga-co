import type { NextApiRequest, NextApiResponse } from "next";
import { deleteBlogPost, readBlogPosts, upsertBlogPost } from "@/lib/blog-store";
import type { BlogPost } from "@/constants/blog-content";

type BlogResponse = {
  posts?: BlogPost[];
  error?: string;
};

function createId(title: string) {
  return (
    title
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "") || `post-${Date.now()}`
  );
}

function formatPostDate() {
  return new Date().toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function parsePost(body: Partial<BlogPost>): BlogPost | null {
  if (!body || typeof body !== "object") {
    return null;
  }

  const title = String(body.title ?? "").trim();
  const excerpt = String(body.excerpt ?? "").trim();
  const image = String(body.image ?? "").trim();

  if (!title || !excerpt || !image) {
    return null;
  }

  return {
    id: String(body.id ?? "").trim() || createId(title),
    title,
    excerpt,
    description: String(body.description ?? excerpt).trim() || excerpt,
    category: String(body.category ?? "Design").trim() || "Design",
    date: formatPostDate(),
    readTime: String(body.readTime ?? "0").trim() || "0",
    image,
    imageAlt: String(body.imageAlt ?? "").trim() || title,
    published: Boolean(body.published),
  };
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<BlogResponse>
) {
  try {
    if (req.method === "GET") {
      const posts = await readBlogPosts();
      res.status(200).json({ posts });
      return;
    }

    if (req.method === "POST") {
      const post = parsePost(req.body as Partial<BlogPost>);

      if (!post) {
        res.status(400).json({ error: "Title, excerpt, and image are required." });
        return;
      }

      const posts = await upsertBlogPost(post);
      res.status(200).json({ posts });
      return;
    }

    if (req.method === "DELETE") {
      const id = String(req.query.id ?? "").trim();

      if (!id) {
        res.status(400).json({ error: "Blog post id is required." });
        return;
      }

      const posts = await deleteBlogPost(id);
      res.status(200).json({ posts });
      return;
    }

    res.setHeader("Allow", ["GET", "POST", "DELETE"]);
    res.status(405).json({ error: "Method not allowed." });
  } catch {
    res.status(500).json({ error: "Unable to manage blog posts." });
  }
}
