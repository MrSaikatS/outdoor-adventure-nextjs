import ProjectsHero from "@/components/HeroComps/ProjectsHero";
import SwiperSec from "@/components/ProjectPageComps/SwiperSec";
import { projects } from "@/lib/information";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Outdoor Adventure",
  description: "Projects page of Outdoor Adventure",
};

const page = () => {
  return (
    <>
      <ProjectsHero />

      {/* projects Swiper Section */}

      <section className="mx-auto max-w-7xl space-y-24 px-6 py-16 lg:py-24">
        {projects.map((project) => {
          return (
            <SwiperSec
              key={project.pId}
              info={project}
            />
          );
        })}
      </section>
    </>
  );
};

export default page;
