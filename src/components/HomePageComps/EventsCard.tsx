import { ArrowBigRight } from "lucide-react";
import Image from "next/image";
import LinkButton from "../LinkButton";
import { EventType } from "@/lib/types";
import HeadingComps from "../HeadingComps";

const EventsCard = ({ info }: { info: EventType }) => {
  return (
    <div className="grid place-items-center">
      <Image
        src={info.eImage}
        alt="everest-camp"
        width={644}
        height={402}
        className="h-auto w-full rounded-lg shadow-lg"
      />

      <HeadingComps className="mt-5 text-xl">{info.eTitle}</HeadingComps>

      <div className="font-noto-sans mt-2 text-center text-sm lg:text-base">
        {info.eDescription}
      </div>

      <LinkButton
        href="/"
        className="mt-5 text-sm lg:text-base">
        LEARN MORE{" "}
        <ArrowBigRight
          fill="white"
          size={20}
        />
      </LinkButton>
    </div>
  );
};

export default EventsCard;
