import {Calendar, Clock, MapPin} from 'lucide-react';

export interface Props {
  title: string;
  sub?: React.ReactNode
  bgImage: string;
  dayName: string;
  date: string;
  startAndEnd: string;
  location: string;
  gMap: string;
  calendarFormat?: string;
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
        {props.sub}
        <div className="flex flex-1 flex-col items-center justify-evenly">
          <span className="text-white text-sm mb-2">{props.dayName} {props.date}</span>
          <div className="flex flex-row text-sm items-center mb-2">
            <Clock className="text-white mr-2" width={16} height={16} />
            <span className="text-white text-sm">{props.startAndEnd}</span>
          </div>
          <span className="text-white text-center text-sm mb-2">
            {props.location}
          </span>
          <div className="flex flex-row w-full justify-evenly">
            <a
              href={props.gMap}
              className="flex flex-row items-center bg-white p-2 rounded-sm text-xs font-poppins"
              target="_blank"
            >
              <MapPin className="mr-2" width={16} height={16} />
              <span>Google Map</span>
            </a>
            {props.calendarFormat ? (
              <a
                href={props.calendarFormat}
                className="flex flex-row items-center bg-white p-2 rounded-sm text-xs font-poppins"
                target="_blank"
              >
                <Calendar className="mr-2" width={16} height={16} />
                <span>Add to Calendar</span>
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
