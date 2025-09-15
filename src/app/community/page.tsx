"use client";
import Magnetic from "../components/gsap/Magnetic";

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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-20 md:pt-28">
        <div className="text-center mb-16" data-reveal="up">
          <h1 className="text-4xl md:text-6xl font-bold">Community</h1>
          <p className="mt-4 text-base md:text-lg text-gray-400 max-w-3xl mx-auto">
            Connect with fellow users, share knowledge, and get help from our
            community.
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            "4,500+ Members",
            "1,200+ Discussions",
            "500+ Answers",
            "15+ Cities",
          ].map((s) => (
            <div
              key={s}
              className="rounded-xl border border-white/10 bg-white/5 p-6 text-center"
              data-reveal="up"
            >
              <div className="text-base text-gray-300">{s}</div>
            </div>
          ))}
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
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
                data-reveal="up"
              >
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-400 mb-4">{feature.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">
                    {feature.members} members
                  </span>
                  <span className="px-2 py-1 rounded text-xs font-medium bg-emerald-400/20 text-emerald-300">
                    {feature.status}
                  </span>
                </div>
                <div className="w-full mt-4">
                  <Magnetic>
                    <a
                      className="block text-center py-2 rounded-lg bg-white text-gray-900 hover:bg-gray-100 transition"
                      href="#"
                    >
                      Join now
                    </a>
                  </Magnetic>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Discussions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Recent Discussions
          </h2>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="space-y-4">
              {recentDiscussions.map((discussion, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 rounded-lg border border-white/10 bg-black/20"
                >
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-200 hover:text-white cursor-pointer">
                      {discussion.title}
                    </h4>
                    <div className="flex items-center space-x-4 mt-2 text-sm text-gray-400">
                      <span>by {discussion.author}</span>
                      <span>{discussion.replies} replies</span>
                      <span>{discussion.views} views</span>
                      <span>{discussion.time}</span>
                    </div>
                  </div>
                  <Magnetic>
                    <a
                      className="px-4 py-2 rounded-lg bg-white text-gray-900 hover:bg-gray-100 transition-colors"
                      href="#"
                    >
                      View
                    </a>
                  </Magnetic>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div
          className="rounded-2xl border border-white/10 bg-gradient-to-r from-white/10 to-transparent p-8 md:p-10 text-center"
          data-reveal="up"
        >
          <h2 className="text-2xl md:text-3xl font-semibold">Ready to join?</h2>
          <p className="mt-2 text-sm text-gray-300">
            Be part of a growing developer community.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            <Magnetic>
              <a
                href="#"
                className="px-5 py-3 rounded-full bg-white text-gray-900 hover:bg-gray-100 transition shadow"
              >
                Join Discord
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="#"
                className="px-5 py-3 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 backdrop-blur transition"
              >
                Visit Forum
              </a>
            </Magnetic>
          </div>
        </div>
      </div>
    </div>
  );
}
