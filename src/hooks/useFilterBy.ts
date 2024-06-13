import { useMemo, useState } from "react";

type Props = {
  data: { tags: string[] }[];
  defaultLabel?: { value: string; label: string };
};

export const useFilterBy = ({
  data,
  defaultLabel = { value: "", label: "No filter" },
}: Props) => {
  const [filterBy, setFilterBy] = useState<string | null>("");

  const filterByOptions = useMemo(() => {
    const options = new Set();

    data.forEach((item) => {
      item.tags.forEach((tag) => options.add(tag));
    });

    return [defaultLabel].concat(
      Array.from(options).map((option) => ({
        value: option as string,
        label: option as string,
      }))
    );
  }, [data, defaultLabel]);

  return {
    filterBy,
    setFilterBy,
    filterByOptions,
  };
};
