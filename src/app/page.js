import MainPage from "./components/MainPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import GrowthSection from "./components/GrowthSection";
import HeroSection from "./components/HeroSection";
import PartnerSection from "./components/PartnerSection";
import ServiceCard from "./components/ServiceCard";
import StatsCard from "./components/StatsCard";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <div className="mt-7">
      <MainPage />
      <div className=" mt-6">
        <Navbar />
        <div className="ml-9 mr-9">
          <HeroSection />
        </div>
        <div >
          <ServiceCard />
        </div>
        <div className=" ml-9 mr-9">
          <PartnerSection />
        </div>
        <div className="ml-9 mr-9">
          <StatsCard />
        </div>
        <div className="ml-9 mr-9">
          <GrowthSection />
        </div>
        <div className="ml-9 mr-9">
          <Testimonials />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
