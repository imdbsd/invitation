import BaseCountdown from 'react-countdown';

const CountdownCard = (props: {label: string; value: string}) => (
  <div className="flex flex-1 justify-center items-center flex-col bg-yellow-beach w-[22.5px] h-[80px] rounded-xl">
    <span className="text-xl font-bold">{props.value}</span>
    <span className="tracking-wide text-sm">{props.label}</span>
  </div>
);

interface Props {
  startValue: Date | number | string;
}

const Countdown = (props: Props) => {
  return (
    <BaseCountdown
      date={props.startValue}
      renderer={({days, hours, minutes, seconds}) => {
        return (
          <section className="flex flex-wrap [&>*:not(:last-child)]:mr-2">
            <CountdownCard label="Days" value={`${days}`} />
            <CountdownCard label="Hours" value={`${hours}`} />
            <CountdownCard label="Minutes" value={`${minutes}`} />
            <CountdownCard label="Seconds" value={`${seconds}`} />
          </section>
        );
      }}
    />
  );
};

export default Countdown;
