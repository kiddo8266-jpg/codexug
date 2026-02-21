import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { COMPANY_INFO } from "@/lib/data";
import { Mail, Phone, MapPin, Clock, Linkedin, Facebook, Twitter, Youtube } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with CodexUg. Contact us for IT services, product inquiries, or a free consultation.",
};

const businessHours = [
  { day: "Monday – Friday", hours: "8:00 AM – 6:00 PM" },
  { day: "Saturday", hours: "9:00 AM – 4:00 PM" },
  { day: "Sunday", hours: "Closed" },
];

const socialLinks = [
  { Icon: Linkedin, href: COMPANY_INFO.social.linkedin, label: "LinkedIn", color: "#0077B5" },
  { Icon: Facebook, href: COMPANY_INFO.social.facebook, label: "Facebook", color: "#1877F2" },
  { Icon: Twitter, href: COMPANY_INFO.social.twitter, label: "X / Twitter", color: "#1DA1F2" },
  { Icon: Youtube, href: COMPANY_INFO.social.youtube, label: "YouTube", color: "#FF0000" },
];

export default function ContactPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-[#060E1A] to-[#0A1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-cyan-400 text-sm font-semibold uppercase tracking-wider">Get In Touch</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
            Let&apos;s Start a Conversation
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Have a project in mind or want to learn more about our services?
            We&apos;d love to hear from you. Reach out today — the consultation is free.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              {/* Info Cards */}
              <div className="bg-[#0F1E35] border border-white/10 rounded-xl p-6 space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-cyan-500/10 rounded-xl flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs font-medium uppercase tracking-wider mb-1">Email</p>
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="text-white text-sm hover:text-cyan-400 transition-colors duration-200"
                    >
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-cyan-500/10 rounded-xl flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs font-medium uppercase tracking-wider mb-1">Phone</p>
                    <a
                      href={`tel:${COMPANY_INFO.phone}`}
                      className="text-white text-sm hover:text-cyan-400 transition-colors duration-200"
                    >
                      +256 {COMPANY_INFO.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-cyan-500/10 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs font-medium uppercase tracking-wider mb-1">Location</p>
                    <p className="text-white text-sm">Kampala, Uganda</p>
                    <p className="text-gray-400 text-xs">East Africa</p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-[#0F1E35] border border-white/10 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Clock size={18} className="text-cyan-400" />
                  <h3 className="text-white font-semibold">Business Hours</h3>
                </div>
                <div className="space-y-3">
                  {businessHours.map((item) => (
                    <div key={item.day} className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm">{item.day}</span>
                      <span className={`text-sm font-medium ${item.hours === "Closed" ? "text-red-400" : "text-cyan-400"}`}>
                        {item.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social */}
              <div className="bg-[#0F1E35] border border-white/10 rounded-xl p-6">
                <h3 className="text-white font-semibold mb-4">Follow Us</h3>
                <div className="grid grid-cols-2 gap-3">
                  {socialLinks.map(({ Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/40 rounded-lg px-3 py-2.5 transition-all duration-200 group"
                    >
                      <Icon size={16} className="text-gray-400 group-hover:text-cyan-400 transition-colors duration-200" />
                      <span className="text-gray-400 group-hover:text-white text-xs transition-colors duration-200">
                        {label}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-[#0F1E35] border border-white/10 rounded-xl p-8">
                <h2 className="text-white font-bold text-2xl mb-2">Send Us a Message</h2>
                <p className="text-gray-400 text-sm mb-6">
                  Fill out the form below and we&apos;ll get back to you within 24 hours.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="mt-12">
            <div className="bg-[#0F1E35] border border-white/10 rounded-xl overflow-hidden h-64 flex items-center justify-center">
              <div className="text-center">
                <MapPin size={32} className="text-cyan-400 mx-auto mb-3" />
                <p className="text-white font-semibold">CodexUg Headquarters</p>
                <p className="text-gray-400 text-sm">Kampala, Uganda</p>
                <a
                  href="https://maps.google.com/?q=Kampala,Uganda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-cyan-400 hover:text-cyan-300 text-sm transition-colors duration-200"
                >
                  View on Google Maps →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
