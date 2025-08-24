"use client";
import { motion } from "framer-motion";

export default function HelpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-gray-200 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-2xl text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Help & Support</h1>
        <p className="text-lg md:text-xl text-gray-400 leading-relaxed mb-8">
          Need assistance? This is the placeholder for the Help page, where
          guides, FAQs, and support options will be available.
        </p>
        <div className="flex justify-center">
          <button className="px-6 py-3 rounded-full bg-gray-800 hover:bg-gray-700 transition duration-300 ease-in-out shadow-lg hover:shadow-xl">
            Get Help
          </button>
        </div>
      </motion.div>
    </div>
  );
}
