import HomeHero from "@/components/HeroComps/HomeHero";
import ExploreSec from "@/components/HomePageComps/ExploreSec";
import QuoteSec from "@/components/HomePageComps/QuoteSec";
import ToursAndDestinationSec from "@/components/HomePageComps/ToursAndDestinationSec";
import UpComingEventSec from "@/components/HomePageComps/UpComingEventSec";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Outdoor Adventure",
  description: "Home page of Outdoor Adventure",
};

const page = () => {
  return (
    <>
      {/* Hero Section */}

      <HomeHero />

      {/* Quotes Section */}

      <QuoteSec />

      {/* Upcoming Events Section */}

      <UpComingEventSec />

      {/* Explore Section */}

      <ExploreSec />

      {/* Upcoming Tours & Destinations Section */}

      <ToursAndDestinationSec />
    </>
  );
};

export default page;
