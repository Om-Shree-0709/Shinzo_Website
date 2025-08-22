export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "[Blog Post Title 1]",
      excerpt:
        "This is a brief excerpt of the first blog post. It gives readers a preview of what the article is about.",
      author: "[Author Name]",
      date: "January 15, 2024",
      category: "Product Updates",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "[Blog Post Title 2]",
      excerpt:
        "This is a brief excerpt of the second blog post. It provides an overview of the content and main points.",
      author: "[Author Name]",
      date: "January 10, 2024",
      category: "Tutorials",
      readTime: "8 min read",
    },
    {
      id: 3,
      title: "[Blog Post Title 3]",
      excerpt:
        "This is a brief excerpt of the third blog post. It introduces the topic and what readers can expect.",
      author: "[Author Name]",
      date: "January 5, 2024",
      category: "Industry News",
      readTime: "6 min read",
    },
    {
      id: 4,
      title: "[Blog Post Title 4]",
      excerpt:
        "This is a brief excerpt of the fourth blog post. It outlines the key insights and takeaways.",
      author: "[Author Name]",
      date: "December 28, 2023",
      category: "Best Practices",
      readTime: "10 min read",
    },
    {
      id: 5,
      title: "[Blog Post Title 5]",
      excerpt:
        "This is a brief excerpt of the fifth blog post. It highlights the main discussion points.",
      author: "[Author Name]",
      date: "December 20, 2023",
      category: "Case Studies",
      readTime: "12 min read",
    },
    {
      id: 6,
      title: "[Blog Post Title 6]",
      excerpt:
        "This is a brief excerpt of the sixth blog post. It provides context for the article content.",
      author: "[Author Name]",
      date: "December 15, 2023",
      category: "Product Updates",
      readTime: "7 min read",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest news, tutorials, and insights from our
            team. Discover tips, best practices, and industry trends.
          </p>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium">
            All Posts
          </button>
          <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200">
            Product Updates
          </button>
          <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200">
            Tutorials
          </button>
          <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200">
            Industry News
          </button>
          <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200">
            Best Practices
          </button>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-primary-light text-primary-dark px-2 py-1 rounded text-xs font-medium">
                    {post.category}
                  </span>
                  <span className="text-gray-500 text-sm">{post.readTime}</span>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 hover:text-primary cursor-pointer">
                  {post.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gray-300 rounded-full mr-3"></div>
                    <span className="text-sm text-gray-700">{post.author}</span>
                  </div>
                  <span className="text-sm text-gray-500">{post.date}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-gray-100 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
            Load More Posts
          </button>
        </div>
      </div>
    </div>
  );
}
