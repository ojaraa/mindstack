import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import AppLayout from "../components/AppLayout";
import FullArticle from "../pages/FullArticle";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: ":id",
        element: <FullArticle />,
      },
    ],
  },
  { path: "*", element: <div>404 – Page not found</div> },
]);

export default router;
