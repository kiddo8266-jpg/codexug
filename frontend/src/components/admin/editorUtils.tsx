"use client";

import { useState } from "react";

export function useSaveContent() {
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  async function save(content: unknown) {
    setSaving(true);
    setMessage(null);
    try {
      const res = await fetch("/api/admin/save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content }),
      });
      if (!res.ok) throw new Error("Save failed");
      setMessage({ type: "success", text: "Changes saved successfully!" });
    } catch {
      setMessage({ type: "error", text: "Failed to save changes. Please try again." });
    } finally {
      setSaving(false);
      setTimeout(() => setMessage(null), 4000);
    }
  }

  return { save, saving, message };
}

export async function uploadImage(file: File): Promise<string> {
  const formData = new FormData();
  formData.append("file", file);
  const res = await fetch("/api/admin/upload", {
    method: "POST",
    body: formData,
  });
  if (!res.ok) throw new Error("Upload failed");
  const data = await res.json();
  return data.url as string;
}

export function SaveButton({ saving }: { saving: boolean }) {
  return (
    <button
      type="submit"
      disabled={saving}
      className="bg-cyan-500 hover:bg-cyan-400 disabled:opacity-60 text-white font-semibold px-6 py-2 rounded-xl transition-colors duration-200"
    >
      {saving ? "Saving…" : "Save Changes"}
    </button>
  );
}

export function SaveMessage({
  message,
}: {
  message: { type: "success" | "error"; text: string } | null;
}) {
  if (!message) return null;
  return (
    <p
      className={`text-sm font-medium ${
        message.type === "success" ? "text-green-400" : "text-red-400"
      }`}
    >
      {message.text}
    </p>
  );
}

export function inputClass() {
  return "w-full bg-[#0F1E35] border border-white/10 text-white rounded-xl px-4 py-2 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 placeholder:text-gray-600";
}

export function SectionHeading({ title }: { title: string }) {
  return (
    <h2 className="text-white font-bold text-2xl mb-6 pb-3 border-b border-white/10">{title}</h2>
  );
}
