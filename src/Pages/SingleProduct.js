import React from "react";
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, Link } from "react-router-dom";
import { SampleProducts } from "../Components/SampleProducts"
import "./SingleProduct.css"

export const SingleProduct = () => {
    const [product,setProduct] = useState({})
    const [related,setRelated] = useState([])
    const [getCategory, setGetCategory] = useState(true)
    const [loading, setLoading] = useState(true)
    const id = useParams()

useEffect(()=>{
        const fetchProduct = async()=>{
            try {
                setLoading(true)
                const response= await axios.get(`https://jerseydynasty.onrender.com/api/product/${id.id}`)

                setProduct(response.data)

                if (!response.data.category || !response.data.category.name){
                    setGetCategory(false)
                    setRelated([])
                    setLoading(false)
                    return
                }

                setGetCategory(true)

        const categoryResponse = await axios.get(
            `https://davidbackend-ts7d.onrender.com/api/product?category=${response.data.category.name}`
        )

        const filter = categoryResponse.data.filter((allItems)=>allItems._id != response.data._id)
        console.log(categoryResponse)
        
        setRelated(filter);
        
            } catch (error) {
                console.log("errorsssssss",error)
                setGetCategory(false)
                setRelated([])
            } finally {
                setLoading(false)
            }
        }
        fetchProduct()
    },[id])

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