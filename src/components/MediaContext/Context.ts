import * as React from 'react';

interface Context {
  isPlayingBGMusic: boolean;
  isPlayingVideo: boolean;
  setPlayMedia: (type: 'music' | 'video', isPlaying: boolean) => void;
}

export const MediaContext = React.createContext<Context>({
  isPlayingBGMusic: false,
  isPlayingVideo: false,
  setPlayMedia: () => {},
});

export const useMediaContext = () => React.useContext(MediaContext)