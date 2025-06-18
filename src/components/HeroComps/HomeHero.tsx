import HeadingComps from "../HeadingComps";
import LinkButton from "../LinkButton";
import Underline from "../Underline";

const HomeHero = () => {
  return (
    <section className="bg-[url(/home/hero-bg.jpg)] bg-cover bg-center bg-no-repeat lg:bg-fixed">
      <div className="grid place-items-center gap-2 bg-black/60 py-28 text-white lg:py-[18rem]">
        <HeadingComps className="text-xl font-semibold">
          Explore the Colourful World
        </HeadingComps>

        <Underline className="w-16" />

        <HeadingComps className="mt-0 text-3xl font-bold lg:mt-4 lg:text-6xl">
          A Wonderful Gift
        </HeadingComps>

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
