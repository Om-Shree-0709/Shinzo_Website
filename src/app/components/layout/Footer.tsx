"use client";

import Link from "next/link";
import Image from "next/image";
import { FaTwitter, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

interface FooterLink {
  href: string;
  label: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const footerSections: FooterSection[] = [
  {
    title: "Product",
    links: [
      { href: "/features", label: "Features" },
      { href: "/pricing", label: "Pricing" },
      { href: "/get-started", label: "Get Started" },
    ],
  },
  {
    title: "Support",
    links: [
      { href: "/community", label: "Community" },
      { href: "/blog", label: "Blog" },
      { href: "#", label: "Contact" },
    ],
  },
];

const socialLinks = [
  { name: "Twitter", href: "#", icon: FaTwitter },
  { name: "GitHub", href: "#", icon: FaGithub },
];

export default function Footer() {
  return (
    <footer
      className="bg-gradient-to-br from-gray-900 via-black to-gray-800 border-t border-gray-700/40"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="col-span-1 md:col-span-2"
          >
            <div className="mb-4">
              <Image
                src="/logo.png"
                alt="Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Your company description goes here. This is a placeholder for the
              company mission and vision.
            </p>
            <div className="flex space-x-5">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                    aria-label={social.name}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon className="h-6 w-6" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Footer Sections */}
          {footerSections.map((section, idx) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-10 pt-6 border-t border-gray-700/40 text-center">
          <p className="text-gray-500 text-sm">
            © 2024 <span className="text-gray-300">[Company Name]</span>. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
