import { Navigate, Route, Routes } from "react-router-dom"
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; // CSS file
import Login from "./components/login/login";
import { ToastContainer } from "react-toastify";
import Signup from "./components/signup/signup";
import Allpages from "./components/pages/home";
import Allproducts from "./components/productslist/Allproducts";
import Admindashboard from "./components/adminpanel/dashboard";
import Adminlogin from "./components/adminpanel/adminlogin";
import Adminsignup from "./components/adminpanel/adminsignup";
import Shoppingcart from "./components/cart/shoppingcart";
import Shopproducts from "./components/shop/shopproducts";
import Products from "./components/adminpanel/products";
import Orders from "./components/adminpanel/orders";
import Users from "./components/adminpanel/users";
import ProductDetails from './components/productslist/productdetails'
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Blog from "./components/blog/blog";
import Home from "./components/pages/home";

export default function App() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <>
      <ToastContainer position="top-right" autoClose={2000} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/allproducts" element={<Allproducts />} />
        <Route path="/productdetail/:id" element={<ProductDetails />} />
        <Route path="/shop" element={<Shopproducts />} />
        <Route path="/cart" element={<Shoppingcart />} />
        <Route path="/aboutUs" element={<About />} />
        <Route path="/contactUs" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        {/* admin panel */}
        <Route path="/admin-login" element={<Adminlogin />} />
        <Route path="/admin-signup" element={<Adminsignup />} />
        <Route path="/admin/users" element={<Users />} />
        <Route path="/admin/products" element={<Products />} />
        <Route path="/admin/orders" element={<Orders />} />
        <Route path="/dashboard" element={<Admindashboard />} />
      </Routes>
    </>
  )
}