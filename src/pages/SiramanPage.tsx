import * as React from 'react';
import SectionGallery from '../components/SectionGallery';
import SectionGreeting from '../components/SectionGreeting';
import SectionEventSiraman from '../components/SectionEventSiraman';
import CoverPage from '../components/CoverPage';
import SectionCouples from '../components/SectionCouples';
import SectionWelcome from '../components/SectionWelcome';

import useSearchParams from '../hooks/useSearchParams';
import EndView from '../components/EndView';

const MusicPlayer = React.lazy(() => import('../components/MusicPlayer'));

const SiramanPage = () => {
  const params = useSearchParams<'to'>();
  const guest = params?.to || '-';

  const containerRef = React.useRef<HTMLDivElement>(null);
  return (
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
                <SectionGreeting guest={guest} />
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
  );
};

export default SiramanPage;
