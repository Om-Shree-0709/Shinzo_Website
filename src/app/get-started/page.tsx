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
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get Started
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to begin your journey? Follow these simple steps to get up and
            running with our platform in minutes.
          </p>
        </div>

        {/* Steps */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Getting Started Steps
          </h2>
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={step.id} className="relative">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-8 top-16 w-0.5 h-8 bg-gray-300"></div>
                )}

                <div className="flex items-start space-x-6">
                  {/* Step number */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                      {step.id}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-gray-50 p-6 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-semibold text-gray-900">
                        {step.title}
                      </h3>
                      <span className="text-sm text-gray-500 bg-white px-2 py-1 rounded">
                        {step.estimatedTime}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-3 font-medium">
                      {step.description}
                    </p>
                    <p className="text-gray-600">{step.details}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Start Options */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Quick Start Options
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-primary-light p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-primary-dark mb-4">
                Free Trial
              </h3>
              <p className="text-gray-700 mb-6">
                Start with our free trial to explore all features without any
                commitment.
              </p>
              <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors">
                Start Free Trial
              </button>
            </div>

            <div className="bg-secondary-light p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-secondary-dark mb-4">
                Demo Account
              </h3>
              <p className="text-gray-700 mb-6">
                Try our platform with a pre-configured demo account to see it in
                action.
              </p>
              <button className="bg-secondary text-white px-8 py-3 rounded-lg font-semibold hover:bg-secondary-dark transition-colors">
                Launch Demo
              </button>
            </div>
          </div>
        </div>

        {/* Resources */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Helpful Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {resource.title}
                </h3>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <button className="text-primary hover:text-primary-dark font-medium">
                  Learn More →
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Begin?
          </h2>
          <p className="text-gray-600 mb-6">
            Join thousands of users who have already started their journey with
            us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors">
              Create Account
            </button>
            <button className="bg-gray-100 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
