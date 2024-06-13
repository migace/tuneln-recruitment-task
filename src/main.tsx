import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { MantineProvider } from "@mantine/core";
import { RouterProvider } from "react-router-dom";

import "@mantine/core/styles.css";

import { store } from "./store";
import { router } from "./router";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </MantineProvider>
  </React.StrictMode>
);
