interface RoadmapItem {
  id: number;
  phase: string;
  title: string;
  description: string;
  status: "In Progress" | "Planned";
  timeline: string;
}

const roadmapItems: RoadmapItem[] = [
  {
    id: 1,
    phase: "Phase 1",
    title: "[Current Phase]",
    description:
      "Description of current development phase and what's being worked on.",
    status: "In Progress",
    timeline: "Q1 2024",
  },
  {
    id: 2,
    phase: "Phase 2",
    title: "[Next Phase]",
    description:
      "Description of upcoming development phase and planned features.",
    status: "Planned",
    timeline: "Q2 2024",
  },
  {
    id: 3,
    phase: "Phase 3",
    title: "[Future Phase]",
    description: "Description of future development phase and long-term goals.",
    status: "Planned",
    timeline: "Q3 2024",
  },
];

export default function DevelopersRoadmap() {
  return (
    <section className="bg-primary py-20" aria-labelledby="roadmap-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            id="roadmap-title"
            className="text-3xl md:text-4xl font-bold text-accent mb-4"
          >
            Developers Roadmap
          </h2>
          <p className="text-xl text-accent/80 max-w-3xl mx-auto">
            Stay updated with our development progress and upcoming features.
            This roadmap shows our planned milestones and releases.
          </p>
        </div>

        <div className="space-y-8">
          {roadmapItems.map((item, index) => (
            <div key={item.id} className="relative">
              {/* Timeline connector */}
              {index < roadmapItems.length - 1 && (
                <div
                  className="absolute left-8 top-16 w-0.5 h-8 bg-accent/30"
                  aria-hidden="true"
                ></div>
              )}

              <div className="flex items-start space-x-6">
                {/* Phase indicator */}
                <div className="flex-shrink-0">
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center text-accent font-semibold ${
                      item.status === "In Progress"
                        ? "bg-secondary"
                        : "bg-secondary/50"
                    }`}
                    aria-label={`${item.phase} - ${item.status}`}
                  >
                    {item.phase}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-secondary p-6 rounded-lg border border-accent/20">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-accent">
                      {item.title}
                    </h3>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        item.status === "In Progress"
                          ? "bg-primary text-accent"
                          : "bg-primary/50 text-accent/80"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>
                  <p className="text-accent/80 mb-3">{item.description}</p>
                  <p className="text-sm text-accent/60">
                    Timeline: {item.timeline}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
