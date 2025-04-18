import * as React from 'react';
import Skeleton from 'react-loading-skeleton';
import SectionWrapper from './SectionWrapper';
import Separator from './Separator';
import {addBaseURL} from '../helpers/common';
import {twMerge} from 'tailwind-merge';
import {InView} from 'react-intersection-observer';

const EventCard = React.lazy(() => import('./EventCard'));

const SectionEvent = () => {
  return (
    <SectionWrapper id="section-event">
      <div className="relative p-5 pb-20 w-full min-h-screen flex items-center flex-col justify-evenly">
        <img
          src={addBaseURL('cloud.png')}
          alt="cloud"
          width={300}
          height={300}
          className="w-[150px] h-[150px] absolute top-[10px] right-[-60px] animate-up-and-down"
        />
        <img
          src={addBaseURL('cloud.png')}
          alt="cloud"
          width={300}
          height={300}
          className="w-[150px] h-[150px] absolute bottom-1 left-10 animate-up-and-down"
        />
        <h3 className="font-monsieur-lad text-4xl my-4 w-full">
          <Separator position="left">
            <span className="font-serif mb-2">Wedding</span>
          </Separator>
          Event
        </h3>
        <p className="font-poppins text-sm text-center mb-4 relative">
          Tanpa mengurangi rasa hormat dengan ini kami mengundang
          Bapak/Ibu/Saudara/i untuk hadir dalam acara Pernikahan Putra-Putri
          kami pada
        </p>
        <div className="relative [&>*:not(:last-child)]:mb-10 w-full">
          <Separator position="right">
            <h4 className="font-cormorant text-4xl text-center mx-2.5 italic text-goldy">
              Bali
            </h4>
          </Separator>
          <React.Suspense
            fallback={<Skeleton height={350} baseColor="#dadada" />}
          >
            <InView threshold={0.3} triggerOnce>
              {({inView, ref}) => (
                <div
                  ref={ref}
                  className={twMerge(
                    'opacity-0',
                    inView && 'animate-fade-up animate-duration-1500'
                  )}
                >
                  <EventCard
                    title="Pawiwahan"
                    bgImage={addBaseURL('asset-sections/assets-event1.jpg')}
                    dayName="Rabu"
                    date="11 Juni 2025"
                    startAndEnd="07.00 - 12.00 WITA"
                    location="Kediaman Mempelai Pria Jl. Siligita No.1, Banjar, Peminge, Kabupaten Badung, Bali"
                    gMap="https://maps.app.goo.gl/DcMf4eq2qtz1kgzNA"
                  />
                </div>
              )}
            </InView>
          </React.Suspense>
          <React.Suspense
            fallback={<Skeleton height={350} baseColor="#dadada" />}
          >
            <InView threshold={0.3} triggerOnce>
              {({inView, ref}) => (
                <div
                  ref={ref}
                  className={twMerge(
                    'opacity-0',
                    inView && 'animate-fade-up animate-duration-1500'
                  )}
                >
                  <EventCard
                    title="Resepsi"
                    bgImage={addBaseURL('asset-sections/assets-event1.jpg')}
                    dayName="Rabu"
                    date="11 Juni 2025"
                    startAndEnd="12.00 - 17.00 WITA"
                    location="Kediaman Mempelai Pria Jl. Siligita No.1, Banjar, Peminge, Kabupaten Badung, Bali"
                    gMap="https://maps.app.goo.gl/DcMf4eq2qtz1kgzNA"
                  />
                </div>
              )}
            </InView>
          </React.Suspense>

          <Separator position="right">
            <h4 className="font-cormorant text-4xl text-center mx-2.5 italic text-goldy">
              Jakarta
            </h4>
          </Separator>
          <React.Suspense
            fallback={<Skeleton height={350} baseColor="#dadada" />}
          >
            <InView threshold={0.3} triggerOnce>
              {({inView, ref}) => (
                <div
                  ref={ref}
                  className={twMerge(
                    'opacity-0',
                    inView && 'animate-fade-up animate-duration-1500'
                  )}
                >
                  <EventCard
                    title="Resepsi"
                    bgImage={addBaseURL('asset-sections/assets-event1.jpg')}
                    dayName="Rabu"
                    date="5 Juli 2025"
                    startAndEnd="07.00 - 12.00"
                    location="Graha Masnoon by Zeinlucky. Poris Gaga, Kec. Cipondoh, Kota Tangerang"
                    gMap="https://maps.app.goo.gl/6pZGx8FnCUSA7HTBA"
                  />
                </div>
              )}
            </InView>
          </React.Suspense>
        </div>
        <div className="[&>*:not(:last-child)]:mb-5 mt-5 relative">
          <p className="font-poppins text-sm text-center">
            Merupakan suatu kebahagiaan dan kehormatan bagi kami, apabila
            Bapak/Ibu/Saudara/i, berkenan hadir dan memberikan do'a restu kepada
            kedua mempelai.
          </p>
          <p className="text-center font-bold">Keluarga Besar</p>
          <p className="text-center font-bold">I Made Damiartha</p>
          <p className="text-center font-bold">&</p>
          <p className="text-center font-bold">Suwardi</p>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default SectionEvent;
