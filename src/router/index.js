import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import BasicForm from "../components/BasicForm";
import Instructions from "../components/Instructions";

const PATH_BASE = "/"
const PATH_TODO = "todo"

export const router = createBrowserRouter([
  {
    path: PATH_BASE,
    element: <App />,
    children: [
      {
        path: "/instructions",
        element: <Instructions />,
      },
      {
        path: PATH_TODO,
        element: <BasicForm />,
      },
    ],
  },
]);