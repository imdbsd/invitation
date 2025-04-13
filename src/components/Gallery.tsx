import * as React from 'react';
import {Gallery as BaseGallery, Item} from 'react-photoswipe-gallery';
import {useInView} from 'react-intersection-observer';

import 'photoswipe/dist/photoswipe.css';

export type GalleryImage = {
  src: string;
  width: string | number;
  height: number | string;
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

  if (!inView) {
    return (
      <div
        ref={ref}
        className="cursor-pointer min-h-[150px] w-full flex flex-1 bg-center bg-cover rounded-sm bg-gray-200"
      />
    );
  }

  return (
    <Item
      original={props.image.src}
      height={props.image.height}
      width={props.image.width}
    >
      {({ref, open}) => (
        <div
          ref={ref}
          onClick={open}
          className="cursor-pointer min-h-[150px] w-full flex flex-1 bg-center bg-cover rounded-sm"
          style={{
            backgroundImage: `url(${props.image.src})`,
          }}
        />
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
