"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

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
    // Fetch GitHub stars
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
      className="fixed top-0 left-0 right-0 z-50 w-full animate-slide-down"
      role="navigation"
      aria-label="Main navigation"
    >
      <div
        className="w-full px-4 sm:px-6 lg:px-8"
        style={{
          background: "rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
        }}
      >
        <div className="flex justify-between items-center h-16 max-w-7xl mx-auto">
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
              <span className="text-xl font-semibold text-white">Shinzo</span>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigationItems.map((item, index) => (
                <div key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center space-x-1 group"
                  >
                    <span>{item.label}</span>
                    <svg
                      className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors group-hover:rotate-180 duration-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </Link>
                </div>
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
                className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 px-3 py-2 rounded-lg transition-colors hover:scale-105"
              >
                <svg
                  className="w-5 h-5 text-gray-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <span className="text-sm font-medium text-gray-300">
                  {stars || "..."}
                </span>
              </a>

              {/* Auth buttons */}
              <div className="flex space-x-4">
                <div>
                  <Link
                    href="/login"
                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    Sign in
                  </Link>
                </div>
                <div>
                  <Link
                    href="/signup"
                    className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors border border-gray-600 hover:scale-105"
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
