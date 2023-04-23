import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FlexHolyGrailPage from "./pages/FlexHolyGrailPage/FlexHolyGrailPage";
import GridHolyGrailPage from "./pages/GridHolyGrailPage/GridHolyGrailPage";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <FlexHolyGrailPage />,
  },
  {
    path: "/grid",
    element: <GridHolyGrailPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
