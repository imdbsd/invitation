import * as React from 'react';
import Skeleton from 'react-loading-skeleton';
import SectionWrapper from './SectionWrapper';
import Separator from './Separator';
import {addBaseURL} from '../helpers/common';
import {twMerge} from 'tailwind-merge';
import {InView} from 'react-intersection-observer';

const EventCard = React.lazy(() => import('./EventCard'));

const SectionEventSiraman = (props: {guest?: string}) => {
  return (
    <SectionWrapper id="section-event">
      <div className="relative p-5 pb-20 w-full min-h-screen flex items-center flex-col justify-evenly">
        <img
          src={addBaseURL('cloud_small.png')}
          alt="cloud"
          width={300}
          height={300}
          className="w-[150px] h-[150px] absolute top-[10px] right-[-60px] animate-up-and-down"
        />
        <img
          src={addBaseURL('cloud_small.png')}
          alt="cloud"
          width={300}
          height={300}
          className="w-[150px] h-[150px] absolute bottom-1 left-10 animate-up-and-down"
        />
        <h3 className="font-pinyon-script text-4xl my-4 w-full">
          <Separator position="left">
            <span className="font-serif mb-2">Siraman</span>
          </Separator>
          & Ngidih
        </h3>
        <p className="font-poppins text-sm text-center mb-4 relative">
          Atas Asung Kertha Wara Nugraha Ida Sang Hyang Widhi Wasa / Tuhan Yang
          Maha Esa Kami Bermaksud Menyelenggarakan acara Lamaran dan Siraman
        </p>
        <div className="relative [&>*:not(:last-child)]:mb-10 w-full">
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
                    title="Lamaran"
                    bgImage={addBaseURL('asset-sections/assets-event1.jpg')}
                    dayName="Minggu"
                    date="1 Juni 2025"
                    startAndEnd="08.00 - 09.30 WIB"
                    location="Griya bintang mekarsari, gang rosela 1, blok i5 no 12, RT.008 RW.004 Rajek Mulya, Kec. Rajek, Kab. Tangerang"
                    gMap="https://maps.app.goo.gl/VEXVVgM17RxCHXbP7"
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
                    title="Siraman Mempelai Wanita"
                    sub={
                      <p className="font-cormorant text-xl text-center my-4 w-full text-white">
                        Apriyanti Nurcahyani
                      </p>
                    }
                    bgImage={addBaseURL('asset-sections/assets-event2.jpg')}
                    dayName="Minggu"
                    date="1 Juni 2025"
                    startAndEnd="10.30 WIB s/d Selesai"
                    location="Griya bintang mekarsari, gang rosela 1, blok i5 no 12, RT.008 RW.004 Rajek Mulya, Kec. Rajek, Kab. Tangerang"
                    gMap="https://maps.app.goo.gl/VEXVVgM17RxCHXbP7"
                    calendarFormat={`https://www.google.com/calendar/render?action=TEMPLATE&text=Siraman+Apriyanti+Nurcahyani&details=Pernikahan+Surya+%26+Apri.+More+at+https%3A%2F%2Fsuryaapritiedtheknot.site%2F%3F
                      %3D${
                        props.guest
                          ? `%2F%3Fto%3D${decodeURIComponent(props.guest)}`
                          : ''
                      }%0A%0A%23SAyIDo&location=https%3A%2F%2Fmaps.app.goo.gl%2FVEXVVgM17RxCHXbP7&dates=20250601T013000Z%2F20250601T040000Z`}
                  />
                </div>
              )}
            </InView>
          </React.Suspense>
        </div>
        <div className="[&>*:not(:last-child)]:mb-5 mt-5 relative">
          <p className="font-poppins text-sm text-center">
            Merupakan suatu kebahagiaan dan kehormatan bagi kami, apabila
            Bapak/Ibu/Saudara/i, berkenan hadir pada acara lamaran dan siraman
            menjelang pawiwahan putri kami
          </p>
          <p className="text-center underline">Keluarga Besar</p>
          <p className="text-center font-bold">I Made Damiartha</p>
          <p className="text-center">&</p>
          <p className="text-center font-bold">Suwardi</p>
          <p className="text-center underline">Turut Mengundang</p>
          <p className="text-center font-bold">Bpk. Wardi</p>
          <p className="text-center font-bold">Bpk. Harjanto</p>
          <p className="text-center font-bold">Bpk. Ustad Rebin (Ketua RT)</p>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default SectionEventSiraman;
