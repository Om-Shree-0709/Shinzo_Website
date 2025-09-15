"use client";
import { motion } from "framer-motion";
import Magnetic from "../components/gsap/Magnetic";
import { FaCheck } from "react-icons/fa";

const plans = [
  {
    name: "Self-Hosted",
    price: "Free",
    description: "Complete control over your data and infrastructure",
    features: [
      "Usage data collection",
      "GDPR/CPRA compliant by default",
      "Configurable data sanitization",
      "Self-hosted infrastructure",
      "Full source code access",
      "Community support",
    ],
    highlight: false,
  },
  {
    name: "Managed Cloud",
    price: "Contact Us",
    description: "We handle the infrastructure, you get the insights",
    features: [
      "Everything in Self-Hosted",
      "Cloud-hosted infrastructure",
      "Advanced analytics features",
      "30-day data retention",
      "Live customer support",
      "Custom integrations",
    ],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Contact Us",
    description: "Advanced compliance and white-glove service",
    features: [
      "Everything in Managed Cloud",
      "MCP server development support",
      "Custom data retention policies",
      "Priority technical support",
      "Security & compliance reporting",
      "Custom feature development",
    ],
    highlight: false,
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-gray-200 px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-6xl w-full text-center"
      >
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Pricing</h1>
        <p className="text-lg md:text-xl text-gray-400 leading-relaxed mb-12 max-w-2xl mx-auto">
          Flexible deployment options designed to fit your needs — whether you
          want full control or a managed experience.
        </p>

        {/* Pricing Grid */}
        <div className="grid gap-8 md:grid-cols-3" data-reveal="up">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
              className={`rounded-2xl shadow-xl p-8 flex flex-col justify-between border ${
                plan.highlight
                  ? "bg-gradient-to-br from-indigo-500 to-indigo-400 text-white border-indigo-300 scale-105"
                  : "bg-gray-900/40 border-gray-700"
              }`}
            >
              {/* Plan Name & Price */}
              <div>
                <h2 className="text-2xl font-bold mb-2">{plan.name}</h2>
                <p className="text-3xl font-extrabold mb-4">{plan.price}</p>
                <p className="text-gray-300 mb-6">{plan.description}</p>

                {/* Features */}
                <ul className="space-y-3 text-left">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <FaCheck
                        className={`h-5 w-5 ${
                          plan.highlight ? "text-white" : "text-indigo-300"
                        }`}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <div className="mt-8">
                <Magnetic>
                  <button
                    className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 cursor-pointer ${
                      plan.highlight
                        ? "bg-white text-black hover:bg-gray-200"
                        : "bg-indigo-500 hover:bg-indigo-400 text-white"
                    }`}
                  >
                    {plan.highlight ? "Get in Touch" : "Choose Plan"}
                  </button>
                </Magnetic>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
