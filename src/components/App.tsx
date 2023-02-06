import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./Header";
import AllProducts from "./products/AllProducts";
import CategoriesProducts from "./products/CategoriesProducts";
import SearchProducts from "./search/SearchProducts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      {
        path: "/",
        element: <AllProducts />,
      },
      {
        path: "/search",
        element: <SearchProducts />,
      },
      {
        path: "/categories",
        element: <CategoriesProducts />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
