import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import QuillTextEditor from "@/components/admin/QuillTextEditor";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { BLOG_DEFAULT_IMAGES, BLOG_POSTS, type BlogPost } from "@/constants/blog-content";
import { cn } from "@/lib/utils";

const emptyPost: BlogPost = {
  id: "",
  title: "",
  excerpt: "",
  description: "",
  category: "Design",
  date: "",
  readTime: "0",
  image: BLOG_DEFAULT_IMAGES[Math.floor(Math.random() * BLOG_DEFAULT_IMAGES.length)],
  imageAlt: "",
  published: true,
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

const fieldClassName =
  "h-12 w-full rounded-[8px] border border-[#D6DDE3] bg-white px-3 text-[16px] leading-6 text-[#262D30] shadow-none transition-colors placeholder:text-[#8A949B] focus:border-[#262D30] focus:ring-2 focus:ring-[#262D30]/10 font-normal";
const textareaClassName =
  "min-h-[128px] w-full resize-y rounded-[8px] border border-[#D6DDE3] bg-white px-3 py-3 text-[16px] leading-6 text-[#262D30] shadow-none transition-colors placeholder:text-[#8A949B] focus:border-[#262D30] focus:ring-2 focus:ring-[#262D30]/10 font-normal";
const labelClassName = "flex flex-col gap-2 text-[13px] font-semibold leading-5 text-[#4A5358]";
const defaultCategories = ["Design", "AI", "Technology"];

function formatPostDate() {
  return new Date().toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function splitCategories(category: string) {
  return category
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function joinCategories(categories: string[]) {
  return Array.from(new Set(categories)).join(", ");
}

function isEmptyHtml(value: string) {
  if (!value.trim()) {
    return true;
  }

  const documentBody = new DOMParser().parseFromString(value, "text/html").body;

  return documentBody.textContent?.trim().length === 0;
}

export default function BlogAdmin() {
  const [posts, setPosts] = useState(BLOG_POSTS);
  const [draft, setDraft] = useState<BlogPost>(emptyPost);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formOpen, setFormOpen] = useState(false);
  const [addingCategory, setAddingCategory] = useState(false);
  const [newCategory, setNewCategory] = useState("");
  const [deletedCategories, setDeletedCategories] = useState<string[]>([]);
  const [confirmingCategory, setConfirmingCategory] = useState<string | null>(null);
  const [confirmingPostId, setConfirmingPostId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    let cancelled = false;

    async function loadPosts() {
      try {
        const response = await fetch("/api/admin/blogs");
        const data = (await response.json()) as { posts?: BlogPost[]; error?: string };

        if (!response.ok || !data.posts) {
          throw new Error(data.error || "Unable to load blog posts.");
        }

        if (!cancelled) {
          setPosts(data.posts);
          setMessage("");
        }
      } catch (error) {
        if (!cancelled) {
          setMessage(error instanceof Error ? error.message : "Unable to load blog posts.");
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    loadPosts();

    return () => {
      cancelled = true;
    };
  }, []);

  const selectedPost = useMemo(
    () => posts.find((post) => post.id === editingId) ?? null,
    [editingId, posts]
  );
  const categoryOptions = useMemo(
    () =>
      Array.from(
        new Set([
          ...defaultCategories,
          ...posts.flatMap((post) => splitCategories(post.category)),
          ...splitCategories(draft.category),
        ])
      ).filter((category) => !deletedCategories.includes(category)),
    [deletedCategories, draft.category, posts]
  );
  const selectedCategories = useMemo(() => splitCategories(draft.category), [draft.category]);

  function startEdit(post: BlogPost) {
    setEditingId(post.id);
    setDraft(post);
    setFormOpen(true);
    setAddingCategory(false);
    setNewCategory("");
    setConfirmingCategory(null);
    setConfirmingPostId(null);
    setMessage("");
  }

  function resetDraft() {
    setEditingId(null);
    setDraft(emptyPost);
    setFormOpen(false);
    setAddingCategory(false);
    setNewCategory("");
    setConfirmingCategory(null);
    setConfirmingPostId(null);
  }

  function startNewPost() {
    setEditingId(null);
    setDraft({ ...emptyPost, id: "", date: "" });
    setFormOpen(true);
    setAddingCategory(false);
    setNewCategory("");
    setConfirmingCategory(null);
    setConfirmingPostId(null);
    setMessage("");
  }

  function toggleCategory(category: string) {
    setConfirmingCategory(null);
    const nextCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((item) => item !== category)
      : [...selectedCategories, category];

    setDraft({ ...draft, category: joinCategories(nextCategories) || "Design" });
  }

  function addCategory() {
    const trimmedCategory = newCategory.trim();

    if (!trimmedCategory) {
      return;
    }

    setDraft({
      ...draft,
      category: joinCategories([...selectedCategories, trimmedCategory]),
    });
    setDeletedCategories((currentCategories) =>
      currentCategories.filter((category) => category !== trimmedCategory)
    );
    setNewCategory("");
    setAddingCategory(false);
    setConfirmingCategory(null);
  }

  function deleteCategory(category: string) {
    const nextCategories = selectedCategories.filter((item) => item !== category);

    setDraft({ ...draft, category: joinCategories(nextCategories) });
    setDeletedCategories((currentCategories) =>
      currentCategories.includes(category) ? currentCategories : [...currentCategories, category]
    );
    setConfirmingCategory(null);
  }

  async function savePost() {
    if (isEmptyHtml(draft.description ?? "")) {
      setMessage("Add a description before saving the blog post.");
      return;
    }

    const id = editingId ?? createId(draft.title);
    const nextPost = {
      ...draft,
      id,
      date: formatPostDate(),
      category: joinCategories(selectedCategories) || "Design",
      imageAlt: draft.imageAlt || draft.title,
    };

    setSaving(true);
    setMessage("");

    try {
      const response = await fetch("/api/admin/blogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(nextPost),
      });
      const data = (await response.json()) as { posts?: BlogPost[]; error?: string };

      if (!response.ok || !data.posts) {
        throw new Error(data.error || "Unable to save blog post.");
      }

      setPosts(data.posts);
      setMessage("Blog post saved. It is now available on /blog.");
      resetDraft();
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Unable to save blog post.");
    } finally {
      setSaving(false);
    }
  }

  async function uploadImage(file: File) {
    setUploading(true);
    setMessage("");

    try {
      const buffer = await file.arrayBuffer();
      const bytes = new Uint8Array(buffer);
      let binary = "";

      for (const byte of bytes) {
        binary += String.fromCharCode(byte);
      }

      const response = await fetch("/api/admin/blog-image", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fileName: file.name,
          contentType: file.type,
          data: window.btoa(binary),
        }),
      });
      const data = (await response.json()) as { image?: string; error?: string };

      if (!response.ok || !data.image) {
        throw new Error(data.error || "Unable to upload image.");
      }

      const uploadedImage = data.image;

      setDraft((currentDraft) => ({
        ...currentDraft,
        image: uploadedImage,
        imageAlt: currentDraft.imageAlt || currentDraft.title || file.name.replace(/\.[^.]+$/, ""),
      }));
      setMessage("Image uploaded. Save the post to use it on /blog.");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Unable to upload image.");
    } finally {
      setUploading(false);
    }
  }

  async function deletePost(id: string) {
    setMessage("");
    setConfirmingPostId(null);

    try {
      const response = await fetch(`/api/admin/blogs?id=${encodeURIComponent(id)}`, {
        method: "DELETE",
      });
      const data = (await response.json()) as { posts?: BlogPost[]; error?: string };

      if (!response.ok || !data.posts) {
        throw new Error(data.error || "Unable to delete blog post.");
      }

      setPosts(data.posts);
      setMessage("Blog post deleted.");
      if (editingId === id) {
        resetDraft();
      }
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Unable to delete blog post.");
    }
  }

  return (
    <>
      <Header />
      <main className="px-4 pt-[128px] pb-16 min-[810px]:px-8 min-[810px]:pt-[132px] min-[810px]:pb-20">
        <section className="mx-auto flex w-full max-w-[1200px] flex-col gap-8">
          <div className="flex flex-col gap-4">
            <p className="m-0 text-[14px] font-semibold uppercase leading-[22.4px] tracking-[2px] text-[#242424b3]">
              Admin
            </p>
            <div className="flex flex-colitems-start justify-between gap-4 min-[810px]:flex-row min-[810px]:items-end">
              <div>
                <h1 className="m-0 text-[32px] font-semibold leading-[38.4px] text-[#262D30] min-[810px]:text-[56px] min-[810px]:leading-[61.6px]">
                  Blog Manager
                </h1>
                <p className="mt-4 mb-0 max-w-[640px] text-[16px] leading-6 text-[#262D30] min-[810px]:text-[20px] min-[810px]:leading-8">
                  Create, edit, publish, and remove blog entries shown on the local blog page.
                </p>
              </div>
              <button
                type="button"
                onClick={startNewPost}
                className="h-12 cursor-pointer rounded-[10px] bg-[#262D30] px-5 text-[16px] font-semibold leading-6 text-white"
              >
                New post
              </button>
            </div>
            {message ? (
              <p className="m-0 rounded-[8px] bg-white px-4 py-3 text-[14px] leading-[22.4px] text-[#262D30] shadow-sm">
                {message}
              </p>
            ) : null}
          </div>

          <div className="grid gap-6 min-[1024px]:grid-cols-[minmax(0,1fr)_390px] items-start">
            <div className="order-last min-[1024px]:order-first overflow-visible rounded-[8px] border border-[#DDE3E8] bg-white shadow-[0_18px_40px_rgba(38,45,48,0.08)]">
              <div className="grid min-h-14 grid-cols-[84px_1fr_120px_126px] items-center gap-4 border-b border-[#EBEBEB] px-5 text-[14px] font-semibold uppercase leading-[22.4px] tracking-[1.5px] text-[#242424b3] max-[809px]:hidden">
                <span>Image</span>
                <span>Post</span>
                <span className="text-center">Status</span>
                <span className="text-center">Actions</span>
              </div>
              <div className="divide-y divide-[#EBEBEB]">
                {loading ? (
                  <p className="m-0 px-5 py-5 text-[16px] leading-6 text-[#242424b3]">Loading blog posts...</p>
                ) : null}
                {!loading && posts.length === 0 ? (
                  <p className="m-0 px-5 py-5 text-[16px] leading-6 text-[#242424b3]">No blog posts yet.</p>
                ) : null}
                {!loading ? posts.map((post) => (
                  <article
                    key={post.id}
                    className="grid gap-4 px-5 py-5 min-[810px]:grid-cols-[84px_1fr_120px_126px] min-[810px]:items-center"
                  >
                    <div className="relative h-[64px] w-[84px] overflow-hidden rounded-[8px] border border-[#DDE3E8] bg-[#F8FAFB]">
                      <Image
                        src={post.image}
                        alt={post.imageAlt || post.title}
                        fill
                        sizes="84px"
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                    <div>
                      <h2 className="m-0 text-[20px] font-semibold leading-[30px] text-[#262D30]">{post.title}</h2>
                      <p className="mt-1 mb-0 text-[14px] leading-[22.4px] text-[#242424b3]">
                        {post.category} / {post.date} / {post.readTime} min read
                      </p>
                    </div>
                    <div className="flex justify-center">
                      <span
                        className={cn(
                          "w-fit rounded-[999px] px-3 py-1 text-[14px] font-semibold leading-[22.4px]",
                          post.published ? "bg-[#E5F5EA] text-[#166527]" : "bg-[#EBEBEB] text-[#262D30]"
                        )}
                      >
                        {post.published ? "Published" : "Draft"}
                      </span>
                    </div>
                    <div className="relative flex gap-2">
                      <button
                        type="button"
                        onClick={() => startEdit(post)}
                        className="h-10 cursor-pointer rounded-[10px] border border-[#262D30] px-3 text-[14px] font-semibold"
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        aria-expanded={confirmingPostId === post.id}
                        onClick={() =>
                          setConfirmingPostId((currentPostId) =>
                            currentPostId === post.id ? null : post.id
                          )
                        }
                        className="h-10 cursor-pointer rounded-[10px] border border-[#AF0000] px-3 text-[14px] font-semibold text-[#AF0000]"
                      >
                        Delete
                      </button>
                      {confirmingPostId === post.id ? (
                        <div className="absolute right-0 top-[calc(100%+8px)] z-20 w-[244px] rounded-[8px] border border-[#DDE3E8] bg-white p-3 text-[13px] font-semibold leading-5 text-[#262D30] shadow-[0_18px_40px_rgba(38,45,48,0.12)]">
                          <p className="m-0">Delete this blog post?</p>
                          <p className="mt-1 mb-0 text-[12px] font-normal leading-[19.2px] text-[#242424b3]">
                            Uploaded image will be removed when applicable.
                          </p>
                          <div className="mt-3 flex gap-2">
                            <button
                              type="button"
                              aria-label={`Confirm delete ${post.title}`}
                              onClick={() => deletePost(post.id)}
                              className="h-9 cursor-pointer rounded-[8px] bg-[#AF0000] px-3 text-[13px] font-semibold text-white"
                            >
                              Delete
                            </button>
                            <button
                              type="button"
                              aria-label={`Cancel delete ${post.title}`}
                              onClick={() => setConfirmingPostId(null)}
                              className="h-9 cursor-pointer rounded-[8px] border border-[#262D30] px-3 text-[13px] font-semibold text-[#262D30]"
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                      ) : null}
                    </div>
                  </article>
                )) : null}
              </div>
            </div>

            {formOpen ? (
              <form
                className="flex flex-col gap-5 rounded-[8px] border border-[#DDE3E8] bg-white p-5 shadow-[0_18px_40px_rgba(38,45,48,0.08)]"
                onSubmit={(event) => {
                  event.preventDefault();
                  savePost();
                }}
              >
                <div className="border-b border-[#EBEBEB] pb-4">
                  <h2 className="m-0 text-[24px] font-semibold leading-[28.8px] text-[#262D30]">
                    {selectedPost ? "Edit post" : "New post"}
                  </h2>
                  <p className="mt-2 mb-0 text-[14px] leading-[22.4px] text-[#242424b3]">
                    Changes are saved to the project data file and reflected on `/blog`.
                  </p>
                </div>

                <label className={labelClassName}>
                  Title
                  <input
                    required
                    className={fieldClassName}
                    value={draft.title}
                    onChange={(event) => setDraft({ ...draft, title: event.target.value })}
                  />
                </label>
                <label className={labelClassName}>
                  Excerpt
                  <textarea
                    required
                    rows={4}
                    className={textareaClassName}
                    value={draft.excerpt}
                    onChange={(event) => setDraft({ ...draft, excerpt: event.target.value })}
                  />
                </label>
                <div className={labelClassName}>
                  Description
                  <QuillTextEditor
                    id="blog-description"
                    value={draft.description ?? ""}
                    onChange={(description) => setDraft({ ...draft, description })}
                  />
                </div>
                <div className="grid gap-4 min-[810px]:grid-cols-2 min-[1024px]:grid-cols-1">
                  <div className={labelClassName}>
                    Category
                    <div className="flex flex-wrap gap-2">
                      {categoryOptions.map((category) => {
                        const selected = selectedCategories.includes(category);

                        return (
                          <div key={category} className="relative flex items-center gap-1">
                            <button
                              type="button"
                              aria-pressed={selected}
                              onClick={() => toggleCategory(category)}
                              className={cn(
                                "cursor-pointer rounded-[999px] border px-4 py-[6px] text-[14px] font-semibold leading-[22.4px] transition-colors",
                                selected
                                  ? "border-[#262D30] bg-[#262D30] text-white"
                                  : "border-[#D6DDE3] bg-[#F8FAFB] text-[#262D30]"
                              )}
                            >
                              {category}
                            </button>
                            {/* <button
                              type="button"
                              aria-label={`Delete ${category} category`}
                              onClick={() =>
                                setConfirmingCategory(confirmingCategory === category ? null : category)
                              }
                              className="h-8 cursor-pointer rounded-[8px] border border-[#AF0000] px-2 text-[12px] font-semibold leading-4 text-[#AF0000]"
                            >
                              Delete
                            </button> */}
                            {confirmingCategory === category ? (
                              <div
                                data-category-popconfirm={category}
                                className="absolute left-0 top-[calc(100%+8px)] z-20 w-[224px] rounded-[8px] border border-[#DDE3E8] bg-white p-3 text-[13px] font-semibold leading-5 text-[#262D30] shadow-[0_18px_40px_rgba(38,45,48,0.12)]"
                              >
                                <p className="m-0">Delete category?</p>
                                <div className="mt-3 flex gap-2">
                                  <button
                                    type="button"
                                    aria-label={`Confirm delete ${category} category`}
                                    onClick={() => deleteCategory(category)}
                                    className="h-9 cursor-pointer rounded-[8px] bg-[#AF0000] px-3 text-[13px] font-semibold text-white"
                                  >
                                    Delete
                                  </button>
                                  <button
                                    type="button"
                                    aria-label={`Cancel delete ${category} category`}
                                    onClick={() => setConfirmingCategory(null)}
                                    className="h-9 cursor-pointer rounded-[8px] border border-[#262D30] px-3 text-[13px] font-semibold text-[#262D30]"
                                  >
                                    Cancel
                                  </button>
                                </div>
                              </div>
                            ) : null}
                          </div>
                        );
                      })}
                    </div>
                    {/* {addingCategory ? (
                      <div className="flex gap-2">
                        <input
                          className={fieldClassName}
                          value={newCategory}
                          placeholder="New category"
                          onChange={(event) => setNewCategory(event.target.value)}
                          onKeyDown={(event) => {
                            if (event.key === "Enter") {
                              event.preventDefault();
                              addCategory();
                            }
                          }}
                        />
                        <button
                          type="button"
                          onClick={addCategory}
                          className="h-12 cursor-pointer rounded-[10px] bg-[#262D30] px-4 text-[14px] font-semibold text-white"
                        >
                          Add
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setAddingCategory(false);
                            setNewCategory("");
                          }}
                          className="h-12 cursor-pointer rounded-[10px] border border-[#262D30] px-4 text-[14px] font-semibold text-[#262D30]"
                        >
                          Cancel
                        </button>
                      </div>
                    ) : (
                      <button
                        type="button"
                        onClick={() => setAddingCategory(true)}
                        className="w-fit flex items-center cursor-pointer text-[13px] font-semibold text-[#262D30] mt-1"
                      >
                        <span className="mr-0 inline-flex h-5 w-5 pb-1 items-center justify-center text-[16px] font-semibold leading-none">
                          +
                        </span>
                        Add new category
                      </button>
                    )} */}
                  </div>
                </div>

                <div className="rounded-[8px] border border-[#DDE3E8] bg-[#F8FAFB] p-3 pt-2">
                  <p className="m-0 text-[13px] font-semibold leading-5 text-[#4A5358]">Image</p>
                  <div className="mt-3 overflow-hidden rounded-[8px] border border-[#DDE3E8] bg-white">
                    {draft.image ? (
                      <Image
                        src={draft.image}
                        alt={draft.imageAlt || draft.title || "Blog preview"}
                        width={348}
                        height={164}
                        className="h-[164px] w-full object-cover"
                        unoptimized
                      />
                    ) : (
                      <div className="flex h-[164px] items-center justify-center text-[14px] leading-[22.4px] text-[#242424b3]">
                        No image selected
                      </div>
                    )}
                  </div>
                  <label className="mt-3 flex cursor-pointer items-center justify-center rounded-[8px] border border-dashed border-[#AEB8BF] bg-white px-3 py-3 text-center text-[14px] font-semibold leading-[22.4px] text-[#262D30] transition-colors hover:border-[#262D30]">
                    {uploading ? "Uploading..." : "Upload or change image"}
                    <input
                      type="file"
                      accept="image/png,image/jpeg,image/webp,image/gif"
                      className="sr-only"
                      disabled={uploading}
                      onChange={(event) => {
                        const file = event.target.files?.[0];
                        if (file) {
                          uploadImage(file);
                        }
                        event.target.value = "";
                      }}
                    />
                  </label>
                </div>

                <label className="flex cursor-pointer items-center gap-3 rounded-[8px] border border-[#DDE3E8] bg-white px-3 py-3 text-[16px] leading-6 text-[#262D30]">
                  <input
                    type="checkbox"
                    className="h-5 w-5 cursor-pointer rounded border-[#AEB8BF] accent-[#262D30]"
                    checked={draft.published}
                    onChange={(event) => setDraft({ ...draft, published: event.target.checked })}
                  />
                  Published
                </label>
                <div className="flex gap-3 border-t border-[#EBEBEB] pt-4">
                  <button
                    type="submit"
                    disabled={saving || uploading}
                    className="h-12 flex-1 cursor-pointer rounded-[10px] bg-[#262D30] px-5 text-[16px] font-semibold text-white disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {saving ? "Saving..." : "Save"}
                  </button>
                  <button
                    type="button"
                    onClick={resetDraft}
                    className="h-12 cursor-pointer rounded-[10px] border border-[#262D30] px-5 text-[16px] font-semibold text-[#262D30]"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            ) : (
              <aside className="rounded-[8px] border border-[#DDE3E8] bg-white p-5 shadow-[0_18px_40px_rgba(38,45,48,0.06)]">
                <h2 className="m-0 text-[24px] font-semibold leading-[28.8px] text-[#262D30]">Manage posts</h2>
                <p className="mt-2 mb-0 text-[14px] leading-[22.4px] text-[#242424b3]">
                  Select Edit on an existing post or use New post to add a blog entry.
                </p>
              </aside>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
