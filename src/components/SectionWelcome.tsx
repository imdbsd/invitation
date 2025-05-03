import {twMerge} from 'tailwind-merge';
import {addBaseURL} from '../helpers/common';
import SectionWrapper from './SectionWrapper';

const SectionWelcome = (props: {
  opened?: boolean;
  guest?: string;
  title?: string;
}) => {
  return (
    <SectionWrapper
      id="section-welcome"
      bgImage={{
        src: addBaseURL('galleries/gallery-3.jpg'),
        className: 'bg-[center_-150px]',
      }}
      className={twMerge(props.opened ? undefined : 'invisible')}
    >
      <div
        className="h-screen w-full mx-auto relative z-20"
        style={{
          background:
            'linear-gradient(to bottom, rgba(255, 241, 213, 0) 0%, rgba(255, 241, 213, 0.3) 70%, rgba(255, 241, 213, 1) 80%)',
        }}
      >
        <img
          src={addBaseURL('cloud.png')}
          alt="cloud"
          width={300}
          height={300}
          className="w-[150px] h-[150px] absolute top-1/12 left-[40px] animate-up-and-down animate-duration-2000 opacity-70"
        />
        <img
          src={addBaseURL('cloud.png')}
          alt="cloud"
          width={300}
          height={300}
          className="w-[150px] h-[150px] absolute top-[10px] right-[-60px] animate-up-and-down animate-duration-2300 opacity-70"
        />
        <div
          className={twMerge(
            'absolute bottom-[75px] right-0 left-0 flex flex-col justify-center items-center z-10 opacity-0',
            props.opened && 'opacity-100'
          )}
        >
          <h1 className="flex flex-col items-center text-[#4B3B2A] text-sm tracking-[2px] font-normal">
            <span>{props.title || 'THE WEDDING OF'}</span>
          </h1>
          <p className="block text-4xl text-[#4B3B2A] font-cormorant">
            Surya & Apri
          </p>
          <p className="text-[#4B3B2A] text-center text-sm tracking-[2px] font-normal">
            <span className="block">Kepada Yth.</span>
            <span className="block">Bapak/ Ibu/ Saudara/ i</span>
          </p>
          <p className="font-cormorant text-base font-normal bg-white p-3 rounded-sm mt-4 min-w-[100px] text-center">
            {props.guest}
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default SectionWelcome;
