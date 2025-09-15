"use client";
import { motion } from "framer-motion";

import Magnetic from "../gsap/Magnetic";

export default function GettingStarted() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-gray-200 px-6">
      <motion.div className="max-w-6xl w-full">
        <div className="text-center" data-reveal="up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">⚙️ Setup</h2>
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
            Install the SDK, set a token, and start observing in minutes.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Install", desc: "npm i @shinzo/sdk" },
            { title: "Configure", desc: "SHINZO_TOKEN=..." },
            { title: "Instrument", desc: "shinzo.track('event')" },
          ].map((s, i) => (
            <div
              key={s.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
              data-reveal="up"
              data-delay={`${i * 0.05}`}
            >
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-400">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Magnetic>
            <a
              className="px-6 py-3 rounded-full bg-white text-gray-900 hover:bg-gray-100 transition shadow"
              href="/docs"
            >
              View setup guide
            </a>
          </Magnetic>
        </div>
      </motion.div>
    </section>
  );
}
