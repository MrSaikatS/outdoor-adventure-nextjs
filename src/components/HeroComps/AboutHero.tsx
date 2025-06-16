import HeadingComps from "../HeadingComps";

const AboutHero = () => {
  return (
    <section>
      <div className="w-full bg-[url(/about/about-bg.jpg)] bg-cover bg-center bg-no-repeat">
        <div className="grid place-items-center bg-black/50 py-28 lg:py-72">
          <HeadingComps classname="text-4xl lg:text-6xl text-background">
            Who We Are?
          </HeadingComps>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
