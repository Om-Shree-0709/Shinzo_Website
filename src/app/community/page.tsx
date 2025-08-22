export default function CommunityPage() {
  const communityFeatures = [
    {
      title: "Discord Server",
      description:
        "Join our Discord community to connect with other users, ask questions, and share your experiences.",
      members: "2,500+",
      status: "Active",
    },
    {
      title: "GitHub Discussions",
      description:
        "Contribute to discussions, report issues, and suggest new features on our GitHub repository.",
      members: "1,200+",
      status: "Active",
    },
    {
      title: "Forum",
      description:
        "Visit our community forum for detailed discussions, tutorials, and help from experts.",
      members: "800+",
      status: "Active",
    },
    {
      title: "Meetups",
      description:
        "Join local meetups and events to network with other community members in your area.",
      members: "15+ cities",
      status: "Monthly",
    },
  ];

  const recentDiscussions = [
    {
      title: "[Discussion Topic 1]",
      author: "[User Name]",
      replies: 12,
      views: 156,
      time: "2 hours ago",
    },
    {
      title: "[Discussion Topic 2]",
      author: "[User Name]",
      replies: 8,
      views: 89,
      time: "5 hours ago",
    },
    {
      title: "[Discussion Topic 3]",
      author: "[User Name]",
      replies: 15,
      views: 234,
      time: "1 day ago",
    },
    {
      title: "[Discussion Topic 4]",
      author: "[User Name]",
      replies: 6,
      views: 67,
      time: "2 days ago",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Community
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with fellow users, share knowledge, and get help from our
            vibrant community. Join thousands of developers and enthusiasts.
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-primary-light p-6 rounded-lg text-center">
            <div className="text-3xl font-bold text-primary-dark mb-2">
              4,500+
            </div>
            <div className="text-gray-700">Total Members</div>
          </div>
          <div className="bg-secondary-light p-6 rounded-lg text-center">
            <div className="text-3xl font-bold text-secondary-dark mb-2">
              1,200+
            </div>
            <div className="text-gray-700">Discussions</div>
          </div>
          <div className="bg-tertiary-light p-6 rounded-lg text-center">
            <div className="text-3xl font-bold text-tertiary-dark mb-2">
              500+
            </div>
            <div className="text-gray-700">Questions Answered</div>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg text-center">
            <div className="text-3xl font-bold text-gray-700 mb-2">15+</div>
            <div className="text-gray-700">Cities</div>
          </div>
        </div>

        {/* Community Platforms */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Join Our Community
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {communityFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg border border-gray-200"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {feature.members} members
                  </span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                    {feature.status}
                  </span>
                </div>
                <button className="w-full mt-4 bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary-dark transition-colors">
                  Join Now
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Discussions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Recent Discussions
          </h2>
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="space-y-4">
              {recentDiscussions.map((discussion, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200"
                >
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 hover:text-primary cursor-pointer">
                      {discussion.title}
                    </h4>
                    <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                      <span>by {discussion.author}</span>
                      <span>{discussion.replies} replies</span>
                      <span>{discussion.views} views</span>
                      <span>{discussion.time}</span>
                    </div>
                  </div>
                  <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                    View
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-primary-light rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Join?
          </h2>
          <p className="text-gray-600 mb-6">
            Start connecting with our community today and be part of something
            amazing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors">
              Join Discord
            </button>
            <button className="bg-gray-100 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
              Visit Forum
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
