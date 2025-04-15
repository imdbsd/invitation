import * as React from 'react';
import {MediaContext} from './Context';

const MediaContextProvider = (props: React.PropsWithChildren) => {
  const prevValue = React.useRef<{
    isPlayingBGMusic: boolean;
    isPlayingVideo: boolean;
  }>({
    isPlayingBGMusic: false,
    isPlayingVideo: false,
  });

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

  const listenVisibiltyChange = React.useCallback(() => {
    if (typeof document !== 'undefined') {
      if (document.hidden) {
        prevValue.current = {
          isPlayingBGMusic,
          isPlayingVideo,
        };
        setPlayMedia('music', false);
        setPlayMedia('video', false);
      } else {
        if (prevValue.current.isPlayingBGMusic) {
          setPlayMedia('music', true);
        }
        if (prevValue.current.isPlayingVideo) {
          setPlayMedia('video', true);
        }
      }
    }
  }, [setPlayMedia, isPlayingBGMusic, isPlayingVideo]);

  React.useEffect(() => {
    if (typeof document !== 'undefined') {
      document.addEventListener('visibilitychange', listenVisibiltyChange);
    }

    return () => {
      if (typeof document !== 'undefined') {
        document.removeEventListener('visibilitychange', listenVisibiltyChange);
      }
    };
  }, [listenVisibiltyChange]);

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
