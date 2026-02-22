"use client";

import { useState } from "react";
import { useSaveContent, SaveButton, SaveMessage, inputClass, SectionHeading } from "../editorUtils";

interface Certification {
  name: string;
  issuer: string;
}

export default function CertificationsEditor({
  initialData,
  fullContent,
}: {
  initialData: Certification[];
  fullContent: unknown;
}) {
  const [certs, setCerts] = useState(initialData);
  const { save, saving, message } = useSaveContent();

  function handleChange(index: number, field: keyof Certification, value: string) {
    setCerts((prev) => prev.map((c, i) => (i === index ? { ...c, [field]: value } : c)));
  }

  function addCert() {
    setCerts((prev) => [...prev, { name: "", issuer: "" }]);
  }

  function removeCert(index: number) {
    setCerts((prev) => prev.filter((_, i) => i !== index));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    save({ ...(fullContent as object), certifications: certs });
  }

  return (
    <form onSubmit={handleSubmit}>
      <SectionHeading title="Certifications" />
      <div className="space-y-4 max-w-2xl">
        {certs.map((cert, i) => (
          <div key={i} className="bg-[#0A1628] border border-white/10 rounded-xl p-4 space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-400 text-sm font-medium">{cert.name || `Certification ${i + 1}`}</span>
              <button type="button" onClick={() => removeCert(i)} className="text-red-400 hover:text-red-300 text-xs">Remove</button>
            </div>
            <div>
              <label className="block text-gray-500 text-xs mb-1">Name</label>
              <input className={inputClass()} value={cert.name} onChange={(e) => handleChange(i, "name", e.target.value)} />
            </div>
            <div>
              <label className="block text-gray-500 text-xs mb-1">Issuer</label>
              <input className={inputClass()} value={cert.issuer} onChange={(e) => handleChange(i, "issuer", e.target.value)} />
            </div>
          </div>
        ))}

        <button
          type="button"
          onClick={addCert}
          className="text-cyan-400 hover:text-cyan-300 text-sm border border-cyan-500/30 hover:border-cyan-500/60 rounded-xl px-4 py-2 transition-colors duration-200"
        >
          + Add Certification
        </button>

        <div className="flex items-center gap-4 pt-2">
          <SaveButton saving={saving} />
          <SaveMessage message={message} />
        </div>
      </div>
    </form>
  );
}
