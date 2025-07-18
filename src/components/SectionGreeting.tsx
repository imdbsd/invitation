import * as React from 'react';
import Skeleton from 'react-loading-skeleton';
import {InView} from 'react-intersection-observer';
import SectionWrapper from './SectionWrapper';
import Separator from './Separator';
import {Calendar} from 'lucide-react';
import {addBaseURL} from '../helpers/common';
import {twMerge} from 'tailwind-merge';
import formatDate from '../helpers/formatDate';

const Countdown = React.lazy(() => import('./Countdown'));

export const WEDDING_DATE = 'Wed Jun 11 2025 00:00:00 GMT+0800';
export const SIRAMAN_DATE = 'Sun Jun 01 2025 00:00:00 GMT+0700';
export const WEDDING_RECEPTION_DATE = 'Sat Jul 05 2025 11:00:00 GMT+0700';

const SectionGreeting = (props: {guest?: string, date: string}) => {
  return (
    <SectionWrapper
      id="section-greeting"
      bgImage={{src: addBaseURL('asset-sections/bg-image-2.jpg')}}
    >
      <div
        className="h-screen w-full mx-auto absolute"
        style={{
          background: 'rgba(255, 241, 213, 0.5) 0%',
        }}
      ></div>
      <div className="relative p-5 h-screen flex flex-col justify-around">
        <img
          src={addBaseURL('logo.png')}
          width={500}
          height={500}
          alt="logo"
          className="w-[150px] h-[150px] mx-auto"
        />

        <InView threshold={0.9} triggerOnce>
          {({inView, ref}) => (
            <div
              ref={ref}
              className={twMerge('opacity-0', inView && 'opacity-100')}
              style={{
                transition: 'all 1s ease',
              }}
            >
              <p className="font-cormorant italic text-center text-lg mb-2">
                Ihaiva stam ma vi yaustam, visvam ayur vyasnutam, kridantau
                putrair naptrbhih, modamanau sve grhe.
              </p>
              <p className="text-center font-cormorant text-lg mb-2">
                (Rg Veda X.85.42)
              </p>
              <p className="font-cormorant">
                Wahai pasangan suami-istri, semoga kalian tetap bersatu dan
                tidak pernah terpisahkan. Semoga kalian mencapai hidup penuh
                kebahagiaan, tinggal di rumah yang penuh kegembiraan bersama
                seluruh keturunanmu.
              </p>
            </div>
          )}
        </InView>

        <div>
          <Separator>
            <p className="text-center font-cormorant text-xl mx-2">
              Countdown to:
            </p>
          </Separator>
          <div>
            <p className="text-center font-cormorant text-3xl italic font-bold mb-5">
              {formatDate(new Date(props.date), 'dd MMMM yyyy')}
            </p>
            <div className="flex justify-center mb-5">
              <a
                href={`https://www.google.com/calendar/render?action=TEMPLATE&text=Surya+%26+Apri+Tied+The+Knot&details=Pernikahan+Surya+%26+Apri.+More+at+https%3A%2F%2Fsuryaapritiedtheknot.site${
                  props.guest
                    ? `%2F%3Fto%3D${decodeURIComponent(props.guest)}`
                    : ''
                }%0A%0A%23SAyIDo&location=https%3A%2F%2Fmaps.app.goo.gl%2FDcMf4eq2qtz1kgzNA&dates=20250610T230000Z%2F20250611T040000Z`}
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
              <Countdown startValue={props.date} />
            </React.Suspense>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default SectionGreeting;
