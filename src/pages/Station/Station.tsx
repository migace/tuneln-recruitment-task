import { Badge, Flex, Image, Text, Title } from "@mantine/core";

import { AudioPlayer } from "../../components/AudioPlayer";

import { useStation } from "./useStation";

export const Station = () => {
  const { isMobile, station } = useStation();

  return (
    <>
      <Flex
        align="start"
        mb={64}
        gap={24}
        direction={isMobile ? "column" : "row"}
      >
        <Image src={station.imgUrl} height={192} alt={station.name} />
        <Flex direction="column" gap={16}>
          <Flex align="center" gap={16}>
            <Title order={1}>{station.name}</Title>
            <Badge color="pink">{station.popularity}</Badge>
          </Flex>
          <AudioPlayer streamUrl={station.streamUrl} />
        </Flex>
      </Flex>
      <Text size="24px">{station.description}</Text>
    </>
  );
};
