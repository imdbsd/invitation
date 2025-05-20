import * as React from 'react';
import Skeleton from 'react-loading-skeleton';
import SectionWrapper from './SectionWrapper';
import Separator from './Separator';
import {GalleryImages} from './Gallery';
import {useMediaContext} from './MediaContext/Context';
import {addBaseURL} from '../helpers/common';
import {InView} from 'react-intersection-observer';
import {twMerge} from 'tailwind-merge';

const Gallery = React.lazy(() => import('./Gallery'));
const YoutubePlayer = React.lazy(() => import('./YoutubePlayer'));

const vertical = {width: 1080, height: 1920};
const horizontal = {width: 1920, height: 1080};
const baseCaption = 'Surya & Apri ~ 11 Juni 2025';

const images: GalleryImages = [
  {
    src: addBaseURL('galleries/gallery-1.jpg'),
    ...horizontal,
    caption: baseCaption,
  },
  {
    src: addBaseURL('galleries/gallery-2.jpg'),
    ...vertical,
    caption: baseCaption,
  },
  {
    src: addBaseURL('galleries/gallery-3.jpg'),
    ...vertical,
    className: 'bg-[center_bottom]',
    caption: baseCaption,
  },
  {
    src: addBaseURL('galleries/gallery-4.jpg'),
    ...vertical,
    className: 'bg-[center_210px]',
    caption: baseCaption,
  },
  {
    src: addBaseURL('galleries/gallery-5.jpg'),
    ...vertical,
    className: 'bg-[center_200px]',
    caption: baseCaption,
  },
  {
    src: addBaseURL('galleries/gallery-6.jpg'),
    ...horizontal,
    caption: baseCaption,
  },
  {
    src: addBaseURL('galleries/gallery-7.jpg'),
    ...horizontal,
    caption: baseCaption,
  },
  {
    src: addBaseURL('galleries/gallery-8.jpg'),
    ...horizontal,
    caption: baseCaption,
  },
  {
    src: addBaseURL('galleries/gallery-9.jpg'),
    ...horizontal,
    caption: baseCaption,
  },
  {
    src: addBaseURL('galleries/gallery-10.jpg'),
    ...horizontal,
    caption: baseCaption,
  },
  {
    src: addBaseURL('galleries/gallery-11.jpg'),
    ...horizontal,
    caption: baseCaption,
  },
  {
    src: addBaseURL('galleries/gallery-12.jpg'),
    ...vertical,
    caption: baseCaption,
  },
  {
    src: addBaseURL('galleries/gallery-13.jpg'),
    ...horizontal,
    caption: baseCaption,
  },
  {
    src: addBaseURL('galleries/gallery-14.jpg'),
    ...horizontal,
    caption: baseCaption,
  },
];

const GallerySection = (props: {capturedFile: File | null}) => {
  const {capturedFile} = props;
  const {isPlayingVideo, setPlayMedia} = useMediaContext();
  const isSupportShareToIG = React.useMemo(() => {
    if (!capturedFile) {
      console.error('Generating template');
      return false;
    }
    if (
      typeof navigator !== 'undefined' &&
      capturedFile &&
      navigator.canShare &&
      navigator.canShare({files: [capturedFile]})
    ) {
      return true;
    }
    console.error('Web Share API is not supported on this browser');
    return false;
  }, [capturedFile]);

  const shareToIG = React.useCallback(() => {
    if (capturedFile) {
      navigator
        .share({
          files: [capturedFile],
          title: 'The Wedding of Surya & Apri',
        })
        .catch(() => {
          console.error('Web Share API is not supported on this browser');
        });
    }
  }, [capturedFile]);
  return (
    <SectionWrapper className="bg-[#00000069]" id="section-gallery">
      <div className="relative p-5 pb-20 min-h-screen flex items-center flex-col justify-evenly">
        <h3 className="font-pinyon-script text-4xl my-4 text-right w-full text-white">
          <Separator position="right" color="bg-white">
            <span className="font-serif mb-2 text-white ml-2">Wedding</span>
          </Separator>
          Gallery
        </h3>
        <div className="w-full mb-5">
          <React.Suspense
            fallback={<Skeleton height={225} baseColor="#dadada" />}
          >
            <InView triggerOnce threshold={0.2}>
              {({ref, inView}) => (
                <div ref={ref} className={twMerge(inView && 'animate-fade-up')}>
                  <YoutubePlayer
                    playing={isPlayingVideo}
                    url="https://youtu.be/L6SA8ml-j98"
                    onPlay={() => setPlayMedia('video', true)}
                    onPause={() => setPlayMedia('video', false)}
                  />
                </div>
              )}
            </InView>
          </React.Suspense>
        </div>
        <React.Suspense
          fallback={
            <div className="grid grid-cols-2 gap-3 w-full">
              <Skeleton height={150} baseColor="#dadada" />
              <Skeleton height={150} baseColor="#dadada" />
            </div>
          }
        >
          <Gallery images={images} />
        </React.Suspense>
        {isSupportShareToIG ? (
          <button onClick={shareToIG} className="mt-10 flex flex-row items-center bg-yellow-beach p-2 rounded-sm text-xs font-poppins cursor-pointer">
            Share to{' '}
            <img className="ml-2 w-6" src={addBaseURL('instagram.svg')} />
          </button>
        ) : null}
      </div>
    </SectionWrapper>
  );
};

export default GallerySection;
