import { events } from "@/lib/information";
import HeadingComps from "../HeadingComps";
import Underline from "../Underline";
import EventsCard from "./EventsCard";

const UpComingEventSec = () => {
  return (
    <section className="mx-auto max-w-7xl space-y-10 px-6 py-14 lg:space-y-16 lg:py-24">
      <div className="grid place-items-center gap-2 lg:gap-6">
        <HeadingComps className="mb-2 text-2xl lg:text-4xl">
          Upcoming Events
        </HeadingComps>

        <Underline className="w-20 lg:w-24" />
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
  );
};

export default UpComingEventSec;
