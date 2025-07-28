import React from "react";

const images = [
    { src: "/party_western_dress.webp", className: "" }, // tall image
    { src: "/jwell.webp", className: "lg:row-span-2 row-span-1" },
    { src: "/mens wear.webp", className: "lg:row-span-2 row-span-1" },
    { src: "/images.jpeg"},
    { src: "/mensss.jpeg"},
    { src: "sneaker.webp", className: "" },
];

export default function Gallery() {
    return (
        <div className="py-10 px-4">
            <div className="max-w-6xl mx-auto grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4">
                {images.map((img, i) => (
                    <div key={i} className={`overflow-hidden rounded-lg shadow-md ${img.className}`}>
                        <img
                            src={img.src}
                            alt={`gallery-${i}`}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
