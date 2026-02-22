"use client";

import { useState } from "react";
import { useSaveContent, SaveButton, SaveMessage, inputClass, SectionHeading } from "../editorUtils";

interface Service {
  id: string;
  icon: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
}

export default function ServicesEditor({
  initialData,
  fullContent,
}: {
  initialData: Service[];
  fullContent: unknown;
}) {
  const [services, setServices] = useState(initialData);
  const [expanded, setExpanded] = useState<number | null>(0);
  const { save, saving, message } = useSaveContent();

  function handleChange(index: number, field: keyof Service, value: string) {
    setServices((prev) => prev.map((s, i) => (i === index ? { ...s, [field]: value } : s)));
  }

  function handleFeatureChange(svcIndex: number, featIndex: number, value: string) {
    setServices((prev) =>
      prev.map((s, i) =>
        i === svcIndex
          ? { ...s, features: s.features.map((f, fi) => (fi === featIndex ? value : f)) }
          : s
      )
    );
  }

  function addFeature(svcIndex: number) {
    setServices((prev) =>
      prev.map((s, i) => (i === svcIndex ? { ...s, features: [...s.features, ""] } : s))
    );
  }

  function removeFeature(svcIndex: number, featIndex: number) {
    setServices((prev) =>
      prev.map((s, i) =>
        i === svcIndex ? { ...s, features: s.features.filter((_, fi) => fi !== featIndex) } : s
      )
    );
  }

  function addService() {
    setServices((prev) => [
      ...prev,
      { id: `service-${Date.now()}`, icon: "Star", title: "New Service", shortDescription: "", fullDescription: "", features: [] },
    ]);
    setExpanded(services.length);
  }

  function removeService(index: number) {
    setServices((prev) => prev.filter((_, i) => i !== index));
    setExpanded(null);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    save({ ...(fullContent as object), services });
  }

  return (
    <form onSubmit={handleSubmit}>
      <SectionHeading title="Services" />
      <div className="space-y-3 max-w-2xl">
        {services.map((service, i) => (
          <div key={i} className="bg-[#0A1628] border border-white/10 rounded-xl overflow-hidden">
            <button
              type="button"
              onClick={() => setExpanded(expanded === i ? null : i)}
              className="w-full flex justify-between items-center px-4 py-3 text-left hover:bg-white/5 transition-colors duration-200"
            >
              <span className="text-white text-sm font-medium">{service.title || `Service ${i + 1}`}</span>
              <span className="text-gray-400 text-xs">{expanded === i ? "▲" : "▼"}</span>
            </button>
            {expanded === i && (
              <div className="px-4 pb-4 space-y-3 border-t border-white/10">
                <div className="grid grid-cols-2 gap-3 pt-3">
                  <div>
                    <label className="block text-gray-500 text-xs mb-1">ID</label>
                    <input className={inputClass()} value={service.id} onChange={(e) => handleChange(i, "id", e.target.value)} />
                  </div>
                  <div>
                    <label className="block text-gray-500 text-xs mb-1">Icon</label>
                    <input className={inputClass()} value={service.icon} onChange={(e) => handleChange(i, "icon", e.target.value)} />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-500 text-xs mb-1">Title</label>
                  <input className={inputClass()} value={service.title} onChange={(e) => handleChange(i, "title", e.target.value)} />
                </div>
                <div>
                  <label className="block text-gray-500 text-xs mb-1">Short Description</label>
                  <textarea rows={2} className={inputClass()} value={service.shortDescription} onChange={(e) => handleChange(i, "shortDescription", e.target.value)} />
                </div>
                <div>
                  <label className="block text-gray-500 text-xs mb-1">Full Description</label>
                  <textarea rows={3} className={inputClass()} value={service.fullDescription} onChange={(e) => handleChange(i, "fullDescription", e.target.value)} />
                </div>
                <div>
                  <label className="block text-gray-500 text-xs mb-2">Features</label>
                  <div className="space-y-2">
                    {service.features.map((feat, fi) => (
                      <div key={fi} className="flex gap-2">
                        <input className={inputClass()} value={feat} onChange={(e) => handleFeatureChange(i, fi, e.target.value)} />
                        <button type="button" onClick={() => removeFeature(i, fi)} className="text-red-400 hover:text-red-300 px-2 text-sm shrink-0">✕</button>
                      </div>
                    ))}
                    <button type="button" onClick={() => addFeature(i)} className="text-cyan-400 hover:text-cyan-300 text-xs">+ Add Feature</button>
                  </div>
                </div>
                <button type="button" onClick={() => removeService(i)} className="text-red-400 hover:text-red-300 text-xs mt-2">Delete Service</button>
              </div>
            )}
          </div>
        ))}

        <button
          type="button"
          onClick={addService}
          className="text-cyan-400 hover:text-cyan-300 text-sm border border-cyan-500/30 hover:border-cyan-500/60 rounded-xl px-4 py-2 transition-colors duration-200"
        >
          + Add Service
        </button>

        <div className="flex items-center gap-4 pt-2">
          <SaveButton saving={saving} />
          <SaveMessage message={message} />
        </div>
      </div>
    </form>
  );
}
