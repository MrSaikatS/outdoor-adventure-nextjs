import { ArrowBigRight } from "lucide-react";
import LinkButton from "../LinkButton";
import Underline from "../Underline";
import HeadingComps from "../HeadingComps";

const ExploreSec = () => {
  return (
    <section className="bg-[url('/home/section-bg.jpg')] bg-cover bg-top bg-no-repeat lg:bg-fixed">
      <div className="flex justify-end bg-black/60">
        <div className="text-background max-w-7xl space-y-5 px-6 py-24 md:w-1/2 lg:py-40">
          <HeadingComps classname="text-2xl lg:text-4xl">
            Explore The World
          </HeadingComps>

          <Underline className="w-20 lg:w-24" />

          <div className="font-noto-sans w-[70%]">
            Diremit mundi mare undae nunc mixtam tanto sibi. Nubes unda
            concordi. Fert his. Recessit mentes praecipites locum caligine sui
            egens erat. Silvas caeli regna.
          </div>

          <LinkButton
            href="/"
            className="mt-10 w-[200px] text-sm lg:text-base">
            LEARN MORE
            <ArrowBigRight
              fill="white"
              size={20}
            />
          </LinkButton>
        </div>
      </div>
    </section>
  );
};

export default ExploreSec;
