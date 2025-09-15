"use client";
import Magnetic from "../components/gsap/Magnetic";

export default function HelpPage() {
  const faqs = [
    {
      q: "How do I install?",
      a: "Use our quickstart in docs or Docker compose.",
    },
    { q: "Is data private?", a: "Yes. Data is sanitized and never sold." },
    { q: "Can I self-host?", a: "Yes. We provide images and env templates." },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-gray-200">
      <section className="max-w-6xl mx-auto px-6 pt-20 md:pt-28 text-center">
        <div data-reveal="up">
          <h1 className="text-4xl md:text-6xl font-bold">Help & Support</h1>
          <p className="mt-4 text-base md:text-lg text-gray-400 max-w-3xl mx-auto">
            Guides, FAQs, and channels to get you unblocked fast.
          </p>
          <div className="mt-8" data-reveal="up" data-delay="0.1">
            <Magnetic>
              <a
                href="/docs"
                className="px-5 py-3 rounded-full bg-white text-gray-900 hover:bg-gray-100 transition shadow"
              >
                Read docs
              </a>
            </Magnetic>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        {faqs.map((f) => (
          <div
            key={f.q}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            data-reveal="up"
          >
            <h3 className="text-lg font-semibold">{f.q}</h3>
            <p className="mt-2 text-sm text-gray-400">{f.a}</p>
          </div>
        ))}
      </section>

      <section className="max-w-6xl mx-auto px-6 mt-20 mb-24">
        <div
          className="rounded-2xl border border-white/10 bg-gradient-to-r from-white/10 to-transparent p-8 md:p-10"
          data-reveal="up"
        >
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold">
                Still stuck?
              </h3>
              <p className="mt-2 text-sm text-gray-300">
                Reach us directly. We’re here to help.
              </p>
            </div>
            <Magnetic>
              <a
                href="mailto:support@example.com"
                className="px-5 py-3 rounded-full bg-white text-gray-900 hover:bg-gray-100 transition shadow"
              >
                Contact support
              </a>
            </Magnetic>
          </div>
        </div>
      </section>
    </div>
  );
}
