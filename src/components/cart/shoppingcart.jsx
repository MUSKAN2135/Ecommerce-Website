import React, { useEffect, useState } from 'react'
import Navbar from '../navbar/navbar'
import Footer from '../footer/footer'
import { FaArrowRight, FaHeart, FaRegHeart, FaRegStar, FaSadCry, FaSadTear, FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Shoppingcart() {
  const [showProducts, setShowProducts] = useState([]);
  const [wishlist, setWishlist] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
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

  // current products 
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = showProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  // total pages
  const totalPages = Math.ceil(showProducts.length / productsPerPage);

  // Page numbers list
  const pageNumbers = Array.from({ length: totalPages }, (any, i) => i + 1);

  return (
    <>
      <Navbar />
      <div className="cart mt-30">
        <div className="py-10 px-4 min-h-screen">
          <h1 className='text-3xl text-center flex flex-col items-center justify-center py-32'>Your cart is empty now!<FaSadTear className='text-[#0097b2] text-5xl my-3' /></h1>
          <h1 className="text-3xl font-bold text-left mb-10 text-gray-800">New in Stock:</h1>
          <div>
            {currentProducts.length > 0 ? (
              <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {currentProducts.map((p) => (
                    <div key={p.id} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-4 flex flex-col justify-between">
                      <div className="h-48 flex justify-center items-center mb-4">
                        <img src={p.image} alt={p.title} className="max-h-full object-contain" />
                      </div>
                      <Link to={`/productdetail/${p.id}`}>
                        <h2 className="text-lg font-semibold text-gray-800 hover:text-blue-600 line-clamp-2">{p.title}</h2>
                      </Link>
                      <div className='flex items-center'>
                        <p className="text-sm text-yellow-600 flex items-center">
                          {renderStars(p.rating?.rate)}
                        </p>
                        <p className="star">
                          ({p.rating?.count})
                        </p>
                      </div>
                      <p className="text-green-600 text-lg font-bold">${p.price}</p>
                      <p className="text-sm text-gray-500 capitalize">{p.category}</p>
                      <div className="flex items-center py-2">
                        <Link to="/cart" className='bg-[#0097b2] py-2 px-3 rounded-md hover:text-black text-white hover:border hover:border-[#0097b2] hover:bg-[transparent] transition duration-150 '>Add to Cart</Link>
                        <p className='p-2 text-xl' onClick={togglewishlist}>
                          {wishlist ? <FaHeart /> : <FaRegHeart />}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-center mt-8 gap-2">
                  {pageNumbers.map((page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`px-4 py-2 text-sm ${currentPage === page ? 'bg-[#0097b2] text-white' : 'text-gray-700 border-gray-300 hover:bg-gray-100'}`}>
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
      </div>
      <Footer />
    </>
  )
}
