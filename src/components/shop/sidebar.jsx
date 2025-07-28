import React, { useState } from "react";
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowRight } from "react-icons/md";

export default function Sidebar() {
    const [openItem, setOpenItem] = useState(null);

    const toggleDropdown = (item) => {
        setOpenItem(openItem === item ? null : item);
    }
    const menu = [
        { name: "Men", sub: ["Shirts", "Shoes", "Accessories"] },
        { name: "Women", sub: ["Dresses", "Accessories", "Jewelry", "Shoes"] },
    ];
    return (
        <div className="lg:w-75 md:w-80 w-full h-full bg-cyan-950 text-white min-h-screen p-5 shadow-md rounded-md">
            <h2 className="text-xl font-semibold mb-6">Filters</h2>
            <div className="mb-5">
                <h3 className="text-lg font-medium mb-2">Categories</h3>
                <ul className="space-y-2">
                    {menu.map((item, idx) => (
                        <li key={idx} className="p-2 rounded bg-[#0097b2]/80">
                            <div className="flex justify-between items-center cursor-pointer hover:bg-cyan-900/50 p-2 rounded" onClick={() => toggleDropdown(item.name)}><span>{item.name}</span>
                                {openItem === item.name ? (
                                    <MdOutlineKeyboardArrowDown className="text-xl" />) : (
                                    <MdOutlineKeyboardArrowRight className="text-xl" />
                                )}
                            </div>
                            {/* dropdown */}
                            {openItem === item.name && (
                                <ul className="mt-1 space-y-1">
                                    {item.sub.map((subItem, i) => (
                                        <li key={i} className="p-2 text-sm bg-cyan-900/30 rounded cursor-pointer hover:bg-cyan-900/60">
                                            {subItem}</li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="mb-5">
                <h3 className="text-lg font-medium mb-2">Price</h3>
                <input type="range" min="0" max="1000" className="w-full" />
                <p className="mt-2">Up to $1000</p>
            </div>
            <div className="rating flex flex-col">
                <h2 className="py-3 text-xl">Rating:</h2>
                <button className="flex items-center"><input type="radio" className="mx-2" />1 star
                </button>
                <button className="flex items-center"><input type="radio" className="mx-2" />2 star
                </button>
                <button className="flex items-center"><input type="radio" className="mx-2" />3 star
                </button>
                <button className="flex items-center"><input type="radio" className="mx-2" />4 star
                </button>
                <button className="flex items-center"><input type="radio" className="mx-2" />5 star
                </button>
            </div>
            <button className="w-full bg-[#0097b2] text-white py-2 mt-4 rounded hover:bg-[transparent] hover:border hover:border-[#0097b2] transition duration-150 cursor-pointer font-medium">
                Apply Filters
            </button>
        </div>
    );
}
