import * as React from 'react';
import {Play, Pause} from 'lucide-react';

interface Props {
  containerRef?: React.RefObject<HTMLDivElement | null>;
}

const BUTTON_SIZE = 40;
const PADDING_RIGHT = 20;

const MusicPlayer = (props: Props) => {
  const audioRef = React.useRef<HTMLAudioElement>(null);
  const [xPosition, setXPosition] = React.useState<number | undefined>(
    undefined
  );
  const [isPlaying, setIsPlaying] = React.useState(false);

  const togglePlay = React.useCallback(() => {
    if (audioRef.current) {
      const newState = !isPlaying;
      setIsPlaying(newState);

      if (newState) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

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
      audioRef.current.volume = 0.2;
    }
    calculateXPos();
  }, [calculateXPos]);

  return (
    <>
      <button
        onClick={togglePlay}
        className="p-2 bg-[#F7CFD8] rounded-full cursor-pointer bottom-5 z-20 fixed"
        style={{
          left: xPosition,
        }}
      >
        {isPlaying ? (
          <Pause color="#FFF" fill="#FFF" />
        ) : (
          <Play color="#FFF" fill="#FFF" />
        )}
      </button>
      <audio ref={audioRef} controls className="hidden" loop preload="metadata">
        <source src="/bg-audio.mp3" type="audio/mp3" />
      </audio>
    </>
  );
};

export default MusicPlayer;