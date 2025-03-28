import { Link } from "react-router-dom"
export default function IndividualProduct(props){
    const linkToProductPage = () =>{
        <Link to={`/product/${props.productName}`} />
    }
    return (
        <div className={"productCard"} onClick={linkToProductPage}>
            <img src={props.imageSource} className="productImage"></img>
            <h2 className="productName">{props.productName}</h2>
            <p>{`$${props.price}`}</p>
        </div>
    )
}   