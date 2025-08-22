"use client";
import { motion } from "framer-motion";

interface SetupStep {
  id: number;
  title: string;
  description: string;
  codeBlocks?: {
    label: string;
    code: string;
  }[];
}

const setupSteps: SetupStep[] = [
  {
    id: 1,
    title: "Install & Use in Your Own MCP Server",
    description:
      "Add Shinzo to your MCP server project and instrument it with telemetry capabilities.",
    codeBlocks: [
      {
        label: "Installation",
        code: `pnpm add @shinzolabs/instrumentation-mcp
# or
npm install @shinzolabs/instrumentation-mcp`,
      },
    ],
  },
  {
    id: 2,
    title: "Local Development & Testing",
    description: "Clone the repo and install dependencies:",
    codeBlocks: [
      {
        label: "Clone and Setup",
        code: `git clone https://github.com/shinzo-labs/shinzo-ts.git
cd shinzo
pnpm install`,
      },
      {
        label: "Build the package:",
        code: "pnpm build",
      },
      {
        label: "Run the test suite:",
        code: "pnpm test",
      },
      {
        label:
          "You can also run specific test scripts (see package.json for all options):",
        code: `pnpm test:unit    # Run only unit tests
pnpm test:integration  # Run only integration tests
pnpm lint         # Lint the codebase`,
      },
    ],
  },
];

export default function GettingStarted() {
  return (
    <section
      className="bg-secondary py-20"
      aria-labelledby="getting-started-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            id="getting-started-title"
            className="text-3xl md:text-4xl font-bold text-accent mb-4"
          >
            ⚙️ Setup
          </h2>
          <p className="text-xl text-accent/80 max-w-3xl mx-auto">
            Get started with Shinzo SDK in just a few simple steps. Follow the
            guide below to integrate telemetry into your MCP server.
          </p>
        </div>

        <div className="space-y-20">
          {setupSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
            >
              {/* Left Column - Text Content */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary text-accent rounded-full flex items-center justify-center font-bold text-xl">
                    {step.id}
                  </div>
                  <h3 className="text-2xl font-bold text-accent">
                    {step.title}
                  </h3>
                </div>

                <p className="text-lg text-accent/80 leading-relaxed">
                  {step.description}
                </p>

                {/* Text labels for each code block */}
                {step.codeBlocks && (
                  <div className="space-y-4">
                    {step.codeBlocks.map((block, blockIndex) => (
                      <div
                        key={blockIndex}
                        className="flex items-center space-x-3"
                      >
                        <span className="text-sm text-accent font-medium">
                          [{blockIndex + 1}]: {block.label}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Additional Info for Step 1 */}
                {step.id === 1 && (
                  <div className="p-4 bg-primary/30 rounded-lg border border-accent/20">
                    <p className="text-accent text-sm">
                      See{" "}
                      <a
                        href="https://github.com/shinzo-labs/shinzo-ts/blob/main/packages/instrumentation-mcp/examples/basic-usage.ts"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:text-accent/80 underline font-medium"
                      >
                        packages/instrumentation-mcp/examples/basic-usage.ts
                      </a>{" "}
                      for a full working example.
                    </p>
                  </div>
                )}
              </div>

              {/* Right Column - Code Blocks */}
              <div className="space-y-4">
                {step.codeBlocks &&
                  step.codeBlocks.map((block, blockIndex) => (
                    <div
                      key={blockIndex}
                      className="bg-primary rounded-xl shadow-sm border border-accent/20 overflow-hidden h-32"
                    >
                      <div className="bg-primary/80 px-4 py-2 border-b border-accent/20">
                        <h4 className="text-sm font-semibold text-accent">
                          Terminal
                        </h4>
                      </div>
                      <div className="p-4 h-full flex items-center">
                        <div className="bg-primary rounded-lg p-4 overflow-x-auto w-full">
                          <pre className="text-accent font-mono text-sm">
                            <code>{block.code}</code>
                          </pre>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-20"
        >
          <div className="bg-primary/30 p-8 rounded-xl border border-accent/20">
            <h3 className="text-2xl font-bold text-accent mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-accent/80 mb-6 max-w-2xl mx-auto">
              Follow the steps above to integrate Shinzo into your MCP server
              and start collecting telemetry data.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/shinzo-labs/shinzo-ts"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary text-accent px-8 py-3 rounded-lg font-semibold hover:bg-secondary/80 transition-colors inline-flex items-center justify-center"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                View on GitHub
              </a>
              <a
                href="/docs"
                className="bg-primary text-accent px-8 py-3 rounded-lg font-semibold hover:bg-primary/80 transition-colors"
              >
                Read Documentation
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
