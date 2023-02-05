import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./Header";
import AllProducts from "./products/AllProducts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      {
        path: "/",
        element: <AllProducts />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
