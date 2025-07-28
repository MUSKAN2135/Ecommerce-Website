import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';
import { FaHeart, FaRegHeart, FaRegStar, FaStar } from 'react-icons/fa';
import bg from '/banner.png'

export default function ProductDetails() {
    const [detailedproduct, setdetailedproduct] = useState(false);
    const [wishlist, setWishlist] = useState(false);

    const { id } = useParams();
    const togglewishlist = () => { setWishlist(!wishlist) }

    const productdetail = async () => {
        try {
            const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
            setdetailedproduct(response.data);
        } catch (error) {
            console.log("server error", error)
        }
    }
    useEffect(() => {
        productdetail()
    }, [id])
    // rating 
    const renderStars = (rating) => {
        const stars = [];
        const filled = Math.round(rating || 0);
        for (let i = 0; i < 5; i++) {
            stars.push(
                i < filled ? <FaStar key={i} className="text-yellow-500" /> : <FaRegStar key={i} className="text-yellow-500" />
            );
        }
        return stars;
    };
    return (
        <>
            <Navbar />
            <div className='flex justify-center items-center ' style={{ backgroundImage: `url(${bg})`, backgroundPosition: "bottom", backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "60vh", }}>
                <h1 className="text-3xl font-bold text-center text-white z-10 mb-10">
                    Product Details
                </h1>
            </div>
            <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 pt-33">
                <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
                    <div className="md:w-full bg-gray-50 p-6 flex items-center justify-center">
                        <img src={detailedproduct?.image} alt={detailedproduct?.title} className="w-80" />
                    </div>
                    <div className="md:w-full p-6">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">{detailedproduct?.title}</h2>
                        {/* Rating & Reviews */}
                        <div className='flex items-center'>
                            <p className="text-sm text-yellow-600 flex items-center">
                                {renderStars(detailedproduct?.rating?.rate)}
                            </p>
                            <p className="text-sm text-yellow-600 font-medium px-2">({detailedproduct?.rating?.count})</p>
                        </div>
                        <p className="text-lg font-semibold text-[#0097b2] mb-2">${detailedproduct?.price}</p>
                        <p className="text-sm text-gray-600 mb-4 capitalize">Category: {detailedproduct?.category}</p>
                        <p className="text-gray-700 text-sm mb-4">{detailedproduct?.description}</p>
                        <div className="flex items-center py-2">
                            <Link to="/cart" className='bg-[#0097b2] py-2 px-3 rounded-md hover:text-black text-white hover:border hover:border-[#0097b2] hover:bg-[transparent] transition duration-150 '>Add to Cart</Link>
                            <p className='p-2 text-xl' onClick={togglewishlist}>
                                {wishlist ? <FaHeart /> : <FaRegHeart />}
                            </p>
                        </div>
                    </div>
                </div >
            </div >
            <Footer />
        </>
    )
}
