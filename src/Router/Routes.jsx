import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../pages/Home/Home";
import CardDetails from "../pages/CardDetails/CardDetails";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/card/:id",
        loader: () => fetch("/data.json"),
        element: <CardDetails></CardDetails>,
      },
    ],
  },
]);

export default router;
