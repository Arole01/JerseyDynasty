import React from "react";
import { useParams, Link } from "react-router-dom";
import { SampleProducts } from "../Components/SampleProducts"
import "./SingleProduct.css"

const SingleProduct = () => {
    const { id } = useParams()
    const product = SampleProducts.find((item) => item._id === id)

    if(!product) {
        return <h2>Product not found</h2>
    }

    const related = SampleProducts.filter(
        (item) => item.category === product.category && item._id !== product._id
    )

    return (
        <div className="jersey-detail">
            <img src={product.imageUrl} alt={product.name} className="detail-image"/>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <h2>#{product.price}</h2>
            <button className='btnn'>Add to Cart</button>
                    <br/><br/>
                    <br/><br/>

            <h3>Related Jerseys</h3>
            <div className="related-grid">
                {related.map((item) => (
                    <div key={item._id} className="related-item">
                        <Link to={`/${item._id}`}>
                        <img src={item.imageUrl} alt={item.name}/>
                        <p>{item.name}</p>
                        <button className='btnn'>Add to Cart</button>
                    <br/><br/>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}




export default SingleProduct