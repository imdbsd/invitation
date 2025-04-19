import {twMerge} from 'tailwind-merge';
import {addBaseURL} from '../helpers/common';
import SectionWrapper from './SectionWrapper';

const SectionWelcome = (props: {opened?: boolean; guest?: string}) => {
  return (
    <SectionWrapper
      bgImage={{
        src: addBaseURL('galleries/gallery-3.jpg'),
        className: 'bg-[center_-150px]',
      }}
    >
      <div
        className="h-screen w-full mx-auto relative z-20"
        style={{
          background:
            'linear-gradient(to bottom, rgba(255, 241, 213, 0) 0%, rgba(255, 241, 213, 0.3) 70%, rgba(255, 241, 213, 1) 80%)',
        }}
      >
        <div
          className={twMerge(
            'absolute bottom-[75px] right-0 left-0 flex flex-col justify-center items-center z-10 opacity-0',
            props.opened && 'opacity-100'
          )}
        >
          <h1 className="flex flex-col items-center text-[#4B3B2A] text-sm tracking-[2px] font-normal">
            <span>THE WEDDING OF</span>
          </h1>
          <p className="block text-4xl text-[#4B3B2A] font-cormorant">
            Apri & Surya
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
