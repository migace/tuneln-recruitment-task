import { useEffect, useRef, useState } from "react";

export const useAudioPlayer = (streamUrl: string) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [audioSource, setAudioSource] = useState<string>("");

  const onPlayClickHandler = () => {
    isPlaying ? audioRef.current?.pause() : audioRef.current?.play();

    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    setAudioSource(streamUrl);
  }, [streamUrl]);

  return {
    audioRef,
    onPlayClickHandler,
    audioSource,
    isPlaying,
    setIsPlaying,
  };
};
