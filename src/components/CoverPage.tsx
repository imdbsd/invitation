import * as React from 'react';
import SectionWrapper from './SectionWrapper';
import {twMerge} from 'tailwind-merge';
import {useMediaContext} from './MediaContext/Context';
import {addBaseURL} from '../helpers/common';

const CoverPage = (props: {
  children: (opened: boolean) => React.ReactNode;
  guest?: string;
}) => {
  const [opened, setOpened] = React.useState(false);
  const [totalHide, setTotalHide] = React.useState(false);
  const {setPlayMedia} = useMediaContext();
  const toggleOpen = React.useCallback(() => {
    setOpened(true);
    document.body.style.overflow = 'auto';
    history.scrollRestoration = 'manual';
    setTimeout(() => {
      setPlayMedia('music', true);
      setTotalHide(true);
    }, 700);
  }, []);

  React.useEffect(() => {
    console.log('typeof: ', typeof document);
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'hidden';
    }
  }, []);

  if (totalHide) return props.children(opened);

  return (
    <>
      <SectionWrapper
        bgImage={{
          src: addBaseURL('asset-sections/bg-image-4.jpg'),
          className: 'bg-[center_-150px]',
        }}
        className={twMerge(
          'absolute top-0 left-0 right-0 bottom-0 z-[100]',
          opened && 'opacity-0 transition-all duration-500 ease-out',
          totalHide && 'hidden'
        )}
      >
        <div
          className="h-screen w-full mx-auto relative z-20"
          style={{
            background:
              'linear-gradient(to bottom, rgba(255, 241, 213, 0) 0%, rgba(255, 241, 213, 0.3) 70%, rgba(255, 241, 213, 1) 80%)',
          }}
        >
          <div className="absolute top-0 bottom-0 left-0 right-0 items-center justify-center flex">
            <div className="h-2/3 w-3/4 rounded-full border-yellow-beach border-double border-[5px]" />
          </div>
          <div className="absolute bottom-[75px] right-0 left-0 flex flex-col justify-center items-center z-10">
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
            <button
              className="font-cormorant text-base font-normal bg-white p-3 rounded-sm mt-4 min-w-[100px] text-center cursor-pointer"
              onClick={toggleOpen}
            >
              {props.guest}
            </button>
            <p className="text-xs my-2 cursor-pointer" onClick={toggleOpen}>
              Buka Undangan.
            </p>
          </div>
        </div>
      </SectionWrapper>
      {props.children(opened)}
    </>
  );
};

export default CoverPage;
