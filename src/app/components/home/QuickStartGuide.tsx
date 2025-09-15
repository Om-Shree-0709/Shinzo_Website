"use client";
import Magnetic from "../gsap/Magnetic";

export default function QuickStartGuide() {
  const steps = [
    { id: 1, title: "Install SDK", desc: "npm i @shinzo/sdk" },
    { id: 2, title: "Set token", desc: "export SHINZO_TOKEN=..." },
    { id: 3, title: "Track event", desc: "shinzo.track('launch')" },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-gray-200 px-6">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-12" data-reveal="up">
          <h2 className="text-4xl md:text-5xl font-bold">⚡ Quick start</h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Three steps to your first insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {steps.map((s, i) => (
            <div
              key={s.id}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
              data-reveal="up"
              data-delay={`${i * 0.05}`}
            >
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-white text-gray-900 rounded-full flex items-center justify-center font-semibold mr-3">
                  {s.id}
                </div>
                <h3 className="text-xl font-semibold">{s.title}</h3>
              </div>
              <p className="text-gray-400">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center" data-reveal="up" data-delay="0.1">
          <div className="flex flex-wrap gap-3 justify-center">
            <Magnetic>
              <a
                href="/get-started"
                className="px-6 py-3 rounded-full bg-white text-gray-900 hover:bg-gray-100 transition shadow"
              >
                Start your journey
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="/docs"
                className="px-6 py-3 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 transition"
              >
                Read docs
              </a>
            </Magnetic>
          </div>
        </div>
      </div>
    </section>
  );
}
