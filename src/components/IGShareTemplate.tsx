import * as React from 'react';
import {addBaseURL} from '../helpers/common';

const classNameSize = 'w-[540px] h-[960px]';

const IGShareTemplate = (props: {
  containerRef: React.RefObject<HTMLDivElement | null>;
}) => {
  return (
    <section
      ref={props.containerRef}
      className={`${classNameSize} fixed top-0 left-9999999`}
      id="ig-share-template"
    >
      <div className="w-full h-full relative">
        <div
          className={`${classNameSize} bg-cover bg-[center_-150px] absolute`}
          style={{
            backgroundImage: `url(${addBaseURL('galleries/gallery-3.jpg')})`,
          }}
        />
        <div
          className={`${classNameSize} mx-auto relative z-20`}
          style={{
            background:
              'linear-gradient(rgba(255, 241, 213, 0) 0%, rgba(255, 241, 213, 0.3) 70%, rgb(255, 241, 213) 80%)',
          }}
        >
          <div
            className={
              'absolute bottom-[90px] right-0 left-0 flex flex-col justify-center items-center z-10'
            }
          >
            <h1 className="flex flex-col items-center text-[#4B3B2A] text-sm tracking-[2px] font-normal">
              <span>{'THE WEDDING OF'}</span>
            </h1>
            <p className="block text-4xl text-[#4B3B2A] font-cormorant">
              Surya & Apri
            </p>
            <p className="block text-xl text-[#4B3B2A] font-cormorant">
              11 Juni 2025 - #SAyIDo
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IGShareTemplate;
