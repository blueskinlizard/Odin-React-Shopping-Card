import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import IndividualProduct from "./IndividualProduct";
import ProductsList from "./ProductsList";
import ProductPage from "./ProductPage";
import HomePage from "./Homepage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />, 
    children: [
      {
        path: "/", 
        element: <HomePage />, 
      },
      {
        path: "/products", 
        element: <ProductsList />,
      },
    ],
  },
  {
    path: "/product/:id",  
    element: <ProductPage />,
  },
]);

export default routes;
