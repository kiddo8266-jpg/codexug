"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  priceRange: string;
  category: string;
  index: number;
}

export default function ProductCard({
  title,
  description,
  image,
  priceRange,
  category,
  index,
}: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="bg-[#0F1E35] border border-white/10 rounded-xl overflow-hidden hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 group"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F1E35] to-transparent" />
        <span className="absolute top-3 right-3 bg-cyan-500/90 text-white text-xs font-medium px-2 py-1 rounded-full">
          {category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-cyan-400 transition-colors duration-200">
          {title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-cyan-400 font-semibold text-sm">{priceRange}</span>
          <Link
            href="/contact"
            className="flex items-center gap-1.5 bg-cyan-500 hover:bg-cyan-400 text-white text-sm font-medium px-4 py-2 rounded-lg transition-all duration-200 group/btn"
          >
            Inquire Now
            <ArrowRight size={14} className="group-hover/btn:translate-x-0.5 transition-transform duration-200" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
