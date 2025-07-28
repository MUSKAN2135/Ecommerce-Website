import { FaFacebookF, FaInstagram, FaLinkedin, FaPhone, FaTwitter } from 'react-icons/fa6'
import { IoLocationSharp } from 'react-icons/io5'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-router-dom'
import footbg from '/footer-bg.png'

export default function Footer() {
    return (
        <div className='w-auto' style={{backgroundImage: `url(${footbg})`, width: "auto"}}>
            <div className="text-white md:flex items-center sm:flex-wrap md:justify-center leading-10 md:px-0 py-12 pb-10">
                <div className="py-5 md:px-0 lg:w-70 md:w-100 md:mx-0 mx-3">
                    <div className="logo">
                        <h2 className='text-4xl font-[Mono] text-yellow-600 py-4'>TrendyMart</h2>
                    </div>                    
                    <p className='p-2 leading-7 text-gray-300'>
                        Gentle textures, mindful design
                        Crafted to soothe, styled to charm
                        Made to feel, made to last.
                    </p>
                    <div className='foot-icons flex'>
                        <FaFacebookF className='p-2 text-3xl shadow-md rounded-full m-2 bg-white text-black' />
                        <FaTwitter className='p-2 text-3xl shadow-md rounded-full m-2 bg-white text-black' />
                        <FaLinkedin className='p-2 text-3xl shadow-md rounded-full m-2 bg-white text-black' />
                        <FaInstagram className='p-2 text-3xl shadow-md rounded-full m-2 bg-white text-black' />
                    </div>
                </div>
                <div className="py-5 md:px-0 lg:w-45 md:w-55 w-auto md:mx-0 mx-3">
                    <h2 className='text-white text-xl'>Company</h2>
                    <ul>
                        <Link to='/login' className="w-25 group hover:text-yellow-600 transition duration-300 cursor-pointer flex items-center">
                            <MdOutlineKeyboardArrowRight className="text-2xl text-white p-1 hidden group-hover:block" />
                            Login
                        </Link>
                        <Link to='/wishlist' className="w-25 group hover:text-yellow-600 transition duration-300 cursor-pointer flex items-center">
                            <MdOutlineKeyboardArrowRight className="text-2xl text-white p-1 hidden group-hover:block" />
                            Wishlist
                        </Link>
                        <Link to='/FAQs' className="w-25 group hover:text-yellow-600 transition duration-300 cursor-pointer flex items-center">
                            <MdOutlineKeyboardArrowRight className="text-white p-1 text-2xl hidden group-hover:block" />
                            FAQs
                        </Link>
                        <Link to='/contact' className="group w-25 hover:text-yellow-600 transition duration-300 cursor-pointer flex items-center">
                            <MdOutlineKeyboardArrowRight className="text-white p-1 text-2xl hidden group-hover:block" />
                            Contact
                        </Link>
                    </ul>

                </div>
                <div className="py-5 md:px-0 lg:w-45  md:w-55 w-auto md:mx-0 mx-3">
                    <h2 className='text-white text-xl'>Services</h2>
                    <ul>
                        <Link to='/home' className="group w-25 hover:text-yellow-600 transition duration-300 cursor-pointer flex items-center">
                            <MdOutlineKeyboardArrowRight className="text-white p-1 text-2xl hidden group-hover:block" />
                            Home
                        </Link>
                        <Link to='/shop' className="group w-25 hover:text-yellow-600 transition duration-300 cursor-pointer flex items-center">
                            <MdOutlineKeyboardArrowRight className="text-white p-1 text-2xl hidden group-hover:block" />
                            Shop
                        </Link>
                        <Link to='/blog' className="group w-25 hover:text-yellow-600 transition duration-300 cursor-pointer flex items-center">
                            <MdOutlineKeyboardArrowRight className="text-white p-1 text-2xl hidden group-hover:block" />
                            Blog
                        </Link>
                        <Link to='/aboutUs' className="group w-25 hover:text-yellow-600 transition duration-300 cursor-pointer flex items-center">
                            <MdOutlineKeyboardArrowRight className="text-white p-1 text-2xl hidden group-hover:block" />
                            About Us
                        </Link>
                    </ul>
                </div>
                <div className="py-5 md:px-0 lg:w-70 md:w-100 md:mx-0 mx-3">
                    <h2 className='text-white text-xl'>Contact</h2>
                    <div>
                        <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
                        <div className='flex items-center'>
                            <IoLocationSharp className='bg-[#0097b2] h-10 w-10 p-2 mr-2 rounded-full' />
                            <p className='p-1'>4517 Washington Ave. Manchester</p>
                        </div>
                        <div className='flex items-center'>
                            <FaPhone className='bg-[#0097b2] h-10 w-10 p-2 mr-2 rounded-full' />
                            <div className='p-1'>
                                <p className=''>+923015128480
                                    <span>Mon-Sat: 9AM-12PM</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            <hr className='w-full text-cyan-800' />
            </div>

        </div>
    )
}
