import { useEffect, useState } from "react";

import { useGetStationsQuery } from "../../services/stationsService";
import { useFilterBy } from "../../hooks/useFilterBy";

export const useStations = () => {
  const { data: stations, isFetching } = useGetStationsQuery();
  const [filteredStations, setFilteredStations] = useState(
    stations?.data ?? []
  );
  const [sortBy, setSortBy] = useState<string | null>("");
  const { filterBy, setFilterBy, filterByOptions } = useFilterBy({
    data: stations?.data ?? [],
  });

  useEffect(() => {
    if (filterBy) {
      setSortBy("");
      setFilteredStations(
        stations?.data?.filter((station) => station.tags.includes(filterBy)) ??
          []
      );
    } else {
      setFilteredStations(stations?.data ?? []);
    }
  }, [filterBy, stations]);

  useEffect(() => {
    switch (sortBy) {
      case "popularity":
        setFilteredStations((prevStations) =>
          prevStations.slice().sort((a, b) => b.popularity - a.popularity)
        );
        break;
      case "name":
        setFilteredStations((prevStations) =>
          prevStations.slice().sort((a, b) => a.name.localeCompare(b.name))
        );
        break;
    }
  }, [sortBy, stations]);

  return {
    filteredStations,
    filterBy,
    setFilterBy,
    filterByOptions,
    sortBy,
    setSortBy,
    isFetching,
  };
};
