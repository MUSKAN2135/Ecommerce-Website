import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';
import { FaHeart, FaRegHeart, FaRegStar, FaStar } from 'react-icons/fa';
import Sidebar from './sidebar';
import shopbg from '/banner.png'

export default function Shopproducts() {
    const [showProducts, setShowProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [wishlist, setWishlist] = useState(false);
    const productsPerPage = 8;

    const togglewishlist = () => { setWishlist(!wishlist) }
    useEffect(() => {
        const fetchproducts = async () => {
            try {
                const response = await axios.get("https://fakestoreapi.com/products");
                setShowProducts(response.data);
            } catch (error) {
                console.log("server error", error);
            }
        };
        fetchproducts();
    }, []);

    // Get current products for the page
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = showProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    // Calculate total pages
    const totalPages = Math.ceil(showProducts.length / productsPerPage);

    // Page numbers list
    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

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
            <Navbar className="mb-44" />
            <div style={{ backgroundImage: `url(${shopbg})`, backgroundPosition: "bottom", backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "60vh", }} className="flex items-center justify-center">
                <h1 className="text-4xl font-bold text-white drop-shadow-lg">Shop</h1>
            </div>
            <div className="flex flex-wrap px-4 py-10">
                <div className="lg:w-75 md:w-80 w-full py-10 md:mr-5 mx-0">
                    <Sidebar />
                </div>
                {/* Products*/}
                <div className="flex-1">
                    <h1 className="text-4xl font-bold text-center py-6">All Products</h1>
                    {currentProducts.length > 0 ? (
                        <div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {currentProducts.map((p) => (
                                    <div
                                        key={p.id}
                                        className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-4 flex flex-col justify-between"
                                    >
                                        <div className="h-48 flex justify-center items-center mb-4">
                                            <img src={p.image} alt={p.title} className="max-h-full object-contain" />
                                        </div>

                                        <Link to={`/productdetail/${p.id}`}>
                                            <h2 className="text-lg font-semibold text-gray-800 hover:text-blue-600 line-clamp-2">
                                                {p.title}
                                            </h2>
                                        </Link>

                                        <div className="flex items-center">
                                            <p className="text-sm text-yellow-600 flex items-center">{renderStars(p.rating?.rate)}</p>
                                            <p className="star">({p.rating?.count})</p>
                                        </div>

                                        <p className="text-green-600 text-lg font-bold">${p.price}</p>
                                        <p className="text-sm text-gray-500 capitalize">{p.category}</p>

                                        <div className="flex items-center py-2">
                                            <Link
                                                to="/cart"
                                                className="bg-[#0097b2] py-2 px-3 rounded-md hover:text-black text-white hover:border hover:border-[#0097b2] hover:bg-transparent transition duration-150"
                                            >
                                                Add to Cart
                                            </Link>
                                            <p className="p-2 text-xl" onClick={togglewishlist}>
                                                {wishlist ? <FaHeart /> : <FaRegHeart />}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Pagination */}
                            <div className="flex justify-center mt-8 gap-2">
                                {pageNumbers.map((page) => (
                                    <button
                                        key={page}
                                        onClick={() => setCurrentPage(page)}
                                        className={`px-4 py-2 text-sm ${currentPage === page
                                            ? "bg-[#0097b2] text-white"
                                            : "text-gray-700 border-gray-300 hover:bg-gray-100"
                                            }`}
                                    >
                                        {page}
                                    </button>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <p className="text-center text-gray-500 text-lg">Loading products...</p>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
}
