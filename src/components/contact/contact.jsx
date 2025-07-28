import React from "react";
import Footer from "../footer/footer";
import Navbar from "../navbar/navbar";
import contactbg from '/banner.png'

const Contact = () => {
    return (
        <>
            <Navbar className="mb-24" />
            <div>
                {/* Page Title Section */}
                <div style={{ backgroundImage: `url(${contactbg})`, backgroundPosition: "bottom", backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "60vh", }} className="flex items-center justify-center">
                    <h2 className="text-4xl font-bold text-white">CONTACT</h2>
                </div>

                {/* Contact Form & Map */}
                <div className="max-w-6xl mx-auto py-33 px-6 grid md:grid-cols-2 gap-10">
                    {/* Form */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-4 text-gray-800">Send Us a Message</h3>
                        <form className="space-y-4">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0097b2]"
                                required
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0097b2]"
                                required
                            />
                            <textarea
                                placeholder="Your Message"
                                rows="5"
                                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0097b2]"
                                required
                            ></textarea>
                            <button
                                type="submit"
                                className="bg-[#0097b2] hover:bg-[transparent] hover:border hover:border-[#0097b2] hover:text-gray-500 cursor-pointer transition duration-150 text-white px-6 py-2 rounded"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Map */}
                    <div>
                        <iframe
                            title="Google Map"
                            className="w-full h-full min-h-[300px] border-2 border-teal-300 rounded"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609734024!2d72.7410985741472!3d33.68442096797701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbf5b66fc92b7%3A0x34e7910e37f4f9e5!2sIslamabad%2C%20Pakistan!5e0!3m2!1sen!2s!4v1592480831963!5m2!1sen!2s"
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Contact;