import * as React from 'react';
import Skeleton from 'react-loading-skeleton';
import SectionWrapper from './SectionWrapper';
import Separator from './Separator';
import {Calendar} from 'lucide-react';

const Countdown = React.lazy(() => import('./Countdown'));

const dDate = 'Wed Jun 11 2025 00:00:00 GMT+0800';

const SectionGreeting = () => {
  return (
    <SectionWrapper bgImage={{src: '/asset-sections/bg-image-2.jpg'}}>
      <div
        className="h-screen w-full mx-auto absolute"
        style={{
          background: 'rgba(255, 241, 213, 0.5) 0%',
        }}
      ></div>
      <div className="relative p-4 h-screen flex flex-col justify-around">
        <img
          src={'/logo.png'}
          width={500}
          height={500}
          alt="logo"
          className="w-[150px] h-[150px] mx-auto"
        />

        <div>
          <p className="font-cormorant italic text-center text-lg mb-2">
            Ihaiva stam ma vi yaustam, visvam ayur vyasnutam, kridantau putrair
            naptrbhih, modamanau sve grhe.
          </p>
          <p className="text-center font-cormorant text-lg mb-2">
            (Rg Veda X.85.42)
          </p>
          <p className="font-cormorant">
            Wahai pasangan suami-istri, semoga kalian tetap bersatu dan tidak
            pernah terpisahkan. Semoga kalian mencapai hidup penuh kebahagiaan,
            tinggal di rumah yang penuh kegembiraan bersama seluruh keturunanmu.
          </p>
        </div>
        <div>
          <Separator>
            <p className="text-center font-cormorant text-xl mx-2">
              Countdown to:
            </p>
          </Separator>
          <div className="[&>*:not(:last-child)]:mb-5">
            <p className="text-center font-cormorant text-4xl italic font-bold">
              11 Juni 2025
            </p>
            <div className="flex justify-center">
              <a
                href="#"
                className="flex flex-row items-center bg-white p-2 rounded-sm text-xs font-poppins"
                target="_blank"
              >
                <Calendar className="mr-2" width={16} height={16} />
                <span>Add to Calendar</span>
              </a>
            </div>
            <React.Suspense
              fallback={<Skeleton height={80} baseColor="#dadada" />}
            >
              <Countdown startValue={dDate} />
            </React.Suspense>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default SectionGreeting;
