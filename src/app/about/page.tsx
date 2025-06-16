import MissionSec from "@/components/AboutPageComps/MissionSec";
import AboutHero from "@/components/HeroComps/AboutHero";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Outdoor Adventure",
  description: "About page of Outdoor Adventure",
};

const page = () => {
  return (
    <>
      <AboutHero />

      <MissionSec />
    </>
  );
};

export default page;
