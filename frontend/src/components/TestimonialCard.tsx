"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  website: string;
  quote: string;
  role: string;
  rating: number;
  index: number;
}

export default function TestimonialCard({
  name,
  website,
  quote,
  role,
  rating,
  index,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="bg-[#0F1E35] border border-white/10 rounded-xl p-6 hover:border-cyan-500/30 transition-colors duration-300"
    >
      <Quote size={24} className="text-cyan-400 mb-4 opacity-60" />
      <p className="text-gray-300 text-sm leading-relaxed mb-6 italic">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-white font-semibold text-sm">{name}</p>
          <p className="text-cyan-400 text-xs mt-0.5">{role}</p>
          {website && (
            <a
              href={`https://${website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 text-xs hover:text-cyan-400 transition-colors duration-200"
            >
              {website}
            </a>
          )}
        </div>
        <div className="flex gap-0.5">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
