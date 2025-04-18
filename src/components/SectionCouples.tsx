import SectionWrapper from './SectionWrapper';
import {addBaseURL} from '../helpers/common';
import {InView} from 'react-intersection-observer';
import {twMerge} from 'tailwind-merge';

const SectionCouples = () => {
  return (
    <SectionWrapper
      id="section-couples"
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
              alt="Image Couple - Apri & Surya"
              width={240}
              height={150}
              className={twMerge(
                'rounded-xl w-[480px] border-double border-[3px] border-yellow-beach opacity-0',
                inView && 'animate-fade-up'
              )}
            />
          )}
        </InView>
        <div className="text-center text-goldy font-cormorant">
          <p className="text-3xl">I Made Budi Surya Darma</p>
          <p className="text-white">
            Putra dari Bapak I Made Damiartha & Ibu Ni Ketut Bukti
          </p>
          <p className="text-3xl">&</p>
          <p className="text-3xl">Apriyanti Nurcahyani</p>
          <p className="text-white">Putri dari Bapak. Suwardi & Ibu Parnasih</p>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default SectionCouples;
