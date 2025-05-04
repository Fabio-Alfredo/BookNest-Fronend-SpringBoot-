import React from "react";
import HomeLayout from "../layouts/HomeLayout";
import CircularList from "../components/home/CircularList";
import BannerSection from "../components/home/BannerSection";
import FeaturedBooksSection from "../components/home/FeaturedBooksSection";

const Home = () => {
  return (
    <HomeLayout>
      <BannerSection />
      <CircularList />
      <FeaturedBooksSection />
    </HomeLayout>
  );
};

export default Home;
