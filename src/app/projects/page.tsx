import ProjectsHero from "@/components/HeroComps/ProjectsHero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Outdoor Adventure",
  description: "Projects page of Outdoor Adventure",
};

const page = () => {
  return (
    <>
      <ProjectsHero />
    </>
  );
};

export default page;
