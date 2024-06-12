import {
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  Flex,
  Chip,
} from "@mantine/core";
import { StationType } from "../../types";
import { useNavigate } from "react-router-dom";

type StationItemProps = {
  data: StationType;
};

export const StationItem = ({ data }: StationItemProps) => {
  const navigate = useNavigate();

  const navigateToStationPageClickHandler = () =>
    navigate(`/stations/${data.id}`, { state: data });

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image src={data.imgUrl} height={160} alt={data.name} loading="lazy" />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{data.name}</Text>
        <Badge color="pink">{data.popularity}</Badge>
      </Group>

      <Text size="sm" c="dimmed">
        {data.description}
      </Text>

      <Flex gap="md" mt="md">
        {data.tags.map((tag) => (
          <Chip key={tag}>{tag}</Chip>
        ))}
      </Flex>

      <Button
        color="blue"
        fullWidth
        mt="md"
        radius="md"
        onClick={navigateToStationPageClickHandler}
      >
        Listen now
      </Button>
    </Card>
  );
};
