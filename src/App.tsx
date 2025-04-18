import * as React from 'react';
import SectionWrapper from './components/SectionWrapper';
import SectionEvent from './components/SectionEvent';
import SectionGallery from './components/SectionGallery';
import SectionGift from './components/SectionGift';
import MusicPlayer from './components/MusicPlayer';

import useSearchParams from './hooks/useSearchParams';

import 'react-loading-skeleton/dist/skeleton.css';
import SectionGreeting from './components/SectionGreeting';
import {addBaseURL} from './helpers/common';
import SectionWeddingWish from './components/SectionWeddingWish';
import CoverPage from './components/CoverPage';
import {twMerge} from 'tailwind-merge';
import {InView} from 'react-intersection-observer';

/* https://support.google.com/calendar/thread/81344786/how-do-i-generate-add-to-calendar-link-from-our-own-website?hl=en */
// https://decomaan.github.io/google-calendar-link-generator/

const Page = () => {
  const params = useSearchParams<'to'>();
  const guest = params?.to || '-';

  const containerRef = React.useRef<HTMLDivElement>(null);
  return (
    <div className="w-full min-h-screen bg-yellow-beach relative">
      <div
        ref={containerRef}
        className="mx-auto w-full max-w-[500px] bg-yellow-beach relative overflow-hidden"
      >
        <CoverPage>
          {(opened) => {
            return (
              <>
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
                        opened && 'opacity-100'
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
                        {guest}
                      </p>
                    </div>
                  </div>
                </SectionWrapper>
                <SectionGreeting />
                <SectionWrapper
                  bgImage={{src: addBaseURL('asset-sections/bg-image-3.jpg')}}
                >
                  <div
                    className="h-screen w-full mx-auto absolute"
                    style={{
                      background: 'rgb(73 66 54 / 78%) 0%',
                    }}
                  />
                  <div className="relative text-white p-5 h-screen w-full flex items-center flex-col justify-evenly">
                    <h3 className="font-cormorant text-4xl text-center my-2">
                      Mempelai
                    </h3>
                    <InView threshold={0.5} triggerOnce>
                      {({inView, ref}) => (
                        <img
                          ref={ref}
                          src={addBaseURL('asset-sections/mempelai.jpg')}
                          alt="surya & apri"
                          width={240}
                          height={150}
                          className={twMerge(
                            'rounded-xl w-[480px] border-double border-[3px] border-yellow-beach opacity-0',
                            inView && ''
                          )}
                        />
                      )}
                    </InView>
                    <div className="text-center">
                      <div className="text-center">
                        <p className="text-goldy text-3xl font-cormorant">
                          I Made Budi Surya Darma
                        </p>
                        <p>
                          Putra dari Bapak I Made Damiartha & Ibu Ni Ketut Bukti
                        </p>
                      </div>
                      <p className="text-goldy text-3xl font-cormorant">&</p>
                      <div className="text-center">
                        <p className="text-goldy text-3xl font-cormorant">
                          Apriyanti Nurcahyani
                        </p>
                        <p>Putri dari Bapak. Suwardi & Ibu Parnasih</p>
                      </div>
                    </div>
                  </div>
                </SectionWrapper>
                <SectionEvent />
                <SectionGallery />
                <SectionWeddingWish />
                <SectionGift />
              </>
            );
          }}
        </CoverPage>
        <MusicPlayer containerRef={containerRef} />
      </div>
    </div>
  );
};

export default Page;
