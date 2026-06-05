export type BlogContentBlock =
  | {
      id: string;
      type: "image";
      value: string;
      imageAlt?: string;
    }
  | {
      id: string;
      type: "description";
      value: string;
    };

export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  description?: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  imageAlt: string;
  published: boolean;
  contentBlocks?: BlogContentBlock[];
};

export const BLOG_DEFAULT_IMAGES = [
  "/buzzinga-assets/images/blog/green-fern.jpg",
  "/buzzinga-assets/images/blog/yellow-flower.jpg",
  "/buzzinga-assets/images/blog/orange-flower.jpg",
  "/buzzinga-assets/images/blog/purple-flower.jpg",
  "/buzzinga-assets/images/blog/lilac-flower.jpg",
];

export const BLOG_FILTERS = ["All", "AI", "Design", "Technology"] as const;

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "getting-started",
    title: "Getting Started",
    excerpt: "You can choose to set up different types of input fields depending on your content.",
    description: "You can choose to set up different types of input fields depending on your content.",
    category: "Design",
    date: "Oct 30, 2025",
    readTime: "0",
    image: "/buzzinga-assets/images/blog/green-fern.jpg",
    imageAlt: "Green Fern",
    published: true,
  },
  {
    id: "whats-new",
    title: "What\u2019s New",
    excerpt:
      "You can choose to set up different types of input fields depending on your content. For instance, a blog might have a title, a slug, and a long-form field for formatted content.",
    description:
      "You can choose to set up different types of input fields depending on your content. For instance, a blog might have a title, a slug, and a long-form field for formatted content.",
    category: "Design",
    date: "Oct 23, 2025",
    readTime: "0",
    image: "/buzzinga-assets/images/blog/yellow-flower.jpg",
    imageAlt: "Yellow Flower",
    published: true,
  },
  {
    id: "styling-elements",
    title: "Styling Elements",
    excerpt:
      "You can choose to set up different types of input fields depending on your content. For instance, a blog might have a title, a slug, and a long-form field for formatted content.",
    description:
      "You can choose to set up different types of input fields depending on your content. For instance, a blog might have a title, a slug, and a long-form field for formatted content.",
    category: "Design",
    date: "Sep 25, 2025",
    readTime: "0",
    image: "/buzzinga-assets/images/blog/orange-flower.jpg",
    imageAlt: "Orange Flower",
    published: true,
  },
  {
    id: "importing-content",
    title: "Importing Content",
    excerpt:
      "You can choose to set up different types of input fields depending on your content. For instance, a blog might have a title, a slug, and a long-form field for formatted content.",
    description:
      "You can choose to set up different types of input fields depending on your content. For instance, a blog might have a title, a slug, and a long-form field for formatted content.",
    category: "Design",
    date: "Sep 15, 2025",
    readTime: "0",
    image: "/buzzinga-assets/images/blog/purple-flower.jpg",
    imageAlt: "Purple Flower",
    published: true,
  },
  {
    id: "best-practices",
    title: "Best Practices",
    excerpt:
      "You can choose to set up different types of input fields depending on your content. For instance, a blog might have a title, a slug, and a long-form field for formatted content.",
    description:
      "You can choose to set up different types of input fields depending on your content. For instance, a blog might have a title, a slug, and a long-form field for formatted content.",
    category: "Design",
    date: "Sep 3, 2025",
    readTime: "0",
    image: "/buzzinga-assets/images/blog/lilac-flower.jpg",
    imageAlt: "Lilac Flower",
    published: true,
  },
];
