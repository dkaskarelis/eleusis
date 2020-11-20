import React from "react";
// import sections
import Hero from "../components/sections/Hero";
import FeaturesTiles from "../components/sections/FeaturesTiles";
import FeaturesSplit from "../components/sections/FeaturesSplit";
import Testimonial from "../components/sections/Testimonial";
import Cta from "../components/sections/Cta";

const Home = () => {
  return (
    <>
      <Hero className="illustration-section-01" />
      {/* FeaturesTile Some text and then  two rows of icons + some text below*/}
      <FeaturesTiles />
      {/* FeaturesSplit Some text and then two rows alternating right and left with text an some image
      <FeaturesSplit
        invertMobile
        topDivider
        imageFill
        className="illustration-section-02"
      />*/}
      {/* Testimonial makes boxes with "sampletext" in them they look noice ! 
      <Testimonial topDivider />*/}
      {/*<Cta split />*/}
    </>
  );
};

export default Home;
