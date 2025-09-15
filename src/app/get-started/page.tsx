"use client";
import Magnetic from "../components/gsap/Magnetic";

export default function GetStartedPage() {
  const steps = [
    {
      id: 1,
      title: "Create Your Account",
      description:
        "Sign up for a free account to get started with our platform.",
      details:
        "Fill out the registration form with your basic information. You'll receive a confirmation email to verify your account.",
      estimatedTime: "2 minutes",
    },
    {
      id: 2,
      title: "Choose Your Plan",
      description: "Select the plan that best fits your needs and budget.",
      details:
        "We offer various plans from free to enterprise. You can always upgrade or downgrade later as your needs change.",
      estimatedTime: "5 minutes",
    },
    {
      id: 3,
      title: "Set Up Your Project",
      description:
        "Configure your first project with our easy-to-use setup wizard.",
      details:
        "Follow the guided setup process to configure your project settings, integrations, and initial configuration.",
      estimatedTime: "10 minutes",
    },
    {
      id: 4,
      title: "Start Building",
      description: "Begin creating and deploying your applications.",
      details:
        "Use our intuitive interface to start building your first project. Access tutorials and documentation for guidance.",
      estimatedTime: "15 minutes",
    },
  ];

  const resources = [
    {
      title: "Documentation",
      description: "Comprehensive guides and API references",
      link: "/docs",
    },
    {
      title: "Video Tutorials",
      description: "Step-by-step video guides for beginners",
      link: "/tutorials",
    },
    {
      title: "Community Forum",
      description: "Get help from our community of experts",
      link: "/community",
    },
    {
      title: "Support Team",
      description: "24/7 support for all your questions",
      link: "/support",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-20 md:pt-28">
        <div className="text-center mb-16" data-reveal="up">
          <h1 className="text-4xl md:text-6xl font-bold">Get Started</h1>
          <p className="mt-4 text-base md:text-lg text-gray-400 max-w-3xl mx-auto">
            Follow these simple steps to be up and running in minutes.
          </p>
        </div>

        {/* Steps */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Getting started steps
          </h2>
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={step.id} className="relative">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-8 top-16 w-0.5 h-8 bg-white/10"></div>
                )}

                <div className="flex items-start space-x-6">
                  {/* Step number */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-white text-gray-900 rounded-full flex items-center justify-center font-bold text-xl">
                      {step.id}
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className="flex-1 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
                    data-reveal="up"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-semibold">{step.title}</h3>
                      <span className="text-sm text-gray-400 bg-black/30 px-2 py-1 rounded">
                        {step.estimatedTime}
                      </span>
                    </div>
                    <p className="text-gray-300 mb-3 font-medium">
                      {step.description}
                    </p>
                    <p className="text-gray-400">{step.details}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Start Options */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Quick start options
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur text-center"
              data-reveal="up"
            >
              <h3 className="text-2xl font-bold mb-4">Free trial</h3>
              <p className="text-gray-400 mb-6">
                Explore all features without commitment.
              </p>
              <Magnetic>
                <a
                  className="inline-block px-6 py-3 rounded-lg bg-white text-gray-900 hover:bg-gray-100 transition"
                  href="#"
                >
                  Start free trial
                </a>
              </Magnetic>
            </div>

            <div
              className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur text-center"
              data-reveal="up"
              data-delay="0.1"
            >
              <h3 className="text-2xl font-bold mb-4">Demo account</h3>
              <p className="text-gray-400 mb-6">
                See Shinzo in action with a pre-configured demo.
              </p>
              <Magnetic>
                <a
                  className="inline-block px-6 py-3 rounded-lg border border-white/15 bg-white/5 hover:bg-white/10 transition"
                  href="#"
                >
                  Launch demo
                </a>
              </Magnetic>
            </div>
          </div>
        </div>

        {/* Resources */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Helpful resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <div
                key={index}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
                data-reveal="up"
              >
                <h3 className="text-lg font-semibold mb-2">{resource.title}</h3>
                <p className="text-gray-400 mb-4">{resource.description}</p>
                <a
                  className="text-indigo-300 hover:text-indigo-200 font-medium"
                  href="#"
                >
                  Learn more →
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div
          className="text-center rounded-2xl border border-white/10 bg-gradient-to-r from-white/10 to-transparent p-8 md:p-10"
          data-reveal="up"
        >
          <h2 className="text-2xl md:text-3xl font-semibold">
            Ready to begin?
          </h2>
          <p className="mt-2 text-sm text-gray-300">
            Join thousands of users who already started.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <Magnetic>
              <a
                className="px-6 py-3 rounded-full bg-white text-gray-900 hover:bg-gray-100 transition"
                href="/signup"
              >
                Create account
              </a>
            </Magnetic>
            <Magnetic>
              <a
                className="px-6 py-3 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 transition"
                href="/help"
              >
                Contact sales
              </a>
            </Magnetic>
          </div>
        </div>
      </div>
    </div>
  );
}
