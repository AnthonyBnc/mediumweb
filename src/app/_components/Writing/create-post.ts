'use server';

import { api } from "~/trpc/server";

export default async function createPost(formData: FormData) {
  const title = formData.get("title");
  const content = formData.get("content");
  // upload file
  
  // create post
  const res = await api.post.create({
    title: title as string,
    content: content as string,
  });

  return res
}