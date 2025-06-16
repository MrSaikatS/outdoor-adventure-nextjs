import HomeHero from "@/components/HeroComps/HomeHero";
import EventsCard from "@/components/HomePageComps/EventsCard";
import LinkButton from "@/components/LinkButton";
import Underline from "@/components/Underline";
import { events } from "@/lib/information";
import { ArrowBigRight } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Home | Outdoor Adventure",
  description: "Home page of Outdoor Adventure",
};

const page = () => {
  return (
    <>
      {/* Hero Section */}

      <HomeHero />

      {/* Quotes Section */}

      <section className="bg-[#ECECEC]">
        <div className="relative mx-auto grid max-w-7xl place-items-center gap-8 px-6 py-12 lg:gap-0">
          <Image
            src={"/home/quote-1.png"}
            alt="quote"
            width={500}
            height={300}
            className="h-20 w-28 lg:absolute lg:left-0 lg:mx-6 lg:my-12"
          />
          <div className="font-noto-sans space-y-4 text-center">
            <div className="text-xl">
              &quot; Fuerat aestu carentem habentia spectent tonitrua mutastis
              locavit liberioris. &quot;
            </div>
            <div className="">- Adam Sendler</div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}

      <section className="mx-auto max-w-7xl space-y-10 px-6 py-14 lg:py-24">
        <div className="grid place-items-center">
          <div className="font-montserrat mb-1.5 text-2xl font-bold lg:text-4xl">
            Upcoming Events
          </div>

          <Underline />
        </div>

        <div className="grid grid-cols-1 place-items-center gap-10 lg:grid-cols-2 lg:gap-24">
          {events.map((event) => {
            return (
              <EventsCard
                key={event.eId}
                info={event}
              />
            );
          })}
        </div>
      </section>

      {/* Explore Section */}

      <section className="bg-[url('/home/section-bg.jpg')] bg-cover bg-top bg-no-repeat lg:bg-fixed">
        <div className="flex justify-end bg-black/60">
          <div className="text-background max-w-7xl space-y-5 px-6 py-24 md:w-1/2 lg:py-40">
            <div className="font-montserrat text-2xl font-bold lg:text-4xl">
              Explore The World
            </div>
            <Underline />
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

      {/* Upcoming Tours & Destinations Section */}

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-5 px-6 py-16 lg:grid-cols-3">
        <div className="me-0 mb-14 space-y-5 lg:me-14 lg:mb-0">
          <div className="font-montserrat text-2xl font-bold lg:text-4xl">
            Upcoming Tours & Destination
          </div>
          <Underline />
          <div className="font-noto-sans mt-0 lg:mt-10">
            Fuerat aestu carentem habentia spectent tonitrua mutastis locavit
            liberioris. Sinistra possedit litora ut nabataeaque. Setucant
            coepyterunt perveniunt animal! Concordi aurea nabataeaque seductaque
            constaque cepit sublime flexi nullus.
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

        <div className="space-y-5">
          <Image
            src={"/home/upcoming-1.jpg"}
            alt="destination"
            width={644}
            height={402}
            className="h-auto w-full rounded-lg"
          />
          <Image
            src={"/home/upcoming-3.jpg"}
            alt="destination"
            width={378}
            height={385}
            className="h-auto w-full rounded-lg"
          />
        </div>

        <div className="space-y-5">
          <Image
            src={"/home/upcoming-2.jpg"}
            alt="destination"
            width={378}
            height={385}
            className="h-auto w-full rounded-lg"
          />
          <Image
            src={"/home/upcoming-4.jpg"}
            alt="destination"
            width={644}
            height={402}
            className="h-auto w-full rounded-lg"
          />
        </div>
      </section>
    </>
  );
};

export default page;
