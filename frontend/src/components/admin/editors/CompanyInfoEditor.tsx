"use client";

import { useState } from "react";
import { useSaveContent, SaveButton, SaveMessage, inputClass, SectionHeading } from "../editorUtils";

interface CompanyInfo {
  name: string;
  tagline: string;
  description: string;
  email: string;
  phone: string;
  founded: string;
  social: {
    linkedin: string;
    facebook: string;
    twitter: string;
    tiktok: string;
    youtube: string;
  };
}

export default function CompanyInfoEditor({
  initialData,
  fullContent,
}: {
  initialData: CompanyInfo;
  fullContent: unknown;
}) {
  const [data, setData] = useState(initialData);
  const { save, saving, message } = useSaveContent();

  function handleChange(field: string, value: string) {
    setData((prev) => ({ ...prev, [field]: value }));
  }

  function handleSocialChange(field: string, value: string) {
    setData((prev) => ({ ...prev, social: { ...prev.social, [field]: value } }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    save({ ...(fullContent as object), companyInfo: data });
  }

  return (
    <form onSubmit={handleSubmit}>
      <SectionHeading title="Company Info" />
      <div className="space-y-4 max-w-2xl">
        {(["name", "tagline", "email", "phone", "founded"] as const).map((field) => (
          <div key={field}>
            <label className="block text-gray-400 text-sm mb-1 capitalize">{field}</label>
            <input
              className={inputClass()}
              value={data[field]}
              onChange={(e) => handleChange(field, e.target.value)}
            />
          </div>
        ))}
        <div>
          <label className="block text-gray-400 text-sm mb-1">Description</label>
          <textarea
            rows={3}
            className={inputClass()}
            value={data.description}
            onChange={(e) => handleChange("description", e.target.value)}
          />
        </div>

        <h3 className="text-white font-semibold mt-6 mb-2">Social Links</h3>
        {(["linkedin", "facebook", "twitter", "tiktok", "youtube"] as const).map((platform) => (
          <div key={platform}>
            <label className="block text-gray-400 text-sm mb-1 capitalize">{platform}</label>
            <input
              className={inputClass()}
              value={data.social[platform]}
              onChange={(e) => handleSocialChange(platform, e.target.value)}
            />
          </div>
        ))}

        <div className="flex items-center gap-4 pt-2">
          <SaveButton saving={saving} />
          <SaveMessage message={message} />
        </div>
      </div>
    </form>
  );
}
