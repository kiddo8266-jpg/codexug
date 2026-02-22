"use client";

import { useState } from "react";
import { useSaveContent, uploadImage, SaveButton, SaveMessage, inputClass, SectionHeading } from "../editorUtils";

interface Product {
  id: string;
  title: string;
  description: string;
  image: string;
  priceRange: string;
  category: string;
}

export default function ProductsEditor({
  initialData,
  fullContent,
}: {
  initialData: Product[];
  fullContent: unknown;
}) {
  const [products, setProducts] = useState(initialData);
  const [expanded, setExpanded] = useState<number | null>(null);
  const [uploading, setUploading] = useState<number | null>(null);
  const { save, saving, message } = useSaveContent();

  function handleChange(index: number, field: keyof Product, value: string) {
    setProducts((prev) => prev.map((p, i) => (i === index ? { ...p, [field]: value } : p)));
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

  function addProduct() {
    setProducts((prev) => [
      ...prev,
      { id: `product-${Date.now()}`, title: "New Product", description: "", image: "", priceRange: "", category: "" },
    ]);
    setExpanded(products.length);
  }

  function removeProduct(index: number) {
    setProducts((prev) => prev.filter((_, i) => i !== index));
    setExpanded(null);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    save({ ...(fullContent as object), products });
  }

  return (
    <form onSubmit={handleSubmit}>
      <SectionHeading title="Products" />
      <div className="space-y-3 max-w-2xl">
        {products.map((product, i) => (
          <div key={i} className="bg-[#0A1628] border border-white/10 rounded-xl overflow-hidden">
            <button
              type="button"
              onClick={() => setExpanded(expanded === i ? null : i)}
              className="w-full flex justify-between items-center px-4 py-3 text-left hover:bg-white/5 transition-colors duration-200"
            >
              <span className="text-white text-sm font-medium">{product.title || `Product ${i + 1}`}</span>
              <span className="text-gray-400 text-xs">{expanded === i ? "▲" : "▼"}</span>
            </button>
            {expanded === i && (
              <div className="px-4 pb-4 space-y-3 border-t border-white/10 pt-3">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-gray-500 text-xs mb-1">ID</label>
                    <input className={inputClass()} value={product.id} onChange={(e) => handleChange(i, "id", e.target.value)} />
                  </div>
                  <div>
                    <label className="block text-gray-500 text-xs mb-1">Category</label>
                    <input className={inputClass()} value={product.category} onChange={(e) => handleChange(i, "category", e.target.value)} />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-500 text-xs mb-1">Title</label>
                  <input className={inputClass()} value={product.title} onChange={(e) => handleChange(i, "title", e.target.value)} />
                </div>
                <div>
                  <label className="block text-gray-500 text-xs mb-1">Description</label>
                  <textarea rows={3} className={inputClass()} value={product.description} onChange={(e) => handleChange(i, "description", e.target.value)} />
                </div>
                <div>
                  <label className="block text-gray-500 text-xs mb-1">Price Range</label>
                  <input className={inputClass()} value={product.priceRange} onChange={(e) => handleChange(i, "priceRange", e.target.value)} />
                </div>
                <div>
                  <label className="block text-gray-500 text-xs mb-1">Image</label>
                  {product.image && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={product.image} alt={product.title} className="w-32 h-20 object-cover rounded-lg mb-2 border border-white/10" />
                  )}
                  <input className={inputClass()} value={product.image} onChange={(e) => handleChange(i, "image", e.target.value)} placeholder="Image URL" />
                  <div className="mt-2">
                    <label className="block text-gray-500 text-xs mb-1">Or upload:</label>
                    <input type="file" accept="image/*" onChange={(e) => handleImageUpload(i, e)} className="text-gray-400 text-sm" />
                    {uploading === i && <p className="text-cyan-400 text-xs mt-1">Uploading…</p>}
                  </div>
                </div>
                <button type="button" onClick={() => removeProduct(i)} className="text-red-400 hover:text-red-300 text-xs">Delete Product</button>
              </div>
            )}
          </div>
        ))}

        <button
          type="button"
          onClick={addProduct}
          className="text-cyan-400 hover:text-cyan-300 text-sm border border-cyan-500/30 hover:border-cyan-500/60 rounded-xl px-4 py-2 transition-colors duration-200"
        >
          + Add Product
        </button>

        <div className="flex items-center gap-4 pt-2">
          <SaveButton saving={saving} />
          <SaveMessage message={message} />
        </div>
      </div>
    </form>
  );
}
