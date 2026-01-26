import { useContext, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom"
import { CartContext } from "./cartContext"
import { AppContext } from "./authContext"
import axios from "axios"
import "./Cart.css"

export const Cart = () => {
    const [loading, setLoading] = useState(false)
    const { cart, updateQuantity, getTotal, removeCart, clearCart } = useContext(CartContext)

    const { user } = useContext(AppContext)

    const authToken = () => ({
        headers: { Authorization: `Bearer ${localStorage
            .getItem("token")}`},
    })

    const handleCheckout = async () => {
        try {
            setLoading(true)

            const orderRes = await axios.post(
                "https://your-backend-api.com/api/orders",
                {
                    items: cart.items,
                    totalAmount: getTotal(),
                },
                authToken()
            )

            const orderId = orderRes.data?._id || "TEMP_ORDER_ID";  
            const paymentRes = await axios.post( "https://your-backend-api.com/api/payments/init", { orderId, customerEmail: user?.email || "test@example.com", }, 
                authToken() 
            ); 

            const checkoutUrl = paymentRes.data?.data?.checkout_url || "https://example.com/checkout";
            
            window.location.href = checkoutUrl; 

            clearCart(); 
            
            } catch (error) { 
                console.error("Checkout failed:", error);
            } finally { 
                setLoading(false); 
            } 
        };  
        
        if (!cart || !cart.items || cart.items.length === 0) { 
            return <h2>Your cart is currently empty</h2>; 
        } 
        
        return ( 
        <div className="cart-page"> 
        <div className="cart-container">
            <div className="cart-header">
        <Link to="/" className="home-btn">    
            <FontAwesomeIcon icon={faHome} />
        </Link>
            </div>

            <h2>Your cart</h2> 
            <div className="cart-items"> 
                {cart.items.map((item, index) => ( 
                    <div className="cart-item" key={index}> 
                    <h3>{item.product.name}</h3>
                    <div className="quantity-controls">
                    <p> 
                        Quantity:{" "} 
                        <button onClick={() => updateQuantity(item.product._id, item.quantity - 1) 
                        }> 
                        - 
                        </button> 
                        {item.quantity} 
                        <button onClick={() => updateQuantity(item.product._id, item.quantity + 1) 
                        }> 
                        + 
                        </button> 
                        </p>
                        </div> 

                        <p>Price: {item.product.price}</p> 

                        <p> Item total: {Math.round(item.product.price * item.quantity)} </p> 
                        <button 
                        className="delete-btn"
                        onClick={() => removeCart(item.product._id)}>
                            Delete
                            </button> 
                            </div>
                        ))} 
                        </div> 

                        <h2 className="cart-total">Total Price: {Math.round(getTotal())}</h2> 

                        <button className="checkout-btn" onClick={handleCheckout} disabled={loading}> {loading ? "Proceeding..." : "Proceed to checkout"} 
                            </button> 
                            </div> 
                            </div>
                            ); 
                        };
