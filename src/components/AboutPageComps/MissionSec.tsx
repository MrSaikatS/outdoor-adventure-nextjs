import Underline from "@/components/Underline";
import Image from "next/image";
import HeadingComps from "../HeadingComps";

const MissionSec = () => {
  return (
    <section className="mx-auto max-w-7xl space-y-14 px-6 py-14 lg:space-y-20 lg:py-20">
      {/* Our mission Subsection */}

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24">
        <div className="space-y-5">
          <HeadingComps classname="text-2xl lg:text-4xl">
            Our MissioN
          </HeadingComps>

          <Underline className="w-20 lg:w-24" />

          <div className="font-noto-sans">
            Click edit button to change this text. Lorem ipsum dolor sit amet,
            adipiscing elit.
          </div>
          <div className="font-noto-sans">
            Click edit button to change this text. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper
            mattis, pulvinar dapibus leo.
          </div>
        </div>

        <Image
          src={"/about/our-mission.jpg"}
          alt="mission"
          width={800}
          height={534}
          className="h-auto w-full rounded-lg"
        />
      </div>

      {/* experience & values SubSection */}

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24">
        {/* Experience Tabs */}

        <div className="space-y-5">
          <HeadingComps classname="text-xl lg:text-2xl">
            Extraordinary Experiences
          </HeadingComps>

          <Underline className="w-20 lg:w-24" />
          <div className="font-noto-sans">
            Click edit button to change this text. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
          </div>
          <div className="font-noto-sans">
            Click edit button to change this text. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper
            mattis, pulvinar dapibus leo.
          </div>
        </div>

        {/* Values Tabs */}

        <div className="space-y-5">
          <HeadingComps classname="text-xl lg:text-2xl">
            Our Core Values
          </HeadingComps>

          <Underline className="w-20 lg:w-24" />

          <div className="font-noto-sans">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </div>

          <div className="font-noto-sans space-y-3">
            <div className="flex items-center gap-6">
              <Underline className="h-[.2rem] w-4" /> Locavit liberioris
              possedit
            </div>
            <div className="flex items-center gap-6">
              <Underline className="h-[.2rem] w-4" /> Diremit mundi mare undae
            </div>
            <div className="flex items-center gap-6">
              <Underline className="h-[.2rem] w-4" /> Spectent tonitrua mutastis
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSec;
