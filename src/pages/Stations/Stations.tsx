import { Flex, Select, SimpleGrid, Title } from "@mantine/core";
import { useGetStationsQuery } from "../../services/stationsService";
import { StationItem } from "./StationItem";
import { useState } from "react";

export const Stations = () => {
  const { data: stations } = useGetStationsQuery();
  const [sortBy, setSortBy] = useState<string | null>("popularity");

  console.log(stations);

  return (
    <>
      <Flex justify="space-between">
        <Title order={1} mb="lg">
          Stations
        </Title>
        <Flex>
          <Select
            label="Sort By"
            placeholder="Pick value"
            onChange={(value) => setSortBy(value)}
            value={sortBy}
            data={["React", "Angular", "Vue", "Svelte"]}
          />
        </Flex>
      </Flex>
      <SimpleGrid cols={3}>
        {stations?.data?.map((station) => (
          <StationItem key={station.id} data={station} />
        ))}
      </SimpleGrid>
    </>
  );
};
