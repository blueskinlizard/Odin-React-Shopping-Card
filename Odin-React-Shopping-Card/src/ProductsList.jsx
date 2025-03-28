import IndividualProduct from "./IndividualProduct";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function ProductsList(){
    const [products, setProducts] = useState([]);
    const [loadingStatus, setLoadingStatus] = useState(true);
    useEffect(() =>{
        async function fetchProductListData() {
            try{
                const response = await fetch("https://fakestoreapi.com/products");
                const results = await response.json();
                setProducts(results.slice(0,20).map((product) =>{
                    return(
                       <Link to={`/product/${product.id}`}>
                        <IndividualProduct key={product.id} productName={product.title} imageSource={product.image} price={product.price}/>
                        </Link>
                    ) 
                }));
               
            }
            catch(event){
                console.log("Error fetching products, error: " +event);
            }
            finally{
                setLoadingStatus(false);
            }
        }
        fetchProductListData();
    }, [])
    if(loadingStatus){
        return(
            <div className="LoadingText">Loading products...</div>
        )
    }
    return (
        <div className="productsList">
                <div className="productsDisplay">
                {products}
                </div>
        </div>
    )
}