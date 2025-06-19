import Image from "next/image";
import HeadingComps from "../HeadingComps";
import { ServiceType } from "@/lib/types";

const ServicesCard = ({ service }: { service: ServiceType }) => {
  return (
    <div className="">
      <Image
        src={service.sImage}
        alt="everest-camp"
        width={644}
        height={402}
        className="h-auto w-full rounded-lg shadow-lg"
      />

      <HeadingComps className="mt-5 text-center text-xl">
        {service.sTitle}
      </HeadingComps>

      <div className="font-noto-sans mt-2 px-2 text-center text-sm lg:text-base">
        {service.sDescription}
      </div>
    </div>
  );
};

export default ServicesCard;
