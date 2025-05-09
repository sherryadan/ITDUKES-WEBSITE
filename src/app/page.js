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
    <div>
      <MainPage/>
      <div className=" mt-6">
      <Navbar/>
      <HeroSection/>
      <ServiceCard/>
      <PartnerSection/>
      <GrowthSection/>
      <StatsCard/>
      <Testimonials/>
      <Footer/>
      </div>
      </div>
  );
}
