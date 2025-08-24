"use client";
import { motion } from "framer-motion";

export default function GettingStarted() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-gray-200 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-3xl text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">⚙️ Setup</h2>
        <p className="text-lg md:text-xl text-gray-400 leading-relaxed mb-8">
          The Getting Started section will walk you through installation,
          configuration, and integration steps for Shinzo. Placeholder content
          will be replaced with real setup instructions and code examples.
        </p>
        <div className="flex justify-center">
          <button className="px-6 py-3 rounded-full bg-gray-800 hover:bg-gray-700 transition duration-300 ease-in-out shadow-lg hover:shadow-xl">
            View Setup Guide
          </button>
        </div>
      </motion.div>
    </section>
  );
}
