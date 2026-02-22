import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import StatsSection from "./components/StatsSection";
import ServicesSection from "./components/ServicesSection";
import AboutSection from "./components/AboutSection";
import HowItWorks from "./components/HowItWorks";
import TeamSection from "./components/TeamSection";
import Testimonials from "./components/Testimonials";
import AppointmentSection from "./components/AppointmentSection";
import BlogSection from "./components/BlogSection";
import Footer from "./components/Footer";

import FeatureCards from "./components/FeatureCards";
import InfoCardsSlider from "./components/InfoCardsSlider";
import TransformationSection from "./components/TransformationSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <FeatureCards />
        <InfoCardsSlider />
        <TransformationSection />
        <StatsSection />
        <ServicesSection />
        <AboutSection />
        <HowItWorks />
        <TeamSection />
        <Testimonials />
        <BlogSection />
        <AppointmentSection />
      </main>
      <Footer />

      {/* Scroll to top button */}
      <ScrollToTop />
    </>
  );
}

function ScrollToTop() {
  return (
    <div>
      <a
        href="#hero"
        id="scroll-to-top"
        style={{
          position: "fixed",
          bottom: "30px",
          right: "30px",
          width: "50px",
          height: "50px",
          background: "linear-gradient(135deg, #2E7D32, #4CAF50)",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontSize: "20px",
          textDecoration: "none",
          boxShadow: "0 6px 20px rgba(46,125,50,0.4)",
          transition: "all 0.3s",
          zIndex: 999,
        }}
        aria-label="Yukarı git"
      >
        ↑
      </a>
    </div>
  );
}
