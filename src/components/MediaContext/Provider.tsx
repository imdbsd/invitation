import * as React from 'react';
import {MediaContext} from './Context';

const MediaContextProvider = (props: React.PropsWithChildren) => {
  const [isPlayingBGMusic, setIsPlayingBGMusic] = React.useState(false);
  const [isPlayingVideo, setIsPlayingVideo] = React.useState(false);
  const setPlayMedia = React.useCallback(
    (type: 'music' | 'video', isPlaying: boolean) => {
      console.log({type, isPlaying});
      switch (type) {
        case 'music': {
          if (isPlaying) {
            setIsPlayingBGMusic(true);
            if (isPlayingVideo) {
              setIsPlayingVideo(false);
            }
          } else {
            setIsPlayingBGMusic(false);
          }
          break;
        }
        case 'video': {
          if (isPlaying) {
            setIsPlayingVideo(true);
            if (isPlayingBGMusic) {
              setIsPlayingBGMusic(false);
            }
          } else {
            setIsPlayingVideo(false);
          }
          break;
        }
      }
    },
    [isPlayingBGMusic, isPlayingVideo, setIsPlayingBGMusic, setIsPlayingVideo]
  );

  return (
    <MediaContext.Provider
      value={{
        isPlayingBGMusic,
        isPlayingVideo,
        setPlayMedia,
      }}
    >
      {props.children}
    </MediaContext.Provider>
  );
};

export default MediaContextProvider;
