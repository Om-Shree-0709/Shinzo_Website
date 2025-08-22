interface Feature {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const features: Feature[] = [
  {
    id: 1,
    title: "[Feature 1]",
    description:
      "Description of feature 1. This is a placeholder for the first main feature of your product.",
    icon: "🚀",
  },
  {
    id: 2,
    title: "[Feature 2]",
    description:
      "Description of feature 2. This is a placeholder for the second main feature of your product.",
    icon: "⚡",
  },
  {
    id: 3,
    title: "[Feature 3]",
    description:
      "Description of feature 3. This is a placeholder for the third main feature of your product.",
    icon: "🛡️",
  },
  {
    id: 4,
    title: "[Feature 4]",
    description:
      "Description of feature 4. This is a placeholder for the fourth main feature of your product.",
    icon: "📊",
  },
];

export default function FeatureOverview() {
  return (
    <section className="bg-secondary py-20" aria-labelledby="features-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            id="features-title"
            className="text-3xl md:text-4xl font-bold text-accent mb-4"
          >
            Feature Overview
          </h2>
          <p className="text-xl text-accent/80 max-w-3xl mx-auto">
            Discover the key features that make our product stand out. This
            section will showcase the main capabilities and benefits.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-primary p-6 rounded-lg shadow-sm border border-accent/20 hover:shadow-md transition-shadow"
            >
              <div
                className="text-4xl mb-4"
                role="img"
                aria-label={`${feature.title} icon`}
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-accent mb-3">
                {feature.title}
              </h3>
              <p className="text-accent/80">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
