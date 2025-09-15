"use client";
import Magnetic from "../components/gsap/Magnetic";

export default function ResourcesPage() {
  const cards = [
    {
      title: "Starter templates",
      desc: "Kickstart new projects with best-practice scaffolds.",
    },
    {
      title: "Examples",
      desc: "Production-grade patterns and recipes to copy/paste.",
    },
    {
      title: "Design kit",
      desc: "Figma libraries to keep product and docs aligned.",
    },
    {
      title: "Community",
      desc: "Plugins and snippets shared by the community.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-gray-200">
      <section className="max-w-6xl mx-auto px-6 pt-20 md:pt-28 text-center">
        <div data-reveal="up">
          <h1 className="text-4xl md:text-6xl font-bold">Resources</h1>
          <p className="mt-4 text-base md:text-lg text-gray-400 max-w-3xl mx-auto">
            A curated hub of templates, examples, and tools to accelerate your
            work.
          </p>
          <div className="mt-8" data-reveal="up" data-delay="0.1">
            <Magnetic>
              <a
                href="/docs"
                className="px-5 py-3 rounded-full bg-white text-gray-900 hover:bg-gray-100 transition shadow"
              >
                Explore docs
              </a>
            </Magnetic>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((c) => (
          <div
            key={c.title}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            data-reveal="up"
          >
            <h3 className="text-lg font-semibold">{c.title}</h3>
            <p className="mt-2 text-sm text-gray-400">{c.desc}</p>
            <a
              href="#"
              className="mt-4 inline-block text-sm text-indigo-300 hover:text-indigo-200"
            >
              Open →
            </a>
          </div>
        ))}
      </section>

      <section className="max-w-6xl mx-auto px-6 mt-20 mb-24">
        <div
          className="rounded-2xl border border-white/10 bg-gradient-to-r from-white/10 to-transparent p-8 md:p-10"
          data-reveal="up"
        >
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold">
                Can’t find what you need?
              </h3>
              <p className="mt-2 text-sm text-gray-300">
                Ask the community or reach out to support.
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
