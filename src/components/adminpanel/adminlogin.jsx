import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash, FaKey, FaUser } from 'react-icons/fa';

const Adminlogin = () => {
        const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState({
        Email: "",
        Password: ""
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const admins = JSON.parse(localStorage.getItem('admins')) || [];

        const matchedAdmin = admins.find(
            (admin) =>
                admin.Email === formData.Email &&
                admin.Password === formData.Password
        );

        if (!matchedAdmin) {
            toast.error("Invalid email or password!");
            return;
        }

        if (matchedAdmin.Role === 'admin') {
            toast.success("Login successful!");
            navigate("/dashboard");
        } else {
            toast.error("Unauthorized: Not an admin");
        }
    };
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="border-t-8 border-[#0097b2]">
            <div className="flex flex-col items-center justify-center mt-24 px-4">
                <div className="md:w-96 w-full p-5 bg-white rounded-lg shadow-lg">
                    <h2 className="mb-6 text-center text-2xl font-semibold">Admin Login</h2>
                    <form onSubmit={handleSubmit} >
                        <div>
                            <div className="mb-2">
                                <label className="py-2 block font-medium">Email</label>
                                <div className="flex flex-row justify-center relative">
                                    <div className="p-3 bg-[#0097b2] text-white rounded-l">
                                        <FaUser />
                                    </div>
                                    <input
                                        type="email"
                                        placeholder="Enter your Email"
                                        name="Email"
                                        value={formData.Email}
                                        onChange={handleChange}
                                        required
                                        className="w-full p-2 border border-[#0097b2] rounded-r focus:outline-none focus:ring-1 focus:ring-[#b18b5e]" />
                                </div>
                            </div>
                            <div className="mb-2 relative">
                                <label className="py-2 block font-medium">Password</label>
                                <div className="flex flex-row justify-center relative">
                                    <div className="p-3 bg-[#0097b2] text-white rounded-l flex items-center">
                                        <FaKey />
                                    </div>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Enter your Password"
                                        name="Password"
                                        value={formData.Password}
                                        onChange={handleChange}
                                        required
                                        className="w-full p-2 border border-[#0097b2] focus:outline-none focus:ring-1 focus:ring-[#0097b2]"
                                    />
                                    <div
                                        onClick={togglePasswordVisibility}
                                        className="px-3 py-2 cursor-pointer absolute right-0 top-1/2 flex justify-center items-center transform -translate-y-1/2"
                                    >
                                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center mt-6" >
                                <button
                                    type="submit"
                                    className="cursor-pointer w-full bg-[#0097b2] hover:bg-transparent border hover:text-[#0097b2] border-[#0097b2] text-white font-medium py-2 rounded-md mt-5 transition-all"
                                >
                                    Login
                                </button>
                            </div>
                        </div>
                    </form>
                    <div className="text-center mt-6">
                        Don't have an account?
                        <button
                            className="text-blue-600 underline ml-1 cursor-pointer"
                        >
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};



export default Adminlogin;
