import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import formidable, { IncomingForm, Fields, Files, File } from "formidable";
import { promises as fs } from "fs";
import path from "path";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const session = await getSession({ req });

  if (!session) {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }

  if (req.method === "POST") {
    const form = new IncomingForm({
      uploadDir: path.join(process.cwd(), "./public/uploads"),
      keepExtensions: true,
    });

    form.parse(req, async (err, fields: Fields, files: Files) => {
      if (err) {
        res.status(500).json({ error: "Failed to upload file" });
        return;
      }

      const { title, content } = fields as { [key: string]: string | string[] };
      const file = files.file instanceof Array ? files.file[0] : files.file;

      if (!file || Array.isArray(title) || Array.isArray(content)) {
        res.status(400).json({ error: "Invalid form data" });
        return;
      }

      try {
        const uploadDir = path.join(process.cwd(), "public/uploads");
        await fs.mkdir(uploadDir, { recursive: true });

        const newFilePath = path.join(
          uploadDir,
          file.newFilename || file.originalFilename || "default_filename",
        );
        await fs.rename(file.filepath, newFilePath);

        const post = await prisma.post.create({
          data: {
            title: title as string,
            content: content as string,
            imagePath: `/uploads/${path.basename(newFilePath)}`,
            createdBy: { connect: { id: session.user.id } }, 
          },
        });
        res.status(201).json(post);
      } catch (error) {
        console.error("Error creating post:", error);
        res.status(500).json({ error: "Failed to create post" });
      }
    });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
