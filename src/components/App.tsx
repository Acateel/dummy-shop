import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./Header";
import AllProducts from "./products/AllProducts";
import CategoriesProducts from "./products/CategoriesProducts";
import ShowProduct from "./product/ShowProduct";
import SearchProducts from "./search/SearchProducts";
import Login from "./auth/Login";

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
      {
        path: "/product/:id",
        element: <ShowProduct />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
