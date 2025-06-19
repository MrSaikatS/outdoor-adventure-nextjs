import HeadingComps from "@/components/HeadingComps";
import ServicesHero from "@/components/HeroComps/ServicesHero";
import ServicesCard from "@/components/ServicesPageComps/ServicesCard";
import Underline from "@/components/Underline";
import { services } from "@/lib/information";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Outdoor Adventure",
  description: "Services page of Outdoor Adventure",
};

const page = () => {
  return (
    <>
      {/* Services Hero Section */}
      <ServicesHero />

      <section className="mx-auto max-w-7xl px-6 py-14 lg:py-20">
        {/* Services Heading Section */}

        <div className="grid place-items-center gap-5">
          <HeadingComps className="text-center text-2xl lg:text-4xl">
            It&apos;s Time to Start Your Adventures
          </HeadingComps>

          <Underline className="w-16 lg:w-20" />

          <div className="font-noto-sans text-foreground/70 w-full text-center text-sm lg:w-[65%] lg:text-base">
            Click edit button to change this text. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Ut elit tellus, luctus ullamcorpe
            pulvinar.
          </div>
        </div>

        {/* Services Cards Section */}

        <div className="grid grid-cols-1 gap-12 py-10 lg:grid-cols-2 lg:gap-24 lg:py-20">
          {services.map((service) => {
            return (
              <ServicesCard
                key={service.sId}
                service={service}
              />
            );
          })}
        </div>

        {/* Services content Section */}

        <div className="place-items-center. grid grid-cols-1 gap-12 pt-10 lg:grid-cols-2 lg:gap-20 lg:pt-20">
          {/* 1st Services content */}
          <div className="space-y-5">
            <HeadingComps className="text-xl lg:text-2xl">
              Why Outdoor Adventure
            </HeadingComps>

            <Underline className="w-16 lg:w-20" />

            <div className="font-noto-sans text-foreground/70">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </div>

            <div className="font-noto-sans space-y-3 text-sm lg:text-base">
              <div className="flex items-center gap-6">
                <Underline className="h-[.2rem] w-4" /> Experience: Locavit
                liberioris possedit
              </div>
              <div className="flex items-center gap-6">
                <Underline className="h-[.2rem] w-4" /> Reputation: Diremit
                mundi mare undae
              </div>
              <div className="flex items-center gap-6">
                <Underline className="h-[.2rem] w-4" /> Guide Experience:
                Spectent tonitrua mutastis
              </div>
            </div>
          </div>

          {/* 2nd Services content */}

          <div className="space-y-5">
            <HeadingComps className="text-xl lg:text-2xl">
              What You Get
            </HeadingComps>

            <Underline className="w-16 lg:w-20" />

            <div className="font-noto-sans text-foreground/70">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </div>

            <div className="font-noto-sans space-y-3 text-sm lg:text-base">
              <div className="flex items-center gap-6">
                <Underline className="h-[.2rem] w-4" /> Private Hike: Locavit
                liberioris possedit
              </div>
              <div className="flex items-center gap-6">
                <Underline className="h-[.2rem] w-4" /> Transportation: Diremit
                mundi mare undae
              </div>
              <div className="flex items-center gap-6">
                <Underline className="h-[.2rem] w-4" /> Great Facilities:
                Spectent tonitrua mutastis
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
