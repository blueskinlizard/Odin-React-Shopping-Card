import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
export default function ProductPage(){
    const { id } = useParams();
    const [product, setProduct] = useState({});
    useEffect(() =>{
        async function fetchPageData() {
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            const data = await response.json();
            setProduct(data);
        }
        fetchPageData();
    }, [])
    return(
        <div className="productIndivPage">
            <img className="productIndividualImage" src={`${product.image}`}></img>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
        </div>
    )
    //fetch data from API with id
}