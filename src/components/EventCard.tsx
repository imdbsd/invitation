import * as React from 'react';
import {Clock, MapPin} from 'lucide-react';

interface Props {
  title: string;
  bgImage: string;
  dayName: string;
  date: string;
  startAndEnd: string;
  location: string;
  gMap: string;
}

const EventCard = (props: Props) => {
  return (
    <div className="rounded-4xl w-full min-h-[350px] relative overflow-hidden flex">
      <div
        className="w-full h-full absolute bg-cover"
        style={{
          backgroundImage: `url(${props.bgImage})`,
        }}
      />
      <div
        className="h-full w-full absolute"
        style={{
          background: 'rgb(73 66 54 / 78%) 0%',
        }}
      />
      <div className="relative flex flex-1 flex-col items-center px-3 py-5 z-10 font-poppins">
        <h4 className="font-poppins text-2xl font-bold text-goldy mb-2">
          {props.title}
        </h4>
        <div className="[&>*:not(:last-child)]:mb-2 flex flex-1 flex-col items-center justify-evenly">
          <span className="text-white text-lg">{props.dayName}</span>
          <span className="text-white text-lg">{props.date}</span>
          <div className="flex flex-row text-sm items-center">
            <Clock className="text-white mr-2" width={16} height={16} />
            <span className="text-white text-sm">{props.startAndEnd}</span>
          </div>
          <span className="text-white text-center text-sm">
            {props.location}
          </span>
          <a
            href={props.gMap}
            className="flex flex-row items-center bg-white p-2 rounded-sm text-xs font-poppins"
            target="_blank"
          >
            <MapPin className="mr-2" width={16} height={16} />
            <span>Google Map</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
