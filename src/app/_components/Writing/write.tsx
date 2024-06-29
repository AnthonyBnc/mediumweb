import { useState, useRef, useEffect } from "react";
import Head from "next/head";
import WriteHeader from "./WriteHeader";

const Write = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null!);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    setFile(file ?? null);
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

  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current!;
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  useEffect(() => {
    adjustTextareaHeight();
  }, [content]);

  const handleTitleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      textareaRef.current?.focus();
    }
  };

  const publishButton = (
    <button
      type="submit"
      form="postForm"
      className="rounded-full bg-green-600 px-3 py-1 text-white"
    >
      Publish
    </button>
  );

  return (
    <>
      <Head>
        <title>Write a Post</title>
      </Head>
      <WriteHeader publishButton={publishButton} />
      <form id="postForm" onSubmit={handleSubmit} className="space-y-4">
        <div className="mx-auto max-w-4xl px-4 py-5">
          <div className="mb-6">
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              onKeyDown={handleTitleKeyDown}
              required
              className="mt-2 w-full rounded px-3 py-2 font-serif text-4xl placeholder:text-gray-400 focus:outline-none focus:ring-0"
            />
          </div>
          <div className="mb-6 h-max">
            <textarea
              ref={textareaRef}
              placeholder="Tell your story..."
              value={content}
              onChange={(e) => {
                setContent(e.target.value);
                adjustTextareaHeight();
              }}
              required
              className="mt-2 w-full rounded px-3 py-2 font-serif text-xl placeholder:text-gray-300 focus:outline-none focus:ring-0"
              style={{ resize: "none", overflow: "hidden" }}
            />
          </div>
          <div className="mb-6 h-max">
            <input
              type="file"
              onChange={handleFileChange}
              className="mt-2 w-full"
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default Write;
