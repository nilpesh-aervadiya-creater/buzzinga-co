import { promises as fs } from "fs";
import path from "path";
import { BLOG_DEFAULT_IMAGES, BLOG_POSTS, type BlogPost } from "@/constants/blog-content";

const BLOG_DATA_PATH = path.join(process.cwd(), "data", "blog-posts.json");
const BLOG_UPLOADS_PATH = path.join(
  process.cwd(),
  "public",
  "buzzinga-assets",
  "images",
  "blog",
  "uploads"
);

function isBlogPost(value: unknown): value is BlogPost {
  if (!value || typeof value !== "object") {
    return false;
  }

  const post = value as Record<string, unknown>;
  return (
    typeof post.id === "string" &&
    typeof post.title === "string" &&
    typeof post.excerpt === "string" &&
    (post.description === undefined || typeof post.description === "string") &&
    typeof post.category === "string" &&
    typeof post.date === "string" &&
    typeof post.readTime === "string" &&
    typeof post.image === "string" &&
    typeof post.imageAlt === "string" &&
    typeof post.published === "boolean"
  );
}

function normalizePost(post: BlogPost): BlogPost {
  return {
    ...post,
    id: post.id.trim(),
    title: post.title.trim(),
    excerpt: post.excerpt.trim(),
    description: (post.description ?? post.excerpt).trim(),
    category: post.category.trim(),
    date: post.date.trim(),
    readTime: post.readTime.trim(),
    image: post.image.trim(),
    imageAlt: post.imageAlt.trim() || post.title.trim(),
    published: Boolean(post.published),
  };
}

async function ensureBlogDataFile() {
  await fs.mkdir(path.dirname(BLOG_DATA_PATH), { recursive: true });

  try {
    await fs.access(BLOG_DATA_PATH);
  } catch {
    await writeBlogPosts(BLOG_POSTS);
  }
}

export async function readBlogPosts(): Promise<BlogPost[]> {
  await ensureBlogDataFile();

  try {
    const raw = await fs.readFile(BLOG_DATA_PATH, "utf8");
    const parsed = JSON.parse(raw) as unknown;

    if (!Array.isArray(parsed) || !parsed.every(isBlogPost)) {
      return BLOG_POSTS;
    }

    return parsed.map(normalizePost);
  } catch {
    return BLOG_POSTS;
  }
}

export async function writeBlogPosts(posts: BlogPost[]) {
  const normalizedPosts = posts.map(normalizePost);
  await fs.mkdir(path.dirname(BLOG_DATA_PATH), { recursive: true });
  await fs.writeFile(BLOG_DATA_PATH, `${JSON.stringify(normalizedPosts, null, 2)}\n`, "utf8");
  return normalizedPosts;
}

export async function upsertBlogPost(post: BlogPost) {
  const posts = await readBlogPosts();
  const nextPost = normalizePost(post);
  const exists = posts.some((currentPost) => currentPost.id === nextPost.id);
  const nextPosts = exists
    ? posts.map((currentPost) => (currentPost.id === nextPost.id ? nextPost : currentPost))
    : [nextPost, ...posts];

  return writeBlogPosts(nextPosts);
}

export async function deleteBlogPost(id: string) {
  const posts = await readBlogPosts();
  const deletedPost = posts.find((post) => post.id === id);
  const nextPosts = await writeBlogPosts(posts.filter((post) => post.id !== id));

  if (deletedPost && !nextPosts.some((post) => post.image === deletedPost.image)) {
    await deleteUploadedBlogImage(deletedPost.image);
  }

  return nextPosts;
}

async function deleteUploadedBlogImage(image: string) {
  if (!image || BLOG_DEFAULT_IMAGES.includes(image)) {
    return;
  }

  const uploadPrefix = "/buzzinga-assets/images/blog/uploads/";

  if (!image.startsWith(uploadPrefix)) {
    return;
  }

  const imagePath = path.resolve(BLOG_UPLOADS_PATH, path.basename(image));
  const uploadRoot = path.resolve(BLOG_UPLOADS_PATH);

  if (!imagePath.startsWith(`${uploadRoot}${path.sep}`)) {
    return;
  }

  try {
    await fs.unlink(imagePath);
  } catch (error) {
    const code = (error as NodeJS.ErrnoException).code;

    if (code !== "ENOENT") {
      throw error;
    }
  }
}
