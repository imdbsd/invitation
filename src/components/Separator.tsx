import * as React from 'react';
import {twMerge} from 'tailwind-merge';

interface Props {
  className?: string;
  position?: 'left' | 'right' | 'center';
  color?: string;
}

const Separator = (props: React.PropsWithChildren<Props>) => {
  const {position = 'center', color = 'bg-black'} = props;
  return (
    <div className={twMerge(props.className, 'flex flex-row items-center')}>
      {position === 'center' || position === 'right' ? (
        <span className={twMerge('flex-1 h-[1px] rounded-full', color)} />
      ) : null}
      {props.children}
      {position === 'center' || position === 'left' ? (
        <span className={twMerge('flex-1 h-[1px] rounded-full', color)} />
      ) : null}
    </div>
  );
};

export default Separator;
