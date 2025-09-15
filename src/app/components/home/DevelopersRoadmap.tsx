"use client";
import { motion } from "framer-motion";

import Magnetic from "../gsap/Magnetic";

export default function DevelopersRoadmap() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-gray-200 px-6">
      <motion.div className="max-w-6xl w-full">
        <div className="text-center" data-reveal="up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Developer roadmap
          </h2>
          <p className="text-lg md:text-xl text-gray-400">
            What we shipped, what we are shipping, and what&apos;s next.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Now",
              items: [
                "MCP event ingest",
                "Privacy filters",
                "Self-hosted Docker",
              ],
            },
            {
              title: "Next",
              items: ["Query UI", "Anomaly alerts", "SDK docs revamp"],
            },
            {
              title: "Later",
              items: ["SLO dashboards", "Artifact storage", "AI insights"],
            },
          ].map((col, i) => (
            <div
              key={col.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
              data-reveal="up"
              data-delay={`${i * 0.05}`}
            >
              <h3 className="text-xl font-semibold">{col.title}</h3>
              <ul className="mt-4 space-y-2 text-sm text-gray-300">
                {col.items.map((it) => (
                  <li
                    key={it}
                    className="rounded-lg border border-white/10 bg-black/20 px-3 py-2"
                  >
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Magnetic>
            <a
              className="px-6 py-3 rounded-full bg-white text-gray-900 hover:bg-gray-100 transition shadow"
              href="#"
            >
              Open full roadmap
            </a>
          </Magnetic>
        </div>
      </motion.div>
    </section>
  );
}
