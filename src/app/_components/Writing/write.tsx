// pages/write.js

import { useState } from "react";
import Head from "next/head";

const Write = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0] as File);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    if (file) {
      formData.append("file", file);
    }

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    if (res.ok) {
      alert("Post created successfully!");
      setTitle("");
      setContent("");
      setFile(null);
    } else {
      alert("Failed to create post");
    }
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <Head>
        <title>Write a Post</title>
      </Head>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-full px-3 py-2"
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          className="h-48 w-full px-3 py-2"
        />
        <input
          type="file"
          onChange={handleFileChange}
          required
          className="w-full px-3 py-2"
        />
        <button
          type="submit"
          className="w-full rounded bg-blue-500 py-2 text-white hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Write;
