import { ActionIcon } from "@mantine/core";
import { IconPlayerPlay, IconPlayerPause } from "@tabler/icons-react";
import { useAudioPlayer } from "./useAudioPlayer";

type AudioPlayerProps = {
  streamUrl: string;
};

export const AudioPlayer = ({ streamUrl }: AudioPlayerProps) => {
  const { audioRef, onPlayClickHandler, audioSource, isPlaying, setIsPlaying } =
    useAudioPlayer(streamUrl);

  return (
    <>
      <ActionIcon
        variant="filled"
        color="pink"
        onClick={onPlayClickHandler}
        size={48}
      >
        {isPlaying ? (
          <IconPlayerPause
            style={{ width: "70%", height: "70%" }}
            stroke={1.5}
          />
        ) : (
          <IconPlayerPlay
            style={{ width: "70%", height: "70%" }}
            stroke={1.5}
          />
        )}
      </ActionIcon>
      <audio
        style={{ display: "none" }}
        ref={audioRef}
        src={audioSource}
        controls
        autoPlay
        onPlaying={() => setIsPlaying(true)}
      ></audio>
    </>
  );
};
