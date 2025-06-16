import HomeHero from "@/components/HeroComps/HomeHero";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Home | Outdoor Adventure",
  description: "Home page of Outdoor Adventure",
};

const page = () => {
  return (
    <>
      <HomeHero />

      <div className="bg-[#ECECEC]">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-8 px-6 py-12 lg:flex-row lg:justify-start lg:gap-32">
          <Image
            src={"/home/quote-1.png"}
            alt="quote"
            width={500}
            height={300}
            className="h-20 w-28"
            // lg:absolute
            // lg:left-0
            // lg:mx-6
            // lg:my-12
          />
          <div className="text-center">
            {
              "Fuerat aestu carentem habentia spectent tonitrua mutastis locavit liberioris."
            }
            <br />- Adam Sendler
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
