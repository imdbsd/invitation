import * as React from 'react';
import {Play, Pause} from 'lucide-react';
import {useMediaContext} from './MediaContext/Context';
import { addBaseURL } from '../helpers/common';

interface Props {
  containerRef?: React.RefObject<HTMLDivElement | null>;
}

const BUTTON_SIZE = 40;
const PADDING_RIGHT = 10;

const MusicPlayer = (props: Props) => {
  const audioRef = React.useRef<HTMLAudioElement>(null);
  const [xPosition, setXPosition] = React.useState<number | undefined>(
    undefined
  );
  const {isPlayingBGMusic, setPlayMedia} = useMediaContext();

  const toggleAudioHTML = React.useCallback((isPlaying: boolean) => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, []);

  const togglePlay = React.useCallback(() => {
    const newState = !isPlayingBGMusic;
    setPlayMedia('music', newState);
    toggleAudioHTML(newState);
  }, [isPlayingBGMusic, setPlayMedia, toggleAudioHTML]);

  const calculateXPos = React.useCallback(() => {
    if (props.containerRef?.current) {
      const containerWidth = props.containerRef.current.clientWidth;
      const containerXPos = props.containerRef.current.offsetLeft;

      const xPos =
        containerXPos + containerWidth - (BUTTON_SIZE + PADDING_RIGHT);

      setXPosition(xPos);
    }
  }, [props]);

  React.useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
    }
    calculateXPos();
  }, [calculateXPos]);

  React.useEffect(() => {
    toggleAudioHTML(isPlayingBGMusic);
  }, [isPlayingBGMusic, toggleAudioHTML]);

  return (
    <>
      <button
        onClick={togglePlay}
        className="p-2 bg-[#F7CFD8] rounded-full cursor-pointer bottom-5 z-20 fixed"
        style={{
          left: xPosition,
        }}
      >
        {isPlayingBGMusic ? (
          <Pause color="#FFF" fill="#FFF" />
        ) : (
          <Play color="#FFF" fill="#FFF" />
        )}
      </button>
      <audio autoPlay ref={audioRef} controls className="hidden" loop preload="metadata">
        <source src={addBaseURL('bg-audio.mp3')} type="audio/mp3" />
      </audio>
    </>
  );
};

export default MusicPlayer;
