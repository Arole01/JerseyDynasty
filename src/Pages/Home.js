import React, { useContext, useState, useEffect} from 'react'
import "./Home.css"
import { CartContext } from './cartContext'
import { SampleProducts } from '../Components/SampleProducts'
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import { SearchContext } from './searchContext';

export const Home = () => {
    const { searchTerm, setSearchTerm } = useContext(SearchContext)
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState("")
    const [err, setErr] = useState("");
    const {addToCart} = useContext(CartContext)
    const [loading, setLoading] = useState(true)
        

    const carouselImages = [
        {id: "img1", src:"https://res.cloudinary.com/de91sxsp3/image/upload/v1768308954/WhatsApp_Image_2026-01-12_at_22.13.39_ljacx6.jpg"},
        {id: "img2", src:"https://res.cloudinary.com/de91sxsp3/image/upload/v1768308936/WhatsApp_Image_2026-01-12_at_22.13.31_1_eacvrl.jpg"},
        {id: "img3", src:"https://res.cloudinary.com/de91sxsp3/image/upload/v1768308934/WhatsApp_Image_2026-01-12_at_22.13.10_4_qxyhjv.jpg"},
        {id: "img4", src:"https://res.cloudinary.com/de91sxsp3/image/upload/v1768308934/WhatsApp_Image_2026-01-12_at_22.13.10_mhds14.jpg"},
        {id: "img5", src:"https://res.cloudinary.com/de91sxsp3/image/upload/v1768308953/WhatsApp_Image_2026-01-12_at_22.13.35_s0aupn.jpg"},
        {id: "img6", src:"https://res.cloudinary.com/de91sxsp3/image/upload/v1768308952/WhatsApp_Image_2026-01-12_at_22.13.34_1_eypje3.jpg"},
        {id: "img7", src:"https://res.cloudinary.com/de91sxsp3/image/upload/v1768308935/WhatsApp_Image_2026-01-12_at_22.13.12_uujhxn.jpg"},
        {
            id: "img8", src:"https://res.cloudinary.com/de91sxsp3/image/upload/v1768308936/WhatsApp_Image_2026-01-12_at_22.13.23_qismuh.jpg"
        },
        {id: "img9", src:"https://res.cloudinary.com/de91sxsp3/image/upload/v1768308936/WhatsApp_Image_2026-01-12_at_22.13.30_1_qhrhll.jpg"},
        {id: "img10", src:"https://res.cloudinary.com/de91sxsp3/image/upload/v1768308936/WhatsApp_Image_2026-01-12_at_22.13.27_sgpeet.jpg"}

    ]

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 3000,
        centerMode: false,
  adaptiveHeight: false,
  variableWidth: false
    }

    useEffect(() => {
        setLoading(true);
        try{
            let filtered = SampleProducts

            if (category) {
                filtered = filtered.filter((item) => item.category.toLowerCase() === category.toLowerCase());
            }

                if (searchTerm) {
                    filtered = filtered.filter((item) => 
                    item.name.toLocaleLowerCase().includes(searchTerm.toLowerCase()) || 
                    item.description.toLowerCase().includes(searchTerm.toLowerCase())
                )
                }
                setProducts(filtered);
        } catch (error) {
            setProducts([]);
            setErr("Failed to fetch products");
        } finally {
            setLoading(false);
        }
    }, [category, searchTerm]);

    return (
        <>

        <section className="search-section">
        <div className="search-bar">
          <input type="text" placeholder="Search for jerseys..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit">Search</button>
        </div>
      </section>


        <div className='carousel'>
            <section className="carousel-container">
                <Slider {...sliderSettings}>
                    {carouselImages.map((image) => (
                        <div key={image.id}>
                            <img src={image.src}
                                alt={`Slide ${image.id}`}
                                className="carousel-image" />
                        </div>
                    ))}
                </Slider>
            </section>
            </div>

                    <section className='category'>
                        <div className='categories'>
                            <h1>All Jerseys Categories</h1>
                        <div className='allcategories'>
                            <p className='category-items' onClick={() =>setCategory("club-jersey")}>Club Jerseys</p>
                            <p className='category-items' onClick={() => setCategory("retro-jersey")}third>Retro Jerseys</p>
                            <p className='category-items' onClick={() => setCategory("country-jersey")}>Country Jerseys</p>
                            <p className='category-items' onClick={() => setCategory("kids-jersey")}>Kids Jerseys</p>
                            <p className='category-items' onClick={() => setCategory("baseball-jersey")}>Baseball Jerseys</p>
                            <p className='category-items' onClick={() => setCategory("basketball-jersey")}>Basketball Jerseys</p>
                            <p className='category-items' onClick={() => setCategory("")}>Shop All</p>
                        </div>
                        </div>

                    </section>

                    <section>
                        <div className='alljerseys'>
                            {products.map((items)=>
                            
                            <div className='jerseys' key={items._id}>
                                <Link to={`/${items._id}`}><img src={items.imageUrl} alt='' /></Link>
                                <h2>{items.name}</h2>
                                <p>{items.description}</p>
                                <h3>#{items.price}</h3>
                                <button className='btn' onClick={() => addToCart(items._id)}>Add to Cart</button>

                            </div>
                            )}

                        </div>
                    </section>
                    {products.length === 0 && <h1>{err}</h1>}
                    {products.length <1 && loading && <h1>Product Loading!!</h1>}
        

        </>

        
    )
    
    }

    export default Home