"use client";

import { useState } from "react";
import { useSaveContent, SaveButton, SaveMessage, inputClass, SectionHeading } from "../editorUtils";

interface Testimonial {
  id: number;
  name: string;
  website: string;
  role: string;
  quote: string;
  rating: number;
}

export default function TestimonialsEditor({
  initialData,
  fullContent,
}: {
  initialData: Testimonial[];
  fullContent: unknown;
}) {
  const [testimonials, setTestimonials] = useState(initialData);
  const { save, saving, message } = useSaveContent();

  function handleChange(index: number, field: keyof Testimonial, value: string | number) {
    setTestimonials((prev) => prev.map((t, i) => (i === index ? { ...t, [field]: value } : t)));
  }

  function addTestimonial() {
    setTestimonials((prev) => [
      ...prev,
      { id: Date.now(), name: "", website: "", role: "", quote: "", rating: 5 },
    ]);
  }

  function removeTestimonial(index: number) {
    setTestimonials((prev) => prev.filter((_, i) => i !== index));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    save({ ...(fullContent as object), testimonials });
  }

  return (
    <form onSubmit={handleSubmit}>
      <SectionHeading title="Testimonials" />
      <div className="space-y-4 max-w-2xl">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-[#0A1628] border border-white/10 rounded-xl p-4 space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-400 text-sm font-medium">{t.name || `Testimonial ${i + 1}`}</span>
              <button type="button" onClick={() => removeTestimonial(i)} className="text-red-400 hover:text-red-300 text-xs">Remove</button>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-gray-500 text-xs mb-1">Name</label>
                <input className={inputClass()} value={t.name} onChange={(e) => handleChange(i, "name", e.target.value)} />
              </div>
              <div>
                <label className="block text-gray-500 text-xs mb-1">Website</label>
                <input className={inputClass()} value={t.website} onChange={(e) => handleChange(i, "website", e.target.value)} />
              </div>
            </div>
            <div>
              <label className="block text-gray-500 text-xs mb-1">Role</label>
              <input className={inputClass()} value={t.role} onChange={(e) => handleChange(i, "role", e.target.value)} />
            </div>
            <div>
              <label className="block text-gray-500 text-xs mb-1">Quote</label>
              <textarea rows={3} className={inputClass()} value={t.quote} onChange={(e) => handleChange(i, "quote", e.target.value)} />
            </div>
            <div>
              <label className="block text-gray-500 text-xs mb-1">Rating (1-5)</label>
              <input type="number" min={1} max={5} className={inputClass()} value={t.rating} onChange={(e) => handleChange(i, "rating", Number(e.target.value))} />
            </div>
          </div>
        ))}

        <button
          type="button"
          onClick={addTestimonial}
          className="text-cyan-400 hover:text-cyan-300 text-sm border border-cyan-500/30 hover:border-cyan-500/60 rounded-xl px-4 py-2 transition-colors duration-200"
        >
          + Add Testimonial
        </button>

        <div className="flex items-center gap-4 pt-2">
          <SaveButton saving={saving} />
          <SaveMessage message={message} />
        </div>
      </div>
    </form>
  );
}
