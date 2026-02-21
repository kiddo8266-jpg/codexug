"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { FAQS } from "@/lib/data";
import { ArrowRight } from "lucide-react";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-[#060E1A] to-[#0A1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-cyan-400 text-sm font-semibold uppercase tracking-wider">FAQ</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Find answers to common questions about our IT services, pricing, support, and more.
            Can&apos;t find what you&apos;re looking for? Contact us directly.
          </p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-16 bg-[#0A1628]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-3">
            {FAQS.map((faq, index) => (
              <div
                key={index}
                className="bg-[#0F1E35] border border-white/10 rounded-xl overflow-hidden hover:border-cyan-500/30 transition-colors duration-300"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                  aria-expanded={openIndex === index}
                >
                  <span className="text-white font-medium pr-4">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="shrink-0"
                  >
                    <ChevronDown size={20} className="text-cyan-400" />
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 border-t border-white/10 pt-4">
                        <p className="text-gray-400 text-sm leading-relaxed">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Still have questions */}
          <div className="mt-12 bg-[#0F1E35] border border-cyan-500/20 rounded-xl p-8 text-center">
            <h3 className="text-white font-bold text-xl mb-2">Still Have Questions?</h3>
            <p className="text-gray-400 text-sm mb-6">
              Our team is ready to answer any questions you may have.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200"
            >
              Contact Us
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
