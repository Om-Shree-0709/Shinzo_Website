"use client";
import { motion } from "framer-motion";
import { FaGoogle, FaLinkedin } from "react-icons/fa";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-gray-200 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-md bg-gray-800/60 backdrop-blur-xl rounded-2xl shadow-2xl p-8 space-y-8"
      >
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white">Welcome Back</h2>
          <p className="mt-2 text-gray-400">
            New here?{" "}
            <a
              href="/signup"
              className="text-indigo-400 hover:text-indigo-300 font-semibold"
            >
              Create an account
            </a>
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              placeholder="Enter your email"
              className="mt-2 w-full rounded-xl bg-gray-900 border border-gray-700 px-4 py-3 text-gray-200 placeholder-gray-500 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-300"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              placeholder="Enter your password"
              className="mt-2 w-full rounded-xl bg-gray-900 border border-gray-700 px-4 py-3 text-gray-200 placeholder-gray-500 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div className="flex items-center justify-between">
            <a
              href="/forgot-password"
              className="text-sm text-indigo-400 hover:text-indigo-300"
            >
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 text-white font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 shadow-md transition-all duration-200"
          >
            Log In
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center space-x-2">
          <div className="h-px flex-1 bg-gray-700" />
          <span className="text-gray-400 text-sm">Or continue with</span>
          <div className="h-px flex-1 bg-gray-700" />
        </div>

        {/* Social login */}
        <div className="grid grid-cols-2 gap-4">
          <button className="flex items-center justify-center gap-2 py-3 rounded-xl border border-gray-700 bg-gray-900 hover:bg-gray-700 transition">
            <FaGoogle className="text-red-500 text-lg" />
            <span className="text-sm font-medium text-gray-300">Google</span>
          </button>
          <button className="flex items-center justify-center gap-2 py-3 rounded-xl border border-gray-700 bg-gray-900 hover:bg-gray-700 transition">
            <FaLinkedin className="text-sky-400 text-lg" />
            <span className="text-sm font-medium text-gray-300">LinkedIn</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
}
