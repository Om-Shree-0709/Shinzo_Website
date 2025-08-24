"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";

interface NavItem {
  href: string;
  label: string;
}

const navigationItems: NavItem[] = [
  { href: "/features", label: "Features" },
  { href: "/company", label: "Company" },
  { href: "/resources", label: "Resources" },
  { href: "/help", label: "Help" },
  { href: "/docs", label: "Docs" },
  { href: "/pricing", label: "Pricing" },
];

export default function Navbar() {
  const [stars, setStars] = useState<string>("");

  useEffect(() => {
    const fetchStars = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/repos/shinzo-labs/shinzo-ts"
        );
        const data = await response.json();
        if (data.stargazers_count) {
          setStars(data.stargazers_count.toLocaleString());
        }
      } catch (error) {
        console.error("Failed to fetch GitHub stars:", error);
      }
    };

    fetchStars();
  }, []);

  return (
    <nav
      className="fixed top-5 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-7xl rounded-full shadow-lg animate-slide-down text-base"
      role="navigation"
      aria-label="Main navigation"
    >
      <div
        className="px-4 sm:px-6 lg:px-8 rounded-full"
        style={{
          background: "rgba(0, 0, 0, 0.3)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
        }}
      >
        <div className="flex justify-between items-center h-16">
          {/* Logo + Company Name */}
          <div className="flex-shrink-0 hover:scale-105 transition-transform duration-200">
            <Link
              href="/"
              className="flex items-center space-x-2"
              aria-label="Home"
            >
              <Image
                src="/logo.png"
                alt="Logo"
                width={40}
                height={40}
                className="h-10 w-auto"
                priority
              />
              <span className="text-lg font-semibold text-white">Shinzo</span>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium transition-colors relative group"
                >
                  {item.label}
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
                </Link>
              ))}
            </div>
          </div>

          {/* Right side buttons */}
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-4">
              {/* GitHub Stars */}
              <a
                href="https://github.com/shinzo-labs/shinzo-ts"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-full transition duration-300 ease-in-out hover:scale-105"
              >
                <FaGithub className="text-white text-2xl" />

                <span className="text-sm font-medium text-gray-300">
                  {stars || "..."}
                </span>
              </a>

              {/* Auth buttons */}
              <div className="flex space-x-3">
                <Link
                  href="/login"
                  className="bg-gray-700 hover:bg-gray-800 text-gray-300 px-5 py-2 rounded-full text-sm font-medium transition duration-300 ease-in-out border border-gray-600 hover:scale-105"
                >
                  Sign in
                </Link>
                <Link
                  href="/signup"
                  className="bg-gray-800 hover:bg-gray-700 text-white px-5 py-2 rounded-full text-sm font-medium transition duration-300 ease-in-out border border-gray-600 hover:scale-105"
                  style={{
                    background: "rgba(64, 64, 64, 0.8)",
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                  }}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              className="text-gray-300 hover:text-white p-2 hover:scale-110 transition-transform duration-200"
              aria-label="Toggle mobile menu"
              aria-expanded="false"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slide-down {
          animation: slide-down 0.6s ease-out;
        }
      `}</style>
    </nav>
  );
}
