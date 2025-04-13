import * as React from 'react';
import Player, {YouTubePlayerProps} from 'react-player/youtube';
import {twMerge} from 'tailwind-merge';
import {useInView} from 'react-intersection-observer';

const YoutubePlayer = (props: YouTubePlayerProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <div
      ref={ref}
      className="w-full pt-[60.25%] rounded-xl overflow-hidden relative bg-gray-200"
    >
      {inView ? (
        <Player
          {...props}
          width="100%"
          height="100%"
          className={twMerge('absolute top-0 left-0', props.className)}
          muted
          controls
        />
      ) : null}
    </div>
  );
};

export default YoutubePlayer;
