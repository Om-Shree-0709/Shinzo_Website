"use client";
import { motion } from "framer-motion";
import { FaGoogle, FaLinkedin } from "react-icons/fa";

export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-gray-200 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-lg bg-gray-800/60 backdrop-blur-xl rounded-2xl shadow-2xl p-8 space-y-8"
      >
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white">
            Create Your Account
          </h2>
          <p className="mt-2 text-gray-400">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-indigo-400 hover:text-indigo-300 font-semibold"
            >
              Log in
            </a>
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              required
              placeholder="First name"
              className="rounded-xl bg-gray-900 border border-gray-700 px-4 py-3 text-gray-200 placeholder-gray-500 focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="text"
              required
              placeholder="Last name"
              className="rounded-xl bg-gray-900 border border-gray-700 px-4 py-3 text-gray-200 placeholder-gray-500 focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <input
            type="email"
            required
            placeholder="Email"
            className="w-full rounded-xl bg-gray-900 border border-gray-700 px-4 py-3 text-gray-200 placeholder-gray-500 focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="password"
            required
            placeholder="Password"
            className="w-full rounded-xl bg-gray-900 border border-gray-700 px-4 py-3 text-gray-200 placeholder-gray-500 focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="password"
            required
            placeholder="Confirm password"
            className="w-full rounded-xl bg-gray-900 border border-gray-700 px-4 py-3 text-gray-200 placeholder-gray-500 focus:ring-2 focus:ring-indigo-500"
          />

          <div className="flex items-center">
            <input
              id="terms"
              type="checkbox"
              required
              className="h-4 w-4 text-indigo-500 rounded border-gray-600"
            />
            <label htmlFor="terms" className="ml-2 text-sm text-gray-400">
              I agree to the{" "}
              <a
                href="/terms"
                className="text-indigo-400 hover:text-indigo-300"
              >
                Terms
              </a>{" "}
              and{" "}
              <a
                href="/privacy"
                className="text-indigo-400 hover:text-indigo-300"
              >
                Privacy Policy
              </a>
            </label>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 text-white font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 shadow-md transition-all duration-200"
          >
            Sign Up
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center space-x-2">
          <div className="h-px flex-1 bg-gray-700" />
          <span className="text-gray-400 text-sm">Or continue with</span>
          <div className="h-px flex-1 bg-gray-700" />
        </div>

        {/* Social signup */}
        <div className="grid grid-cols-2 gap-4">
          <button className="flex items-center justify-center gap-2 py-3 rounded-xl border border-gray-700 bg-gray-900 hover:bg-gray-700 transition">
            <FaGoogle className="text-red-500 text-lg" />
            <span className="text-sm font-medium text-gray-300">Google</span>
          </button>
          <button className="flex items-center justify-center gap-2 py-3 rounded-xl border border-gray-700 bg-gray-900 hover:bg-gray-700 transition">
            <FaLinkedin className="text-sky-400 text-lg" />
            <span className="text-sm font-medium text-gray-300">Linkedin</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
}
