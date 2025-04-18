import * as React from 'react';
import Skeleton from 'react-loading-skeleton';
import SectionWrapper from './SectionWrapper';
import Separator from './Separator';
import {GalleryImages} from './Gallery';
import {useMediaContext} from './MediaContext/Context';
import {addBaseURL} from '../helpers/common';

const Gallery = React.lazy(() => import('./Gallery'));
const YoutubePlayer = React.lazy(() => import('./YoutubePlayer'));

const vertical = {width: 1080, height: 1920};
const horizontal = {width: 1920, height: 1080};

const images: GalleryImages = [
  {src: addBaseURL('galleries/gallery-1.jpg'), ...horizontal},
  {src: addBaseURL('galleries/gallery-2.jpg'), ...vertical},
  {
    src: addBaseURL('galleries/gallery-3.jpg'),
    ...vertical,
    className: 'bg-[center_bottom]',
  },
  {src: addBaseURL('galleries/gallery-4.jpg'), ...vertical},
  {src: addBaseURL('galleries/gallery-5.jpg'), ...vertical},
  {src: addBaseURL('galleries/gallery-6.jpg'), ...horizontal},
  {src: addBaseURL('galleries/gallery-7.jpg'), ...horizontal},
  {src: addBaseURL('galleries/gallery-8.jpg'), ...horizontal},
  {src: addBaseURL('galleries/gallery-9.jpg'), ...horizontal},
  {src: addBaseURL('galleries/gallery-10.jpg'), ...horizontal},
  {src: addBaseURL('galleries/gallery-11.jpg'), ...horizontal},
  {src: addBaseURL('galleries/gallery-12.jpg'), ...vertical},
  {src: addBaseURL('galleries/gallery-13.jpg'), ...horizontal},
  {src: addBaseURL('galleries/gallery-14.jpg'), ...horizontal},
];

const GallerySection = () => {
  const {isPlayingVideo, setPlayMedia} = useMediaContext();
  return (
    <SectionWrapper className="bg-[#00000069]">
      <div className="relative p-5 pb-20 min-h-screen flex items-center flex-col justify-evenly">
        <h3 className="font-monsieur-lad text-4xl my-4 text-right w-full text-white">
          <Separator position="right" color="bg-white">
            <span className="font-serif mb-2 text-white ml-2">Wedding</span>
          </Separator>
          Gallery
        </h3>
        <div className="w-full mb-5">
          <React.Suspense
            fallback={<Skeleton height={225} baseColor="#dadada" />}
          >
            <YoutubePlayer
              playing={isPlayingVideo}
              url="https://youtu.be/L6SA8ml-j98"
              onPlay={() => setPlayMedia('video', true)}
              onPause={() => setPlayMedia('video', false)}
            />
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
      </div>
    </SectionWrapper>
  );
};

export default GallerySection;
