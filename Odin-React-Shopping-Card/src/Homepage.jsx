import './index.css'
import { Link } from 'react-router-dom'
export default function HomePage(){
    return (
        <div>
            <h1>Home placeholder</h1>
            <Link to="/products">
            <button>Go to products</button>
            </Link>
        </div>
    )
}