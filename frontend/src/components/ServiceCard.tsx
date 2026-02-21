"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Shield, Cloud, Briefcase, Code, Headphones, BarChart2, Server, Network, Fingerprint, Camera, GraduationCap, Cpu, Layers, LayoutDashboard, AppWindow, type LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Shield,
  Cloud,
  Briefcase,
  Code,
  Headphones,
  BarChart: BarChart2,
  Server,
  Network,
  Fingerprint,
  Camera,
  GraduationCap,
  Cpu,
  Layers,
  LayoutDashboard,
  AppWindow,
};

interface ServiceCardProps {
  icon: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  index: number;
}

export default function ServiceCard({
  icon,
  title,
  shortDescription,
  fullDescription,
  features,
  index,
}: ServiceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const IconComponent = iconMap[icon] || Shield;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-[#0F1E35] border border-white/10 rounded-xl overflow-hidden hover:border-cyan-500/40 transition-colors duration-300"
    >
      <div
        className="p-6 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center shrink-0">
              <IconComponent size={24} className="text-cyan-400" />
            </div>
            <div>
              <h3 className="text-white font-semibold text-lg mb-1">{title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{shortDescription}</p>
            </div>
          </div>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className="shrink-0 mt-1"
          >
            <ChevronDown size={20} className="text-cyan-400" />
          </motion.div>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 border-t border-white/10 pt-4">
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                {fullDescription}
              </p>
              <ul className="space-y-2">
                {features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-gray-400">
                    <span className="text-cyan-400 mt-0.5 shrink-0">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
