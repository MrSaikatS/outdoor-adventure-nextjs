import Image from "next/image";
import Underline from "../Underline";
import LinkButton from "../LinkButton";
import { ArrowBigRight } from "lucide-react";
import HeadingComps from "../HeadingComps";

const ToursAndDestinationSec = () => {
  return (
    <section className="mx-auto grid max-w-7xl grid-cols-1 gap-5 px-6 py-16 lg:grid-cols-3">
      <div className="me-0 mb-14 space-y-5 lg:me-14 lg:mb-0">
        <HeadingComps classname="text-2xl lg:text-4xl">
          Upcoming Tours & Destination
        </HeadingComps>

        <Underline className="w-20 lg:w-24" />
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
  );
};

export default ToursAndDestinationSec;
