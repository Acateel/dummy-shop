import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./Header";
import AllProducts from "./products/AllProducts";
import CategoriesProducts from "./products/CategoriesProducts";
import ShowProduct from "./product/ShowProduct";
import SearchProducts from "./search/SearchProducts";
import Login from "./auth/Login";
import Logout from "./auth/Logout";
import CartProducts from "./carts/CartProducts";
import Pay from "./pay/Pay";
import ConfirmPay from "./pay/ConfirmPay";

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
      {
        path: "/logout",
        element: <Logout />,
      },
      {
        path: "/cart",
        element: <CartProducts />,
      },
      {
        path: "/pay",
        element: <Pay />,
      },
      {
        path: "/confirm",
        element: <ConfirmPay />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
