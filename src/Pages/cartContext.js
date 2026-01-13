import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios"
import { toast } from "react-toastify";
import { AppContext } from "./authContext";

export const CartContext = createContext()

export const CartProvider = ({children})=>{
    const [cart, setCart] = useState({ items: []})
    const {user} = useContext(AppContext)
    const [message, setMessage] = useState("")

    const authToken = () => ({
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    });


    useEffect (()=>{
        if (!user) return

        const storedCart = localStorage.getItem("cart")

        if (storedCart) {
            setCart (JSON.parse(storedCart))
        } else {
            setCart({items: [] })
        }
    }, [user])

    const saveCartToStorage = (cartData) => {
        setCart(cartData)
        localStorage.setItem("cart", JSON.stringify (cartData))
    }

    const addToCart = async (product, quantity = 1) => {
        try {
            if (!localStorage.getItem("token")) {
                toast.error("Please login to add items to cart")
                return
            }

            const existingItem = cart.items.find(
                (item) => item.product._id === product._id
            )

            let updatedItems;
            if (existingItem) {
                updatedItems = cart.items.map((item) =>
                    item.product._id === product._id
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                )
            } else {
                updatedItems = [...cart.items, { product, quantity }]
            }

            const cartData = { items: updatedItems }
            saveCartToStorage(cartData)

            toast.success("Item added to cart")
        } catch (error) {
            setMessage ("Failed to add item to cart")
            toast.error(message)
    }
};

    const updateQuantity = (productId, quantity) => {
        try {
            if (quantity < 1) {
                toast.error("Quantity must be at least 1")
                return
            }

            const updatedItems = cart.items.map((item) =>
                item.product._id === productId ? { ...item, quantity } : item
            )

            saveCartToStorage({ items: updatedItems })
            toast.success("Quantity updated")
        } catch (error) {
            setMessage ("Failed to update quantity")
            toast.error(message)
        }
    }

    const removeCart = async (productId) => {
        try {
            const updatedItems = cart.items.filter((item) => item.product._id !== productId)

            saveCartToStorage({ items: updatedItems })
            toast.success("Item removed from cart")
        } catch (error) {
            setMessage ("Failed to remove item from cart")
            toast.error(message)
        }
    }


    const clearCart = async () => {
        try {
            saveCartToStorage({ items: [] })
            toast.success("Cart cleared")
        } catch (error) {
            toast.error("Failed to clear cart")
        }
    }

    const getTotal = () => {
        return cart.items.reduce(
            (cur, acc) => cur + acc.product.price * acc.quantity, 0
        )
    }

    return (
        <CartContext.Provider value={{cart, addToCart, updateQuantity, removeCart, clearCart, getTotal}}>
            {children}
        </CartContext.Provider>
    )
}