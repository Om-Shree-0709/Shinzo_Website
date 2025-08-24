"use client";
import { motion } from "framer-motion";

export default function FeatureOverview() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-gray-200 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-3xl text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Feature Overview
        </h2>
        <p className="text-lg md:text-xl text-gray-400 leading-relaxed mb-8">
          This section will highlight the core features of the product. Each
          feature will include an icon, a title, and a description to showcase
          its value.
        </p>
        <div className="flex justify-center">
          <button className="px-6 py-3 rounded-full bg-gray-800 hover:bg-gray-700 transition duration-300 ease-in-out shadow-lg hover:shadow-xl">
            Explore Features
          </button>
        </div>
      </motion.div>
    </section>
  );
}
