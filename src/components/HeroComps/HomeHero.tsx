import LinkButton from "../LinkButton";

const HomeHero = () => {
  return (
    <section className="bg-[url(/home/hero-bg.jpg)] bg-cover bg-fixed bg-center bg-no-repeat">
      <div className="flex h-[80dvh] flex-col items-center justify-center bg-black/60 text-white">
        <div className="text-2xl font-semibold">
          Explore the Colourful World
        </div>

        <div className="bg-primary-crimson mt-3 h-0.5 w-16"></div>

        <div className="mt-4 text-6xl font-bold">A Wonderful Gift</div>

        <LinkButton
          href="/"
          className="mt-8">
          learn more
        </LinkButton>
      </div>
    </section>
  );
};

export default HomeHero;
