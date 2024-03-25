import React from "react";
import Hero from "../../components/hero/Hero";
import AboutUs from "../../containers/aboutUs/AboutUs";
import CategoryGrid from "../../containers/categoryGrid/CategoryGrid";
import Quality from "../../containers/quality/Quality";
import Reviews from "../../containers/reviews/Reviews";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      <CategoryGrid />
      <Quality />
      <Reviews />
    </>
  );
};

export default Home;
