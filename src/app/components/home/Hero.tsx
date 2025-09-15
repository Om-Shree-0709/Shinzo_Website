"use client";
import Link from "next/link";
import Typewriter from "typewriter-effect";

interface CTAButton {
  href: string;
  label: string;
  variant: "primary" | "secondary";
}

const ctaButtons: CTAButton[] = [
  { href: "/get-started", label: "Get Started", variant: "primary" },
  { href: "/features", label: "Learn More", variant: "secondary" },
];

export default function Hero() {
  return (
    <section
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-gray-200 px-6 py-16"
      aria-labelledby="hero-title"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-4 sm:px-6 lg:px-8">
        {/* Left Column - Text Content */}
        <div className="text-left" data-reveal="up" data-delay="0.05">
          <h1
            id="hero-title"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Complete Observability for MCP Servers
          </h1>
          <p
            className="text-xl text-gray-200 mb-8 max-w-2xl"
            data-reveal="up"
            data-delay="0.1"
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
            className="flex flex-col sm:flex-row gap-4"
            data-reveal="up"
            data-delay="0.15"
          >
            {ctaButtons.map((button) => (
              <Link
                key={button.href}
                href={button.href}
                className={`px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 ${
                  button.variant === "primary"
                    ? "bg-white text-black hover:bg-gray-100 shadow-lg hover:shadow-xl"
                    : "border-2 border-white text-white hover:bg-white hover:text-black"
                }`}
              >
                {button.label}
              </Link>
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
          <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm pointer-events-none">
            Watch Demo
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
