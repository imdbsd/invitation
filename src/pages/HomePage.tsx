import * as React from 'react';
import SectionEvent from '../components/SectionEvent';
import SectionGallery from '../components/SectionGallery';
import SectionGift from '../components/SectionGift';

import SectionGreeting, {WEDDING_DATE} from '../components/SectionGreeting';
import SectionWeddingWish from '../components/SectionWeddingWish';
import CoverPage from '../components/CoverPage';
import SectionCouples from '../components/SectionCouples';
import SectionWelcome from '../components/SectionWelcome';

import useSearchParams from '../hooks/useSearchParams';

const MusicPlayer = React.lazy(() => import('../components/MusicPlayer'));

/* https://support.google.com/calendar/thread/81344786/how-do-i-generate-add-to-calendar-link-from-our-own-website?hl=en */
// https://decomaan.github.io/google-calendar-link-generator/

const HomePage = () => {
  const params = useSearchParams<'to'>();
  const guest = params?.to || '-';

  const containerRef = React.useRef<HTMLDivElement>(null);  
  return (
    <>
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
                  <SectionGreeting guest={guest} date={WEDDING_DATE} />
                  <SectionCouples />
                  <SectionEvent guest={guest} />
                  <SectionGallery />
                  <SectionWeddingWish />
                  <SectionGift />
                  <React.Suspense fallback={null}>
                    {opened && <MusicPlayer containerRef={containerRef} />}
                  </React.Suspense>
                </>
              );
            }}
          </CoverPage>
        </div>
      </div>
    </>
  );
};

export default HomePage;
