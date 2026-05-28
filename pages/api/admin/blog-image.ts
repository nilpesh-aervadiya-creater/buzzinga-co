import { promises as fs } from "fs";
import path from "path";
import type { NextApiRequest, NextApiResponse } from "next";

type UploadResponse = {
  image?: string;
  error?: string;
};

const ALLOWED_TYPES = new Set(["image/jpeg", "image/png", "image/webp", "image/gif"]);
const MAX_IMAGE_SIZE = 5 * 1024 * 1024;

function sanitizeFileName(fileName: string) {
  const parsed = path.parse(fileName);
  const baseName = parsed.name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  const extension = parsed.ext.toLowerCase().replace(/[^a-z.]/g, "");

  return `${baseName || "blog-image"}-${Date.now()}${extension || ".jpg"}`;
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "8mb",
    },
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<UploadResponse>
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ error: "Method not allowed." });
    return;
  }

  const body = req.body as {
    fileName?: string;
    contentType?: string;
    data?: string;
  };
  const contentType = String(body.contentType ?? "");
  const rawData = String(body.data ?? "");

  if (!body.fileName || !ALLOWED_TYPES.has(contentType) || !rawData) {
    res.status(400).json({ error: "Upload a JPG, PNG, WebP, or GIF image." });
    return;
  }

  const buffer = Buffer.from(rawData, "base64");

  if (buffer.byteLength > MAX_IMAGE_SIZE) {
    res.status(400).json({ error: "Image must be 5MB or smaller." });
    return;
  }

  try {
    const uploadDir = path.join(process.cwd(), "public", "buzzinga-assets", "images", "blog", "uploads");
    const fileName = sanitizeFileName(body.fileName);
    const filePath = path.join(uploadDir, fileName);

    await fs.mkdir(uploadDir, { recursive: true });
    await fs.writeFile(filePath, buffer);

    res.status(200).json({ image: `/buzzinga-assets/images/blog/uploads/${fileName}` });
  } catch {
    res.status(500).json({ error: "Unable to upload image." });
  }
}
