import { em, Flex, SimpleGrid, Title, Loader } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

import { FilterBy } from "../../components/FilterBy/FilterBy";

import { StationItem } from "./StationItem";
import { useStations } from "./useStations";

export const Stations = () => {
  const {
    filteredStations,
    filterBy,
    setFilterBy,
    filterByOptions,
    sortBy,
    setSortBy,
    isFetching,
  } = useStations();
  const isMobile = useMediaQuery(`(max-width: ${em(750)})`);

  return (
    <>
      <Flex
        justify="space-between"
        align="center"
        mb="lg"
        direction={isMobile ? "column" : "row"}
      >
        <Title order={1}>Stations</Title>
        <Flex gap={8}>
          <FilterBy
            placeholder="Sort by"
            filterBy={sortBy}
            setFilterBy={setSortBy}
            filterByOptions={[
              { value: "", label: "" },
              { value: "popularity", label: "popularity" },
              { value: "name", label: "name" },
            ]}
          />
          <FilterBy
            filterBy={filterBy}
            setFilterBy={setFilterBy}
            filterByOptions={filterByOptions}
          />
        </Flex>
      </Flex>
      {isFetching ? (
        <Flex justify="center" py={150}>
          <Loader color="blue" />
        </Flex>
      ) : (
        <SimpleGrid cols={isMobile ? 1 : 3}>
          {filteredStations.map((station) => (
            <StationItem key={station.name} data={station} />
          ))}
        </SimpleGrid>
      )}
    </>
  );
};
