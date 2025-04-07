import * as React from 'react';
import {twMerge} from 'tailwind-merge';

type Props = React.PropsWithChildren<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
    bgImage?: {src: string; className?: string};
  }
>;

const SectionWrapper = (props: Props) => {
  const {children, className, bgImage, ...rest} = props;

  return (
    <section
      className={twMerge(
        'w-full min-h-screen bg-yellow-beach relative',
        className
      )}
      {...rest}
    >
      <div className="mx-auto w-full max-w-[430px] min-h-screen bg-yellow-beach relative overflow-hidden">
        {bgImage ? (
          <div
            className={twMerge(
              'h-screen w-full bg-cover bg-[center_bottom_0px] absolute',
              bgImage.className
            )}
            style={{
              backgroundImage: `url(${bgImage.src})`,
            }}
          ></div>
        ) : null}

        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
