import * as React from 'react';
import {twMerge} from 'tailwind-merge';
import {useInView} from 'react-intersection-observer';

type Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
> & {
  bgImage?: {src: string; className?: string};
  children: React.ReactNode | ((inView: boolean) => React.ReactNode);
};

const SectionWrapper = (props: Props) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const {children, className, bgImage, ...rest} = props;

  return (
    <section
      ref={ref}
      className={twMerge('min-h-screen relative', className)}
      {...rest}
    >
      {inView ? (
        <>
          {bgImage ? (
            <div
              className={twMerge(
                'h-screen w-full bg-cover bg-[center_bottom] absolute',
                bgImage.className
              )}
              style={{
                backgroundImage: `url(${bgImage.src})`,
              }}
            ></div>
          ) : null}
          {typeof children === 'function' ? children(inView) : children}
        </>
      ) : null}
    </section>
  );
};

export default SectionWrapper;
