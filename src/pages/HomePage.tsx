import * as React from 'react';
import SectionEvent from '../components/SectionEvent';
import SectionGallery from '../components/SectionGallery';
import SectionGift from '../components/SectionGift';

import SectionGreeting, {WEDDING_RECEPTION_DATE} from '../components/SectionGreeting';
import SectionWeddingWish from '../components/SectionWeddingWish';
import CoverPage from '../components/CoverPage';
import SectionCouples from '../components/SectionCouples';
import SectionWelcome from '../components/SectionWelcome';

import useSearchParams from '../hooks/useSearchParams';
import AppProvider from '../components/AppProvider';
import BaseHelmet, {WEDDING_RECEPTION_META} from '../components/BaseHelmet';
import SectionPhotoshoot from '../components/SectionPhotoshoot';

const MusicPlayer = React.lazy(() => import('../components/MusicPlayer'));

/* https://support.google.com/calendar/thread/81344786/how-do-i-generate-add-to-calendar-link-from-our-own-website?hl=en */
// https://decomaan.github.io/google-calendar-link-generator/

const HomePage = () => {
  const params = useSearchParams<'to'>();
  const guest = params?.to || '-';

  const containerRef = React.useRef<HTMLDivElement>(null);
  return (
    <>
      <BaseHelmet meta={WEDDING_RECEPTION_META} />
      <AppProvider>
        <div className="w-full min-h-screen bg-yellow-beach relative">
          <div
            ref={containerRef}
            className="mx-auto w-full max-w-[500px] bg-yellow-beach relative overflow-hidden"
          >
            <CoverPage title='The Wedding Reception of' guest={guest}>
              {(opened) => {
                return (
                  <>
                    <SectionWelcome title='The Wedding Reception of' opened={opened} guest={guest} />
                    <SectionGreeting guest={guest} date={WEDDING_RECEPTION_DATE} />
                    <SectionCouples />
                    <SectionEvent guest={guest} />
                    <SectionGallery guest={guest} />
                    <SectionPhotoshoot />
                    <SectionWeddingWish />                    
                    <SectionGift guest={guest} />
                    <React.Suspense fallback={null}>
                      {opened && <MusicPlayer containerRef={containerRef} />}
                    </React.Suspense>
                  </>
                );
              }}
            </CoverPage>
          </div>
        </div>
      </AppProvider>
    </>
  );
};

export default HomePage;
