import * as React from 'react';
import Skeleton from 'react-loading-skeleton';
import {Gift} from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import EndView from './EndView';
import useTrack from '../hooks/useTrack';

const ATMCard = React.lazy(() => import('./ATMCard'));

const GiftSection = (props: {guest?: string | undefined}) => {
  const [trackTfSurya] = useTrack('TfSurya')
  const [trackTfAep] = useTrack('TfAep')
  const [openGift, setOpenGift] = React.useState(false);

  return (
    <SectionWrapper className="min-h-[200px]" id="section-gift">
      <div className="relative bg-[#F2EEE8] px-5 py-16 text-center">
        <div className="absolute top-0 left-0 w-full border-l-transparent border-l-[100px] border-r-transparent border-r-[100px] border-t-[#dadada] border-t-[50px]" />
        <h2 className="text-3xl font-cormorant italic font-medium mb-6">
          Wedding Gift
        </h2>
        <p className="text-[#4B4B4B] max-w-xl mx-auto mb-8 text-sm font-poppins">
          Doa Restu Anda merupakan karunia yang sangat berarti bagi kami. Dan
          jika memberi adalah ungkapan tanda kasih Anda, Anda dapat memberi kado
          melalui:
        </p>
        <button
          className="bg-black text-goldy px-6 py-3 rounded text-sm flex items-center justify-center gap-2 mx-auto cursor-pointer"
          onClick={() => {
            setOpenGift((open) => (open === false ? true : open));
          }}
        >
          <Gift /> Kirim Hadiah
        </button>
        {openGift ? (
          <div className="my-5">
            <React.Suspense
              fallback={
                <>
                  <Skeleton height={250} baseColor="#dadada" />
                  <Skeleton height={250} baseColor="#dadada" />
                </>
              }
            >
              <>
                <div className="animate-fade-up mb-5">
                  <ATMCard
                    bank="BCA"
                    address="8580099662"
                    name="I Made Budi Surya Darma"
                    onClick={() => {
                      trackTfSurya(props.guest)
                    }}
                  />
                </div>
                <div className="animate-fade-up">
                  <ATMCard
                    bank="BNI"
                    address="1180314569"
                    name="Apriyanti Nurcahyani"
                    onClick={() => {
                      trackTfAep(props.guest)
                    }}
                  />
                </div>
              </>
            </React.Suspense>
          </div>
        ) : null}
        <EndView />
      </div>
    </SectionWrapper>
  );
};

export default GiftSection;
