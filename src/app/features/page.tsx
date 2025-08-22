export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Features
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover all the powerful features that make our product the perfect
            solution for your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature Cards */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              [Feature 1]
            </h3>
            <p className="text-gray-600">
              Detailed description of feature 1 and its benefits.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              [Feature 2]
            </h3>
            <p className="text-gray-600">
              Detailed description of feature 2 and its benefits.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              [Feature 3]
            </h3>
            <p className="text-gray-600">
              Detailed description of feature 3 and its benefits.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              [Feature 4]
            </h3>
            <p className="text-gray-600">
              Detailed description of feature 4 and its benefits.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              [Feature 5]
            </h3>
            <p className="text-gray-600">
              Detailed description of feature 5 and its benefits.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              [Feature 6]
            </h3>
            <p className="text-gray-600">
              Detailed description of feature 6 and its benefits.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
