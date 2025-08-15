import React from "react";
import { blogs, author } from "../data/dummyData";
// import HeroSection from "../components/HeroSection";
import ExploreLatest from "../components/ExploreLatest";
import TrendingPlaces from "../components/Trending";
import WeeklyBestNews from "../components/WeeklyNews";
import AuthorWidget from "../components/AuthorWidget";
import TravelCarousel from "../components/Carousal";
import Gallery from "../components/Gallery";
import ContactUs from "../components/ContactUs";

const Main = () => {
  return (
    <main>
      {/* <HeroSection blog={blogs[0]} /> */}
      <div className="container mx-auto my-8">
        <TravelCarousel />
      </div>
      
        <div className="container mx-auto m-5 flex flex-col gap-10">
          <ExploreLatest blogs={blogs} />
          <TrendingPlaces blogs={blogs} />
        </div>
        <div className="container mx-auto grid md:grid-cols-3 gap-10 py-10">
        <div className="md:col-span-2">
          <WeeklyBestNews blogs={blogs} />
        </div>
        <div className="space-y-6">
          <AuthorWidget author={author} />
        </div>
       
      </div>
       <div >
          <Gallery/>
        </div>
        <div>
          {/* <ContactUs/> */}
        </div>
    </main>
  );
};

export default Main;
