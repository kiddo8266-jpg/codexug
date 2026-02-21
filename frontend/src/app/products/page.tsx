import type { Metadata } from "next";
import ProductCard from "@/components/ProductCard";
import { PRODUCTS } from "@/lib/data";
import Link from "next/link";
import { ArrowRight, Package } from "lucide-react";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse CodexUg's wide range of IT products including laptops, servers, networking equipment, software licenses, CCTV systems, and more.",
};

export default function ProductsPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-[#060E1A] to-[#0A1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-cyan-400 text-sm font-semibold uppercase tracking-wider">IT Products</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
            Quality IT Products
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              Built for Businesses
            </span>
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            We supply premium IT hardware and software from leading global brands.
            All products come with warranty, professional installation, and after-sales support.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {PRODUCTS.map((product, index) => (
              <ProductCard key={product.id} {...product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Why buy from us */}
      <section className="py-20 bg-[#060E1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-white mb-4">Why Buy From CodexUg?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🏆", title: "Genuine Products", desc: "All products are 100% genuine with manufacturer warranty." },
              { icon: "🚚", title: "Fast Delivery", desc: "Quick delivery across Kampala and nationwide shipping." },
              { icon: "🔧", title: "Installation Included", desc: "Professional installation and configuration at no extra cost." },
              { icon: "📞", title: "After-Sales Support", desc: "Dedicated support for all products purchased from us." },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-[#0F1E35] border border-white/10 rounded-xl p-6 text-center hover:border-cyan-500/30 transition-colors duration-300"
              >
                <span className="text-4xl block mb-4">{item.icon}</span>
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0A1628]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Package size={48} className="text-cyan-400 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-4">
            Need a Custom Quote?
          </h2>
          <p className="text-gray-400 mb-8">
            Have specific product requirements or need bulk pricing? Contact us for a
            personalized quote tailored to your business needs.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200"
          >
            Request a Quote
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
