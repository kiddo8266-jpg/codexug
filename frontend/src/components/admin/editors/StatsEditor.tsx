"use client";

import { useState } from "react";
import { useSaveContent, SaveButton, SaveMessage, inputClass, SectionHeading } from "../editorUtils";

interface Stat {
  label: string;
  value: number;
  suffix: string;
}

export default function StatsEditor({
  initialData,
  fullContent,
}: {
  initialData: Stat[];
  fullContent: unknown;
}) {
  const [stats, setStats] = useState(initialData);
  const { save, saving, message } = useSaveContent();

  function handleChange(index: number, field: keyof Stat, value: string) {
    setStats((prev) =>
      prev.map((s, i) =>
        i === index ? { ...s, [field]: field === "value" ? Number(value) : value } : s
      )
    );
  }

  function addStat() {
    setStats((prev) => [...prev, { label: "New Stat", value: 0, suffix: "+" }]);
  }

  function removeStat(index: number) {
    setStats((prev) => prev.filter((_, i) => i !== index));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    save({ ...(fullContent as object), stats });
  }

  return (
    <form onSubmit={handleSubmit}>
      <SectionHeading title="Stats" />
      <div className="space-y-4 max-w-2xl">
        {stats.map((stat, i) => (
          <div key={i} className="bg-[#0A1628] border border-white/10 rounded-xl p-4 space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-400 text-sm font-medium">Stat {i + 1}</span>
              <button
                type="button"
                onClick={() => removeStat(i)}
                className="text-red-400 hover:text-red-300 text-xs"
              >
                Remove
              </button>
            </div>
            <div>
              <label className="block text-gray-500 text-xs mb-1">Label</label>
              <input className={inputClass()} value={stat.label} onChange={(e) => handleChange(i, "label", e.target.value)} />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-gray-500 text-xs mb-1">Value</label>
                <input type="number" className={inputClass()} value={stat.value} onChange={(e) => handleChange(i, "value", e.target.value)} />
              </div>
              <div>
                <label className="block text-gray-500 text-xs mb-1">Suffix</label>
                <input className={inputClass()} value={stat.suffix} onChange={(e) => handleChange(i, "suffix", e.target.value)} />
              </div>
            </div>
          </div>
        ))}

        <button
          type="button"
          onClick={addStat}
          className="text-cyan-400 hover:text-cyan-300 text-sm border border-cyan-500/30 hover:border-cyan-500/60 rounded-xl px-4 py-2 transition-colors duration-200"
        >
          + Add Stat
        </button>

        <div className="flex items-center gap-4 pt-2">
          <SaveButton saving={saving} />
          <SaveMessage message={message} />
        </div>
      </div>
    </form>
  );
}
