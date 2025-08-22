import Hero from "./components/home/Hero";
import GettingStarted from "./components/home/GettingStarted";
import FeatureOverview from "./components/home/FeatureOverview";
import DevelopersRoadmap from "./components/home/DevelopersRoadmap";
import QuickStartGuide from "./components/home/QuickStartGuide";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <GettingStarted />
      <FeatureOverview />
      <DevelopersRoadmap />
      <QuickStartGuide />
    </div>
  );
}
