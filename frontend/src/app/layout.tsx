import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export const metadata: Metadata = {
  title: {
    default: "CodexUg - Empowering Businesses Through Technology",
    template: "%s | CodexUg",
  },
  description:
    "CodexUg is Uganda's premier IT products and services company. We offer cybersecurity, cloud solutions, web development, IT consulting, and more.",
  keywords: [
    "IT services Uganda",
    "cybersecurity Uganda",
    "cloud solutions East Africa",
    "web development Kampala",
    "IT consulting Uganda",
    "CodexUg",
  ],
  authors: [{ name: "Mask o Kenneth", url: "https://linkedin.com/in/okeng-kenneth/" }],
  openGraph: {
    type: "website",
    locale: "en_UG",
    url: "https://codexug.com",
    siteName: "CodexUg",
    title: "CodexUg - Empowering Businesses Through Technology",
    description:
      "Uganda's premier IT products and services company providing cutting-edge technology solutions.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "CodexUg - IT Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CodexUg - Empowering Businesses Through Technology",
    description: "Uganda's premier IT products and services company.",
  },
  robots: {
    index: true,
    follow: true,
  },
  manifest: '/manifest.json',
};

export const viewport: Viewport = {
  themeColor: '#06B6D4',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#0A1628] text-white antialiased font-sans">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
