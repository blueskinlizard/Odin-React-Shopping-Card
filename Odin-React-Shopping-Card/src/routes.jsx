import App from "./App";
import IndividualProduct from "./IndividualProduct";
import ProductPage from "./ProductPage";
const routes =[
    {
        path: "/",
        element: <App />
    },
    {
        path: "/product/:id",
        element: <ProductPage />
    }
]
export default routes