// eslint-disable-next-line no-unused-vars
import React from "react";
import HeroSection from "../HeroSection";
import CategoryCarousel from "../CategoryCarousel";
import LatestJob from "../LatestJob";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <CategoryCarousel />
      <LatestJob />
    </div>
  );
};

export default HomePage;
