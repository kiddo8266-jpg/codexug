"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Company Info", href: "/admin/dashboard" },
  { label: "Founder", href: "/admin/dashboard/founder" },
  { label: "Stats", href: "/admin/dashboard/stats" },
  { label: "Services", href: "/admin/dashboard/services" },
  { label: "Products", href: "/admin/dashboard/products" },
  { label: "Testimonials", href: "/admin/dashboard/testimonials" },
  { label: "Blog Posts", href: "/admin/dashboard/blog-posts" },
  { label: "FAQs", href: "/admin/dashboard/faqs" },
  { label: "Certifications", href: "/admin/dashboard/certifications" },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 shrink-0 bg-[#0A1628] border-r border-white/10 min-h-screen flex flex-col">
      {/* Brand */}
      <div className="p-6 border-b border-white/10">
        <h1 className="text-white font-bold text-xl">
          Codex<span className="text-cyan-400">Ug</span>
        </h1>
        <p className="text-gray-500 text-xs mt-1">Admin Dashboard</p>
      </div>

      {/* Nav */}
      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item) => {
          const isActive =
            item.href === "/admin/dashboard"
              ? pathname === "/admin/dashboard"
              : pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition-colors duration-200 ${
                isActive
                  ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-white/10">
        <form action="/api/admin/logout" method="POST">
          <button
            type="submit"
            className="w-full px-4 py-2.5 rounded-xl text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-colors duration-200 text-left"
          >
            Logout
          </button>
        </form>
        <Link
          href="/"
          target="_blank"
          className="block mt-2 px-4 py-2 rounded-xl text-xs text-gray-500 hover:text-gray-400 transition-colors duration-200"
        >
          ↗ View Site
        </Link>
      </div>
    </aside>
  );
}
