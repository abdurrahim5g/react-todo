import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,

    children: [
      { path: "/", element: <h3>Home</h3> },
      { path: "/learning", element: <h3>Learning</h3> },
      { path: "/todo", element: <h3>Todo</h3> },
      { path: "/clients-todo", element: <h3>Clients Todo</h3> },
    ],
  },
]);

export default router;
