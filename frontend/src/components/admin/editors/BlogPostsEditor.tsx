"use client";

import { useState } from "react";
import { useSaveContent, uploadImage, SaveButton, SaveMessage, inputClass, SectionHeading } from "../editorUtils";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
  readTime: string;
  slug: string;
}

export default function BlogPostsEditor({
  initialData,
  fullContent,
}: {
  initialData: BlogPost[];
  fullContent: unknown;
}) {
  const [posts, setPosts] = useState(initialData);
  const [expanded, setExpanded] = useState<number | null>(null);
  const [uploading, setUploading] = useState<number | null>(null);
  const { save, saving, message } = useSaveContent();

  function handleChange(index: number, field: keyof BlogPost, value: string | number) {
    setPosts((prev) => prev.map((p, i) => (i === index ? { ...p, [field]: value } : p)));
  }

  async function handleImageUpload(index: number, e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(index);
    try {
      const url = await uploadImage(file);
      handleChange(index, "image", url);
    } catch {
      alert("Image upload failed.");
    } finally {
      setUploading(null);
    }
  }

  function addPost() {
    setPosts((prev) => [
      ...prev,
      { id: Date.now(), title: "", excerpt: "", image: "", date: new Date().toISOString().split("T")[0], category: "", readTime: "", slug: "" },
    ]);
    setExpanded(posts.length);
  }

  function removePost(index: number) {
    setPosts((prev) => prev.filter((_, i) => i !== index));
    setExpanded(null);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    save({ ...(fullContent as object), blogPosts: posts });
  }

  return (
    <form onSubmit={handleSubmit}>
      <SectionHeading title="Blog Posts" />
      <div className="space-y-3 max-w-2xl">
        {posts.map((post, i) => (
          <div key={i} className="bg-[#0A1628] border border-white/10 rounded-xl overflow-hidden">
            <button
              type="button"
              onClick={() => setExpanded(expanded === i ? null : i)}
              className="w-full flex justify-between items-center px-4 py-3 text-left hover:bg-white/5 transition-colors duration-200"
            >
              <span className="text-white text-sm font-medium">{post.title || `Post ${i + 1}`}</span>
              <span className="text-gray-400 text-xs">{expanded === i ? "▲" : "▼"}</span>
            </button>
            {expanded === i && (
              <div className="px-4 pb-4 space-y-3 border-t border-white/10 pt-3">
                <div>
                  <label className="block text-gray-500 text-xs mb-1">Title</label>
                  <input className={inputClass()} value={post.title} onChange={(e) => handleChange(i, "title", e.target.value)} />
                </div>
                <div>
                  <label className="block text-gray-500 text-xs mb-1">Excerpt</label>
                  <textarea rows={3} className={inputClass()} value={post.excerpt} onChange={(e) => handleChange(i, "excerpt", e.target.value)} />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-gray-500 text-xs mb-1">Date</label>
                    <input type="date" className={inputClass()} value={post.date} onChange={(e) => handleChange(i, "date", e.target.value)} />
                  </div>
                  <div>
                    <label className="block text-gray-500 text-xs mb-1">Category</label>
                    <input className={inputClass()} value={post.category} onChange={(e) => handleChange(i, "category", e.target.value)} />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-gray-500 text-xs mb-1">Read Time</label>
                    <input className={inputClass()} value={post.readTime} onChange={(e) => handleChange(i, "readTime", e.target.value)} />
                  </div>
                  <div>
                    <label className="block text-gray-500 text-xs mb-1">Slug</label>
                    <input className={inputClass()} value={post.slug} onChange={(e) => handleChange(i, "slug", e.target.value)} />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-500 text-xs mb-1">Image</label>
                  {post.image && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={post.image} alt={post.title} className="w-32 h-20 object-cover rounded-lg mb-2 border border-white/10" />
                  )}
                  <input className={inputClass()} value={post.image} onChange={(e) => handleChange(i, "image", e.target.value)} placeholder="Image URL" />
                  <div className="mt-2">
                    <label className="block text-gray-500 text-xs mb-1">Or upload:</label>
                    <input type="file" accept="image/*" onChange={(e) => handleImageUpload(i, e)} className="text-gray-400 text-sm" />
                    {uploading === i && <p className="text-cyan-400 text-xs mt-1">Uploading…</p>}
                  </div>
                </div>
                <button type="button" onClick={() => removePost(i)} className="text-red-400 hover:text-red-300 text-xs">Delete Post</button>
              </div>
            )}
          </div>
        ))}

        <button
          type="button"
          onClick={addPost}
          className="text-cyan-400 hover:text-cyan-300 text-sm border border-cyan-500/30 hover:border-cyan-500/60 rounded-xl px-4 py-2 transition-colors duration-200"
        >
          + Add Post
        </button>

        <div className="flex items-center gap-4 pt-2">
          <SaveButton saving={saving} />
          <SaveMessage message={message} />
        </div>
      </div>
    </form>
  );
}
