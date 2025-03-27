import IndividualProduct from "./IndividualProduct";
import { useEffect } from "react";
import { useState } from "react";
export default function ProductsList(){
    const [products, setProducts] = useState([]);
    useEffect(() =>{
        async function fetchProductListData() {
            try{
                const response = await fetch("https://fakestoreapi.com/products");
                const results = await response.json();
                setProducts(results.slice(0,20));
                setProducts(results.map((product) =>{
                    return <IndividualProduct key={product.id} productName={product.title} imageSource={product.image} price={product.price}/>
                }))
            }
            catch(event){
                console.log("Error fetching products, error: " +event);
            }
        }
        fetchProductListData();
    }, [])
    return (
        <div className="products-list">
            <h1>Available products:</h1>
            {products}
        </div>
    )
}