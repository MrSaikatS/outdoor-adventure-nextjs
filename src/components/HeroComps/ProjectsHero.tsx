import HeadingComps from "../HeadingComps";

const ProjectsHero = () => {
  return (
    <section className="w-full bg-[url(/projects/projects-bg.jpg)] bg-cover bg-center bg-no-repeat">
      <div className="grid place-items-center bg-black/50 py-28 lg:py-72">
        <HeadingComps className="text-background text-4xl lg:text-6xl">
          Our Projects
        </HeadingComps>
      </div>
    </section>
  );
};

export default ProjectsHero;
