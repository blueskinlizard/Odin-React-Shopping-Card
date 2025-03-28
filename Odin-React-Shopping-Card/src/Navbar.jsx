import { useState } from "react"
import cartImage from './assets/cart-shopping-solid.svg';
export default function Navbar(){
    const [shoppingList, setShoppingList] = useState([]);
    return (
        <div className="navbarWrapper">
            <div className="navbar">
            <img id="cartImage"src={cartImage}></img>
            </div>
        </div>
        
    )
}