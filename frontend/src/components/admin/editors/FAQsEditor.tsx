"use client";

import { useState } from "react";
import { useSaveContent, SaveButton, SaveMessage, inputClass, SectionHeading } from "../editorUtils";

interface FAQ {
  question: string;
  answer: string;
}

export default function FAQsEditor({
  initialData,
  fullContent,
}: {
  initialData: FAQ[];
  fullContent: unknown;
}) {
  const [faqs, setFaqs] = useState(initialData);
  const { save, saving, message } = useSaveContent();

  function handleChange(index: number, field: keyof FAQ, value: string) {
    setFaqs((prev) => prev.map((f, i) => (i === index ? { ...f, [field]: value } : f)));
  }

  function addFaq() {
    setFaqs((prev) => [...prev, { question: "", answer: "" }]);
  }

  function removeFaq(index: number) {
    setFaqs((prev) => prev.filter((_, i) => i !== index));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    save({ ...(fullContent as object), faqs });
  }

  return (
    <form onSubmit={handleSubmit}>
      <SectionHeading title="FAQs" />
      <div className="space-y-4 max-w-2xl">
        {faqs.map((faq, i) => (
          <div key={i} className="bg-[#0A1628] border border-white/10 rounded-xl p-4 space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-400 text-sm font-medium">FAQ {i + 1}</span>
              <button type="button" onClick={() => removeFaq(i)} className="text-red-400 hover:text-red-300 text-xs">Remove</button>
            </div>
            <div>
              <label className="block text-gray-500 text-xs mb-1">Question</label>
              <input className={inputClass()} value={faq.question} onChange={(e) => handleChange(i, "question", e.target.value)} />
            </div>
            <div>
              <label className="block text-gray-500 text-xs mb-1">Answer</label>
              <textarea rows={3} className={inputClass()} value={faq.answer} onChange={(e) => handleChange(i, "answer", e.target.value)} />
            </div>
          </div>
        ))}

        <button
          type="button"
          onClick={addFaq}
          className="text-cyan-400 hover:text-cyan-300 text-sm border border-cyan-500/30 hover:border-cyan-500/60 rounded-xl px-4 py-2 transition-colors duration-200"
        >
          + Add FAQ
        </button>

        <div className="flex items-center gap-4 pt-2">
          <SaveButton saving={saving} />
          <SaveMessage message={message} />
        </div>
      </div>
    </form>
  );
}
