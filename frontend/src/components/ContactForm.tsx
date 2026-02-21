"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader2 } from "lucide-react";

const SUBJECTS = [
  "General Inquiry",
  "IT Consulting",
  "Cloud Services",
  "Cybersecurity",
  "Web Development",
  "Hardware Purchase",
  "Managed IT Support",
  "Request a Quote",
  "Partnership",
  "Other",
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch(
        process.env.NEXT_PUBLIC_API_URL
          ? `${process.env.NEXT_PUBLIC_API_URL}/api/contact`
          : "/api/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        setStatus("error");
        setErrorMessage(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please check your connection and try again.");
    }
  };

  const inputClass =
    "w-full bg-[#0A1628] border border-white/10 text-white text-sm rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/30 placeholder-gray-500 transition-colors duration-200";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-gray-300 text-sm font-medium mb-2">
            Full Name <span className="text-cyan-400">*</span>
          </label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-gray-300 text-sm font-medium mb-2">
            Email Address <span className="text-cyan-400">*</span>
          </label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="john@company.com"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-gray-300 text-sm font-medium mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+256 700 000 000"
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-gray-300 text-sm font-medium mb-2">
            Subject <span className="text-cyan-400">*</span>
          </label>
          <select
            name="subject"
            required
            value={formData.subject}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="" disabled>Select a subject</option>
            {SUBJECTS.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-gray-300 text-sm font-medium mb-2">
          Message <span className="text-cyan-400">*</span>
        </label>
        <textarea
          name="message"
          required
          rows={6}
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your project or inquiry..."
          className={`${inputClass} resize-none`}
        />
      </div>

      {status === "success" && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-green-500/10 border border-green-500/30 text-green-400 text-sm px-4 py-3 rounded-lg"
        >
          ✓ Thank you! We&apos;ll get back to you within 24 hours.
        </motion.div>
      )}

      {status === "error" && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-red-500/10 border border-red-500/30 text-red-400 text-sm px-4 py-3 rounded-lg"
        >
          ✗ {errorMessage}
        </motion.div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 disabled:bg-cyan-500/50 text-white font-semibold py-3 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25"
      >
        {status === "loading" ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send size={18} />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}
