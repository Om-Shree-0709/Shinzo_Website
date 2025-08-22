import Link from "next/link";

interface Step {
  id: number;
  title: string;
  description: string;
  action: string;
}

const steps: Step[] = [
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
    <section className="bg-secondary py-20" aria-labelledby="quickstart-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            id="quickstart-title"
            className="text-3xl md:text-4xl font-bold text-accent mb-4"
          >
            Quick Start Guide
          </h2>
          <p className="text-xl text-accent/80 max-w-3xl mx-auto">
            Get up and running in minutes with our simple step-by-step guide.
            This section will help users understand how to start using your
            product.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={step.id} className="relative">
              <div className="bg-primary p-6 rounded-lg shadow-sm border border-accent/20 h-full">
                <div className="flex items-center mb-4">
                  <div
                    className="w-8 h-8 bg-secondary text-accent rounded-full flex items-center justify-center font-semibold mr-3"
                    aria-label={`Step ${step.id}`}
                  >
                    {step.id}
                  </div>
                  <h3 className="text-xl font-semibold text-accent">
                    {step.title}
                  </h3>
                </div>
                <p className="text-accent/80 mb-4">{step.description}</p>
                <button className="text-accent hover:text-accent/80 font-medium">
                  {step.action} →
                </button>
              </div>

              {/* Connector line */}
              {index < steps.length - 1 && (
                <div
                  className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-accent/30 transform -translate-y-1/2"
                  aria-hidden="true"
                ></div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/get-started"
            className="bg-secondary text-accent px-8 py-3 rounded-lg text-lg font-semibold hover:bg-secondary/80 transition-colors inline-block"
          >
            Start Your Journey
          </Link>
          <p className="text-accent/80 mt-4">
            Need help? Check out our{" "}
            <Link href="/docs" className="text-accent hover:underline">
              documentation
            </Link>{" "}
            or{" "}
            <Link href="/community" className="text-accent hover:underline">
              community
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
