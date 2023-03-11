import { createBrowserRouter } from "react-router-dom";
import TodoContent from "../components/TodoContent/TodoContent";
import Main from "../layouts/Main/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,

    children: [
      { path: "/", element: <TodoContent></TodoContent> },
      { path: "/learning", element: <TodoContent></TodoContent> },
      { path: "/todo", element: <TodoContent></TodoContent> },
      { path: "/clients-todo", element: <TodoContent></TodoContent> },
    ],
  },
]);

export default router;
