"use client";
import { motion } from "framer-motion";

import Magnetic from "../gsap/Magnetic";

export default function FeatureOverview() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-gray-200 px-6">
      <motion.div className="max-w-6xl w-full">
        <div className="text-center" data-reveal="up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Feature highlights
          </h2>
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
            Built for real-world workloads: reliable, secure, and
            developer-first.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Privacy-first analytics",
              desc: "Collect just what you need with built-in sanitization.",
            },
            {
              title: "One-line setup",
              desc: "Drop-in SDKs and start streaming events instantly.",
            },
            {
              title: "Edge-ready",
              desc: "Low-latency ingest and global availability zones.",
            },
          ].map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
              data-reveal="up"
            >
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-400">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Magnetic>
            <button className="px-6 py-3 rounded-full bg-white text-gray-900 hover:bg-gray-100 transition shadow">
              Explore features
            </button>
          </Magnetic>
        </div>
      </motion.div>
    </section>
  );
}
