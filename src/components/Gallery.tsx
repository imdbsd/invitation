import * as React from 'react';
import {Gallery as BaseGallery, Item} from 'react-photoswipe-gallery';
import {useInView} from 'react-intersection-observer';

import 'photoswipe/dist/photoswipe.css';
import {twMerge} from 'tailwind-merge';

export type GalleryImage = {
  src: string;
  width: string | number;
  caption?: string;
  height: number | string;
  className?: string;
};

export type GalleryImages = Array<GalleryImage>;

interface Props {
  images: Array<{
    src: string;
    width: string | number;
    height: number | string;
  }>;
}

const LazyGalleryItem = (props: {image: GalleryImage}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [imgLoaded, setImgLoaded] = React.useState(false);

  if (!inView) {
    return (
      <div
        ref={ref}
        className="cursor-pointer min-h-[150px] w-full flex flex-1 bg-center bg-cover rounded-sm bg-gray-200"
      ></div>
    );
  }

  return (
    <Item
      original={props.image.src}
      height={props.image.height}
      width={props.image.width}
      alt={props.image.caption}
    >
      {({ref, open}) => (
        <div
          ref={ref}
          onClick={open}
          className={twMerge(
            'cursor-pointer min-h-[150px] w-full flex flex-1 bg-[center] bg-cover rounded-sm',
            props.image.className,
            imgLoaded ? 'bg-transparent' : 'bg-gray-200'
          )}
        >
          <div
            ref={ref}
            onClick={open}
            className={twMerge(
              'min-h-[150px] w-full flex flex-1 bg-[center] bg-cover rounded-sm',
              imgLoaded ? 'animate-fade-left' : undefined
            )}
            style={{
              backgroundImage: imgLoaded
                ? `url(${props.image.src})`
                : undefined,
            }}
          />
          <img
            className="hidden"
            src={props.image.src}
            onLoad={(event) => {
              if (event.currentTarget.complete) {
                setImgLoaded(true);
              }
            }}
          />
        </div>
      )}
    </Item>
  );
};

const Gallery = (props: Props) => {
  const {images} = props;
  return (
    <div className="grid grid-cols-2 gap-3 w-full">
      <BaseGallery
        withDownloadButton
        withCaption
        options={{
          zoom: true,
          padding: {
            top: 60,
            bottom: 60,
            left: 20,
            right: 20,
          },
        }}
      >
        {images.map((image, index) => (
          <LazyGalleryItem key={`image-${index}`} image={image} />
        ))}
      </BaseGallery>
    </div>
  );
};

export default Gallery;
