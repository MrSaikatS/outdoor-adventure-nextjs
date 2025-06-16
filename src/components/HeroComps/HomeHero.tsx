import LinkButton from "../LinkButton";
import Underline from "../Underline";

const HomeHero = () => {
  return (
    <section className="bg-[url(/home/hero-bg.jpg)] bg-cover bg-fixed bg-center bg-no-repeat">
      <div className="font-montserrat flex flex-col items-center justify-center bg-black/60 py-36 text-white md:py-[12rem]">
        <div className="text-xl font-semibold">Explore the Colourful World</div>

        <Underline />

        <div className="mt-2 text-3xl font-bold lg:mt-4 lg:text-6xl">
          A Wonderful Gift
        </div>

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
