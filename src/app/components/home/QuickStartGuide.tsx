"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const steps = [
  {
    id: 1,
    title: "[Step 1]",
    description:
      "Description of the first step to get started with the product.",
    action: "Get Started",
  },
  {
    id: 2,
    title: "[Step 2]",
    description: "Description of the second step in the quick start process.",
    action: "Configure",
  },
  {
    id: 3,
    title: "[Step 3]",
    description: "Description of the third step to complete the setup.",
    action: "Launch",
  },
];

export default function QuickStartGuide() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-gray-200 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-5xl w-full"
      >
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            ⚡ Quick Start Guide
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Get up and running in minutes with this placeholder step-by-step
            guide. Each step will later be filled with real product
            instructions.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {steps.map((step) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: step.id * 0.15 }}
              className="bg-gray-800/60 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-gray-600 transition-all shadow-md hover:shadow-lg"
            >
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center font-semibold mr-3">
                  {step.id}
                </div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
              </div>
              <p className="text-gray-400 mb-4">{step.description}</p>
              <button className="text-indigo-400 hover:text-indigo-300 font-medium">
                {step.action} →
              </button>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/get-started"
            className="px-8 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 transition-colors text-lg font-semibold shadow-lg"
          >
            Start Your Journey
          </Link>
          <p className="text-gray-400 mt-4">
            Need help? Check out our{" "}
            <Link href="/docs" className="text-indigo-400 hover:underline">
              documentation
            </Link>{" "}
            or{" "}
            <Link href="/community" className="text-indigo-400 hover:underline">
              community
            </Link>
            .
          </p>
        </div>
      </motion.div>
    </section>
  );
}
