import { Flex, Select } from "@mantine/core";

type FilterByProps = {
  filterBy: string | null;
  setFilterBy: (value: string | null) => void;
  filterByOptions: { value: string; label: string }[];
  placeholder?: string;
};

export const FilterBy = ({
  filterBy,
  setFilterBy,
  filterByOptions,
  placeholder = "Filter By",
}: FilterByProps) => (
  <Flex>
    <Select
      label={placeholder}
      placeholder="Pick value"
      onChange={(value) => setFilterBy(value)}
      value={filterBy}
      data={filterByOptions}
    />
  </Flex>
);
