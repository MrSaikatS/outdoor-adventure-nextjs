import Header from "@/components/HeaderComps/Header";
import HomeHero from "@/components/HeroComps/HomeHero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Outdoor Adventure",
  description: "Home page of Outdoor Adventure",
};

const page = () => {
  return (
    <>
      <Header />

      <HomeHero />
    </>
  );
};

export default page;
