import HeroSection from "./components/homepage/hero-section";
import PopularSection from "./components/homepage/popular-section";
import FeaturedSection from "./components/homepage/featured-section";
import SidebarPage from "./components/homepage/sidebar-section";

export default async function HomePage() {
  return (
    <div className="flex flex-col items-center">
      <div className="max-w-7xl flex flex-col lg:flex-row w-full">
        <div className="lg:w-5/6 w-full">
          <HeroSection />
        </div>
        <div className="lg:w-1/6 w-full">
          <SidebarPage />
        </div>
      </div>

      <div className="w-full">
        <PopularSection />
      </div>
      <div className="w-full">
        <FeaturedSection />
      </div>
    </div>
  );
}
