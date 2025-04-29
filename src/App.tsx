import * as React from 'react';
import SectionEvent from './components/SectionEvent';
import SectionGallery from './components/SectionGallery';
import SectionGift from './components/SectionGift';
import MusicPlayer from './components/MusicPlayer';

import useSearchParams from './hooks/useSearchParams';

import SectionGreeting from './components/SectionGreeting';
import SectionWeddingWish from './components/SectionWeddingWish';
import CoverPage from './components/CoverPage';
import SectionCouples from './components/SectionCouples';
import SectionWelcome from './components/SectionWelcome';

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
        <CoverPage guest={guest}>
          {(opened) => {
            return (
              <>
                <SectionWelcome opened={opened} guest={guest} />
                <SectionGreeting guest={guest} />
                <SectionCouples />
                <SectionEvent guest={guest} />
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
