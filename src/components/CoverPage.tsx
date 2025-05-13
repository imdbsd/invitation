import * as React from 'react';
import SectionWrapper from './SectionWrapper';
import {twMerge} from 'tailwind-merge';
import {useMediaContext} from './MediaContext/Context';
import {addBaseURL} from '../helpers/common';
import useTrack from '../hooks/useTrack';

const CoverPage = (props: {
  children: (opened: boolean) => React.ReactNode;
  guest?: string;
  title?: string;
}) => {
  const [opened, setOpened] = React.useState(false);
  const [totalHide, setTotalHide] = React.useState(false);
  const [trackVisit] = useTrack('Visit');
  const [trackOpen] = useTrack('Open');
  const {setPlayMedia} = useMediaContext();
  const toggleOpen = React.useCallback(() => {
    setOpened(true);
    trackOpen(props.guest);
    document.body.style.overflow = 'auto';
    history.scrollRestoration = 'manual';
    setTimeout(() => {
      setPlayMedia('music', true);
      setTotalHide(true);
    }, 700);
  }, []);

  React.useEffect(() => {
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'hidden';
      trackVisit(props.guest);
    }
  }, []);

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
        onClick={toggleOpen}
      >
        <div
          className="h-screen w-full mx-auto relative z-20"
          style={{
            background:
              'linear-gradient(to bottom, rgba(255, 241, 213, 0) 0%, rgba(255, 241, 213, 0.3) 70%, rgba(255, 241, 213, 1) 80%)',
          }}
        >
          <img
            src={addBaseURL('cloud_small.png')}
            alt="cloud"
            width={300}
            height={300}
            className="w-[150px] h-[150px] absolute top-1/12 left-[40px] animate-up-and-down animate-duration-2000 opacity-70"
          />
          <img
            src={addBaseURL('cloud_small.png')}
            alt="cloud"
            width={300}
            height={300}
            className="w-[150px] h-[150px] absolute top-[10px] right-[-60px] animate-up-and-down animate-duration-2300 opacity-70"
          />
          <div className="absolute top-0 bottom-0 left-0 right-0 items-center justify-center flex">
            <div className="h-2/3 w-3/4 rounded-full border-yellow-beach border-double border-[5px]" />
          </div>
          <div className="fixed bottom-[75px] right-0 left-0 flex flex-col justify-center items-center z-10">
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
            <button className="font-cormorant text-base font-normal bg-white p-3 rounded-sm mt-4 min-w-[100px] text-center cursor-pointer">
              {props.guest}
            </button>
            <p className="text-xs my-2 cursor-pointer">
              Click untuk membuka undangan.
            </p>
          </div>
        </div>
      </SectionWrapper>
      {props.children(opened)}
    </>
  );
};

export default CoverPage;
