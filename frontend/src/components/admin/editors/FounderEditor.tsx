"use client";

import { useState } from "react";
import { useSaveContent, uploadImage, SaveButton, SaveMessage, inputClass, SectionHeading } from "../editorUtils";

interface Founder {
  name: string;
  role: string;
  bio1: string;
  bio2: string;
  image: string;
}

export default function FounderEditor({
  initialData,
  fullContent,
}: {
  initialData: Founder;
  fullContent: unknown;
}) {
  const [data, setData] = useState(initialData);
  const [uploading, setUploading] = useState(false);
  const { save, saving, message } = useSaveContent();

  function handleChange(field: keyof Founder, value: string) {
    setData((prev) => ({ ...prev, [field]: value }));
  }

  async function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    try {
      const url = await uploadImage(file);
      setData((prev) => ({ ...prev, image: url }));
    } catch {
      alert("Image upload failed.");
    } finally {
      setUploading(false);
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    save({ ...(fullContent as object), founder: data });
  }

  return (
    <form onSubmit={handleSubmit}>
      <SectionHeading title="Founder" />
      <div className="space-y-4 max-w-2xl">
        <div>
          <label className="block text-gray-400 text-sm mb-1">Name</label>
          <input className={inputClass()} value={data.name} onChange={(e) => handleChange("name", e.target.value)} />
        </div>
        <div>
          <label className="block text-gray-400 text-sm mb-1">Role</label>
          <input className={inputClass()} value={data.role} onChange={(e) => handleChange("role", e.target.value)} />
        </div>
        <div>
          <label className="block text-gray-400 text-sm mb-1">Bio Paragraph 1</label>
          <textarea rows={4} className={inputClass()} value={data.bio1} onChange={(e) => handleChange("bio1", e.target.value)} />
        </div>
        <div>
          <label className="block text-gray-400 text-sm mb-1">Bio Paragraph 2</label>
          <textarea rows={4} className={inputClass()} value={data.bio2} onChange={(e) => handleChange("bio2", e.target.value)} />
        </div>
        <div>
          <label className="block text-gray-400 text-sm mb-1">Photo</label>
          {data.image && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={data.image} alt="Founder" className="w-32 h-32 object-cover rounded-xl mb-2 border border-white/10" />
          )}
          <input
            className={inputClass()}
            value={data.image}
            onChange={(e) => handleChange("image", e.target.value)}
            placeholder="Image URL"
          />
          <div className="mt-2">
            <label className="block text-gray-500 text-xs mb-1">Or upload a new image:</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="text-gray-400 text-sm"
            />
            {uploading && <p className="text-cyan-400 text-xs mt-1">Uploading…</p>}
          </div>
        </div>

        <div className="flex items-center gap-4 pt-2">
          <SaveButton saving={saving} />
          <SaveMessage message={message} />
        </div>
      </div>
    </form>
  );
}
