import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Header from "./Header"
import ProductsList from "./products/ProductsList"

const router = createBrowserRouter([{
  path: "/",
  element: <Header/>,
  children: [
    {
      path: "/",
      element: <ProductsList/>
    }
  ]
}])

function App() {
  return <RouterProvider router={router}/>
}

export default App
