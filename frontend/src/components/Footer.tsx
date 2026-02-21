import Link from "next/link";
import { Mail, Phone, Linkedin, Facebook, Twitter, Youtube } from "lucide-react";
import Logo from "./Logo";
import { COMPANY_INFO } from "@/lib/data";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
  { label: "FAQ", href: "/faq" },
];

const serviceLinks = [
  { label: "Cybersecurity", href: "/services" },
  { label: "Cloud Solutions", href: "/services" },
  { label: "IT Consulting", href: "/services" },
  { label: "Web Development", href: "/services" },
  { label: "Managed IT Support", href: "/services" },
  { label: "Data Analytics", href: "/services" },
];

export default function Footer() {
  return (
    <footer className="bg-[#060E1A] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Logo size="md" className="mb-4" />
            <p className="text-gray-400 text-sm leading-relaxed mt-4">
              Empowering businesses through innovative technology solutions.
              Your trusted IT partner in Uganda and East Africa.
            </p>
            {/* Social Links */}
            <div className="flex space-x-3 mt-6">
              <a
                href={COMPANY_INFO.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/5 hover:bg-cyan-500 rounded-lg flex items-center justify-center transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} className="text-gray-300" />
              </a>
              <a
                href={COMPANY_INFO.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/5 hover:bg-cyan-500 rounded-lg flex items-center justify-center transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook size={16} className="text-gray-300" />
              </a>
              <a
                href={COMPANY_INFO.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/5 hover:bg-cyan-500 rounded-lg flex items-center justify-center transition-colors duration-200"
                aria-label="Twitter/X"
              >
                <Twitter size={16} className="text-gray-300" />
              </a>
              <a
                href={COMPANY_INFO.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/5 hover:bg-cyan-500 rounded-lg flex items-center justify-center transition-colors duration-200"
                aria-label="YouTube"
              >
                <Youtube size={16} className="text-gray-300" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3 mb-6">
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-200"
              >
                <Mail size={14} className="text-cyan-500 shrink-0" />
                {COMPANY_INFO.email}
              </a>
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-200"
              >
                <Phone size={14} className="text-cyan-500 shrink-0" />
                {COMPANY_INFO.phone}
              </a>
            </div>

            {/* Newsletter */}
            <h3 className="text-white font-semibold mb-3">Newsletter</h3>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-white/5 border border-white/10 text-white text-sm rounded-lg px-3 py-2 focus:outline-none focus:border-cyan-500 placeholder-gray-500"
              />
              <button className="bg-cyan-500 hover:bg-cyan-400 text-white text-sm px-3 py-2 rounded-lg transition-colors duration-200 font-medium whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} CodexUg. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-200">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
