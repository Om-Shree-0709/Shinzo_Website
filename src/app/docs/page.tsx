"use client";
import Magnetic from "../components/gsap/Magnetic";

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-gray-200">
      <section className="max-w-6xl mx-auto px-6 pt-20 md:pt-28">
        <div className="text-center" data-reveal="up">
          <h1 className="text-4xl md:text-6xl font-bold">Documentation</h1>
          <p className="mt-4 text-base md:text-lg text-gray-400 max-w-3xl mx-auto">
            Everything you need to build, integrate, and ship with confidence.
            Explore guides, API references, and best practices.
          </p>
          <div
            className="mt-8 flex items-center justify-center gap-3"
            data-reveal="up"
            data-delay="0.1"
          >
            <Magnetic>
              <a
                href="#guides"
                className="px-5 py-3 rounded-full bg-white text-gray-900 hover:bg-gray-100 transition shadow"
              >
                Read guides
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="#api"
                className="px-5 py-3 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 backdrop-blur transition"
              >
                API reference
              </a>
            </Magnetic>
          </div>
        </div>
      </section>

      <section
        id="guides"
        className="max-w-6xl mx-auto px-6 mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {[
          {
            title: "Getting started",
            desc: "Install, configure, and make your first request.",
          },
          {
            title: "SDKs",
            desc: "Use official clients for Node, Python, and Go.",
          },
          {
            title: "Auth",
            desc: "Secure access with API keys and role policies.",
          },
          {
            title: "Events",
            desc: "Ingest and query usage events with filters.",
          },
          { title: "Webhooks", desc: "React to product events in real time." },
          {
            title: "Self-hosting",
            desc: "Deploy with Docker and environment templates.",
          },
        ].map((g) => (
          <div
            key={g.title}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            data-reveal="up"
          >
            <h3 className="text-lg font-semibold">{g.title}</h3>
            <p className="mt-2 text-sm text-gray-400">{g.desc}</p>
            <a
              href="#"
              className="mt-4 inline-block text-sm text-indigo-300 hover:text-indigo-200"
            >
              Open guide →
            </a>
          </div>
        ))}
      </section>

      <section
        id="api"
        className="max-w-6xl mx-auto px-6 mt-20 grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <div
          className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          data-reveal="right"
        >
          <h3 className="text-2xl font-semibold">REST API</h3>
          <p className="mt-3 text-sm text-gray-400">
            Structured endpoints for events, projects, and tokens.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-gray-300">
            <li>POST /v1/events</li>
            <li>GET /v1/projects</li>
            <li>POST /v1/tokens</li>
          </ul>
        </div>
        <div
          className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          data-reveal="left"
        >
          <h3 className="text-2xl font-semibold">Webhooks</h3>
          <p className="mt-3 text-sm text-gray-400">
            Receive callbacks for key events like errors and thresholds.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-gray-300">
            <li>event.created</li>
            <li>error.triggered</li>
            <li>threshold.breached</li>
          </ul>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 mt-20 mb-24">
        <div
          className="rounded-2xl border border-white/10 bg-gradient-to-r from-white/10 to-transparent p-8 md:p-10"
          data-reveal="up"
        >
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold">
                Have questions?
              </h3>
              <p className="mt-2 text-sm text-gray-300">
                Ask in the community or contact support.
              </p>
            </div>
            <div className="flex gap-3">
              <Magnetic>
                <a
                  href="/community"
                  className="px-5 py-3 rounded-full bg-white text-gray-900 hover:bg-gray-100 transition shadow"
                >
                  Community
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href="/help"
                  className="px-5 py-3 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 backdrop-blur transition"
                >
                  Support
                </a>
              </Magnetic>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
