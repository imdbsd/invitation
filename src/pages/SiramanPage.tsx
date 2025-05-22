import * as React from 'react';
import SectionGreeting, {SIRAMAN_DATE} from '../components/SectionGreeting';
import SectionEventSiraman from '../components/SectionEventSiraman';
import CoverPage from '../components/CoverPage';
import SectionCouples from '../components/SectionCouples';
import SectionWelcome from '../components/SectionWelcome';
import SectionGallery from '../components/SectionGallery';

import useSearchParams from '../hooks/useSearchParams';
import EndView from '../components/EndView';
import AppProvider from '../components/AppProvider';
import BaseHelmet, {SIRAMAN_META} from '../components/BaseHelmet';

const MusicPlayer = React.lazy(() => import('../components/MusicPlayer'));

const SiramanPage = () => {
  const params = useSearchParams<'to'>();
  const guest = params?.to || '-';

  const containerRef = React.useRef<HTMLDivElement>(null);
  return (
    <AppProvider>
      <BaseHelmet meta={SIRAMAN_META} />
      <div className="w-full min-h-screen bg-yellow-beach relative">
        <div
          ref={containerRef}
          className="mx-auto w-full max-w-[500px] bg-yellow-beach relative overflow-hidden"
        >
          <CoverPage guest={guest} title="LAMARAN & SIRAMAN">
            {(opened) => {
              return (
                <>
                  <SectionWelcome
                    opened={opened}
                    guest={guest}
                    title="LAMARAN & SIRAMAN"
                  />
                  <SectionGreeting guest={guest} date={SIRAMAN_DATE} />
                  <SectionCouples />
                  <SectionEventSiraman guest={guest} />
                  <SectionGallery />
                  <div className="relative bg-[#F2EEE8] px-5 py-5 text-center">
                    <EndView />
                  </div>
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
  );
};

export default SiramanPage;
