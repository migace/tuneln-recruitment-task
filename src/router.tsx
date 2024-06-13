import { Navigate, createBrowserRouter } from "react-router-dom";

import { App } from "./App.tsx";
import { Station, Stations } from "./pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to="stations" />,
      },
      {
        path: "stations",
        element: <Stations />,
      },
      {
        path: "stations/:stationId",
        element: <Station />,
      },
    ],
  },
]);
