import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Adminsignup = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState({
        First_Name: "",
        Last_Name: "",
        Email: "",
        Password: "",
        Role: "admin"
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const admins = JSON.parse(localStorage.getItem('admins')) || [];

        const userExists = admins.some((admin) => admin.Email === formData.Email);

        if (userExists) {
            toast.error("Admin with this email already exists!");
            return;
        }

        admins.push(formData);
        localStorage.setItem('admins', JSON.stringify(admins));
        toast.success("Signup successful!");
        navigate("/admin-login");
    };
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    return (
        <div className="border-t-8 border-[#0097b2] p-5 px-8">
            <div className="flex justify-center w-full items-center my-10">
                <div className="md:w-96 w-full p-5 bg-white rounded-lg shadow-lg">
                    <h2 className="mb-4 text-center text-2xl font-semibold">Admin Sign Up</h2>
                    <form onSubmit={handleSubmit}>
                        {/* First Name */}
                        <div className="mb-5">
                            <label className="block mb-1 font-medium">First Name</label>
                            <input
                                type="text"
                                name="First_Name"
                                value={formData.First_Name}
                                onChange={handleChange}
                                placeholder="Enter your first name"
                                required
                                className="w-full p-2 border border-[#0097b2] rounded-md outline-none"
                            />
                        </div>

                        {/* Last Name */}
                        <div className="mb-5">
                            <label className="block mb-1 font-medium">Last Name</label>
                            <input
                                type="text"
                                name="Last_Name"
                                value={formData.Last_Name}
                                onChange={handleChange}
                                placeholder="Enter your last name"
                                required
                                className="w-full p-2 border border-[#0097b2] rounded-md outline-none"
                            />
                        </div>

                        {/* Email */}
                        <div className="mb-5">
                            <label className="block mb-1 font-medium">Email</label>
                            <input
                                type="email"
                                name="Email"
                                value={formData.Email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                                required
                                className="w-full p-2 border border-[#0097b2] rounded-md outline-none"
                            />
                        </div>

                        {/* Password */}
                        <div className="mb-5">
                            <label className="block mb-1 font-medium">Password</label>
                            <div className="flex items-center border border-[#0097b2] outline-none rounded-md">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="Password"
                                    value={formData.Password}
                                    onChange={handleChange}
                                    placeholder="Enter your Password"
                                    required
                                    className="w-full p-2 rounded-l-md"
                                />
                                <i
                                    onClick={togglePasswordVisibility}
                                    className="px-3 ml-[-40px] outline-none text-gray-500 cursor-pointer"
                                >
                                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                                </i>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="cursor-pointer w-full bg-[#0097b2] hover:bg-transparent border hover:text-[#0097b2] border-[#0097b2] text-white font-medium py-2 rounded-md mt-5 transition-all"
                        >
                            Sign Up
                        </button>
                    </form>
                    <p className="text-center mt-5">
                        If you already have an account?
                        <button
                            type="button"
                            className="text-blue-600 underline ml-1 cursor-pointer"
                        >
                            Login
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};


export default Adminsignup;
