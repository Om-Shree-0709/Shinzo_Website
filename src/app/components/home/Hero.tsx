"use client";
import Link from "next/link";
import Typewriter from "typewriter-effect";

interface CTAButton {
  href: string;
  label: string;
  variant: "primary" | "secondary";
}

const ctaButtons: CTAButton[] = [
  {
    href: "/get-started",
    label: "Get Started",
    variant: "primary",
  },
  {
    href: "/features",
    label: "Learn More",
    variant: "secondary",
  },
];

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-labelledby="hero-title"
    >
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-sm scale-105"
        style={{
          backgroundImage: "url('/bg2.jpg')",
        }}
      ></div>

      {/* Dark Overlay for Contrast */}
      <div className="absolute inset-0 bg-black/15"></div>

      {/* Foreground Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-left animate-fade-in-up">
            <h1
              id="hero-title"
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              style={{
                animationDelay: "0.2s",
                animationFillMode: "both",
              }}
            >
              Complete Observability for MCP Servers
            </h1>
            <p
              className="text-xl text-gray-200 mb-8 max-w-2xl animate-slide-up"
              style={{
                animationDelay: "0.4s",
                animationFillMode: "both",
              }}
            >
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString(
                      "Get anonymous usage data and error tracking for your MCP servers. GDPR/CPRA compliant by default with configurable data sanitization and self-hosting options."
                    )
                    .pauseFor(1000)
                    .start();
                }}
                options={{
                  delay: 10,
                  cursor: "|",
                  cursorClassName: "text-white",
                }}
              />
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 animate-slide-up"
              style={{
                animationDelay: "0.6s",
                animationFillMode: "both",
              }}
            >
              {ctaButtons.map((button) => (
                <div key={button.href}>
                  <Link
                    href={button.href}
                    className={`px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 ${
                      button.variant === "primary"
                        ? "bg-white text-black hover:bg-gray-100 shadow-lg hover:shadow-xl"
                        : "border-2 border-white text-white hover:bg-white hover:text-black"
                    }`}
                  >
                    {button.label}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - YouTube Video */}
          <div className="relative animate-fade-in-right">
            <div className="relative w-full h-0 pb-[56.25%] rounded-2xl overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-300">
              <iframe
                src="https://www.youtube.com/embed/NHmjBIxz50w?start=2"
                title="Complete Observability for MCP Servers"
                className="absolute top-0 left-0 w-full h-full rounded-2xl"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                Watch Demo
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 0.6s ease-out;
        }

        .animate-fade-in-right {
          animation: fade-in-right 0.8s ease-out 0.3s both;
        }
      `}</style>
    </section>
  );
}
