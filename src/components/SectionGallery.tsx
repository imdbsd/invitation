import * as React from 'react';
import Skeleton from 'react-loading-skeleton';
import SectionWrapper from './SectionWrapper';
import Separator from './Separator';
import {GalleryImages} from './Gallery';
import {useMediaContext} from './MediaContext/Context';

const Gallery = React.lazy(() => import('./Gallery'));
const YoutubePlayer = React.lazy(() => import('./YoutubePlayer'));

const images: GalleryImages = [
  {src: '/galleries/gallery-1.jpg', width: 1920, height: 1080},
  {src: '/galleries/gallery-2.jpg', width: 1080, height: 1920},
];

const GallerySection = () => {
  const {isPlayingVideo, setPlayMedia} = useMediaContext();
  return (
    <SectionWrapper className="bg-[#00000069]">
      <div className="relative px-4 pt-4 pb-20 min-h-screen flex items-center flex-col justify-evenly">
        <h3 className="font-monsieur-lad text-4xl my-4 text-right w-full text-white">
          <Separator position="right" color="bg-white">
            <span className="font-serif mb-2 text-white ml-2">Wedding</span>
          </Separator>
          Gallery
        </h3>
        <div className="w-full">
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
