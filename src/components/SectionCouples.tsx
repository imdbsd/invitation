import SectionWrapper from './SectionWrapper';
import {addBaseURL} from '../helpers/common';
import {InView} from 'react-intersection-observer';
import {twMerge} from 'tailwind-merge';

const SectionCouples = () => {
  return (
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
        <h3 className="font-cormorant text-4xl text-center my-2">Mempelai</h3>
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
                inView && 'animate-slide-up-fade-in'
              )}
            />
          )}
        </InView>
        <div className="text-center">
          <div className="text-center">
            <p className="text-goldy text-3xl font-cormorant">
              I Made Budi Surya Darma
            </p>
            <p>Putra dari Bapak I Made Damiartha & Ibu Ni Ketut Bukti</p>
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
  );
};

export default SectionCouples;
