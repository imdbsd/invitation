import * as React from 'react';
import Skeleton from 'react-loading-skeleton';
import {Gift} from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import Separator from './Separator';

const SectionPhotoResult = () => {
  const [openGift, setOpenGift] = React.useState(false);

  return (
    <SectionWrapper className="min-h-[200px]" id="section-photo-result">
      <div className="relative px-5 py-16 text-center">
      <Separator position="center">
            <h2 className="font-cormorant mx-2">
              The <span className="font-pinyon-script">Moment</span>
            </h2>
          </Separator>
       
        <p className="text-[#4B4B4B] max-w-xl mx-auto mb-8 text-sm font-poppins">
          Scan atau kunjungi tautan dibawah untuk melihat hasil foto dari moment-moment special
        </p>
       
      </div>
    </SectionWrapper>
  );
};

export default SectionPhotoResult;
