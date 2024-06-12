import { ActionIcon, Badge, Flex, Image, Text, Title } from "@mantine/core";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { IconPlayerPlay, IconPlayerPause } from "@tabler/icons-react";

import { StationType } from "../../types";
import { useEffect, useRef, useState } from "react";

export const Station = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [audioSource, setAudioSource] = useState<string>("");
  const { stationId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { name, description, popularity, streamUrl, imgUrl } =
    location.state as StationType;

  const onPlayClickHandler = () => {
    isPlaying ? audioRef.current?.pause() : audioRef.current?.play();

    setIsPlaying(!isPlaying);
  };

  if (!stationId) {
    navigate("/stations");
  }

  useEffect(() => {
    setAudioSource(streamUrl);
  }, [streamUrl]);

  return (
    <>
      <Flex align="start" mb={64} gap={24}>
        <Image src={imgUrl} height={192} alt={name} />
        <Flex direction="column" gap={16}>
          <Flex align="center" gap={16}>
            <Title order={1}>{name}</Title>
            <Badge color="pink">{popularity}</Badge>
          </Flex>
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
        </Flex>
      </Flex>

      <Text size="24px">{description}</Text>

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
