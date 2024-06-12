import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import type { StationsType } from "../types";
import { API_URL } from "../config";

export const stationsApi = createApi({
  reducerPath: "stationsApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getStations: builder.query<{ data: StationsType }, void>({
      query: () => `stations.json`,
    }),
  }),
});

export const { useGetStationsQuery } = stationsApi;
