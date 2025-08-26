"use client";
import { motion } from "framer-motion";
import {
  FiZap,
  FiShield,
  FiLayers,
  FiCpu,
  FiGlobe,
  FiBarChart2,
  FiCheck,
} from "react-icons/fi";

export default function FeaturesPage() {
  const features = [
    {
      title: "Blazing Performance",
      desc: "Optimized rendering and smart caching deliver instant, fluid interactions.",
      icon: FiZap,
      points: ["SSR + ISR", "Edge-ready"],
    },
    {
      title: "Enterprise-grade Security",
      desc: "Hardened defaults, role-based access, and encrypted data in-flight and at-rest.",
      icon: FiShield,
      points: ["RBAC", "OWASP-ready"],
    },
    {
      title: "Modular Architecture",
      desc: "Composable building blocks so teams ship features independently and safely.",
      icon: FiLayers,
      points: ["Plug-and-play", "Type-safe"],
    },
    {
      title: "AI-Powered",
      desc: "Intelligent defaults and insights that adapt to your product and users.",
      icon: FiCpu,
      points: ["Insights", "Automation"],
    },
    {
      title: "Global By Default",
      desc: "Multi-region deploys and CDN acceleration keep latency low worldwide.",
      icon: FiGlobe,
      points: ["i18n", "CDN"],
    },
    {
      title: "Actionable Analytics",
      desc: "Real-time metrics with privacy by design to inform confident decisions.",
      icon: FiBarChart2,
      points: ["Realtime", "Privacy-first"],
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-gray-200 px-6">
      {/* Hero */}
      <section className="max-w-6xl mx-auto pt-20 md:pt-28 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mx-auto max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Features that help you build, ship, and scale
          </h1>
          <p className="mt-5 text-base md:text-lg text-gray-400 leading-relaxed">
            A thoughtfully designed toolkit focused on velocity, reliability,
            and delightful developer experience—without compromising on security
            or performance.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <a
              href="/get-started"
              className="px-5 py-3 rounded-full bg-gray-100 text-gray-900 hover:bg-white transition shadow-lg shadow-black/30"
            >
              Get started
            </a>
            <a
              href="/docs"
              className="px-5 py-3 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 backdrop-blur transition"
            >
              Read docs
            </a>
          </div>
        </motion.div>
      </section>

      {/* Highlights */}
      <section className="max-w-6xl mx-auto mt-14 grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { label: "Avg. faster builds", value: "3.2×" },
          { label: "Uptime last 12 mo", value: "99.98%" },
          { label: "Global regions", value: "25+" },
        ].map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            className="rounded-xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur"
          >
            <div className="text-3xl font-bold">{stat.value}</div>
            <div className="mt-1 text-sm text-gray-400">{stat.label}</div>
          </motion.div>
        ))}
      </section>

      {/* Feature Grid */}
      <section className="max-w-6xl mx-auto mt-16">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={item}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:border-white/20"
            >
              <div className="absolute inset-px rounded-[15px] bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition" />
              <div className="relative">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 border border-white/10">
                    <f.icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-lg font-semibold">{f.title}</h3>
                </div>
                <p className="mt-3 text-sm text-gray-400 leading-relaxed">
                  {f.desc}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {f.points.map((p) => (
                    <span
                      key={p}
                      className="text-xs rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-gray-300"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Developer-centric section */}
      <section className="max-w-6xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
        >
          <h3 className="text-2xl font-semibold">Built for developers</h3>
          <p className="mt-3 text-sm text-gray-400">
            Spend more time building features and less on plumbing. Everything
            is type-safe, documented, and production-hardened.
          </p>
          <ul className="mt-5 space-y-3">
            {[
              "End-to-end type safety",
              "First-class DX: hot reload, source maps, templates",
              "Scalable patterns and batteries-included tooling",
            ].map((i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-0.5 rounded-md bg-emerald-400/20 p-1.5 text-emerald-300">
                  <FiCheck className="h-4 w-4" />
                </span>
                <span className="text-sm text-gray-300">{i}</span>
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
        >
          <h3 className="text-2xl font-semibold">Zero to production</h3>
          <p className="mt-3 text-sm text-gray-400">
            From local dev to global deploys in minutes. Built-in best practices
            that scale with your team.
          </p>
          <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
            {[
              "CLI tooling",
              "Env management",
              "Preview deploys",
              "Role policies",
            ].map((k) => (
              <div
                key={k}
                className="rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-gray-300"
              >
                {k}
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto mt-20 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-r from-white/10 to-transparent p-8 md:p-10"
        >
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-semibold">
              Ready to build something great?
            </h3>
            <p className="mt-3 text-sm text-gray-300 max-w-2xl">
              Jump into the docs or spin up a new project and experience the
              productivity boost firsthand.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/get-started"
                className="px-5 py-3 rounded-full bg-white text-gray-900 hover:bg-gray-100 transition shadow"
              >
                Start now
              </a>
              <a
                href="/community"
                className="px-5 py-3 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 backdrop-blur transition"
              >
                Join the community
              </a>
            </div>
          </div>
          <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
        </motion.div>
      </section>
    </div>
  );
}
